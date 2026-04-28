# 00 · Pré-requisitos — antes de começar

> **Tudo que você precisa ter criado ANTES de iniciar o LPSG.**
> Sem isso, a execução trava no meio do caminho.

---

## ⏱️ Tempo total · 4-8h (dependendo do que já tem)

```
🟢 Já tem tudo:        0h
🟡 Falta meta business: 2-3h
🟡 Falta Hotmart:       2-3h
🔴 Tem nada:            6-8h
```

---

## ✅ Checklist visual rápido

Marque o que você já tem:

- [ ] Conta no Meta Business Manager (Facebook Business)
- [ ] Pixel Meta criado
- [ ] WABA (WhatsApp Business API) ativa
- [ ] Conta na Hotmart com produto cadastrado
- [ ] Conta no Google (Workspace ou Gmail)
- [ ] Domínio próprio comprado (ex: nome.com.br)
- [ ] Conta no Vercel
- [ ] Conta no n8n (cloud ou self-hosted)
- [ ] Conta no ManyChat
- [ ] Plataforma de aulas (Hotmart Club ou similar)
- [ ] Servidor Discord OU grupo WhatsApp

> **Tem 8+ marcados?** → você tá pronto · pula pro `01-intake.md`
> **Tem < 8?** → executa as seções abaixo na ordem

---

## 🟢 Bloco 1 · Contas básicas (1h)

### 1.1 · Domínio próprio

**Por que precisa:** páginas de venda · ficha · dashboard moram em subdomínios seus.

**Como fazer:**
1. Vai em `registro.br` (BR) ou `cloudflare.com/registrar` (internacional)
2. Compra `seunome.com.br` (R$ 40/ano)
3. Configura DNS na **Cloudflare** (gratuito · necessário pra Vercel)

🚨 **AÇÃO HUMANA · 30 min**

✅ **Checkpoint:** abre `seunome.com.br` no navegador · vê alguma resposta (mesmo que erro de DNS)

---

### 1.2 · Conta Google

**Por que precisa:** Sheets (CRM) · Calendar (agenda do CS) · Drive (assets).

**Como fazer:**
- Se já tem Gmail · usa
- Se quer mais profissional → assina Workspace (R$ 35/mês · `workspace.google.com`)

🚨 **AÇÃO HUMANA · 5 min**

---

### 1.3 · Cloudflare

**Por que precisa:** DNS gratuito · proxy · cache.

**Como fazer:**
1. Cria conta em `cloudflare.com`
2. Adiciona seu domínio
3. Muda os nameservers do registrar pra os da Cloudflare
4. Espera propagar (até 24h · normalmente < 1h)

🚨 **AÇÃO HUMANA · 15 min + propagação**

---

## 🟡 Bloco 2 · Meta Business (2-3h)

### 2.1 · Meta Business Manager

**Por que precisa:** roda anúncios · gerencia pixel · WABA.

**Como fazer:**
1. Vai em `business.facebook.com`
2. Cria Business com seu CNPJ (ou CPF MEI)
3. Adiciona Página do Facebook (cria uma se não tem)
4. Verifica negócio (envia documentos · até 7 dias úteis 🟡)

🚨 **AÇÃO HUMANA · 30 min + verificação**

---

### 2.2 · Conta de Anúncios (Ad Account)

**Por que precisa:** rodar campanhas Meta Ads.

**Como fazer:**
1. Dentro do Business Manager → Configurações → Contas de anúncios
2. Cria nova conta
3. Adiciona método de pagamento (cartão BR aceito)
4. Anota o **Ad Account ID** (formato `act_1234567890`)

🚨 **AÇÃO HUMANA · 15 min**

---

### 2.3 · Pixel Meta

**Por que precisa:** rastrear conversões da página.

**Como fazer:**
1. Business Manager → Eventos → Criar Pixel
2. Anota o **Pixel ID** (15-16 dígitos)
3. Vai usar quando subir as páginas (`paginas-lpsg`)

🚨 **AÇÃO HUMANA · 5 min**

---

### 2.4 · System User Token (CAPI · long-lived)

**Por que precisa:** Conversions API · rastreamento server-side · evita perda por adblocker.

**Como fazer:**
1. Business Manager → Usuários → Usuários do Sistema
2. Cria System User com role **Admin**
3. Atribui ao Ad Account
4. Gera token com permissões: `ads_read`, `business_management`, `pages_read_engagement`
5. Marca **Sem expiração** (long-lived)
6. **Copia o token e guarda em local seguro** (não vai aparecer de novo)

🚨 **AÇÃO HUMANA · 15 min · CRÍTICO**

⚠️ Se perder o token, gera de novo. Não compartilha com ninguém.

---

### 2.5 · WABA · WhatsApp Business API

**Por que precisa:** mensageria automatizada do evento (não dá pra usar WhatsApp comum).

