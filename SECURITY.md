# Security · Boas práticas

> **Este projeto lida com tokens · APIs · dados de leads.** Trate com cuidado.

---

## 🔐 Tokens · NUNCA versionar

Os seguintes tokens NUNCA devem aparecer no Git (público ou privado):

| Token | Onde usar | Onde guardar |
|---|---|---|
| **Meta CAPI Token** (System User) | Variável de ambiente | Gerenciador de senhas (1Password · Bitwarden) |
| **Hotmart HOTTOK** | Variável de ambiente n8n | Idem |
| **Google Service Account JSON** | Variável de ambiente (base64) | Pasta criptografada |
| **n8n API Key** | Variável de ambiente | Idem |
| **ManyChat API Key** | Variável de ambiente | Idem |
| **WhatsApp Business API Token** | n8n credentials | Idem |

### Como configurar com segurança

```bash
# .env.local (gitignored automaticamente)
META_CAPI_TOKEN=EAAB...
HOTMART_HOTTOK=...
GOOGLE_SERVICE_ACCOUNT_JSON=$(cat sa.json | base64)
N8N_API_KEY=...
MANYCHAT_API_KEY=...

# Em produção (Vercel · Railway · etc):
# Settings → Environment Variables → adicionar uma a uma
```

### Se um token vazou

1. **Revoga imediatamente** no painel da ferramenta:
   - Meta: `business.facebook.com/settings/system-users` → revogar token
   - Hotmart: regenera HOTTOK
   - Google: deleta service account
2. **Gera novo token** e atualiza onde estava
3. **Verifica logs** se houve uso indevido (Meta Events Manager · Hotmart histórico · etc)
4. **Notifica** a equipe interna se for token compartilhado

---

## 📋 LGPD · Dados de leads

Este projeto coleta dados pessoais via:

- Ficha de interesse (nome · email · telefone · faturamento)
- Webhook Hotmart (compras · CPF)
- Pixel + CAPI (eventos com PII hashed)

### Obrigações legais

| Obrigação | Como cumprir |
|---|---|
| **Consentimento explícito** | Marca obrigatória no formulário · termo claro |
| **Finalidade declarada** | "Vamos usar pra te enviar conteúdo do evento e ofertas relacionadas" |
| **Direito de exclusão** | Endpoint <code>POST /api/lgpd/excluir</code> · email <code>privacidade@dominio</code> |
| **Direito de portabilidade** | Endpoint exporta dados do lead em JSON |
| **Notificação de incidente** | 72h pra ANPD se vazar dado |

### Onde mora a política de privacidade

**Você precisa criar uma** · este repo não inclui template legal.

Páginas obrigatórias:

- `/politica-de-privacidade` no domínio
- `/termos-de-uso`
- Link em cada página de captura

Recomendado: contrato com [Privacy Tools BR](https://privacytools.com.br/) ou advogado especialista em LGPD.

---

## 🛡️ Boas práticas

### ✅ FAÇA

- Use **gerenciador de senhas** (1Password · Bitwarden · pessoal: Apple Passwords)
- **2FA habilitado** em todas as contas (Meta · Hotmart · Google · GitHub · Vercel)
- **System User Token** (long-lived) ao invés de user access token
- **Service Account** com permissões mínimas (Editor, não Owner)
- Roda código com **menor privilégio** possível
- **Audita logs** mensalmente (n8n executions · webhooks · Meta API logs)

### ❌ NÃO FAÇA

- ❌ Commit de tokens · mesmo em repo "privado"
- ❌ Compartilhar tokens via Slack · Discord · email
- ❌ Usar mesmo token pra dev e prod
- ❌ Token "long-lived" sem rotação periódica (recomendado: a cada 6 meses)
- ❌ Compartilhar JSON de Service Account
- ❌ Webhooks sem validação de origem (verifica HOTTOK · X-Webhook-Secret)

---

## 🔍 Reportar vulnerabilidade

Encontrou uma falha de segurança?

**Email privado:** `seguranca@turboacademy.com.br`

**NÃO abra issue pública.** Resolveremos em 7 dias úteis.

Vulnerabilidades aceitas pra recompensa:

- Token leak no repo público
- Webhook que pode ser explorado
- XSS · CSRF · injection no manual HTML
- Exposição de dados de leads via URL

Recompensa: vaga gratuita na próxima edição do LPSG + menção em CONTRIBUTORS.md.

---

## 📚 Recursos

- [LGPD · texto oficial](https://www.gov.br/anpd/pt-br/assuntos/legislacao/leis-e-decretos)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Meta Business Security](https://www.facebook.com/business/help/security)
- [Hotmart · API Security](https://developers.hotmart.com/docs/security)
- [Cloudflare Security Center](https://www.cloudflare.com/security/)

---

## ⚖️ Disclaimer

Este projeto fornece **estrutura técnica e educacional**. **Conformidade legal (LGPD · termos · contratos)** é responsabilidade do operador que usa o método.

Os mantenedores **não são responsáveis** por mau uso · vazamentos · violações de LGPD causadas por implementação incorreta.

**Sempre consulte um advogado** antes de operar comercialmente.
