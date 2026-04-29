# Quickstart · 5 minutos

> Caminho mais rápido pra entender e começar.

---

## 📥 1. Clone o repo

```bash
git clone https://github.com/SEU_USUARIO/lpsg-method.git
cd lpsg-method
```

## 📘 2. Abre o manual interativo

```bash
open 04-manual-de-uso/manual.html
```

> macOS · Linux · Windows: clique duplo no arquivo no explorador.

O manual vai abrir num browser. **Não precisa de servidor**, funciona offline.

## 🤖 3. Instala as skills + Squad Turbo

```bash
# 11 skills LPSG
mkdir -p ~/.claude/skills
for z in 99-skills-compartilhaveis/*-lpsg.zip 99-skills-compartilhaveis/lpsg-master.zip; do
  unzip -o "$z" -d ~/.claude/skills/
done

# Squad Turbo · 10 agentes especialistas
mkdir -p ~/.claude/agents
cp 99-skills-compartilhaveis/agents/*.md ~/.claude/agents/

# Reinicia Claude Code
```

Verifica:
- `/skills` no Claude Code · deve listar 11 skills LPSG + `lpsg-master`
- 10 agentes invocáveis com `@estrategista-turbo`, `@pesquisador-turbo`, `@copywriter-turbo`, etc.

## 🔑 4. Cria as contas necessárias

Abre o manual · vai na aba **"Setup"** · checklist com 16 itens.

Cada item tem botão **"Tutorial de configuração"** com passo-a-passo detalhado.

> Tempo: 6-12h dependendo do que você já tem.

## 📝 5. Preenche o cadastro

No manual · aba **"Cadastro"** · 10 blocos guiados · auto-save.

Quando terminar · clica **"Gerar cadastro"** → modal mostra YAML · botão **"Copiar"**.

> Tempo: 30-60 min.

## 🚀 6. Cola um único comando no Claude

Abre o Claude Code num projeto novo · cola:

```
@lpsg-master crie meu LPSG.

Aqui está meu cadastro do projeto:

[YAML que você gerou no passo 5]

Quero que você:
1. Valide o cadastro
2. Execute as 10 estruturas na ordem correta
3. Acione subagentes especialistas quando preciso
4. Me peça aprovação antes de ações irreversíveis
5. Reporte progresso ao final de cada fase

Comece pela Fase 1 (estrutura de aulas).
```

Pronto. O orquestrador `@lpsg-master` faz tudo.

> Tempo até 1ª edição rodando: **6-7 dias**.

---

## ❓ Travou em algo?

| Problema | Onde resolver |
|---|---|
| Conta no Meta Business não verifica | manual → Setup → Tutorial Meta BM |
| Não sei qual ticket cobrar | manual → Cadastro → Bloco B (sugestões por nicho) |
| Pixel não dispara | manual → Troubleshooting → "Pixel não dispara Purchase" |
| Erro no n8n | manual → Troubleshooting → seção n8n |
| Quero desafio · queremos contribuir | [CONTRIBUTING.md](CONTRIBUTING.md) |

---

## 📊 O que você terá em 1 semana

| Estrutura | Resultado |
|---|---|
| 🎯 6 aulas estruturadas | 7 dias de evento · 5 técnicas (seg-sex) + tira-dúvidas (sáb · sem replay) + pitch (dom) · formato (ao vivo/gravado) é decisão interna · não se comunica pro público |
| 💎 Oferta completa | stack 1.5x+ · tsunami 3 ondas · garantia dupla |
| 🌐 5 páginas no ar | Lighthouse 95+ · Pixel/CAPI/GTM/GA4 |
| 📋 Ficha de interesse | 11 etapas · lead score HOT/WARM/COLD |
| 📨 8 templates Utility | aprovados na Meta · ManyChat configurado |
| 🎬 15 criativos ativos | 5 vídeos + 5 estáticos + 5 carrosseis |
| 🚀 Campanha Meta Ads | ASC · pipeline diário · análise auto |
| ⚙️ 14 workflows n8n | captação · evento · tsunami · CS |
| 📊 Dashboard 11 módulos | tempo real · 8 fontes |
| 👥 Time alinhado | RACI · 12 SOPs · 6 rituais |
| 🤝 CS estruturado | onboarding · 90 dias · NPS · ascensão |

**Resultado típico da 1ª edição:**
- 500-2.000 inscritos no ingresso
- ROAS de captação 0.8-1.5
- 5-30 vendas do produto principal (R$ 5-50k)
- R$ 50k-1M de faturamento

---

## 💡 Dicas finais

1. **Não trave 3 semanas polindo aulas.** Estrutura mínima viável → roda → ajusta.
2. **Meta verifica em até 7 dias** · começa setup já.
3. **Templates Utility · aprovação 1-3 dias úteis** · submete cedo.
4. **Tem 1-2 pessoas no time?** Expande pra 2 semanas (1 dia em 2).
5. **LPSG é perpétuo** · após a 1ª, vira ciclo semanal contínuo.

---

> **Pronto pra começar?** → Abre `04-manual-de-uso/manual.html` 🚀
