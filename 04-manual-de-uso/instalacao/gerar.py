#!/usr/bin/env python3
"""Gera o manual de instalação do Squad Turbo no padrão do Manual do Head Turbo.

    python3 04-manual-de-uso/instalacao/gerar.py                    # instalacao-do-zero.html + INSTALACAO-DO-ZERO.md
    python3 04-manual-de-uso/instalacao/gerar.py --landing <pasta>  # + <pasta>/squadturbo/index.html (página pública)

A lógica é a do kit do aluno: a pessoa cola UMA mensagem no Claude e o Claude faz o resto; ela só aprova. Versão e
contagens saem do 04-manual-de-uso/manual-dados.json (o build-manual.sh chama este script). Visual: casca.css e
casca.js, copiados do Manual do Head Turbo. No fim, provas estáticas: ids únicos, âncoras com destino, cada botão
copia exatamente o texto mostrado, nenhum marcador sobrando.
"""
import html, json, pathlib, re, sys

AQUI = pathlib.Path(__file__).resolve().parent
RAIZ = AQUI.parent.parent
D = json.loads((RAIZ / "04-manual-de-uso/manual-dados.json").read_text(encoding="utf-8"))
V, NS, NA = D["versao"], D["n_skills"], D["n_agentes"]
REPO = "https://github.com/Turbo-Academy/squad-turbo-2026"
PAGES = "https://turbo-academy.github.io/squad-turbo-2026"
E = html.escape

# ---------------------------------------------------------------- textos que a pessoa cola
INSTALAR = r'''Oi, Claude. Quero instalar o Squad Turbo neste computador. É um pacote público e gratuito de agentes e skills de marketing digital pro Claude Code, da Turbo Academy: https://github.com/Turbo-Academy/squad-turbo-2026

Eu não uso o Terminal. Você faz tudo, me explica cada passo em português simples antes de rodar, e eu só aprovo. Regras:
- Nunca me peça senha, token ou código pelo chat. Se um comando precisar da senha do computador (sudo, ou o instalador da Homebrew no Mac), não rode: me mostre a linha, eu rodo no Terminal (no Mac) ou numa segunda janela do Ubuntu (no Windows) e te aviso.
- Não apague nada que já exista. Se uma pasta já existir e precisar sair do caminho, renomeie com a data no fim e me diga.
- Não compre nada, não crie conta e não conecte serviço pago sem me perguntar.

1. Conferir o computador. Rode `uname -sm` e `git --version` e me diga o que achou. No Mac, se o git não existir, aparece uma janela pedindo as "ferramentas de linha de comando": eu clico em Instalar e te aviso quando terminar. No Ubuntu, se faltar git, unzip ou python3, me mostre a linha do apt pra eu rodar.

2. Baixar o squad. Se a pasta ~/squad-turbo-2026 não existir, rode:
   git clone --depth 1 https://github.com/Turbo-Academy/squad-turbo-2026.git ~/squad-turbo-2026
   Se ela já existir, rode `git -C ~/squad-turbo-2026 pull --ff-only`. Se o pull falhar, renomeie a pasta antiga pra ~/squad-turbo-2026.antigo-AAAAMMDD e clone de novo.

3. Instalar o básico (skills, agentes e modelos). Rode:
   bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh < /dev/null
   Sem terminal interativo ele instala o básico e pula os opcionais com aviso: é o esperado. Me mostre o resumo do fim.
   Se eu já tinha o squad e editei algum arquivo dele, o instalador guarda o meu numa pasta nova em ~/.claude/squad-turbo-backups/ antes de trocar (linha "guardados em"): me diga quais e onde.
   Se aparecer "INSTALAÇÃO INCOMPLETA" ou "FALHOU", pare e me mostre a linha: não siga como se tivesse dado certo.

4. Programas de vídeo (ffmpeg e yt-dlp), que as skills de vídeo e de cortes usam. Confira com `command -v ffmpeg yt-dlp brew`.
   - Mac com `brew`: `brew install ffmpeg yt-dlp`.
   - Mac sem `brew`: me mostre a linha oficial da Homebrew pra eu rodar no Terminal (ela pede a senha do Mac): /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)". Se o `uname -sm` disse x86_64 (Mac Intel), me mande a linha da seção E2 do manual de instalação no lugar dessa. Depois rode as linhas do "Next steps" que ela imprimir e o `brew install ffmpeg yt-dlp`.
   - Ubuntu (Windows): se faltar o ffmpeg, me mostre `sudo apt-get install -y ffmpeg pipx` pra eu rodar; o yt-dlp você instala sem sudo com `pipx install yt-dlp && pipx ensurepath`.

5. Opcionais. Me pergunte um por vez, dizendo pra que serve e quanto ocupa, e só instale com o meu sim:
   a) transcrição de vídeo local, sem chave de API (~220 MB agora + ~3,5 GB do modelo no primeiro uso): bash ~/.claude/skills/watch/whisper-local/instalar.sh
   b) Scrapling, pro Claude ler qualquer página da web (~1,5 GB): bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-scrapling.sh
   c) stack Picasso, auditoria visual anti-IA (3 skills de terceiros, precisa de Node): os 3 comandos `npx skills add` do bloco "11/11 · Opcionais" do instalar-squad.sh.
   WhatsApp (OpenWA), e-mail marketing (Mautic) e automação (n8n) rodam num servidor (VPS), não neste computador: não instale agora, só me diga que existem e que o passo a passo está no README do repositório.

6. Conferir. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir`. Tem que terminar em "SQUAD OK". Me mostre a saída inteira.

7. Fechar e abrir. Me diga pra fechar o Claude e abrir de novo: skills e agentes só carregam numa sessão nova. Na sessão nova eu vou mandar "@estrategista-turbo, o que você faz e por onde eu começo?".'''

ATUALIZAR = r'''Oi, Claude. Atualize o Squad Turbo deste computador pra versão mais nova, sem apagar nada meu. Me explique cada passo antes de rodar.

1. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir`. Linhas com "~ personalizado" são arquivos que eu editei: me diga quais são. A atualização troca esses arquivos pela versão do pacote, mas o instalador guarda os meus antes, numa pasta nova em ~/.claude/squad-turbo-backups/.
2. Rode `git -C ~/squad-turbo-2026 pull --ff-only`. Se falhar, renomeie a pasta pra ~/squad-turbo-2026.antigo-AAAAMMDD e clone de novo: git clone --depth 1 https://github.com/Turbo-Academy/squad-turbo-2026.git ~/squad-turbo-2026
3. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh < /dev/null` e me mostre o resumo. Se ele disser que guardou arquivos meus, me diga a pasta. Se aparecer "INSTALAÇÃO INCOMPLETA" ou "FALHOU", pare e me mostre.
4. Rode o `--conferir` de novo. Tem que dizer "SQUAD OK".
5. Me mostre o que mudou (o topo do ~/squad-turbo-2026/CHANGELOG.md, em português simples) e me diga pra fechar e abrir o Claude.'''

