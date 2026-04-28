# 04 · Troubleshooting · problemas comuns e soluções

> Manual de "quando der problema". Organizado por **fase** e **categoria**.
>
> Sempre que travar · começa olhando aqui antes de pedir ajuda.

---

## 🔍 Como usar

Usa **Cmd+F** (Mac) ou **Ctrl+F** (Windows) e busca pela mensagem de erro ou pelo sintoma.

Se não achar · pede ajuda ao Claude com:

> *"Tô travado em [SINTOMA]. Já olhei `04-troubleshooting.md` mas não achei. Aqui está o erro: [PRINT/MENSAGEM]."*

---

# 🟢 Pré-requisitos · contas e acessos

### ❌ Meta Business não verifica
**Sintoma:** Submeti documentos · faz dias e tá pendente.

**Por quê:** Meta tá lento · ou documentos não bateram (CNPJ não confere com nome).

**Solução:**
1. Verifica se o CNPJ na conta bate com o nome da empresa nos documentos
2. Em `business.facebook.com/settings/business-info` · resubmete
3. Se passou 7 dias úteis · abre ticket no suporte Meta (`business.facebook.com/business/help`)
4. **Workaround:** alguns recursos liberam mesmo sem verificar (CAPI funciona · ASC funciona)

---

### ❌ WABA · número não conecta
**Sintoma:** Tentei migrar meu WhatsApp pessoal pra WABA · deu erro.

**Por quê:** WhatsApp não permite migrar contas pessoais ativas há < 90 dias OU o número já tá em outra WABA.

**Solução:**
1. **Compra um número novo dedicado** (ex: SIM da Vivo · R$ 30/mês)
2. Cadastra na WABA usando esse número
3. Comunica ao público: "novo canal oficial é {NOVO_NUMERO}"

> ⚠️ Não force migração de pessoal · 80% das vezes dá problema · WhatsApp pode banir.

---

### ❌ System User Token não tem permissão suficiente
**Sintoma:** API retorna erro `(#10) Application does not have permission for this action`.

**Por quê:** O System User não tem todas as permissões necessárias.

**Solução:**
1. `business.facebook.com/settings/system-users/`
2. Seleciona o System User
3. **Atribui ativos** (Ad Account · Pixel · Página)
4. Atribui escopo: `ads_read`, `ads_management`, `business_management`, `pages_read_engagement`
5. Gera novo token (o anterior fica obsoleto)

---

### ❌ Hotmart não aprova produto
**Sintoma:** Submeti produto · fica em análise · ou recusa.

**Por quê:** Algum dos critérios:
- Imagem do produto fraca
- Descrição vaga ("Curso completo" sem detalhes)
- Preço fora da faixa esperada
- Página de venda fora do ar (Hotmart valida)
- CNPJ ou MEI ainda não aprovado

**Solução:**
1. Garanta que **página de venda já está no ar** (mesmo que rascunho)
2. Imagem 1080x1080 · profissional
3. Descrição com 2-3 parágrafos · benefícios claros · sem promessas exageradas
4. Se recusar 2x · liga no suporte Hotmart (chat dentro do painel)

---

# 🛒 Páginas (Vercel)

### ❌ Domínio customizado não conecta no Vercel
**Sintoma:** Adicionei domínio · diz "Invalid Configuration".

**Por quê:** DNS Cloudflare em modo "proxy" (laranja) bloqueia o Vercel.

**Solução:**
1. Em Cloudflare · DNS · encontra o subdomínio (ex: `lp`)
2. Clica no ícone laranja · vira **cinza** (DNS only · sem proxy)
3. Espera 1-5 min · Vercel revalida

---

### ❌ Lighthouse mobile < 95
**Sintoma:** Páginas no ar mas score baixo.

**Diagnóstico** · verifica em ordem:

| Sintoma | Causa | Fix |
|---|---|---|
| LCP > 2s | Hero image grande | Converte pra WebP · usa `next/image` com `priority` |
| CLS > 0.1 | Layout shift de imagens | Define `width`/`height` em todas imagens |
| TBT > 300ms | JS pesado | Remove libs desnecessárias · code-splitting |
| FCP > 1.5s | CSS bloqueante | Critical CSS inline no head |

**Recurso:** skill `page-optimizer` faz auditoria completa.

---

### ❌ Pixel não dispara `Purchase`
**Sintoma:** Compras acontecendo · Meta Events Manager mostra `Purchase` em 0.

**Diagnóstico:**
1. `events.facebook.com` · Test Events
2. Faz uma compra de R$ 1 (Hotmart cupom 99%off)
3. Verifica se evento chegou

**Causas comuns:**
- Pixel ID errado na variável de ambiente
- Página de obrigado sem o pixel
- Hotmart redirect quebrou o tracking
- AdBlocker do navegador

**Solução:**
- Implementa **CAPI** server-side (Pixel + CAPI = 2x deduplicação)
- Garante que `/obrigado-ingresso` carrega o pixel também

---

# 📋 Ficha de Interesse

### ❌ Tier sempre vem `COLD`
**Sintoma:** Todos os leads classificam como COLD · até quem responde "Com certeza" e fatura R$ 100k.

