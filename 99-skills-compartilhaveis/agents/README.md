# Squad Turbo · 10 agentes

> Squad completo de agentes especialistas que complementam as 11 skills LPSG.
>
> **Skills** (`~/.claude/skills/*-lpsg/`) entregam estrutura técnica.
> **Agentes** (`~/.claude/agents/*-turbo.md`) entregam expertise especializada com contexto fundacional.

---

## 🎯 Os 10 agentes

| # | Agente | Função | Autoridade · onde escreve |
|---|---|---|---|
| 1 | **`@estrategista-turbo`** | Orquestrador estratégico · entry point de qualquer projeto novo | coordena · não escreve |
| 2 | **`@pesquisador-turbo`** | Camada fundacional · transforma material bruto em 6 dossiês internos | `00-fundacao/` |
| 3 | **`@pesquisador-mercado-turbo`** | Inteligência competitiva externa · 8 frentes de pesquisa | `02-mercado/` |
| 4 | **`@copywriter-turbo`** | Toda peça de copy · páginas · scripts · emails · sequências · headlines | textos do projeto |
| 5 | **`@diretor-criativo-turbo`** | Autoridade visual · brandbook · landing pages · UX de conversão | direção · delega |
| 6 | **`@designer-turbo`** | Executor visual · ads · slides · brandbook · banners · artes | arquivos finais |
| 7 | **`@trafego-turbo`** | Meta Ads + Google Ads · estrutura · otimização · diagnóstico de campanha | configuração de mídia |
| 8 | **`@social-turbo`** | Conteúdo orgânico · Reels · stories · calendário editorial | conteúdo orgânico |
| 9 | **`@automacao-turbo`** | n8n · ManyChat · mensageria do evento · chatbots DM | workflows |
| 10 | **`@cs-turbo`** | Pós-venda · onboarding · NPS · depoimentos · reativação | pós-venda |

---

## 🔄 Como o squad opera (fluxo padrão)

```
                    @estrategista-turbo
                           │
         ┌─────────────────┼─────────────────┐
         ↓                 ↓                 ↓
   @pesquisador-     @pesquisador-       diagnóstico
   turbo (interno)   mercado (externo)
   00-fundacao/      02-mercado/

         └─────────────────┬─────────────────┘
                           ↓
                  @copywriter-turbo
                  (lê 00-fundacao/)
                           ↓
                  @diretor-criativo-turbo
                  (recebe copy aprovada)
                           ↓
              ┌────────────┼────────────┐
              ↓            ↓            ↓
        @designer    @trafego    @automacao
                                @social  @cs
```

---

## ⚙️ Como instalar

### Sistema todo (recomendado)

Os 10 agentes ficam disponíveis em qualquer projeto Claude Code.

```bash
# Cria pasta se não existir
mkdir -p ~/.claude/agents

# Copia os 10 agentes
cp *.md ~/.claude/agents/

# Reinicia o Claude Code
# Agentes invocáveis com @nome-do-agente
```

### Só neste projeto

```bash
mkdir -p .claude/agents
cp 99-skills-compartilhaveis/agents/*.md .claude/agents/
```

---

## 🤝 Quando invocar cada um

### Início de projeto novo

```
@estrategista-turbo
Diagnostica meu projeto · identifica o que falta · sequencia o squad.
```

ou direto:

```
@pesquisador-turbo
Tenho material bruto em /docs/ · monta 00-fundacao/.

@pesquisador-mercado-turbo
Nicho X · 3 concorrentes · gera 02-mercado/.
```

### Durante a execução

| Precisando de | Invoca |
|---|---|
| Estratégia · diagnóstico · orquestração | `@estrategista-turbo` |
| Voz · avatar · oferta · briefing (interno) | `@pesquisador-turbo` |
| Concorrência · benchmarks · gaps (externo) | `@pesquisador-mercado-turbo` |
| Copy de página · email · script · headline | `@copywriter-turbo` |
| Direção visual · brandbook · UX | `@diretor-criativo-turbo` |
| Execução de criativos · slides · banners | `@designer-turbo` |
| Configurar/otimizar Meta Ads ou Google Ads | `@trafego-turbo` |
| Reels · stories · calendário orgânico | `@social-turbo` |
| n8n · ManyChat · webhooks · chatbots | `@automacao-turbo` |
| Onboarding aluno · NPS · depoimentos | `@cs-turbo` |

### Combinado com `@lpsg-master`

O `@lpsg-master` (orquestrador executor) **invoca esses agentes automaticamente** durante as fases:

| Fase | Agentes acionados |
|---|---|
| Antes da Fase 1 | `@pesquisador-turbo` + `@pesquisador-mercado-turbo` (se faltar fundação) |
| Fase 1 (páginas) | `@diretor-criativo-turbo` + `@designer-turbo` + `@copywriter-turbo` |
| Fase 2 (criativos) | `@designer-turbo` + `@copywriter-turbo` |
| Fase 4 (oferta) | `@copywriter-turbo` |
| Fase 5 (mensageria) | `@copywriter-turbo` + `@automacao-turbo` |
| Fase 6 (tráfego) | `@trafego-turbo` |
| Fase 7 (automações) | `@automacao-turbo` |
| Fase 10 (CS) | `@cs-turbo` |

---

## 🔐 Hierarquia de autoridade

> Cada agente tem **autoridade exclusiva** sobre algumas pastas. Não viole.

```
00-fundacao/      → @pesquisador-turbo
01-extratos/      → @pesquisador-turbo
02-mercado/       → @pesquisador-mercado-turbo
03-copy/          → @copywriter-turbo
04-direção/       → @diretor-criativo-turbo
05-criativos/     → @designer-turbo (executa) · @diretor-criativo-turbo (aprova)
06-trafego/       → @trafego-turbo
07-organico/      → @social-turbo
08-automacoes/    → @automacao-turbo
09-cs/            → @cs-turbo
```

---

## 🚦 Regras de invocação

1. **Sempre lê o que o agente escreveu antes** · não duplica
2. **Não invade pasta de outro agente** · respeita autoridade
3. **`@estrategista-turbo` decide ordem** quando há ambiguidade
4. **`@pesquisador-turbo` é PRÉ-REQUISITO** pra qualquer copy/visual (lê voz · avatar · oferta)
5. **`@diretor-criativo-turbo` aprova** antes de `@designer-turbo` executar
6. **Output sempre auditável** · cada agente documenta em pasta dedicada

---

## 🔗 Integração com skills LPSG

| Agente Turbo | Skill LPSG complementar |
|---|---|
| `@estrategista-turbo` | `lpsg-master` |
| `@copywriter-turbo` | `criativos-lpsg` (hooks) · `mensageria-lpsg` |
| `@diretor-criativo-turbo` | `paginas-lpsg` · `dashboard-lpsg` |
| `@designer-turbo` | `criativos-lpsg` (visual) |
| `@trafego-turbo` | `trafego-lpsg` |
| `@social-turbo` | `criador-reels` (skill) |
| `@automacao-turbo` | `automacoes-lpsg` |
| `@cs-turbo` | `cs-lpsg` |

> Skills entregam estrutura · agentes entregam expertise. Os 2 trabalham juntos.

---

## 🔐 Privacidade · uso comercial

Estes agentes são parte do **método LPSG · Turbo Academy**. Foram treinados em padrões do Leo Tabari. Use com atribuição.

Ver [LICENSE](../../LICENSE) na raiz do projeto:
- ✅ Uso no seu próprio negócio (sem custo)
- ✅ Adaptação pra equipe interna
- ❌ Revenda como produto · precisa licença comercial

Pra licenciamento: `contato@turboacademy.com.br`