REMOVER = r'''Oi, Claude. Quero tirar o Squad Turbo deste computador. Não apague nada ainda.

1. Monte a lista do que o pacote instalou: as skills com o mesmo nome dos .zip de ~/squad-turbo-2026/99-skills-compartilhaveis (fora squad-turbo-completo e squad-core-turbo) dentro de ~/.claude/skills, os agentes de ~/squad-turbo-2026/99-skills-compartilhaveis/agents/*-turbo.md dentro de ~/.claude/agents, a pasta ~/.claude/squads/squad-turbo e a própria ~/squad-turbo-2026.
2. Me mostre a lista e o tamanho de cada item. Só apague depois que eu disser "pode apagar", e apague só o que está na lista.
3. No fim, rode `ls ~/.claude/skills ~/.claude/agents` e me mostre o que sobrou.'''

# ---------------------------------------------------------------- peças de HTML
ICO_COPIAR = '<svg viewBox="0 0 24 24" aria-hidden="true" class="ic"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>'
ICO_OK = '<svg viewBox="0 0 24 24" aria-hidden="true" class="ic ic-ok"><path d="M4 12.5l5 5L20 6.5"/></svg>'
_n = [0]


def cmd(onde, texto, rotulo=None, mensagem=False, longo=False):
    _n[0] += 1
    i = ("msg-%02d" if mensagem else "cmd-%02d") % _n[0]
    cls = "cmd" + (" cmd-mensagem" if mensagem else "") + (" cmd-longo" if longo else "")
    rot = '<span class="cmd-rotulo">%s</span>' % rotulo if rotulo else ""
    bt = "Copiar tudo" if mensagem else "Copiar"
    extra = ' data-inteiro="1"' if mensagem else ""
    s = ('<div class="%s" id="%s"%s><div class="cmd-topo">%s<span class="onde"><span class="onde-ponto" aria-hidden="true"></span>%s</span>'
         '<button type="button" class="copiar%s" data-alvo="%s"><span class="lbl-copiar">%s%s</span><span class="lbl-ok">%sCopiado</span></button></div>'
         % (cls, i, extra, rot, E(onde), " copiar-tudo" if mensagem else "", i, ICO_COPIAR, bt, ICO_OK))
    if mensagem:
        s += '<p class="um-so">É uma mensagem só. Copie tudo pelo botão e cole de uma vez, sem dividir.</p>'
    s += '<template class="cmd-fonte">%s</template><pre class="cmd-texto%s" tabindex="0"><code>%s</code></pre>' % (
        E(texto), " msg-texto" if mensagem else "", E(texto))
    if longo:
        s += '<p class="um-so">Um comando só, mesmo que apareça quebrado em várias linhas. O botão copia ele inteiro.</p><button type="button" class="ver-tudo" aria-expanded="false">Ver inteiro</button>'
    return s + "</div>"


def prova(t):
    return '<p class="prova"><span class="prova-selo">Prova</span>%s</p>' % t


def passo(pid, num, onde, titulo, corpo):
    return ('<section class="passo" id="%s" aria-labelledby="%s-t"><div class="passo-num" aria-hidden="true">%s</div><div class="passo-corpo">'
            '<p class="passo-onde">%s</p><h3 id="%s-t"><span class="sr">Passo %s: </span>%s</h3>%s</div></section>\n'
            % (pid, pid, num, onde, pid, num, titulo, corpo))


def momentos(*itens):
    s = '<div class="momentos"><h4 class="momentos-t">O que vai aparecer e o que fazer</h4>'
    for t, aparece, fazer, tempo in itens:
        s += ('<div class="momento"><h5 class="momento-t">%s</h5><dl class="momento-dl"><dt>O que aparece</dt><dd>%s</dd>'
              '<dt>O que fazer</dt><dd>%s</dd><dt>Tempo e o que é normal</dt><dd>%s</dd></dl></div>' % (t, aparece, fazer, tempo))
    return s + "</div>"


def aviso(t, corpo):
    return '<div class="aviso" role="note"><span class="aviso-t">%s</span>%s</div>' % (t, corpo)


def sec(sid, n, titulo, ganho, corpo):
    return ('<div class="sec" id="%s">\n<h3><span class="n">%s</span>%s<a class="volta" href="#menu">↑ menu</a></h3>\n'
            '<p class="ganho">%s</p>\n%s\n</div>\n' % (sid, n, titulo, ganho, corpo))


def cap(pid, letra, titulo, sub, corpo, ancora=None):
    a = '<span class="ancora" id="%s"></span>\n' % ancora if ancora else ""
    return ('%s<section class="cap" id="parte-%s" aria-labelledby="parte-%s-t">\n<div class="cap-cab"><span class="cap-letra">Parte %s</span>'
            '<h2 id="parte-%s-t">%s</h2><p>%s</p></div>\n%s</section>\n' % (a, pid, pid, letra, pid, titulo, sub, corpo))


def tabela(cab, linhas):
    s = '<div class="tabela"><table><thead><tr>%s</tr></thead><tbody>' % "".join("<th>%s</th>" % c for c in cab)
    for l in linhas:
        s += "<tr>%s</tr>" % "".join("<td>%s</td>" % c for c in l)
    return s + "</tbody></table></div>"


# ---------------------------------------------------------------- Parte A
A = cap("a", "A", "Entender", "Antes de colar qualquer coisa: o que você está instalando, onde fica e o que sai da sua máquina.",
    sec("a1", "A1", "O que é o Squad Turbo", "Um time de agentes de marketing dentro do seu Claude, que trabalha nos seus arquivos.",
        "<p>O Squad Turbo é um pacote para o <strong>Claude Code</strong> (a aba Code do app do Claude). Ele não é um aplicativo novo: ensina o Claude da sua conta a trabalhar como uma equipe de marketing digital. Você conversa com o <code>@estrategista-turbo</code>, ele entende o pedido e passa o trabalho para especialistas (copy, design, tráfego, conteúdo, vendas, CS), que usam receitas prontas, as <strong>skills</strong>.</p>"
        "<p>Foi feito para o método de Lançamento Pago Semanal (LPSG), e as skills servem para qualquer negócio digital: página de vendas, VSL, criativos, carrossel, cortes verticais, campanhas de Meta Ads, mensageria, dashboards.</p>"
        '<div class="cartoes"><div class="cartao"><span class="cartao-t">Ele faz sozinho</span><p>Ler e escrever arquivos na pasta do projeto, pesquisar, montar páginas, copy e criativos, e conferir o próprio trabalho antes de entregar.</p></div>'
        '<div class="cartao"><span class="cartao-t">Sempre volta pra você</span><p>Gastar dinheiro, publicar, mandar mensagem ou e-mail pra fora, conectar uma conta sua e aprovar qualquer peça que vai pro ar.</p></div></div>')
    + sec("a2", "A2", "O que se instala", "A lista do que o instalador põe no seu computador.",
        tabela(("Peça", "O que é, na prática"), [
            ("Skills (%s)" % NS, "Receitas prontas em <code>~/.claude/skills</code>: as 10 fases do LPSG, copy, VSL, páginas, criativos, carrossel, cortes verticais e o visual deles, motion, Meta Ads, dashboards, CRM."),
            ("Agentes (%s)" % NA, "Especialistas em <code>~/.claude/agents</code>, chamados com <code>@nome</code>. A lista está em <a href=\"#c2\">C2</a>."),
            ("Squad-core", "Modelos, checklists e frameworks em <code>~/.claude/squads/squad-turbo</code>, usados pelo pesquisador."),
            ("Programas de vídeo", "ffmpeg e yt-dlp, para as skills que assistem, cortam e montam vídeo."),
            ("Opcionais", "Transcrição local sem chave de API, Scrapling (ler páginas da web), auditoria visual anti-IA. O Claude pergunta um por um (<a href=\"#b2\">B2</a>)."),
            ("Fica de fora", "WhatsApp, e-mail marketing e automação rodam num servidor (VPS), não no computador. Têm instalador próprio no repositório."),
        ]))
    + sec("a3", "A3", "O que você precisa ter", "A lista de compras e o tempo de cada parte.",
        "<ul class=\"lista\"><li>Uma assinatura do Claude que inclua o Claude Code (Pro ou Max).</li>"
        "<li>Um <strong>Mac</strong>, ou um <strong>Windows 10 ou 11</strong> com o Ubuntu por dentro (WSL2). No Windows o squad roda dentro do Ubuntu; o passo a passo está em <a href=\"#windows\">B1, aba Windows</a>.</li>"
        "<li>Uns 2 GB livres para o básico. Os opcionais pesados (até ~5 GB) são escolha sua.</li></ul>"
        + tabela(("Parte", "Quanto leva"), [("Mac", "uns 15 minutos; você só abre o Claude, cola a mensagem e aprova"),
                                            ("Windows", "uns 30 minutos, com um reinício no começo (o Ubuntu e o Claude Code entram antes da mensagem)"),
                                            ("Opcionais", "de 5 a 20 minutos cada, conforme a internet")]))
    + sec("a4", "A4", "O que sai da sua máquina", "Nada do seu trabalho vai pra Turbo.",
        "<p>O squad é baixado de um repositório <strong>público</strong> no GitHub. Ele não cria conta, não manda sinal de vida e não lê nada fora das pastas em que você trabalha. O que você produz fica no seu computador e na sua conta do Claude.</p>"
        "<p>Os opcionais de terceiros (stack Picasso, skills de outros autores) vêm direto da fonte de cada autor, com a licença dele. A lista, com autor e licença, está em <a href=\"%s/blob/main/99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md\">SKILLS-DE-TERCEIRO.md</a>.</p>" % REPO),
    ancora="entender")

