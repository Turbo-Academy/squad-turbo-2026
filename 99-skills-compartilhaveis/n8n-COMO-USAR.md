# n8n — instalação, armadilhas e operação

**n8n** é o motor de automação onde os 14 workflows do LPSG rodam: webhook da
Hotmart, ficha de interesse, lembretes das aulas, tsunami de bônus, recuperação
D+1-D+7, alertas de checkout iniciado.

Divisão de trabalho no squad: a skill **`automacoes-lpsg-turbo` desenha** os
fluxos; o n8n **executa**. Instalar: `bash 99-skills-compartilhaveis/instalar-n8n.sh`.

---

## Onde hospedar

Webhook precisa de **endereço público e servidor 24/7** — não roda no seu Mac.

**Pode dividir o mesmo VPS** com o Mautic e o OpenWA: cada um no seu subdomínio,
todos atrás do mesmo proxy Caddy, sem conflito de porta. É exatamente assim que a
operação da Turbo roda (n8n + Postgres, Mautic + MySQL e o gateway de WhatsApp no
mesmo servidor).

Indicação: **Hostinger KVM 8** —
[hostinger.com/br](https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77) *(link de indicação)*.

---

## As 5 armadilhas

### 1. A chave de criptografia mora dentro do volume — e some com ele

Esta é **a mais cara**. O n8n criptografa toda credencial salva (token da Meta,
API da Hotmart, senha de SMTP) com uma chave que, por padrão, ele **gera sozinho
e guarda dentro do volume** (`/home/node/.n8n/config`). Perdeu o volume — recriou
o container do zero, migrou de servidor, apagou sem querer — e **todas as
credenciais viram texto ilegível**. Não há recuperação: só recadastrar uma por uma.

O instalador define `N8N_ENCRYPTION_KEY` explicitamente e a grava no `.env`, que é
backupável. **Faça backup desse arquivo no dia da instalação**, antes de cadastrar
qualquer credencial.

### 2. Sem `N8N_HOST` / `WEBHOOK_URL`, todo webhook nasce errado

O n8n monta a URL que ele te mostra pra copiar. Sem essas variáveis ele usa
`localhost:5678` — e você cola isso na Hotmart, na Meta ou no formulário, e nada
chega. O sintoma engana: o fluxo funciona no teste manual e falha em produção.

### 3. SQLite é o padrão — e não aguenta

Sem configurar banco, o n8n usa SQLite. Funciona pra brincar; sob carga real
(execuções concorrentes, histórico crescendo) ele fica lento e corrompe. **Postgres
desde o primeiro dia** — migrar depois dá muito mais trabalho que começar certo.

### 4. Sem `GENERIC_TIMEZONE`, o agendamento roda em UTC

O nó *Schedule* dispara no fuso do servidor. Sem declarar `America/Sao_Paulo`, o
lembrete das 19h sai às 16h — **3 horas fora**, bem no meio do evento.

### 5. `latest` é uma aposta

O instalador **fixa a versão** (a verificada em produção). Atualizar deve ser
decisão consciente, com as notas de release lidas e backup do volume feito — não
um sorteio a cada `docker compose pull`.

---

## Como a stack é montada

| Container | Papel |
|---|---|
| `n8n` | a aplicação (painel + execução dos fluxos) — único na rede `web` |
| `postgres` | banco de fluxos, credenciais e histórico — só na rede interna |

Nenhum publica porta: quem fala com o mundo é o Caddy, por
`/opt/proxy/sites/n8n.caddy`. Sem `basic_auth` de propósito — os webhooks
precisam chegar sem autenticação de proxy, e o painel já tem login próprio.

---

## Operação

```bash
ssh <seu-vps>
cd /opt/n8n && docker compose ps           # estado dos 2 containers
docker logs n8n-n8n-1 --tail 50            # log da aplicação
docker compose restart n8n                 # reiniciar só o n8n
```

**Backup do que importa** (faça antes de qualquer atualização):

```bash
cp /opt/n8n/.env ~/backup-n8n-env          # a chave de criptografia
docker compose exec postgres pg_dump -U n8n n8n > ~/backup-n8n.sql
```

**Atualizar de versão:** leia as notas de release, faça o backup acima, troque a
tag no `docker-compose.yml` e `docker compose up -d`.

**Primeiro acesso:** `https://seu.dominio` — a primeira tela cria a conta de dono.

---

## Fronteira com o resto do squad

| Precisa de… | Vá para |
|---|---|
| Desenhar os 14 workflows do LPSG | skill `automacoes-lpsg-turbo` |
| Mensagem do evento (o texto) | skill `mensageria-lpsg-turbo` |
| Enviar o e-mail em si | **Mautic** (`mautic-COMO-USAR.md`) |
| WhatsApp 1:1 do closer | **OpenWA** (`instalar-openwa.sh`) |

O n8n é o encanamento; o conteúdo que passa por ele vem das skills.
