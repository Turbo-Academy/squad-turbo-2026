# Skills de terceiro — opcionais, e por que elas não vêm no pacote

> **Nada aqui é do Squad Turbo.** São skills escritas por outras pessoas, que o squad **oferece** na
> instalação mas **não redistribui**. Se você instalar alguma, ela vem do repositório do autor, com a
> licença do autor — não com a licença deste projeto.

---

## Por que não vêm empacotadas

O `squad-turbo-2026` é público e distribui sob **MIT** (código) + **CC-BY-NC-SA** (conteúdo). Colocar
o arquivo de outra pessoa dentro dele publicaria a obra dela sob a nossa licença — o que não é nosso
para fazer, mesmo com um aviso ao lado: rótulo não concede licença.

Há um caso em que redistribuir seria permitido — licença permissiva com o aviso de copyright do autor
junto — e mesmo aí o instalador prefere buscar da fonte. Motivo prático: **cópia envelhece**. O autor
corrige a skill e quem instalou do nosso pacote fica com a versão de ontem, sem saber.

E existe o caso em que não é permitido de jeito nenhum: **skill sem licença**. O padrão legal é
*todos os direitos reservados ao autor* — a ausência de arquivo `LICENSE` não é permissão implícita, é
o contrário.

Por isso a regra deste repositório, que já valia na prática antes de estar escrita: **os 45 pacotes em
`99-skills-compartilhaveis/` são todos da casa; skill de terceiro se instala da fonte, não daqui.** O
mesmo padrão já é usado na stack de auditoria visual do instalador, que puxa três skills de terceiro
direto do GitHub dos autores via `npx skills add`.

---

## As opcionais

### Pacote `social-media-skills` — Charlie Hills · MIT · 17 skills

Repositório: **`github.com/charlie947/social-media-skills`** · licença **MIT**, "Copyright (c) 2026
Charlie Hills".

| Skill | Para quê |
|---|---|
| `hook-generator` | Ganchos de abertura para conteúdo curto |
| `post-writer` | Post de LinkedIn no perfil de voz do autor |
| `post-formatter` | Um tema vira post de LinkedIn (PAS, AIDA, BAB, STAR, SLAY) |
| `post-scorer` | Pontua um post contra o histórico real de desempenho |
| `profile-optimizer` | Reescreve um perfil de LinkedIn para conversão |
| `pinned-comment` | O comentário fixado que acompanha o post |
| `quote-post` | Post de citação, em duas etapas |
| `voice-builder` | Perfil de voz a partir de entrevista + 3 a 5 amostras |
| `newsletter-voice` | Instruções de newsletter a partir do perfil de voz |
| `content-matrix` | Matriz de temas × formatos para o calendário |
| `niche-research` | As histórias mais relevantes de um nicho nos últimos 7 dias |
| `reels-scripting` | Um Reel de referência vira roteiro próprio |
| `youtube-thumbnail` | Thumbnail de YouTube a partir do título |
| `graphic-designer` | Direção de peça gráfica a partir de briefing |
| `analytics-dashboard` | Painel de métricas de conteúdo |
| `gemini-carousel` | Carrossel gerado com Gemini |
| `gemini-infographic` | Infográfico gerado com Gemini |

```bash
npx skills add charlie947/social-media-skills --skill <nome-da-skill> --yes
```

### Avulsas

| Skill | Para quê | Autor | Licença | Origem |
|---|---|---|---|---|
| `humanizer` | Reescreve texto para soar humano, tirando marcas de IA | Siqi Chen (`blader`) | MIT | `github.com/blader/humanizer` |
| `remotion` | Boas práticas de vídeo programático em React | time do Remotion (remotion.dev) | não declarada na cópia | **origem não confirmada** — o mesmo conteúdo está replicado em vários repositórios e a cópia não trouxe `LICENSE`, `_SOURCE.txt` nem `.git` para desempatar. Procure em remotion.dev antes de instalar de um espelho qualquer |

---

## A exceção: terceiro que VEM no pacote, e por que pode

Uma skill de terceiro **vem** empacotada aqui, e é legítimo porque a licença permite e o aviso vai junto:

| Skill | Autor | Licença | Origem |
|---|---|---|---|
| `watch` | Bradley Bonanno | MIT | `github.com/bradautomates/claude-video` |

A MIT autoriza redistribuir **desde que o aviso de copyright e o texto da licença acompanhem a
cópia**. Até 07/09/2026 o pacote levava a skill **sem** esse aviso — redistribuição de obra
licenciada sem cumprir a condição da licença. Corrigido: o `watch.zip` agora carrega o `LICENSE`
original e um `_SOURCE.txt` apontando o repositório do autor.

É o teste que vale para qualquer skill que alguém queira empacotar aqui no futuro: **a licença
permite? o aviso do autor está dentro do pacote?** Se a resposta a qualquer das duas for não, ela vai
para a lista de cima — instalada da fonte, não redistribuída.

---

## Como sabemos a origem — e como você confere sozinho

Cada pasta instalada por esse caminho carrega um **`_SOURCE.txt`** com o repositório e a data:

```bash
cat ~/.claude/skills/<skill>/_SOURCE.txt
# source: charlie947/social-media-skills (instalado 2026-06-22T03:29:18Z)
```

A conferência de fora, que é a que vale:

```bash
curl -s https://raw.githubusercontent.com/charlie947/social-media-skills/main/LICENSE | head -3
curl -s https://api.github.com/repos/charlie947/social-media-skills/contents/skills \
  | python3 -c "import json,sys; print(' '.join(sorted(x['name'] for x in json.load(sys.stdin))))"
```

As 17 pastas do repositório batem **exatamente** com as 17 que trazem o `_SOURCE.txt` — mesma lista,
sem sobra dos dois lados.

> ⚠️ **O `_SOURCE.txt` passou despercebido por meses** porque não se chama `LICENSE` nem `README`.
> Ao auditar a procedência de uma skill, **liste todos os arquivos da pasta** (`ls -la`) em vez de
> procurar só os nomes que você espera encontrar.

---

## Antes de instalar qualquer skill de terceiro

```bash
ls -la ~/.claude/skills/<skill>/          # TODOS os arquivos, inclusive os ocultos
grep -rn "Copyright" ~/.claude/skills/<skill>/
```

Sem `LICENSE`, assuma **todos os direitos reservados**: use na sua máquina, não redistribua.

E **leia a pasta `references/`, não só o `SKILL.md`**. Já apareceu por aqui skill de agregador cujo
arquivo de apoio instruía o agente a criar conta sozinho e a esconder o token da saída "porque alguns
ambientes redigem `access_token`". O `SKILL.md` dela era inofensivo.

---

## Sobreposição com o squad

Boa parte do que essas skills fazem já existe aqui com material próprio e integrado ao método:
`criador-reels-turbo` (roteiro de Reels), `gerador-instagram-turbo` (carrossel, story, criativo),
`avoid-ai-writing` (tirar cara de IA), `pesquisador-mercado-turbo` (pesquisa de nicho e concorrência),
`distribuicao-turbo` (calendário C0-C3). Instale as de fora se quiser comparar — não porque falte
cobertura.

Depois de instalar qualquer skill, **reinicie o Claude Code**: skill nova só carrega em sessão nova.