# ---------------------------------------------------------------- Parte B
MAC = ('<div class="abertura"><p class="ola">Oi! No Mac são 3 passos.</p><p>Tudo acontece no <strong>app do Claude</strong>. Você não precisa abrir o Terminal, a não ser que o Claude peça pra você rodar uma linha que pede a senha do Mac.</p>'
       + aviso("Vai ter comando pra aprovar. É normal.", "<p>Durante a instalação o Claude mostra cada comando antes de rodar e pede a sua aprovação. Aprove e siga: faz parte da instalação, não é erro e não é pra fechar nada.</p><p>Se ele pedir pra você rodar uma linha no Terminal (só acontece com o que pede a senha do Mac, como a Homebrew), abra o Terminal com <kbd>Cmd</kbd> + <kbd>Espaço</kbd>, digite Terminal, aperte <kbd>Enter</kbd>, cole a linha com <kbd>Cmd</kbd> + <kbd>V</kbd> e aperte <kbd>Enter</kbd>. Depois escreva no chat que rodou. Nunca mande senha pro Claude.</p>")
       + "</div>\n"
       + passo("mac-1", "1", "App do Claude", "Abrir o Claude na aba Code",
               '<ol class="lista"><li>Não tem o app? Baixe em <a href="https://claude.ai/download">claude.ai/download</a>, arraste o Claude pra pasta Aplicativos e abra.</li>'
               "<li>Entre na sua conta do Claude.</li><li>Clique em <strong>Code</strong> e comece uma sessão nova.</li>"
               "<li>Quando ele pedir a pasta de trabalho, escolha a sua <strong>pasta pessoal</strong> (a da casinha, com o seu nome).</li></ol>"
               + prova("A sessão do Code aberta, com o nome da sua pasta pessoal em cima da caixa de mensagem."))
       + passo("mac-2", "2", "App do Claude", "Colar a mensagem de instalação",
               "<p>Copie a mensagem abaixo pelo botão e cole na caixa de mensagem do Claude. Ele faz o resto e vai te explicando.</p>"
               + cmd("Cole na caixa de mensagem do Claude", INSTALAR, rotulo="Mensagem pro Claude", mensagem=True)
               + prova("No fim, o Claude mostra a saída do <code>--conferir</code> terminando em <strong>SQUAD OK: %s skills · %s agentes · squad-core</strong>." % (NS, NA))
               + momentos(
                   ("O Claude pede pra aprovar um comando", "Antes de rodar algo, o Claude mostra o comando e pergunta se pode.", "Leia a explicação dele e aprove. Se não entendeu o que o comando faz, pergunte antes: ele explica.", "Acontece várias vezes. O Claude fica parado até você responder."),
                   ("As ferramentas de linha de comando do Mac", "Uma janela do macOS dizendo que o comando precisa das ferramentas de desenvolvedor de linha de comando, com os botões Instalar, Agora Não e Obter o Xcode.", "Clique em <strong>Instalar</strong> e aceite a licença. Não precisa do Xcode inteiro. Quando terminar, escreva no chat que terminou.", "Alguns minutos. A barra às vezes fica parada um tempo: espere."),
                   ("A Homebrew pede a senha do Mac", "O Claude mostra uma linha começando com <code>/bin/bash -c</code> e pede pra você rodar no Terminal. Depois de colar, o Terminal escreve <code>Password:</code>.", "Digite a senha do seu Mac e aperte <kbd>Enter</kbd>. Enquanto você digita, nada aparece, nem bolinha: é normal. No fim ela imprime um bloco <strong>Next steps</strong>: copie esse bloco pro Claude, que ele roda as linhas.", "De 3 a 10 minutos. Mac Intel? Veja <a href=\"#e2\">E2</a> antes."),
               ))
       + passo("mac-3", "3", "App do Claude", "Fechar, abrir e testar",
               "<p>Com o <strong>SQUAD OK</strong> na tela, feche o app do Claude (<kbd>Cmd</kbd> + <kbd>Q</kbd>) e abra de novo. Skills e agentes só carregam numa sessão nova. Abra uma sessão nova no Code, na mesma pasta, e mande:</p>"
               + cmd("Cole na caixa de mensagem do Claude", "@estrategista-turbo, o que você faz e por onde eu começo?", rotulo="Teste")
               + prova("O @estrategista-turbo se apresenta e pergunta sobre o seu negócio ou o seu projeto.")))