**Por quê:** Lógica do score quebrada · provavelmente índices das opções estão zerados.

**Solução:**
1. Verifica em `paginas-lpsg/08-ficha-interesse.md` o algoritmo
2. Cada opção tem um índice (ex: "Acima de R$ 50k/mês" → 4)
3. No webhook (n8n), confere se o `indexFaixa()` está retornando valores corretos
4. Testa com payload mock dos 3 cenários (HOT · WARM · COLD)

---

### ❌ Webhook ficha não chega no n8n
**Sintoma:** Lead submete · página redireciona pro obrigado · mas n8n não recebe.

**Diagnóstico:**
```
1. Olha no Network tab do navegador (DevTools)
   - Request POST /api/ficha-interesse → 200 OK?
2. Olha logs Vercel
   - Function logs do /api/ficha-interesse
3. Olha logs n8n
   - Webhook /ficha-interesse-submetida foi chamado?
```

**Causas:**
- URL do webhook errada na variável de ambiente
- N8n credentials expirou
- CORS bloqueando (improvável · webhook é server-side)

---

# 🚀 Tráfego (Meta Ads)

### ❌ ROAS muito baixo nos primeiros 3 dias
**Sintoma:** Campanha rodando há 2-3 dias · ROAS 0.2.

**Resposta:** **NÃO MEXE.** Advantage+ Shopping precisa de 5-7 dias pra aprender. Mexer agora reseta o aprendizado.

**Quando agir:**
- Após 5-7 dias com ROAS < 0.5 → revisa criativos (Hook Rate)
- Após 7+ dias com ROAS < 0.7 → analisa página (conv. < 5%?)

> **Regra LPSG:** primeiros 7 dias = aprendizagem · não interpreta dados como permanentes.

---

### ❌ Criativo aprovado mas não entrega
**Sintoma:** Criativo subiu · 0 impressões em 24h.

**Causas:**
- Política de anúncios (alguma palavra disparou) — verifica em `business.facebook.com/policies`
- Conta com restrição parcial (verifica em `business.facebook.com/settings/quality`)
- Saturação da conta (Meta limita pra contas novas)

**Solução:**
1. Pausa esse criativo · ativa outros
2. Edita o criativo problemático · troca termos sensíveis ("ganhar dinheiro" → "aumentar receita")
3. Resubmete

---

### ❌ CPM disparou em 1 dia
**Sintoma:** CPM era R$ 35 · agora R$ 80.

**Causas comuns:**
- Frequência alta (público saturado)
- Concorrência aumentou no nicho
- Criativos cansados

**Solução:**
1. Verifica frequência (≥ 3.0 = saturação)
2. Se SIM · renova 5 criativos (1/3 do lote)
3. Se NÃO · espera 2-3 dias · pode ser flutuação

> **Não desce verba na primeira reação.** Engine de análise (`trafego-lpsg/07`) tem regras que evitam reação impulsiva.

---

# 🤖 Automações (n8n + ManyChat)

### ❌ Webhook Hotmart 401 Unauthorized
**Sintoma:** Hotmart manda webhook · n8n recusa.

**Por quê:** HOTTOK errado.

**Solução:**
1. Hotmart → Ferramentas → API → copia HOTTOK
2. n8n → Workflow `hotmart-compra` → primeiro nó (validate HOTTOK) · cola
3. Testa: faz compra de R$ 1

---

### ❌ ManyChat não dispara fluxo da tag
**Sintoma:** Aplicou tag `tier-hot` no contato · fluxo associado não roda.

**Causas:**
- Fluxo não tá ativo
- Trigger do fluxo não é a tag
- Contato sem opt-in da WABA

**Solução:**
1. ManyChat → Automation → Flows → encontra o fluxo
2. Verifica se está **Active**
3. Verifica se trigger é **Tag Applied** com nome exato
4. Testa: aplica tag manualmente em 1 contato

---

### ❌ Workflow n8n falhando silenciosamente
**Sintoma:** Workflow rodou · não retornou erro · mas dado não chegou no Sheets.

**Solução:**
1. n8n → Executions · filtra por workflow
2. Olha o último execution · clica
3. Vai nó por nó · vê qual retornou `[]` ou `null`
4. Geralmente é credentials Sheets que expirou (regenera no Google Console)

---

# 📊 Dashboard

### ❌ Dashboard mostra dados errados
**Sintoma:** Dashboard diz 50 inscritos · Hotmart diz 80.

**Diagnóstico:**
1. Verifica qual fonte o módulo está lendo (Sheets? Hotmart API direto?)
2. Se Sheets · n8n pode ter parado de gravar
3. Se Hotmart API · pode ser cache (default 5 min)

**Solução:**
- Botão "Atualizar agora" no módulo (se existe)
- Ou aguarda refresh automático (60s típico)
- Ou força revalidação SWR

---

### ❌ Dashboard não autentica
**Sintoma:** Acessa `dashboard.{dominio}` · pede senha · senha não funciona.