**Como fazer:**
1. Vai em `business.facebook.com/wa/manage/`
2. Cria WABA · escolhe número de telefone (compra novo R$ 30/mês ou migra existente)
3. Verifica empresa (mesmo processo do BM)
4. Pega o **Phone Number ID** e o **WhatsApp Business Account ID**

🚨 **AÇÃO HUMANA · 1-2h · pode dar fricção**

⚠️ Não use seu WhatsApp pessoal · WABA exige número dedicado.

---

## 🟡 Bloco 3 · Hotmart (1h)

### 3.1 · Conta Hotmart

**Por que precisa:** processar venda do ingresso e do produto principal · Pixel · webhooks.

**Como fazer:**
1. Cria conta em `hotmart.com`
2. Sobe pra **Pro** (R$ 0/mês · só taxa por venda) — necessário pra API
3. Cadastra empresa/MEI
4. Aprova upload de documentos

🚨 **AÇÃO HUMANA · 30 min + aprovação**

---

### 3.2 · Produto Hotmart · Ingresso

**Por que precisa:** vender ingresso do LPSG.

**Como fazer:**
1. Hotmart → Produtos → Criar produto
2. **Tipo:** Curso Online (mais flexível)
3. **Preço:** o ticket de ingresso (ex: R$ 62)
4. **Co-produção:** desabilita
5. **Garantia:** **7 dias** (incondicional · LPSG exige)
6. Anota **Product ID** + **Offer Key** (vai precisar)

🚨 **AÇÃO HUMANA · 20 min**

---

### 3.3 · Produto Hotmart · Premium

**Por que precisa:** vender o produto principal (Acelerador Turbo R$ 25k típico).

**Como fazer:**
1. Mesmo fluxo do produto ingresso
2. **Preço:** ticket do premium (ex: R$ 25.000)
3. **Garantia:** **7 dias** (LPSG exige · você tem cláusula extra de retomada)
4. Anota **Product ID** + **Offer Key**

🚨 **AÇÃO HUMANA · 20 min**

---

### 3.4 · Webhook Hotmart

**Por que precisa:** Hotmart avisa o n8n quando alguém compra (dispara onboarding).

**Como fazer:**
1. Hotmart → Ferramentas → API → Webhooks
2. Adiciona URL: `https://n8n.{SEU_DOMINIO}/webhook/hotmart-compra` (cria depois)
3. Eventos: `PURCHASE_APPROVED`, `PURCHASE_CANCELED`, `PURCHASE_REFUNDED`
4. Anota o **HOTTOK** (token de validação)

> Pode deixar a URL pra preencher depois quando o n8n estiver rodando — **só anote agora que vai precisar.**

🚨 **AÇÃO HUMANA · 10 min · pode adiar**

---

## 🟡 Bloco 4 · Stack técnico (2h)

### 4.1 · Vercel

**Por que precisa:** hospedar páginas e dashboard.

**Como fazer:**
1. Cria conta em `vercel.com` (login com GitHub recomendado)
2. Plano gratuito serve pra começar
3. Conecta seu domínio Cloudflare (segue o wizard)

🚨 **AÇÃO HUMANA · 20 min**

---

### 4.2 · n8n

**Por que precisa:** executa os 14 workflows de automação.

**Opções:**

#### Opção A · n8n Cloud (recomendado pra começar)
- Cria conta em `n8n.cloud`
- Plano Starter: ~U$ 20/mês
- Pronto em 5 min

#### Opção B · n8n self-hosted
- Sobe num VPS (Hetzner, Hostinger VPS, ~R$ 30/mês)
- Mais barato em escala
- Requer conhecimento técnico
- Tutorial: `docs.n8n.io/hosting`

🚨 **AÇÃO HUMANA · 5-60 min dependendo da opção**

---

### 4.3 · ManyChat

**Por que precisa:** disparar mensagens WhatsApp via WABA · gerenciar tags por contato.

**Como fazer:**
1. Cria conta em `manychat.com`
2. Sobe pro **Pro** (~U$ 15/mês) — necessário pra WhatsApp
3. Conecta sua WABA (precisa do Phone Number ID e do BSP)
4. Cria as tags iniciais: `inscrito-ingresso`, `presente-aula-1` a `aula-6`, `tier-hot`, `tier-warm`, `tier-cold`, `comprou-acelerador`

🚨 **AÇÃO HUMANA · 30 min**

---

### 4.4 · Google Sheets · Service Account

**Por que precisa:** Claude/n8n leem e escrevem nas planilhas (CRM mestre · dashboard · automações).

**Como fazer:**
1. Vai em `console.cloud.google.com`
2. Cria projeto novo (qualquer nome)
3. Habilita APIs: **Google Sheets API** + **Google Drive API**
4. IAM → Contas de serviço → Criar conta
5. Atribui role: **Editor**
6. Cria chave JSON · faz download
7. Guarda o arquivo `service-account.json` em local seguro
8. Vai usar pra autenticar n8n e dashboard

🚨 **AÇÃO HUMANA · 20 min · técnico**