WIN = ('<div class="abertura"><p class="ola">Oi! No Windows são 5 passos.</p><p>O squad não roda direto no Windows. Ele roda num Ubuntu (um Linux) que o próprio Windows instala por dentro, o WSL. Os passos 1 a 4 preparam esse Ubuntu e abrem o Claude Code dentro dele; a partir do passo 4 é o Claude que faz o resto. O app Claude do Windows não serve pro squad: ele não enxerga o Ubuntu.</p>'
       '<div class="dicas"><div class="dica"><span class="dica-t">Colar na janela do Ubuntu</span><p>Clique com o botão direito dentro dela (ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>) e aperte <kbd>Enter</kbd>.</p></div>'
       '<div class="dica"><span class="dica-t">Copiar da janela do Ubuntu</span><p>Selecione com o mouse e aperte <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>. O <kbd>Ctrl</kbd> + <kbd>C</kbd> sozinho interrompe o comando que está rodando.</p></div></div>'
       + aviso("A sua senha é só sua.", "<p>Algumas linhas pedem a senha do Ubuntu (as que começam com <code>sudo</code>). Quem digita é você, na janela do Ubuntu. Enquanto você digita, nada aparece: é normal. Ninguém da Turbo nem o Claude vai pedir essa senha.</p>")
       + "</div>\n"
       + passo("win-1", "1", "PowerShell como administrador", "Instalar o Ubuntu",
               "<p>Menu Iniciar, digite PowerShell, clique com o botão direito e escolha <strong>Executar como administrador</strong>. Clique em <strong>Sim</strong> quando o Windows perguntar.</p>"
               + cmd("Cole no PowerShell (administrador)", "wsl --install -d Ubuntu")
               + "<p>Quando terminar, reinicie o Windows se ele pedir. Depois, de volta no PowerShell:</p>"
               + cmd("Cole no PowerShell (administrador)", "wsl -l -v", rotulo="Prova")
               + prova("Tem que aparecer <strong>Ubuntu</strong> com o número 2 na coluna VERSION."))
       + passo("win-2", "2", "Ubuntu", "Criar o seu usuário do Ubuntu",
               "<p>Abra o Ubuntu pelo menu Iniciar. Na primeira vez ele pede um nome de usuário (só letras minúsculas, sem espaço e sem acento) e uma senha. Guarde a senha: é a do <code>sudo</code> daqui pra frente.</p>"
               + cmd("Cole na janela do Ubuntu", "echo $HOME", rotulo="Prova")
               + prova("Tem que aparecer <code>/home/</code> seguido do nome que você escolheu."))
       + passo("win-3", "3", "Ubuntu · pede a senha · 3 a 5 minutos", "Programas e o Claude Code",
               "<p>Cole uma linha de cada vez e espere cada uma terminar.</p>"
               + cmd("Cole na janela do Ubuntu", "sudo apt-get update && sudo apt-get install -y git curl unzip xz-utils python3 python3-venv pipx ffmpeg", rotulo="Linha 1")
               + cmd("Cole na janela do Ubuntu", 'A="$(uname -m)"; case "$A" in x86_64) A=x64;; aarch64) A=arm64;; esac; cd /tmp && curl -fsSLO https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt && F="$(grep -o "node-v22\\.[0-9.]*-linux-$A\\.tar\\.xz" SHASUMS256.txt | head -1)" && curl -fsSLO "https://nodejs.org/dist/latest-v22.x/$F" && grep " $F\\$" SHASUMS256.txt | sha256sum -c - && sudo tar -xJf "$F" -C /usr/local --strip-components=1 --no-same-owner && cd ~ && node -v', rotulo="Linha 2", longo=True)
               + cmd("Cole na janela do Ubuntu", "sudo npm install -g @anthropic-ai/claude-code && claude --version", rotulo="Linha 3")
               + prova("A linha 2 termina com uma versão que começa com <strong>v22</strong>. A linha 3 termina com a versão do Claude Code."))
       + passo("win-4", "4", "Ubuntu · Claude Code", "Entrar na conta e colar a mensagem",
               cmd("Cole na janela do Ubuntu", "claude")
               + "<p>Dentro dele, digite <code>/login</code> e aperte <kbd>Enter</kbd>. Ele mostra um link: se o navegador não abrir sozinho, copie o link e abra no navegador do Windows. Entre na sua conta, clique em Autorizar e, se ele pedir, cole o código de volta na janela do Ubuntu. Depois digite <code>/exit</code>.</p>"
               + cmd("Cole na janela do Ubuntu", 'claude -p "responda só OK"', rotulo="Prova")
               + prova("Tem que responder <strong>OK</strong>. Então abra o Claude na sua pasta:")
               + cmd("Cole na janela do Ubuntu", "cd ~ && claude")
               + "<p>E cole a mensagem abaixo, inteira, na caixa do Claude Code. Os comandos com <code>sudo</code> que o Claude mostrar você roda numa segunda janela do Ubuntu (menu Iniciar, Ubuntu).</p>"
               + cmd("Cole no Claude Code, na janela do Ubuntu", INSTALAR, rotulo="Mensagem pro Claude", mensagem=True)
               + prova("No fim, o Claude mostra a saída do <code>--conferir</code> terminando em <strong>SQUAD OK: %s skills · %s agentes · squad-core</strong>." % (NS, NA))
               + momentos(("O Claude Code pergunta antes de rodar um comando", "Na janela do Ubuntu, antes de um comando, ele pergunta <em>Do you want to proceed?</em> com as opções 1. Yes, 2. Yes, and don't ask again e 3. No.", "Escolha <strong>1. Yes</strong> e aperte <kbd>Enter</kbd>, ou a 2 pra ele não perguntar de novo aquele tipo de comando naquela pasta. Use as setas pra mudar a opção.", "Fica parado até você escolher.")))
       + passo("win-5", "5", "Ubuntu · Claude Code", "Fechar, abrir e testar",
               "<p>Com o <strong>SQUAD OK</strong> na tela, digite <code>/exit</code>, rode <code>claude</code> de novo na mesma janela e mande:</p>"
               + cmd("Cole no Claude Code, na janela do Ubuntu", "@estrategista-turbo, o que você faz e por onde eu começo?", rotulo="Teste")
               + prova("O @estrategista-turbo se apresenta e pergunta sobre o seu negócio ou o seu projeto.")))

