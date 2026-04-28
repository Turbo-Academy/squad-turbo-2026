# Contributing · LPSG 4.0

> Obrigado por considerar contribuir. Este projeto é mantido pela equipe **Turbo Academy**, mas aceita PRs e issues da comunidade.

---

## 🎯 Antes de começar

Leia o [README.md](README.md) e o [QUICKSTART.md](QUICKSTART.md) pra entender o método.

Tipos de contribuição que **mais ajudam**:

| Tipo | Exemplo |
|---|---|
| 🐛 **Bug fix** no manual HTML | Botão quebrado · CSS quebrado em mobile · typo |
| 📚 **Tutoriais novos ou atualizados** | Meta atualizou interface → atualizar tutorial |
| 🌐 **Tradução** | Manual em inglês · espanhol |
| 🎨 **Templates novos por nicho** | Exemplo preenchido pra fitness · finanças |
| 📊 **Calibração de benchmarks** | Você rodou 3 edições · contribui dados reais |
| ⚙️ **Workflows n8n** | Versão importável dos workflows como JSON |

Tipos que **NÃO** aceitamos sem alinhamento prévio:

- ❌ Mudança fundamental no método (não-negociáveis do LPSG)
- ❌ Adição de outras plataformas substituindo as fixas (Meta, Hotmart, n8n)
- ❌ Conteúdo comercial (anúncios · links de afiliado)

---

## 🛠️ Como contribuir

### 1. Fork e clone

```bash
gh repo fork SEU_USUARIO/lpsg-method --clone
cd lpsg-method
```

### 2. Cria branch

```bash
git checkout -b fix/typo-no-tutorial-meta
# ou
git checkout -b feat/tutorial-tiktok-ads
```

### 3. Faz a mudança

Convenções:

- **Markdown** · use `prettier --print-width 100` se possível
- **HTML** · indentação de 2 espaços · 100 chars por linha
- **CSS** · single-line pra propriedades curtas · multi-line pra blocos complexos
- **JS** · ES6+ · sem libs externas no manual.html (mantém 100% standalone)
- **Português brasileiro** · informal mas profissional · "você" não "tu"
- **Emojis** · OK em headings/CTAs · evite em corpo de texto

### 4. Teste local

Pro manual HTML:

```bash
open 04-manual-de-uso/manual.html
# verifica em mobile (DevTools · responsive)
# verifica em print (Cmd+P)
# clica em todos os botões/links que você mudou
```

Pra mudanças nos templates:

```bash
# Lê o template todo de cabo a rabo
# Verifica se as referências cruzadas ainda fazem sentido
# Confirma que o exemplo-lpsg/ continua coerente
```

### 5. Commit

Convenção: [Conventional Commits](https://www.conventionalcommits.org/)

```bash
git commit -m "fix(manual): typo no tutorial de WABA"
git commit -m "feat(templates): adiciona exemplo de oferta pra nicho saúde"
git commit -m "docs(readme): atualiza versão das skills"
git commit -m "style(html): melhora contraste no dark mode"
```

Tipos: `fix` · `feat` · `docs` · `style` · `refactor` · `test` · `chore`

### 6. Push e abre PR

```bash
git push origin sua-branch
gh pr create
```

Template do PR:

```markdown
## O que muda
[1-2 frases]

## Por quê
[Contexto · problema que resolve]

## Como testou
- [ ] Abri manual.html · verifiquei a mudança
- [ ] Testei em mobile
- [ ] Verifiquei que não quebra outras seções
```

---

## 📁 Estrutura do projeto (importante!)

```
04-manual-de-uso/             ← MANUAL HTML · primeira coisa que o usuário vê
02-entregaveis-finais/        ← Templates · 10 estruturas
99-skills-compartilhaveis/    ← Zips das skills (gerados de ~/.claude/skills/)
00-briefing-e-dados/          ← Briefing público
03-revisoes/                  ← .docx pra cliente revisar (gerado de templates)
_private/                     ← NUNCA versionar (gitignored)
```

### Onde NÃO mexer sem coordenação

- `LICENSE` — licença é estratégica · pergunta antes
- `_private/` — dados sensíveis · nunca toca
- Estrutura de pastas (00-04 · 99) — quebra muitas referências cruzadas

### Onde mexer livremente

- Tutoriais individuais em `04-manual-de-uso/manual.html` (objeto `TUTORIALS` no JS)
- Conteúdo de cada template em `02-entregaveis-finais/{estrutura}/template/`
- Exemplos em `02-entregaveis-finais/{estrutura}/exemplo-lpsg/`
- README.md público · QUICKSTART.md
- Troubleshooting em `04-manual-de-uso/04-troubleshooting.md`

---

## 🔧 Regenerar artefatos

### Manual HTML

O `manual.html` é gerado a partir dos `.md` por scripts Python:

```bash
# Não criamos um script único · cada feature tem seu script de regen
# Veja /tmp/manual_v3_*.py se ainda existem (foram limpos após uso)
```

Se você mudar `.md` significativamente · precisa regerar o `manual.html`. Por enquanto, faz manual ou pede ao mantedor.

### Skills .zip

Sempre que mudar `~/.claude/skills/{skill}/`:

```bash
cd ~/.claude/skills
rm -f /path/to/repo/99-skills-compartilhaveis/{skill}.zip
zip -rq /path/to/repo/99-skills-compartilhaveis/{skill}.zip {skill}
```

### .docx de revisão

Geramos via python-docx (script em `/tmp/build_revisao.py` · arquivado).

---

## 🎓 Quem revisa?

PRs são revisadas pela equipe **Turbo Academy** num prazo de **3-7 dias úteis**.

Critérios de aprovação:

1. ✅ Não quebra nenhuma estrutura existente
2. ✅ Mantém princípios não-negociáveis do método LPSG
3. ✅ Português correto e claro
4. ✅ Não introduz dependências externas no `manual.html`
5. ✅ Não adiciona dados pessoais

Se sua PR ficar parada · marca `@leotabari` no comentário.

---

## 💬 Comunicação

| Canal | Pra quê |
|---|---|
| **GitHub Issues** | Bugs · sugestões · dúvidas técnicas |
| **GitHub Discussions** | Conversas abertas sobre o método |
| **Email** `contato@turboacademy.com.br` | Licenciamento · parcerias · privado |

---

## 📋 Code of Conduct

- Seja gentil. Estamos todos aprendendo.
- Crítica deve ser construtiva, sem ataques pessoais.
- Spam · auto-promoção · links de afiliado em issues = ban imediato.
- Discussões off-topic vão pro Discussions, não pra Issues.

---

## 🙏 Reconhecimento

Toda PR aceita ganha:

- Crédito no `CONTRIBUTORS.md` (a ser criado)
- Menção na próxima release notes
- Vaga gratuita na próxima edição do LPSG (se for contribuição substantial)

---

**Bora deixar o LPSG melhor juntos.** 🚀