⚠️ Se travar: peça ajuda ao Claude com a mensagem *"como criar service account Google · passo a passo"*.

---

### 4.5 · Plataforma de aulas

**Por que precisa:** entregar as aulas do programa principal pro aluno após compra.

**Recomendação:** Hotmart Club (já vem com o produto Hotmart · gratuito).

**Alternativas:**
- Members.com.br
- Workover
- Plataforma própria

🚨 **AÇÃO HUMANA · 30 min config Hotmart Club**

---

### 4.6 · Comunidade

**Por que precisa:** grupo de alunos do programa principal (CS).

**Recomendação:** **Discord** (mais profissional · permite categorias · canais privados por turma).

**Alternativa:** WhatsApp grupo (até 1024 membros · mais simples mas confunde se cresce).

**Como fazer (Discord):**
1. Cria servidor em `discord.com`
2. Cria categorias: `📢 Anúncios` · `💬 Geral` · `🚀 Vitórias` · `❓ Dúvidas` · `🎓 Aulas` · `💎 VIP HOT (oculto)`
3. Convida CS Oficial e Community Manager
4. Configura bot MEE6 ou Carl-bot pra moderação

🚨 **AÇÃO HUMANA · 30 min**

---

## 🟢 Bloco 5 · Opcionais avançados (skip se primeira vez)

### 5.1 · Ferramentas de pesquisa NPS
- **Tally** (gratuito · simples) — recomendado
- **Typeform** (pago · mais polido)

### 5.2 · CRM
- **Notion** (gratuito · flexível) — recomendado
- **HubSpot** (gratuito até X contatos)
- **Pipedrive** (pago · mais profissional pra closer)

### 5.3 · Agendamento
- **Calendly** (gratuito até 1 evento · suficiente)

### 5.4 · Slack ou Telegram
- Pra alertas das automações (sugestões de tráfego · alertas críticos)

---

## 📋 Resumo final · o que anotar

> Ao final dos pré-requisitos, você deve ter **anotado** os seguintes dados (vai usar no `01-intake.md`):

```yaml
META:
  business_manager_id:    "_______________________"
  ad_account_id:          "act_____________________"
  pixel_id:               "_______________________"
  capi_token:             "EAAB..._______________"  # System User
  waba_phone_number_id:   "_______________________"
  waba_account_id:        "_______________________"

HOTMART:
  product_id_ingresso:    "_______________________"
  offer_key_ingresso:     "_______________________"
  product_id_premium:     "_______________________"
  offer_key_premium:      "_______________________"
  hottok:                 "_______________________"

GOOGLE:
  service_account_email:  "_______________________"
  service_account_json:   "(arquivo guardado em ____)"
  drive_folder_id:        "_______________________"  # opcional

VERCEL:
  team_id:                "_______________________"  # opcional
  project_name:           "_______________________"

N8N:
  base_url:               "https://n8n.___________"
  api_key:                "_______________________"

MANYCHAT:
  api_key:                "_______________________"

DOMINIO:
  raiz:                   "_______________________"  # ex: leotabari.com.br
  subdominio_lp:          "lp.____________________"
  subdominio_ficha:       "lpsg.__________________"
  subdominio_dashboard:   "dashboard.____________"

PLATAFORMA_AULAS:
  tipo:                   "Hotmart Club"             # ou outra
  url:                    "_______________________"

COMUNIDADE:
  tipo:                   "Discord"                  # ou WhatsApp
  link_convite:           "_______________________"
```

> **Dica:** salva esse YAML num arquivo seguro · vai colar no intake da próxima fase.

---

## 🔐 Segurança das credenciais

⚠️ **NUNCA compartilhe esses dados publicamente.**

| Credencial | Onde guardar |
|---|---|
| Tokens (Meta CAPI · Hotmart HOTTOK · n8n API) | Gerenciador de senhas (1Password · Bitwarden) |
| Service Account JSON | Pasta criptografada do computador · backup em cofre |
| IDs (Pixel · Product) | OK em texto simples · não são sensíveis |

> Se vazar um token, **revoga e gera de novo** — não tenta limpar o histórico.

---

## ✅ Validação final · você tá pronto pra Fase 1?

Marque cada item:

- [ ] Domínio comprado · Cloudflare ativa
- [ ] Meta Business + Ad Account + Pixel + CAPI Token
- [ ] WABA ativa · número novo dedicado
- [ ] Hotmart Pro · 2 produtos cadastrados (ingresso + premium)
- [ ] Vercel conectado ao domínio
- [ ] n8n rodando (cloud ou self-hosted)
- [ ] ManyChat conectado à WABA · tags básicas criadas
- [ ] Service Account Google JSON em local seguro
- [ ] Plataforma de aulas configurada
- [ ] Discord/WhatsApp · grupo criado
- [ ] **YAML do "Resumo final" preenchido com tudo anotado**

> **Marcou todos?** → vai pro `01-intake.md` 🚀
> **Falta algum?** → executa o bloco que falta antes de seguir.