B = cap("b", "B", "Instalar", "Escolha o seu computador e siga na ordem. No Mac, você só abre o Claude e cola uma mensagem; no Windows, antes, o Ubuntu e o Claude Code entram por dentro do Windows.",
    sec("b0", "B0", "Antes de começar", "Uma regra só: o Claude faz, você aprova.",
        "<p>A mensagem de instalação diz ao Claude o que fazer, em ordem, e o que ele nunca pode fazer: pedir senha pelo chat, apagar o que já existe, comprar ou conectar serviço pago. Ele explica cada passo antes de rodar e para quando precisa de você.</p>"
        + aviso("Já tinha uma versão antiga?", "<p>Cole a mesma mensagem: ela atualiza a pasta que já existe. Se a pasta for de antes de 01/10/2026 (versão 8.1 ou anterior), o histórico do repositório mudou e o Claude renomeia a pasta antiga e baixa de novo, sem apagar nada. Pra só atualizar, use a mensagem de <a href=\"#c3\">C3</a>.</p>"))
    + '</section>\n</div>\n\n<div class="b-abas-wrap" id="b1">\n<nav class="abas" aria-label="Sistema do computador">\n  <div class="miolo" role="tablist" aria-label="Escolha o seu computador">\n'
      '    <span class="abas-t" aria-hidden="true">Seu computador</span>\n'
      '    <button class="aba" role="tab" id="aba-mac" aria-controls="painel-mac" aria-selected="true" tabindex="0">Mac</button>\n'
      '    <button class="aba" role="tab" id="aba-win" aria-controls="painel-win" aria-selected="false" tabindex="-1">Windows</button>\n  </div>\n</nav>\n'
      '<span class="ancora" id="mac"></span><div class="painel" id="painel-mac" role="tabpanel" aria-labelledby="aba-mac"><div class="miolo">\n' + MAC + '</div></div>\n'
      '<span class="ancora" id="windows"></span><div class="painel" id="painel-win" role="tabpanel" aria-labelledby="aba-win" hidden><div class="miolo">\n' + WIN + '</div></div>\n'
      '</div>\n\n<div class="miolo">\n<section class="cap" aria-label="Parte B, continuação" style="border-top:0;padding-top:0">\n'
    + sec("b2", "B2", "Os opcionais", "O Claude pergunta um por um; \"não\" nunca é a resposta errada.",
        tabela(("Opcional", "Pra quê", "Tamanho"), [
            ("Transcrição local", "A skill <code>watch</code> transcreve vídeo sem chave de API; o áudio não sai da sua máquina.", "~220 MB + ~3,5 GB no 1º uso"),
            ("Scrapling", "O Claude lê página de concorrente, landing e anúncio direto, sem você escrever script.", "~1,5 GB"),
            ("Stack Picasso", "Auditoria visual anti-IA (3 skills de terceiros, pelo npx).", "pequeno"),
            ("OpenWA, Mautic, n8n", "WhatsApp, e-mail marketing e automação. Rodam num servidor (VPS), cada um com instalador próprio no repositório.", "no servidor"),
        ]) + "<p>Quer instalar um depois? Peça ao Claude: \"instala o opcional X do Squad Turbo\". O instalador pode rodar de novo quantas vezes quiser: o que você editou ele guarda numa cópia antes de trocar.</p>")
    + sec("b3", "B3", "Conferir que ficou tudo certo", "Um comando diz se está tudo no lugar.",
        cmd("Peça ao Claude pra rodar, ou rode no Terminal / Ubuntu", "bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir")
        + prova("<strong>SQUAD OK: %s skills · %s agentes · squad-core</strong>. Se aparecer <code>SQUAD INCOMPLETO</code>, as linhas com ✗ dizem o que falta: peça ao Claude pra rodar o instalador de novo." % (NS, NA))
        + "<p>O <code>--conferir</code> compara cada arquivo instalado, byte a byte, com o do pacote. <strong>✗ incompleto</strong> é arquivo que falta ou ficou vazio: quebra a skill. <strong>~ personalizado</strong> é arquivo que você editou: não é erro, e ele nunca escreve nada.</p>"
        + "<p>Linhas com · (ponto) não são erro: avisam um programa que falta pra algumas skills de vídeo. Não sabe ler uma linha? Cole a saída pro Claude e pergunte.</p>"),
    ancora=None)

# ---------------------------------------------------------------- Parte C
AGENTES = [("estrategista-turbo", "Ponto de entrada: entende o pedido, diagnostica e passa pro especialista certo."),
           ("pesquisador-turbo", "Monta a fundação do projeto (voz, avatar, oferta) a partir do seu material."),
           ("pesquisador-mercado-turbo", "Pesquisa de fora: nicho, concorrência, anúncios, objeções e tendências."),
           ("copywriter-turbo", "Toda peça de copy: página, VSL, aula, pitch, e-mail, mensageria."),
           ("revisor-copy-turbo", "Revisa a copy antes de sair: tira a cara de IA e confere promessa e compliance."),
           ("diretor-criativo-turbo", "Direção visual: identidade, páginas, criativos, slides, motion."),
           ("designer-turbo", "Executa as peças visuais: criativos, slides, carrossel, cortes e motion."),
           ("picasso-auditor-turbo", "Audita o visual antes de entregar e elimina o que tem cara de genérico."),
           ("social-turbo", "Conteúdo orgânico: Reels, stories, calendário e cortes verticais."),
           ("trafego-turbo", "Meta Ads e Google Ads: estrutura, otimização e diagnóstico de campanha."),
           ("automacao-turbo", "Automações: n8n, ManyChat e as mensagens do evento."),
           ("closer-turbo", "Vendas 1:1 e recuperação do carrinho, com script por temperatura do lead."),
           ("cs-turbo", "Pós-venda: onboarding, retenção, NPS e depoimentos.")]
assert len(AGENTES) == int(NA), ("tabela de agentes", len(AGENTES), NA)

C = cap("c", "C", "Usar no dia a dia", "O primeiro pedido, quem é quem, como atualizar e onde está o manual de uso.",
    sec("c1", "C1", "O primeiro pedido", "Comece pelo estrategista, numa pasta só do projeto.",
        "<p>Crie uma pasta pro seu projeto (por exemplo, <code>Documentos/meu-lancamento</code>), abra uma sessão do Claude nela e fale com o <code>@estrategista-turbo</code> como falaria com um sócio: o que você vende, pra quem, e o que quer fazer agora. Ele pergunta o que falta e chama os outros.</p>"
        "<p>Pedidos que funcionam bem: \"quero estruturar meu primeiro lançamento pago\", \"faz a página de vendas do meu produto de R$ 97\", \"transforma esta aula em 5 cortes verticais\", \"analisa minha campanha de Meta Ads\".</p>")
    + sec("c2", "C2", "Os %s agentes" % NA, "Quem é quem. Chame qualquer um com @nome.",
        tabela(("Agente", "O que faz"), [("<code>@%s</code>" % a, d) for a, d in AGENTES]))
    + sec("c3", "C3", "Atualizar pra versão nova", "Uma mensagem, e o Claude atualiza sem apagar o que é seu.",
        cmd("Cole na caixa de mensagem do Claude", ATUALIZAR, rotulo="Mensagem pro Claude", mensagem=True)
        + "<p>O que mudou em cada versão está no <a href=\"%s/blob/main/CHANGELOG.md\">CHANGELOG</a>.</p>" % REPO)
    + sec("c4", "C4", "Os manuais de uso", "Depois de instalado, o passo a passo do método.",
        "<ul class=\"lista\"><li><a href=\"%s/04-manual-de-uso/manual.html\">Manual de execução do LPSG</a>: as 10 fases, na ordem, com o que cada agente entrega.</li>"
        "<li><a href=\"%s#readme\">README do repositório</a>: a lista completa de skills e agentes.</li>"
        "<li><a href=\"%s/blob/main/OPERACAO.md\">OPERACAO.md</a>: como trabalhar com o squad sem se perder (verificação, falhas silenciosas, cota).</li></ul>" % (PAGES, REPO, REPO)),
    ancora="dia-a-dia")

# ---------------------------------------------------------------- Parte D, E, F
DD = cap("d", "D", "Tirar o squad", "Se quiser remover, o Claude lista antes e só apaga com o seu sim.",
    sec("d1", "D1", "Remover do computador", "Nada sai sem você ver a lista.",
        cmd("Cole na caixa de mensagem do Claude", REMOVER, rotulo="Mensagem pro Claude", mensagem=True)),
    ancora="desligar")