**Solução:**
1. Vercel → Settings → Environment Variables
2. Verifica `DASHBOARD_PASSWORD` está correto
3. Se mudou recentemente · redeploy (Vercel · Deployments · Redeploy)

---

# 💌 Mensageria

### ❌ Template Utility rejeitado
**Sintoma:** Submeti template · Meta rejeitou.

**Causas comuns:**
- Categoria errada (Utility vs Marketing)
- Variáveis fora do padrão (`{{1}}` ok · `{name}` não)
- Conteúdo promocional num template Utility

**Solução:**
1. Lê o motivo da rejeição (aparece no painel)
2. Ajusta:
   - Tira urgência ("ÚLTIMA CHANCE" → "Lembrete")
   - Tira CTAs de venda diretos
   - Reformula como **transacional/informativo**
3. Resubmete

> **Dica:** comece sempre como **Utility** · se rejeitar, muda pra **Marketing** (limita disparo mas aprova).

---

### ❌ Mensagens não chegando
**Sintoma:** Disparou pro grupo de teste · ninguém recebeu.

**Diagnóstico:**
1. Status da WABA OK em `business.facebook.com/wa/manage`?
2. Saldo da conta de pagamentos? (cobranças por conversa)
3. Templates **aprovados** (não só "ativos")?
4. Contato fez **opt-in**? (sem opt-in · não recebe nada)

---

# 🤝 CS / Pós-venda

### ❌ Aluno não fez login até D7
**Cenário comum.** Skill `cs-lpsg/01-onboarding-d0-d7.md` cobre.

**Resposta padrão:**
1. CS Oficial faz call de check-in (15 min)
2. Diagnostica (3 perguntas)
3. Resolve OU oferece reembolso proativo

---

### ❌ NPS detrator (resposta 0-6)
**Resposta padrão:**
- Head CS liga em ≤ 24h
- Não defende · escuta
- Soluciona OU oferece transição (extensão · crédito · reembolso)

> Detrator silencioso vira reclamação pública. Aborda **rápido**.

---

# 🚨 Sinais de problemas estruturais (não tenta resolver no operacional)

> Estes pedem **decisão estratégica** · não fix técnico.

### Sinal · Múltiplas edições com 0 vendas premium
**O que pode ser:**
- Avatar errado (público que não compra R$ 25k)
- Oferta cara demais pro nicho
- Pitch fraco ou aulas que não amarram

**O que fazer:**
- Revisa `lpsg-master/03-arvore-diagnostico.md`
- Considera **baixar ticket** ou **mudar nicho**

---

### Sinal · Churn > 30% no D90
**O que pode ser:**
- Promessa do programa não bate com entrega
- Avatar errado (entrou esperando outra coisa)
- CS estruturalmente fraco

**O que fazer:**
- Auditoria de **expectativa vs entrega** na página de venda
- Reformula primeiro mês do programa (ativação)
- Considera **re-onboarding** dos detratores

---

### Sinal · Reclamação pública (Reclame Aqui · Reddit · Instagram)
**Não ignora.** Custa 50x mais caro depois.

**Ação imediata:**
1. Comenta publicamente em ≤ 4h: "Ouvi · vou resolver"
2. Move pra DM · 1:1
3. Resolve (mesmo que reembolso completo + bônus)
4. **Quando resolver · pede pro aluno atualizar o post** (nunca exige)

---

# 🆘 Quando mesmo Claude não consegue ajudar

> Casos raros · mas vale ter o caminho:

| Situação | Onde recorrer |
|---|---|
| Erro técnico em Meta Ads API | `developers.facebook.com/community` |
| Erro técnico Hotmart | Suporte Hotmart (chat) |
| Vercel quebrado | `vercel.com/help` |
| n8n self-hosted travado | Forum n8n (`community.n8n.io`) |
| ManyChat dúvida específica | Suporte chat ManyChat |
| WhatsApp banindo número | Suporte WhatsApp Business |
| Decisão estratégica complexa | Mentor / consultor LPSG · ou Leo Tabari direto |

---

## 📋 Antes de pedir ajuda

> Antes de **dizer que não funciona** · tenta:

1. ✅ **Reproduzi 3 vezes** com o mesmo resultado?
2. ✅ Tentei **abrir em janela anônima** (cache pode ser o problema)?
3. ✅ Tem **algum erro no console** (DevTools)?
4. ✅ **O que mudei** desde que funcionava? (90% das vezes é alguma config recente)
5. ✅ **Olhei nos logs** da ferramenta correspondente?

Se respondeu sim a tudo · aí pede ajuda **com print do erro + descrição do que tentou**.

---

## 🎯 Filosofia geral · troubleshooting

| Princípio | Por quê |
|---|---|
| **Espera 24h antes de mexer em campanha lenta** | Maioria dos problemas se autocorrige |
| **1 mudança por vez** | Senão não sabe o que funcionou |
| **Documenta o que tentou** | Próxima vez resolve mais rápido |
| **Roda no ambiente de teste primeiro** | Não testa em produção |
| **Pede ajuda cedo** | Travar 2h em algo que outro resolve em 5 min é desperdício |
