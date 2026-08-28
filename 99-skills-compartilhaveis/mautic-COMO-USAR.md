# Mautic — instalação, armadilhas e operação

**Mautic** é a plataforma open source de automação de marketing: e-mail de
nutrição, landing pages, formulários, segmentação e rastreamento de contato —
**sem custo por lead**. Você paga só o servidor.

No LPSG ele cobre o **e-mail** do evento (nutrição entre as aulas, avisos,
carrinho). O WhatsApp continua na `mensageria-lpsg-turbo` e o CRM do closer
continua no `crm-lpsg-turbo`.

Instalar: `bash 99-skills-compartilhaveis/instalar-mautic.sh` — ele pergunta
tudo, gera as senhas no servidor e sobe a stack testada.

---

## Onde hospedar

O Mautic **não roda no seu computador**: precisa de servidor 24/7 com domínio,
porque o pixel de rastreamento e as landing pages têm que estar sempre no ar.

Indicação da Turbo Academy: **Hostinger, plano KVM 8** —
[hostinger.com/br](https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77) *(link de indicação)*.

Por que o KVM 8 e não um plano menor: a stack sobe **4 containers** (web, cron,
worker e MySQL), e o MySQL sozinho já pede 1-2 GB. Nos planos pequenos ele
instala e parece bem — até o primeiro envio grande, quando o worker e o banco
disputam memória. O KVM 8 ainda sobra pra rodar n8n e outros serviços no mesmo
servidor.

Na criação: **Ubuntu 24.04**, guarde IP e senha de root, e aponte um subdomínio
(`mautic.seudominio.com.br`) pro IP com um **registro A** no seu DNS. O SSL é
automático depois — mas só funciona com o DNS já apontando.

---

## As 6 armadilhas (todas custaram tempo numa instalação real)

### 1. A versão `latest` quebra

**Fixe a imagem em `mautic/mautic:7.1.2-apache`.** A 7.1.3 quebra em instalação
nova (incompatibilidade com Twig 3.28 — issue mautic#16531). Trocar por `latest`
é pedir pra descobrir isso num domingo.

### 2. Sem `MAUTIC_SITE_URL`, todo link sai em `http://`

O TLS termina no Caddy, então o Mautic enxerga a conexão interna como `http` e
gera links `http://` **nos e-mails e no rastreamento**. Fixar a URL canônica
(`MAUTIC_SITE_URL=https://seu.dominio`) resolve — e é invisível até alguém
clicar num link de e-mail e cair no aviso de "site não seguro".

### 3. Sem `MAUTIC_TRUSTED_PROXIES`, todo contato tem o mesmo IP

Atrás de proxy, o Mautic registra o IP do Caddy em vez do IP do visitante.
Resultado: geolocalização inútil e segmentação por região quebrada — e o dado
já entrou errado no banco, não tem como recuperar depois.

### 4. Basic auth no domínio inteiro mata o produto

Diferente de outros serviços (o OpenWA, por exemplo, fica todo atrás de
`basic_auth`), o **Mautic precisa ser público**: o pixel de rastreamento, as
landing pages e os formulários são servidos pelo mesmo host. Proteger o domínio
inteiro quebra os três de uma vez.

O painel já tem login próprio, em `/s/*`. Se quiser camada extra, proteja
**apenas** o `/s/*` — nunca a raiz.

### 5. O banco nunca entra na rede pública

Convenção do servidor: só o container **web** entra na rede `web` (a do proxy).
O MySQL fica só na rede `default`, sem porta publicada. Banco exposto é incidente
esperando data.

### 6. A primeira subida é lenta — e parece travamento

O Mautic monta o schema inteiro no primeiro boot. Por isso o healthcheck tem
`start_period: 180s`. Se você olhar em 30 segundos, vai ver "unhealthy" e achar
que falhou. **Espere 3-4 minutos** antes de investigar.

---

## Como a stack é montada

| Container | Papel |
|---|---|
| `mautic-web` | a aplicação (painel, landing, formulários, pixel) — único na rede `web` |
| `mautic-cron` | as tarefas agendadas do Mautic (segmentos, campanhas) |
| `mautic-worker` | consome as filas de **e-mail** e de **hits** (Messenger DSN no próprio banco) |
| `db` | MySQL 8.4, só na rede interna |

Os três containers do Mautic compartilham a mesma config (`env_file: .mautic_env`)
e os mesmos volumes de `config`, `logs` e `media`. Sem o **worker**, o e-mail
entra na fila e nunca sai; sem o **cron**, campanha e segmento não avançam.

Nenhum deles publica porta: quem fala com o mundo é o Caddy, por
`/opt/proxy/sites/mautic.caddy`.

---

## Operação

```bash
ssh <seu-vps>
cd /opt/mautic && docker compose ps          # estado dos 4 containers
docker logs mautic-web --tail 50             # log da aplicação
docker logs mautic-worker --tail 50          # fila de e-mail travada?
docker compose restart mautic_worker         # reiniciar só o worker
```

**Atualizar de versão:** leia as notas de release antes e troque a tag no
`docker-compose.yml` — nunca use `latest` (armadilha 1). Faça backup do volume
`mysql_data` antes.

**Onde estão as senhas:** `/opt/mautic/.env`, permissão 600, geradas no próprio
servidor pelo instalador. Não passam pelo chat nem por este repositório, e o
Mautic já as lê de lá — não há motivo pra copiá-las pra lugar nenhum.

**Primeiro acesso:** `https://seu.dominio/s/` — o assistente cria o usuário
administrador. Só você pode fazer isso.

---

## Envio de e-mail (o passo que falta depois de instalar)

Instalado ≠ enviando. O Mautic precisa de um provedor de SMTP, e **não use o
servidor como SMTP próprio**: IP de VPS novo cai em spam.

Configure em *Configurações → E-mail* com um provedor de entrega (Amazon SES,
Brevo, Mailgun, Resend…). Antes do primeiro disparo real, deixe pronto no DNS
do seu domínio: **SPF, DKIM e DMARC**. Sem isso, o Gmail entrega na promoção —
ou não entrega.

Comece devagar (aquecimento): centenas por dia antes de milhares. Lista fria
comprada queima o domínio e não tem volta.