EE = cap("e", "E", "Quando trava", "O sintoma, o que fazer e o que nunca fazer.",
    sec("e1", "E1", "Sintoma → o que fazer", "Os tropeços mais comuns.",
        tabela(("Sintoma", "O que fazer"), [
            ("Depois de instalar, <code>@estrategista-turbo</code> não responde como agente", "A sessão é a mesma da instalação. Feche o Claude e abra de novo, numa sessão nova."),
            ("<code>git pull</code> falhou com erro de histórico", "A pasta é de antes de 01/10/2026. Peça ao Claude pra renomear a pasta antiga e clonar de novo (a mensagem de instalação já faz isso)."),
            ("<code>SQUAD INCOMPLETO</code> no --conferir", "Peça ao Claude pra rodar o instalador de novo. Se o mesmo item continuar faltando, mande a saída pra Turbo."),
            ("<code>~ personalizado</code> no --conferir", "Você (ou o Claude) editou aquele arquivo. Não é erro. Se rodar o instalador, ele guarda o seu em <code>~/.claude/squad-turbo-backups/&lt;data-hora&gt;/</code> e põe a versão do pacote; pra voltar o seu, copie de lá pro mesmo caminho dentro de <code>~/.claude/</code>."),
            ("<code>INSTALAÇÃO INCOMPLETA</code> ou <code>FALHOU — etapa</code> no instalador", "A linha diz a etapa e o arquivo. Costuma ser pasta sem permissão de escrita ou download corrompido: peça ao Claude pra baixar de novo (pull ou clone) e rodar o instalador. Nada é dado como instalado enquanto essa linha aparecer."),
            ("<code>não consegui criar a pasta de cópia</code>", "O instalador não conseguiu guardar os seus arquivos editados e parou antes de mexer em qualquer coisa. Peça ao Claude pra ver a permissão de <code>~/.claude/squad-turbo-backups</code>."),
            ("<code>command not found: brew</code> depois de instalar a Homebrew", "Faltou rodar as linhas do \"Next steps\" que a Homebrew imprimiu no fim. Cole o bloco pro Claude."),
            ("No Ubuntu, <code>claude: command not found</code>", "A linha 3 do passo 3 não terminou. Rode de novo e confira a versão."),
            ("O Claude pediu a sua senha no chat", "Não mande. Diga pra ele mostrar a linha, rode você mesmo no Terminal (Mac) ou numa segunda janela do Ubuntu (Windows)."),
        ]), )
    + sec("e2", "E2", "Mac Intel e a Homebrew", "A linha oficial não instala mais do zero em Mac Intel.",
        "<p>Como saber: maçã no canto da tela → <strong>Sobre este Mac</strong>. Se aparecer <strong>Processador</strong> com <strong>Intel</strong>, é Intel; se aparecer <strong>Chip</strong> (Apple M1, M2…), não é. Ou rode <code>uname -m</code>: <code>x86_64</code> é Intel.</p>"
        "<p>Já tem a Homebrew (<code>brew --version</code> responde)? Nada a fazer. Não tem? Desde 13/09/2026 a linha oficial para com <code>Homebrew on macOS is only supported on Apple Silicon processors!</code>. Use a versão anterior do instalador, de antes dessa mudança, no Terminal:</p>"
        + cmd("Cole no Terminal do Mac", '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/f4aa1b1ca5/install.sh)"')
        + prova("No fim aparece <strong>Installation successful!</strong> e o bloco <strong>Next steps</strong>; cole esse bloco pro Claude."))
    + sec("e3", "E3", "O que nunca fazer", "Três regras que evitam quase todo problema.",
        "<ul class=\"lista\"><li>Mandar senha, token ou código pelo chat do Claude.</li><li>Apagar pastas em <code>~/.claude</code> na mão pra \"começar do zero\": peça a <a href=\"#d1\">D1</a>, que lista antes.</li><li>Instalar skill de terceiro sem ler a licença e o que ela faz: veja <a href=\"%s/blob/main/99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md\">SKILLS-DE-TERCEIRO.md</a>.</li></ul>" % REPO),
    ancora="travou")

FF = cap("f", "F", "Ajuda", "Onde pedir ajuda, as palavras do manual e de onde ele vem.",
    sec("f1", "F1", "Onde pedir ajuda", "Primeiro o próprio Claude, depois a Turbo.",
        "<p>Cole a saída ou o print pro Claude e pergunte \"o que isso quer dizer?\", citando a seção (por exemplo, \"travei no passo 3 do Windows\"). Se não resolver, mande o print pra Turbo pelo canal de suporte da sua turma, com o número da seção.</p>"
        "<p>Achou um erro no squad? Abra uma issue em <a href=\"%s/issues\">%s/issues</a>.</p>" % (REPO, REPO.replace("https://", "")))
    + sec("f2", "F2", "Glossário", "As palavras que aparecem no caminho.",
        tabela(("Palavra", "O que é"), [
            ("Claude Code", "O Claude que trabalha nos seus arquivos e roda comandos. No Mac é a aba Code do app; no Windows, o <code>claude</code> dentro do Ubuntu."),
            ("Skill", "Uma receita pronta que o Claude carrega quando o assunto aparece."),
            ("Agente", "Um especialista com papel definido, chamado com <code>@nome</code>."),
            ("Terminal", "A janela de texto do Mac onde se roda comando. Você só usa se o Claude pedir uma linha com senha."),
            ("Homebrew", "O instalador de programas do Mac."),
            ("WSL / Ubuntu", "O Linux que o Windows instala por dentro. O squad roda nele."),
            ("sudo", "Comando que pede a senha do computador. Quem roda é sempre você."),
            ("VPS", "Um servidor alugado, ligado 24 h. Só os opcionais de WhatsApp, e-mail e automação usam."),
        ]))
    + sec("f3", "F3", "Procedência e versão", "De onde vem o que está escrito aqui.",
        "<p>Squad Turbo <strong>%s</strong> · %s skills · %s agentes. Gerado por <code>04-manual-de-uso/instalacao/gerar.py</code> a partir do <code>manual-dados.json</code> do repositório; o visual e o comportamento (copiar, abas, tema) são os do Manual do Head Turbo. Os comandos do Windows (WSL, Node 22, Claude Code) são os mesmos do manual do Head Turbo, letra por letra.</p>" % (V, NS, NA)),
    ancora=None)
FF = FF.replace('<div class="sec" id="f2">', '<span class="ancora" id="glossario"></span><div class="sec" id="f2">', 1)

SUMARIO = [("a", "A", "Entender", [("a1", "O que é o Squad Turbo"), ("a2", "O que se instala"), ("a3", "O que você precisa ter"), ("a4", "O que sai da sua máquina")]),
           ("b", "B", "Instalar", [("b0", "Antes de começar"), ("b1", "Os passos (Mac ou Windows)"), ("b2", "Os opcionais"), ("b3", "Conferir que ficou tudo certo")]),
           ("c", "C", "Usar no dia a dia", [("c1", "O primeiro pedido"), ("c2", "Os %s agentes" % NA), ("c3", "Atualizar pra versão nova"), ("c4", "Os manuais de uso")]),
           ("d", "D", "Tirar o squad", [("d1", "Remover do computador")]),
           ("e", "E", "Quando trava", [("e1", "Sintoma → o que fazer"), ("e2", "Mac Intel e a Homebrew"), ("e3", "O que nunca fazer")]),
           ("f", "F", "Ajuda", [("f1", "Onde pedir ajuda"), ("f2", "Glossário"), ("f3", "Procedência e versão")])]
