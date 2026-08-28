#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# instalar-mautic.sh · Mautic (e-mail marketing) no SEU VPS
#
# O Mautic é a plataforma open source de automação de marketing: e-mail de
# nutrição, landing pages, formulários, segmentação e rastreamento — sem custo
# por contato. No LPSG ele cobre o e-mail do evento; o WhatsApp continua na
# mensageria-lpsg-turbo.
#
# Este script NÃO instala no seu Mac: o Mautic precisa de um servidor ligado
# 24/7 com domínio. Ele instala no SEU VPS, por SSH, seguindo a convenção do
# squad (Caddy dono do 80/443, banco fora da rede pública).
#
# Uso:  bash instalar-mautic.sh
#       bash instalar-mautic.sh --vps meu-alias --dominio mautic.seudominio.com.br
#
# Idempotente: se já existir /opt/mautic no servidor, ele avisa e não sobrescreve.
#
# TUDO que este script faz nasceu de uma instalação real (27/08/2026). Os
# porquês estão em mautic-COMO-USAR.md e nos comentários dos arquivos gerados.
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

# A versão é FIXADA de propósito. Ver "As 6 armadilhas" no manual.
IMAGEM_MAUTIC="mautic/mautic:7.1.2-apache"
IMAGEM_MYSQL="mysql:8.4"
LINK_HOSTINGER="https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77"

VPS=""; DOMINIO=""
while [[ $# -gt 0 ]]; do case "$1" in
  --vps)      VPS="$2";      shift 2 ;;
  --dominio)  DOMINIO="$2";  shift 2 ;;
  *) echo "opção desconhecida: $1 (use --vps · --dominio)"; exit 1 ;;
esac; done

ok()     { printf '  ✓ %s\n' "$1"; }
falha()  { printf '  ✗ %s\n' "$1"; }
titulo() { printf '\n━━ %s\n' "$1"; }

echo "▶ Mautic — e-mail marketing próprio, sem custo por contato"
echo "  Nutrição por e-mail, landing pages, formulários, segmentação e rastreamento."
echo "  No LPSG: o e-mail do evento. (WhatsApp continua na mensageria-lpsg-turbo.)"

# ── 1 · tem servidor? ────────────────────────────────────────────────────────
titulo "1/5 · Onde ele vai rodar"
echo "  O Mautic precisa de servidor ligado 24/7 + domínio próprio. Não roda no seu Mac."

if [[ -z "$VPS" ]]; then
  if [[ ! -t 0 ]]; then
    echo ""
    echo "  (sem terminal interativo — rode no Terminal pra seguir:"
    echo "   bash 99-skills-compartilhaveis/instalar-mautic.sh)"
    exit 0
  fi
  read -r -p "  Você já tem um VPS com acesso SSH? [s/N] " tem
  if [[ ! "$tem" =~ ^[SsYy] ]]; then
    cat <<EOF

  ─────────────────────────────────────────────────────────────────────
  Sem VPS ainda? A indicação da Turbo Academy é a Hostinger:

    $LINK_HOSTINGER
    (link de indicação)

  Peça o plano **KVM 8**. O porquê, sem enrolação: o Mautic sobe 4
  containers (web, cron, worker e MySQL) e o MySQL sozinho já quer 1-2 GB.
  Nos planos menores ele instala, mas engasga no primeiro envio grande —
  e o KVM 8 ainda sobra pra rodar n8n e outros serviços no mesmo servidor.

  Na hora de criar: escolha **Ubuntu 24.04**, guarde o IP e a senha de root,
  e aponte um subdomínio (ex.: mautic.seudominio.com.br) pro IP — um
  registro A, no seu provedor de DNS.

  Com isso na mão, rode este script de novo.
  ─────────────────────────────────────────────────────────────────────
EOF
    exit 0
  fi
  read -r -p "  Alias SSH ou usuario@ip do servidor: " VPS
fi
[[ -z "$VPS" ]] && { falha "sem servidor, não dá pra seguir"; exit 1; }

if ! ssh -o ConnectTimeout=20 -o BatchMode=yes "$VPS" 'echo ok' >/dev/null 2>&1; then
  falha "não consegui conectar em '$VPS' sem senha."
  echo "     → configure a chave SSH primeiro (ssh-copy-id $VPS) e rode de novo."
  exit 1
fi
ok "conectado em $VPS"

# ── 2 · domínio ──────────────────────────────────────────────────────────────
titulo "2/5 · Domínio"
if [[ -z "$DOMINIO" ]]; then
  if [[ ! -t 0 ]]; then falha "faltou --dominio"; exit 1; fi
  read -r -p "  Subdomínio do Mautic (ex.: mautic.seudominio.com.br): " DOMINIO
fi
[[ -z "$DOMINIO" ]] && { falha "domínio é obrigatório"; exit 1; }

ip_vps=$(ssh "$VPS" 'curl -s -m 10 https://api.ipify.org' 2>/dev/null)
ip_dns=$(dig +short "$DOMINIO" A 2>/dev/null | tail -1)
if [[ -n "$ip_vps" && -n "$ip_dns" && "$ip_vps" == "$ip_dns" ]]; then
  ok "DNS de $DOMINIO aponta pro servidor ($ip_vps)"
