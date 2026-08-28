#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# instalar-n8n.sh · n8n (automação de fluxos) no SEU VPS
#
# O n8n é o motor das 14 automações do LPSG: webhook da Hotmart, ficha de
# interesse, lembretes das aulas, tsunami de bônus, recuperação D+1-D+7.
# A skill automacoes-lpsg-turbo desenha os fluxos; este script instala onde
# eles vão rodar.
#
# Não roda no seu Mac: webhook precisa de endereço público e servidor 24/7.
# Pode dividir o MESMO VPS com o Mautic e o OpenWA — todos atrás do mesmo Caddy.
#
# Uso:  bash instalar-n8n.sh
#       bash instalar-n8n.sh --vps meu-alias --dominio n8n.seudominio.com.br
#
# Idempotente: se já existir /opt/n8n no servidor, avisa e não sobrescreve.
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

# Versão FIXADA: a verificada em produção. `latest` já quebrou instalação de
# outra ferramenta deste squad — atualizar é decisão consciente, não sorteio.
IMAGEM_N8N="docker.n8n.io/n8nio/n8n:2.35.4"
IMAGEM_PG="postgres:16"
LINK_HOSTINGER="https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77"

VPS=""; DOMINIO=""
while [[ $# -gt 0 ]]; do case "$1" in
  --vps)     VPS="$2";     shift 2 ;;
  --dominio) DOMINIO="$2"; shift 2 ;;
  *) echo "opção desconhecida: $1 (use --vps · --dominio)"; exit 1 ;;
esac; done

ok()     { printf '  ✓ %s\n' "$1"; }
falha()  { printf '  ✗ %s\n' "$1"; }
titulo() { printf '\n━━ %s\n' "$1"; }

echo "▶ n8n — onde as automações do LPSG rodam"
echo "  Webhook da Hotmart, ficha de interesse, lembretes das aulas, tsunami,"
echo "  recuperação D+1-D+7. A skill automacoes-lpsg-turbo desenha; o n8n executa."

# ── 1 · servidor ─────────────────────────────────────────────────────────────
titulo "1/5 · Onde ele vai rodar"
echo "  Precisa de servidor 24/7 + domínio: webhook exige endereço público."
echo "  Pode ser o MESMO VPS do Mautic e do OpenWA — eles convivem sem conflito."

if [[ -z "$VPS" ]]; then
  if [[ ! -t 0 ]]; then
    echo ""
    echo "  (sem terminal interativo — rode no Terminal:"
    echo "   bash 99-skills-compartilhaveis/instalar-n8n.sh)"
    exit 0
  fi
  read -r -p "  Você já tem um VPS com acesso SSH? [s/N] " tem
  if [[ ! "$tem" =~ ^[SsYy] ]]; then
    cat <<EOF

  ─────────────────────────────────────────────────────────────────────
  Sem VPS ainda? A indicação da Turbo Academy é a Hostinger:

    $LINK_HOSTINGER
    (link de indicação)

  Peça o plano **KVM 8** — e repare que ele aguenta TUDO junto: n8n +
  Postgres, Mautic + MySQL e o OpenWA no mesmo servidor, cada um no seu
  subdomínio, todos atrás do mesmo proxy. É assim que a Turbo roda.

  Na criação: **Ubuntu 24.04**, guarde IP e senha de root, e aponte um
  subdomínio (ex.: n8n.seudominio.com.br) pro IP com um registro A.

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
  echo "     → configure a chave SSH (ssh-copy-id $VPS) e rode de novo."
  exit 1
fi
ok "conectado em $VPS"

# ── 2 · domínio ──────────────────────────────────────────────────────────────
titulo "2/5 · Domínio"
if [[ -z "$DOMINIO" ]]; then
  if [[ ! -t 0 ]]; then falha "faltou --dominio"; exit 1; fi
  read -r -p "  Subdomínio do n8n (ex.: n8n.seudominio.com.br): " DOMINIO
fi
[[ -z "$DOMINIO" ]] && { falha "domínio é obrigatório"; exit 1; }

ip_vps=$(ssh "$VPS" 'curl -s -m 10 https://api.ipify.org' 2>/dev/null)
ip_dns=$(dig +short "$DOMINIO" A 2>/dev/null | tail -1)
if [[ -n "$ip_vps" && "$ip_vps" == "$ip_dns" ]]; then
  ok "DNS de $DOMINIO aponta pro servidor ($ip_vps)"
else
  falha "$DOMINIO ${ip_dns:+aponta pra $ip_dns, mas o servidor é }${ip_dns:-ainda não resolve — servidor é }$ip_vps"
  echo "     → o webhook e o SSL dependem desse registro A."
  [[ -t 0 ]] && { read -r -p "  Seguir mesmo assim? [s/N] " g; [[ "$g" =~ ^[SsYy] ]] || exit 1; } || exit 1
fi

# ── 3 · pré-requisitos ───────────────────────────────────────────────────────
titulo "3/5 · Servidor: Docker e proxy"
if ssh "$VPS" 'test -d /opt/n8n' 2>/dev/null; then
  ok "/opt/n8n já existe — nada a fazer"
  exit 0
fi