sumario = "".join('<li><a class="parte" href="#parte-%s"><b>%s</b>%s</a><ol>%s</ol></li>' % (
    p, l, t, "".join('<li><a href="#%s"><span>%s</span>%s</a></li>' % (i, i.upper(), n) for i, n in itens)) for p, l, t, itens in SUMARIO)

MEDICAO = ('<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-WJ853JRV\');</script>\n'
           '<script defer data-domain="turboacademy.com.br" src="https://tp.turboacademy.com.br/tp/tp.js" data-api="https://tp.turboacademy.com.br/tp/ev"></script>\n')
LEGAL = ('<p class="legal">Turbo Academy Ltda · CNPJ 50.151.944/0001-38 · Rua São Paulo, 2590 · 4º andar · Lourdes · Belo Horizonte/MG · CEP 30.170-137<br>'
         '<a href="mailto:contato@turboacademy.com.br">contato@turboacademy.com.br</a> · <a href="https://wa.me/5531995131723">WhatsApp +55 31 99513-1723</a> · '
         '<a href="https://estrategiaturbo.com.br/politica-de-privacidade/">Política de Privacidade</a> · <a href="https://ta.turboacademy.com.br/termos-de-uso/">Termos de Uso</a><br>'
         '© 2026 Turbo Academy Ltda. Todos os direitos reservados.</p>')
DESC = "Instale o Squad Turbo %s no Claude Code colando uma mensagem só: %s skills e %s agentes de IA de marketing digital. O Claude instala, você aprova. Mac e Windows." % (V, NS, NA)


def pagina(extra_head=""):
    css = (AQUI / "casca.css").read_text(encoding="utf-8")
    js = (AQUI / "casca.js").read_text(encoding="utf-8")
    return f'''<!DOCTYPE html>
<!-- Manual de instalação do Squad Turbo {V}. GERADO por 04-manual-de-uso/instalacao/gerar.py: não edite à mão. -->
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Instalar o Squad Turbo {V} · Turbo Academy</title>
<meta name="description" content="{E(DESC)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,600..900&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<script>try{{var t=localStorage.getItem("ht-tema");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}}catch(e){{}}</script>
<style>
{css}.rodape .legal{{margin-top:14px;font-size:.85rem;line-height:1.7}}.rodape .legal a{{color:inherit}}
</style>
{MEDICAO}{extra_head}</head>
<body>

<header class="capa capa-manual" id="topo">
  <div class="miolo">
    <div class="topo-barra">
      <p class="kicker"><b>Turbo Academy</b> · Squad Turbo {V} · manual de instalação</p>
      <button type="button" class="tema-bt" id="tema-bt" aria-label="Trocar tema claro ou escuro">Tema: automático</button>
    </div>
    <h1>Squad Turbo,<br><em>instalado pelo próprio Claude.</em></h1>
    <p class="capa-sub">{NS} skills e {NA} agentes de marketing digital no seu Claude Code. Você cola uma mensagem, o Claude instala e você só aprova. Cada seção tem um número: se travar, pergunte ao Claude citando o número (por exemplo, "o que é a seção E2?").</p>
    <nav class="sumario" aria-label="Sumário"><span class="sumario-t">Sumário</span><ol>{sumario}</ol></nav>
  </div>
</header>

<div class="menu-barra" id="menu">
  <div class="miolo">
    <details class="menu-cel">
      <summary>Menu · qual é o seu caminho?</summary>
      <nav aria-label="Caminhos (celular)">
        <span class="menu-dica">Instalar</span>
        <a class="bt-cam forte" href="#mac">Mac</a>
        <a class="bt-cam forte" href="#windows">Windows</a>
        <span class="menu-dica">Depois de instalado</span>
        <a class="bt-cam" href="#dia-a-dia">Dia a dia</a>
        <a class="bt-cam" href="#c3">Atualizar</a>
        <a class="bt-cam" href="#travou">Travou?</a>
        <a class="bt-cam" href="#glossario">Glossário</a>
        <a class="bt-cam" href="#entender">Entender</a>
        <a class="bt-cam" href="#desligar">Remover</a>
        <a class="bt-cam largo" href="#topo">Sumário completo</a>
      </nav>
    </details>
    <nav class="menu-lin" aria-label="Caminhos">
      <a class="bt-cam forte" href="#mac">Mac</a>
      <a class="bt-cam forte" href="#windows">Windows</a>
      <a class="bt-cam" href="#dia-a-dia">Dia a dia</a>
      <a class="bt-cam" href="#c3">Atualizar</a>
      <a class="bt-cam" href="#travou">Travou?</a>
      <a class="bt-cam" href="#glossario">Glossário</a>
      <a class="bt-cam" href="#topo">Sumário</a>
    </nav>
  </div>
</div>

<main>
<div class="miolo">
{A}{B}{C}{DD}{EE}{FF}</div>
</main>

<footer class="rodape">
  <div class="miolo">
    <p><strong>A tela mostrou algo diferente do que o manual diz?</strong> Pare ali e cole o print pro Claude, citando o número da seção. Se não resolver, mande pra Turbo.</p>
    <p class="fonte-versao">Squad Turbo {V} · {NS} skills · {NA} agentes · versão em texto: <a href="{REPO}/blob/main/INSTALACAO-DO-ZERO.md">INSTALACAO-DO-ZERO.md</a></p>
    {LEGAL}
  </div>
</footer>
<a class="voltar-sumario" href="#menu">Menu</a>
<div id="avisos" role="status" aria-live="polite"></div>
<noscript><style>.copiar{{display:none}}.cmd-longo .cmd-texto{{max-height:none;-webkit-mask-image:none;mask-image:none}}.ver-tudo{{display:none}}.painel[hidden]{{display:block}}</style></noscript>
<script>
{js}</script>
</body>
</html>
'''


def landing_head():
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Organization", "@id": "https://turboacademy.com.br/#org", "name": "Turbo Academy", "legalName": "Turbo Academy Ltda",
         "url": "https://turboacademy.com.br/", "email": "contato@turboacademy.com.br", "telephone": "+55 31 99513-1723", "taxID": "50.151.944/0001-38",
         "address": {"@type": "PostalAddress", "streetAddress": "Rua São Paulo, 2590, 4º andar, Lourdes", "addressLocality": "Belo Horizonte",
                     "addressRegion": "MG", "postalCode": "30170-137", "addressCountry": "BR"}},
        {"@type": "WebPage", "@id": "https://ta.turboacademy.com.br/squadturbo/#pagina", "url": "https://ta.turboacademy.com.br/squadturbo/",
         "name": "Instalar o Squad Turbo %s" % V, "description": DESC, "inLanguage": "pt-BR", "publisher": {"@id": "https://turboacademy.com.br/#org"}}]}
    return ('<link rel="canonical" href="https://ta.turboacademy.com.br/squadturbo/">\n'
            '<script type="application/ld+json">%s</script>\n' % json.dumps(ld, ensure_ascii=False)
            + '<meta property="og:title" content="Squad Turbo %s">\n' % V
            + '<meta property="og:description" content="%s skills e %s agentes de IA de marketing digital no Claude Code. Cole uma mensagem: o Claude instala, você aprova.">\n' % (NS, NA)
            + '<meta property="og:type" content="website">\n<meta property="og:locale" content="pt_BR">\n<meta property="og:site_name" content="Turbo Academy">\n'
              '<meta property="og:url" content="https://ta.turboacademy.com.br/squadturbo/">\n'
              '<meta property="og:image" content="https://ta.turboacademy.com.br/squadturbo/dep/og.jpg">\n'
              '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
            + '<meta property="og:image:alt" content="Cartão do Squad Turbo %s: cole uma mensagem e o Claude instala o squad.">\n' % V
            + '<meta name="twitter:card" content="summary_large_image">\n')