elif [[ -n "$ip_dns" ]]; then
  falha "$DOMINIO aponta pra $ip_dns, mas o servidor é $ip_vps"
  echo "     → corrija o registro A antes de seguir (o SSL do Caddy depende disso)."
  [[ -t 0 ]] && { read -r -p "  Seguir mesmo assim? [s/N] " g; [[ "$g" =~ ^[SsYy] ]] || exit 1; } || exit 1
else
  falha "$DOMINIO ainda não resolve"
  echo "     → crie um registro A apontando pro IP $ip_vps e espere propagar."
  [[ -t 0 ]] && { read -r -p "  Seguir mesmo assim? [s/N] " g; [[ "$g" =~ ^[SsYy] ]] || exit 1; } || exit 1
fi

# ── 3 · pré-requisitos no servidor ───────────────────────────────────────────
titulo "3/5 · Servidor: Docker e proxy"
if ssh "$VPS" 'test -d /opt/mautic' 2>/dev/null; then
  ok "/opt/mautic já existe — nada a fazer"
  echo "     Pra recriar: no servidor, 'cd /opt/mautic && docker compose down' e mova a pasta."
  exit 0
fi

if ! ssh "$VPS" 'command -v docker' >/dev/null 2>&1; then
  echo "  Docker não encontrado no servidor."
  if [[ -t 0 ]]; then read -r -p "  Instalar agora (script oficial da Docker)? [S/n] " d; else d="n"; fi
  if [[ -z "$d" || "$d" =~ ^[SsYy] ]]; then
    ssh "$VPS" 'curl -fsSL https://get.docker.com | sh' >/dev/null 2>&1 \
      && ok "Docker instalado" || { falha "falhou ao instalar o Docker"; exit 1; }
  else
    falha "sem Docker não dá pra seguir"; exit 1
  fi
else
  ok "Docker presente"
fi

# Proxy compartilhado: um Caddy dono exclusivo do 80/443, servindo todos os
# projetos por arquivo em /opt/proxy/sites/. Sem isso, cada serviço brigaria
# pelas portas e o SSL viraria trabalho manual.
if ssh "$VPS" 'test -f /opt/proxy/docker-compose.yml' 2>/dev/null; then
  ok "proxy Caddy já existe em /opt/proxy"
