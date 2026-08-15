# Scrapling — como usar nesta máquina

Framework de web scraping (BSD-3-Clause · https://github.com/D4Vinci/Scrapling),
instalado pelo `instalar-scrapling.sh` do Squad Turbo em venv isolado com
Python 3.12 (o Python do sistema costuma ser velho ou novo demais pras
dependências). Reinstalar/atualizar: rode o script de novo.

## Onde está

| Coisa | Caminho |
|---|---|
| venv | `~/.claude/tools/scrapling/venv` (376 MB) |
| python pra scripts | `~/.claude/tools/scrapling/venv/bin/python` |
| CLI | `scrapling` (link em `~/.local/bin`, já no PATH) |
| navegadores | `~/Library/Caches/ms-playwright` (1,1 GB — compartilhado com outras ferramentas) |

## Os 3 fetchers (todos testados e funcionando)

```python
from scrapling.fetchers import Fetcher, DynamicFetcher, StealthyFetcher

Fetcher.get('https://exemplo.com')                        # HTTP puro — rápido, sem navegador
DynamicFetcher.fetch('https://exemplo.com', headless=True)  # navegador real (página com JS)
StealthyFetcher.fetch('https://exemplo.com', headless=True) # navegador anti-bloqueio (patchright)
```

Resposta: `.status` · `.css('h1::text').get()` · `.css('a::attr(href)')` · `.xpath(...)` ·
`.get_all_text()` · `.find_by_text(...)` · `.json()` · `.save(...)`.

> **API mudou na 0.4:** não existe mais `css_first` no Response — use `.css(...).get()`.

## CLI

```bash
scrapling extract <url> <arquivo-saida>   # extrai sem escrever código
scrapling shell                            # console interativo
scrapling mcp                              # servidor MCP (NÃO registrado — ver abaixo)
```

## Pegadinhas já resolvidas

- **Python 3.14 não serve** — venv fixo em 3.12 via `uv venv --python 3.12`.
- **`camoufox` não é mais usado** na 0.4 (era até a 0.2); o stealth agora é `patchright`.
- **`scrapling install` não basta**: ele instala o Chromium do Playwright (build 1234),
  mas o StealthyFetcher pede o do patchright (build 1228). Se voltar o erro
  `Executable doesn't exist at .../chromium-1228`, rode:
  `~/.claude/tools/scrapling/venv/bin/patchright install chromium`
- `timeout` não existe no macOS (é `gtimeout`, do coreutils).

## MCP — REGISTRADO (escopo user/global, 2026-08-15)

O Claude fala com o Scrapling direto, sem escrever script. 10 ferramentas:
`get` · `bulk_get` · `fetch` · `bulk_fetch` · `stealthy_fetch` ·
`bulk_stealthy_fetch` · `screenshot` · `open_session` · `close_session` ·
`list_sessions`.

Entrada em `~/.claude.json` → `mcpServers.scrapling`:

```json
{"type":"stdio","command":"/Users/leonardotabari/.claude/tools/scrapling/venv/bin/scrapling","args":["mcp"],"env":{}}
```

- **Precisa do extra `[ai]`** (pacote `mcp`) — só `[fetchers]` faz o `scrapling mcp --help`
  responder mas o servidor morrer ao subir.
- Vale em **sessão nova** do Claude Code. Conferir: `claude mcp list`.
- Se a entrada sumir: o app reescreve o `~/.claude.json` quando está aberto —
  basta rodar de novo `claude mcp add scrapling --scope user -- <caminho> mcp`.

## Uso responsável

Respeite `robots.txt`, termos de uso e a LGPD: não colete dado pessoal de terceiros
e não sobrecarregue site alheio. Para pesquisa de concorrência do squad, prefira as
fontes oficiais quando existirem (Meta Ad Library, APIs públicas).