def markdown():
    linhas = [f"# Instalar o Squad Turbo {V}", "",
              f"> Versão em texto do manual de instalação. A versão com botões de copiar e abas Mac/Windows está em "
              f"[ta.turboacademy.com.br/squadturbo](https://ta.turboacademy.com.br/squadturbo/) e em [{PAGES.replace('https://', '')}/instalacao-do-zero.html]({PAGES}/instalacao-do-zero.html).",
              "", f"{NS} skills e {NA} agentes de marketing digital no seu Claude Code. **Você cola uma mensagem, o Claude instala e você só aprova.** "
              "Nada de passo a passo no Terminal: a única exceção é uma linha que pede a senha do computador, que o Claude mostra e você roda.", "",
              "## O que você precisa", "", "- Assinatura do Claude que inclua o Claude Code (Pro ou Max).",
              "- Um Mac, ou um Windows 10/11 com o Ubuntu por dentro (WSL2).", "- Uns 2 GB livres para o básico.", "",
              "## Mac (3 passos)", "", "1. Abra o app do Claude ([claude.ai/download](https://claude.ai/download)), entre na conta, clique em **Code**, comece uma sessão nova e escolha a sua pasta pessoal.",
              "2. Cole a mensagem abaixo, inteira, e aprove o que o Claude pedir.", "3. Com o `SQUAD OK` na tela, feche o app (Cmd + Q), abra de novo e mande `@estrategista-turbo, o que você faz e por onde eu começo?`.", "",
              "## Windows (5 passos)", "", "1. PowerShell **como administrador**: `wsl --install -d Ubuntu`, reinicie se pedir, e confira com `wsl -l -v` (Ubuntu, versão 2).",
              "2. Abra o Ubuntu pelo menu Iniciar, crie usuário e senha. Prova: `echo $HOME` mostra `/home/<seu nome>`.",
              "3. No Ubuntu (pede a senha), uma linha de cada vez:", "", "   ```bash",
              "   sudo apt-get update && sudo apt-get install -y git curl unzip xz-utils python3 python3-venv pipx ffmpeg", "   ```", "",
              "   e as duas linhas do Node 22 e do Claude Code que estão no manual em HTML, passo 3 do Windows (`node -v` começa com v22; `claude --version` responde).",
              "4. `claude`, depois `/login`, entre na conta, `/exit`. Prova: `claude -p \"responda só OK\"` responde OK. Então `cd ~ && claude` e cole a mensagem abaixo.",
              "5. Com o `SQUAD OK`, `/exit`, `claude` de novo e mande `@estrategista-turbo, o que você faz e por onde eu começo?`.", "",
              "## A mensagem pro Claude (Mac e Windows)", "", "É uma mensagem só. Copie tudo e cole de uma vez.", "", "```text", INSTALAR, "```", "",
              "## Conferir", "", "```bash", "bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir", "```", "",
              f"Tem que terminar em `SQUAD OK: {NS} skills · {NA} agentes · squad-core`.", "",
              "## Atualizar pra versão nova", "", "```text", ATUALIZAR, "```", "",
              "## Quando trava", "", "- Agente não responde depois de instalar: feche o Claude e abra numa sessão nova.",
              "- `git pull` falhou com erro de histórico: a pasta é de antes de 01/10/2026; o Claude renomeia e clona de novo.",
              "- `SQUAD INCOMPLETO`: rode o instalador de novo. O `--conferir` compara cada arquivo byte a byte: `✗ incompleto` = falta ou vazio; `~ personalizado` = você editou (não é erro).",
              "- Arquivo seu editado: o instalador guarda uma cópia em `~/.claude/squad-turbo-backups/<data-hora>/` antes de trocar; pra voltar, copie de lá.",
              "- `INSTALAÇÃO INCOMPLETA` / `FALHOU — etapa N`: a linha diz o que falhou; baixe de novo e rode o instalador. Ele termina com erro (código diferente de zero) enquanto houver falha.",
              "- Mac Intel sem Homebrew: a linha oficial não instala mais; use `/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/f4aa1b1ca5/install.sh)\"` no Terminal.",
              "- Nunca mande senha, token ou código pelo chat do Claude.", "",
              "## Remover", "", "```text", REMOVER, "```", ""]
    return "\n".join(linhas)


def provar(doc, nome):
    ids = re.findall(r'\sid="([^"]+)"', doc)
    dup = sorted({i for i in ids if ids.count(i) > 1})
    assert not dup, (nome, "id repetido", dup)
    faltam = sorted(x for x in set(re.findall(r'href="#([^"]+)"', doc)) if x not in ids)
    assert not faltam, (nome, "âncora sem destino", faltam)
    blocos = re.findall(r'<template class="cmd-fonte">(.*?)</template><pre class="cmd-texto[^"]*" tabindex="0"><code>(.*?)</code></pre>', doc, re.S)
    assert blocos and all(a == b for a, b in blocos), (nome, "botão copia texto diferente do mostrado")
    alvos = re.findall(r'data-alvo="([^"]+)"', doc)
    assert len(alvos) == len(blocos) and all(a in ids for a in alvos), (nome, "botão sem alvo")
    assert "{" + "{" not in doc and "None" not in re.sub(r"<script.*?</script>", "", doc, flags=re.S), (nome, "marcador sobrando")
    assert doc.count(INSTALAR.split("\n")[0]) >= 2 * 2, (nome, "mensagem de instalação fora dos dois painéis")
    return len(blocos), len(set(re.findall(r'href="#([^"]+)"', doc)))


if __name__ == "__main__":
    pag = pagina()
    n_cmd, n_anc = provar(pag, "repo")
    (RAIZ / "instalacao-do-zero.html").write_text(pag, encoding="utf-8")
    (RAIZ / "INSTALACAO-DO-ZERO.md").write_text(markdown(), encoding="utf-8")
    print("instalacao-do-zero.html: %d bytes · %d blocos de copiar iguais ao texto mostrado · %d âncoras ok · versão %s · %s skills · %s agentes"
          % (len(pag.encode()), n_cmd, n_anc, V, NS, NA))
    print("INSTALACAO-DO-ZERO.md: gerado")
    if "--landing" in sys.argv:
        dst = pathlib.Path(sys.argv[sys.argv.index("--landing") + 1]) / "squadturbo" / "index.html"
        lp = pagina(landing_head())
        provar(lp, "landing")
        dst.write_text(lp, encoding="utf-8")
        print("landing: %s (%d bytes)" % (dst, len(lp.encode())))