else
  echo "  Criando o proxy Caddy (dono do 80/443, SSL automático)..."
  ssh "$VPS" 'mkdir -p /opt/proxy/sites && cat > /opt/proxy/Caddyfile <<"EOF"
{
    email admin@localhost
}
import /etc/caddy/sites/*.caddy
EOF
cat > /opt/proxy/docker-compose.yml <<"EOF"
services:
  caddy:
    image: caddy:2
    restart: unless-stopped
    ports: ["80:80", "443:443"]
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - ./sites:/etc/caddy/sites:ro
      - caddy_data:/data
      - caddy_config:/config
    networks: [web]
volumes:
  caddy_data: {}
  caddy_config: {}
networks:
  web:
    external: true
EOF
docker network create web 2>/dev/null; cd /opt/proxy && docker compose up -d' >/dev/null 2>&1 \
  && ok "proxy Caddy no ar" || { falha "falhou ao criar o proxy"; exit 1; }
fi
ssh "$VPS" 'docker network inspect web >/dev/null 2>&1 || docker network create web' >/dev/null 2>&1
ok "rede 'web' pronta"

# ── 4 · escrever a stack ─────────────────────────────────────────────────────
titulo "4/5 · Instalando o Mautic ($IMAGEM_MAUTIC)"
echo "  As senhas são geradas NO SERVIDOR (não passam por aqui nem pelo chat)."

ssh "$VPS" "DOMINIO='$DOMINIO' IMG='$IMAGEM_MAUTIC' IMGDB='$IMAGEM_MYSQL' bash -s" <<'REMOTO' >/dev/null 2>&1
set -e
mkdir -p /opt/mautic && cd /opt/mautic

# senhas geradas aqui, nunca digitadas nem trafegadas
MYSQL_PASSWORD=$(openssl rand -base64 24 | tr -d '/+=' | head -c 28)
MYSQL_ROOT_PASSWORD=$(openssl rand -base64 24 | tr -d '/+=' | head -c 28)

umask 077
cat > .env <<EOF
# Gerado em $(date -u +%Y-%m-%dT%H:%M:%SZ). Senhas geradas no proprio servidor.
MYSQL_DATABASE=mautic
MYSQL_USER=mautic
MYSQL_PASSWORD=${MYSQL_PASSWORD}
MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
EOF

cat > .mautic_env <<EOF
# Config do Mautic. Lido pelos tres containers (web, cron, worker).
MAUTIC_DB_HOST=db
MAUTIC_DB_PORT=3306
MAUTIC_DB_DATABASE=mautic
MAUTIC_DB_USER=mautic
MAUTIC_DB_PASSWORD=${MYSQL_PASSWORD}

# fila de e-mail e de hits no proprio banco, consumida pelo worker
MAUTIC_MESSENGER_DSN_EMAIL=doctrine://default
MAUTIC_MESSENGER_DSN_HIT=doctrine://default

# atras do Caddy: sem isso todo contato registra o IP do proxy
MAUTIC_TRUSTED_PROXIES=0.0.0.0/0

PHP_INI_VALUE_DATE_TIMEZONE=America/Sao_Paulo
PHP_INI_VALUE_MEMORY_LIMIT=512M
PHP_INI_VALUE_MAX_EXECUTION_TIME=300

# URL canonica. Fixada de proposito: o TLS termina no Caddy, entao o Mautic ve a
# conexao interna como http e geraria links http:// nos e-mails e no rastreamento.
MAUTIC_SITE_URL=https://${DOMINIO}
EOF

cat > docker-compose.yml <<EOF
# Mautic — marketing automation. Convencao do /opt/README.md deste servidor:
#   - nenhuma porta publicada (o /opt/proxy e o unico dono de 80/443)
#   - so o mautic_web entra na rede \`web\`; o banco fica so na \`default\`
x-mautic-common: &mautic-common
  image: ${IMG}
  restart: unless-stopped
  env_file: [.mautic_env]
  volumes:
    - mautic_config:/var/www/html/config
    - mautic_logs:/var/www/html/var/logs
    - mautic_media_files:/var/www/html/docroot/media/files
    - mautic_media_images:/var/www/html/docroot/media/images

services:
  db:
    image: ${IMGDB}
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: \${MYSQL_DATABASE}
      MYSQL_USER: \${MYSQL_USER}
      MYSQL_PASSWORD: \${MYSQL_PASSWORD}
      MYSQL_ROOT_PASSWORD: \${MYSQL_ROOT_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h 127.0.0.1 --silent"]
      start_period: 30s
      interval: 10s
      timeout: 5s
      retries: 12
    networks: [default]

  mautic_web:
    <<: *mautic-common
    container_name: mautic-web
    depends_on:
      db:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -fsS -o /dev/null http://localhost/ || exit 1"]
      start_period: 180s
      interval: 15s
      timeout: 10s
      retries: 20
    networks: [default, web]

  mautic_cron:
    <<: *mautic-common
    container_name: mautic-cron
    environment:
      DOCKER_MAUTIC_ROLE: mautic_cron
    depends_on:
      mautic_web:
        condition: service_healthy
    networks: [default]

  mautic_worker:
    <<: *mautic-common
    container_name: mautic-worker
    environment:
      DOCKER_MAUTIC_ROLE: mautic_worker
    depends_on:
      mautic_web:
        condition: service_healthy
    networks: [default]

volumes:
  mysql_data: {}
  mautic_config: {}
  mautic_logs: {}
  mautic_media_files: {}
  mautic_media_images: {}

networks:
  web:
    external: true
EOF

cat > /opt/proxy/sites/mautic.caddy <<EOF
# Mautic — marketing automation (/opt/mautic).
#
# SEM basic_auth de proposito: o Mautic PRECISA ser publico. O pixel de
# rastreamento, as landing pages e os formularios sao servidos pelo mesmo host,
# e um basic_auth global quebraria os tres. O painel fica em /s/* e tem login
# proprio. Se quiser camada extra, proteja SO o /s/* — nunca o dominio inteiro.
${DOMINIO} {
    encode zstd gzip

    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        -Server
    }

    reverse_proxy mautic-web:80
}
EOF

cd /opt/mautic && docker compose up -d
cd /opt/proxy && docker compose up -d 2>/dev/null || docker compose restart
REMOTO

if [[ $? -ne 0 ]]; then falha "a instalação no servidor falhou"; exit 1; fi
ok "stack criada e subindo"

# ── 5 · esperar ficar de pé ──────────────────────────────────────────────────
titulo "5/5 · Esperando o Mautic responder"
echo "  A primeira subida demora (ele monta o banco). Até 4 minutos é normal."
for i in $(seq 1 24); do
  code=$(curl -s -o /dev/null -m 10 -w '%{http_code}' "https://$DOMINIO/" 2>/dev/null || echo 000)
  case "$code" in
    200|301|302) ok "no ar: https://$DOMINIO (HTTP $code)"; pronto=1; break ;;
  esac
  sleep 10
done

if [[ "${pronto:-0}" != "1" ]]; then
  falha "ainda não respondeu — pode ser SSL propagando ou primeira carga"
  echo "     Confira no servidor:  ssh $VPS 'cd /opt/mautic && docker compose ps'"
  echo "     Logs:                 ssh $VPS 'docker logs mautic-web --tail 50'"
fi

cat <<EOF

  Próximo passo (só você pode fazer): abra
    https://$DOMINIO/s/
  e crie o usuário administrador no assistente da primeira vez.

  As senhas do banco ficaram em /opt/mautic/.env NO SERVIDOR (permissão 600).
  Não as copie pra lugar nenhum — o Mautic já as lê de lá.

  Manual, armadilhas e operação: 99-skills-compartilhaveis/mautic-COMO-USAR.md
EOF