if ! ssh "$VPS" 'command -v docker' >/dev/null 2>&1; then
  echo "  Docker não encontrado."
  if [[ -t 0 ]]; then read -r -p "  Instalar agora (script oficial da Docker)? [S/n] " d; else d="n"; fi
  if [[ -z "$d" || "$d" =~ ^[SsYy] ]]; then
    ssh "$VPS" 'curl -fsSL https://get.docker.com | sh' >/dev/null 2>&1 \
      && ok "Docker instalado" || { falha "falhou ao instalar o Docker"; exit 1; }
  else falha "sem Docker não dá pra seguir"; exit 1; fi
else ok "Docker presente"; fi

if ssh "$VPS" 'test -f /opt/proxy/docker-compose.yml' 2>/dev/null; then
  ok "proxy Caddy já existe (compartilhado com os outros serviços)"
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

# ── 4 · stack ────────────────────────────────────────────────────────────────
titulo "4/5 · Instalando o n8n ($IMAGEM_N8N)"
echo "  Senha do banco e chave de criptografia geradas NO SERVIDOR."

ssh "$VPS" "DOMINIO='$DOMINIO' IMG='$IMAGEM_N8N' IMGPG='$IMAGEM_PG' bash -s" <<'REMOTO' >/dev/null 2>&1
set -e
mkdir -p /opt/n8n && cd /opt/n8n

PG_PASS=$(openssl rand -base64 24 | tr -d '/+=' | head -c 28)
# A chave que descriptografa TODA credencial salva no n8n. Por padrão ele gera
# uma sozinho e esconde dentro do volume — se o volume some, as credenciais
# viram lixo ilegivel. Definindo aqui, ela fica no .env (backupavel).
ENC_KEY=$(openssl rand -hex 32)

umask 077
cat > .env <<EOF
# Gerado em $(date -u +%Y-%m-%dT%H:%M:%SZ). Segredos gerados no proprio servidor.
POSTGRES_PASSWORD=${PG_PASS}

# BACKUP OBRIGATORIO: sem esta chave, credencial salva no n8n e irrecuperavel.
N8N_ENCRYPTION_KEY=${ENC_KEY}
EOF

cat > docker-compose.yml <<EOF
# n8n — automacao de fluxos. Convencao do servidor:
#   - nenhuma porta publicada (o /opt/proxy e o unico dono de 80/443)
#   - so o n8n entra na rede \`web\`; o Postgres fica so na \`default\`
services:
  postgres:
    image: ${IMGPG}
    restart: unless-stopped
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
    volumes:
      - pg_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      timeout: 5s
      retries: 12
    networks: [default]

  n8n:
    image: ${IMG}
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      # Sem estes tres, o n8n monta a URL do webhook como localhost:5678 e
      # TODO webhook que voce colar na Hotmart/Meta aponta pro lugar errado.
      N8N_HOST: ${DOMINIO}
      N8N_PROTOCOL: https
      WEBHOOK_URL: https://${DOMINIO}/
      # Atras do Caddy: sem isso o n8n reclama de proxy nao confiavel.
      N8N_PROXY_HOPS: 1
      # Banco: Postgres, nao o SQLite padrao (que corrompe sob carga).
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n
      DB_POSTGRESDB_PASSWORD: \${POSTGRES_PASSWORD}
      N8N_ENCRYPTION_KEY: \${N8N_ENCRYPTION_KEY}
      # Sem isso, no agendado roda em UTC e dispara 3h fora do combinado.
      GENERIC_TIMEZONE: America/Sao_Paulo
      TZ: America/Sao_Paulo
    volumes:
      - n8n_data:/home/node/.n8n
    networks: [default, web]

volumes:
  pg_data: {}
  n8n_data: {}

networks:
  web:
    external: true
EOF

cat > /opt/proxy/sites/n8n.caddy <<EOF
# n8n — automacao de fluxos (/opt/n8n).
# Sem basic_auth: os webhooks (Hotmart, Meta, formularios) precisam chegar
# sem autenticacao de proxy. O painel tem login proprio do n8n.
${DOMINIO} {
    reverse_proxy n8n:5678
}
EOF

cd /opt/n8n && docker compose up -d
cd /opt/proxy && docker compose up -d 2>/dev/null || docker compose restart
REMOTO

if [[ $? -ne 0 ]]; then falha "a instalação no servidor falhou"; exit 1; fi
ok "stack criada e subindo"

# ── 5 · esperar ──────────────────────────────────────────────────────────────
titulo "5/5 · Esperando o n8n responder"
for i in $(seq 1 18); do
  code=$(curl -s -o /dev/null -m 10 -w '%{http_code}' "https://$DOMINIO/" 2>/dev/null || echo 000)
  case "$code" in
    200|301|302) ok "no ar: https://$DOMINIO (HTTP $code)"; pronto=1; break ;;
  esac
  sleep 10
done
[[ "${pronto:-0}" == "1" ]] || {
  falha "ainda não respondeu — pode ser SSL propagando"
  echo "     Confira: ssh $VPS 'cd /opt/n8n && docker compose ps'"
}

cat <<EOF

  Próximo passo (só você pode fazer): abra
    https://$DOMINIO
  e crie a conta de dono (owner) na primeira tela.

  ⚠️  FAÇA BACKUP AGORA de /opt/n8n/.env — a N8N_ENCRYPTION_KEY que está lá é
      o que descriptografa TODA credencial que você salvar no n8n. Perdeu a
      chave, perdeu as credenciais (não há recuperação).

  Manual, armadilhas e operação: 99-skills-compartilhaveis/n8n-COMO-USAR.md
EOF
