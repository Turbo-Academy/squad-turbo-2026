const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, TableOfContents, PageNumber, PageBreak, Header, Footer,
} = require("docx");

// ---------- paleta ----------
const NAVY = "0B1F3A";     // títulos
const TEAL = "0E7C86";     // destaque
const BLUE = "1E5BA8";     // h2
const LIGHT = "EAF2F8";    // fundo célula clara
const TEALBG = "DDF0F1";   // fundo célula teal
const WARNBG = "FCEFD6";   // fundo aviso
const CMDBG = "11261F";    // fundo box de comando (escuro)
const GREY = "CCCCCC";

const border = { style: BorderStyle.SINGLE, size: 1, color: GREY };
const borders = { top: border, bottom: border, left: border, right: border };
const CW = 9360; // content width US Letter, margens 1"

// ---------- helpers ----------
const t = (text, o = {}) => new TextRun({ text, font: "Arial", ...o });
const p = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], spacing: { after: 120, ...(o.spacing || {}) }, ...o });
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(text, { bold: true, color: NAVY, size: 30 })], spacing: { before: 280, after: 160 } });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(text, { bold: true, color: BLUE, size: 25 })], spacing: { before: 220, after: 120 } });
const h3 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [t(text, { bold: true, color: TEAL, size: 22 })], spacing: { before: 160, after: 80 } });
const bullet = (text, runs) => new Paragraph({ numbering: { reference: "b", level: 0 }, spacing: { after: 60 }, children: runs || [t(text)] });
const num = (runs) => new Paragraph({ numbering: { reference: "n", level: 0 }, spacing: { after: 60 }, children: Array.isArray(runs) ? runs : [t(runs)] });
const rule = () => new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } }, spacing: { after: 160 } });

// caixa de comando pro Claude (fundo escuro)
function cmdBox(lines, label = "Cole isto no Claude:") {
  const rows = [];
  rows.push(new TableRow({ children: [new TableCell({
    borders, width: { size: CW, type: WidthType.DXA },
    shading: { fill: TEAL, type: ShadingType.CLEAR },
    margins: { top: 60, bottom: 60, left: 160, right: 160 },
    children: [p(t(label, { bold: true, color: "FFFFFF", size: 19 }), { spacing: { after: 0 } })],
  })] }));
  rows.push(new TableRow({ children: [new TableCell({
    borders, width: { size: CW, type: WidthType.DXA },
    shading: { fill: CMDBG, type: ShadingType.CLEAR },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: lines.map((l, i) => p(t(l, { font: "Consolas", color: "D7F5E9", size: 19 }), { spacing: { after: i === lines.length - 1 ? 0 : 60 } })),
  })] }));
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [CW], rows });
}

// caixa de aviso/dica
function calloutBox(title, lines, fill = WARNBG, titleColor = "8A5A00") {
  return new Table({
    width: { size: CW, type: WidthType.DXA }, columnWidths: [CW],
    rows: [new TableRow({ children: [new TableCell({
      borders, width: { size: CW, type: WidthType.DXA },
      shading: { fill, type: ShadingType.CLEAR },
      margins: { top: 100, bottom: 100, left: 160, right: 160 },
      children: [
        p(t(title, { bold: true, color: titleColor, size: 20 }), { spacing: { after: 80 } }),
        ...lines.map((l, i) => p(t(l, { size: 20 }), { spacing: { after: i === lines.length - 1 ? 0 : 60 } })),
      ],
    })] })],
  });
}

// tabela genérica: headers (array) + rows (array de arrays)
function table(headers, rows, widths) {
  const w = widths || headers.map(() => Math.floor(CW / headers.length));
  const headRow = new TableRow({ tableHeader: true, children: headers.map((hd, i) => new TableCell({
    borders, width: { size: w[i], type: WidthType.DXA },
    shading: { fill: NAVY, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [p(t(hd, { bold: true, color: "FFFFFF", size: 19 }), { spacing: { after: 0 } })],
  })) });
  const bodyRows = rows.map((r, ri) => new TableRow({ children: r.map((cell, i) => new TableCell({
    borders, width: { size: w[i], type: WidthType.DXA },
    shading: { fill: ri % 2 ? LIGHT : "FFFFFF", type: ShadingType.CLEAR },
    margins: { top: 70, bottom: 70, left: 120, right: 120 },
    children: (Array.isArray(cell) ? cell : [cell]).map((c, ci, arr) => p(
      Array.isArray(c) ? c : t(c, { size: 19 }), { spacing: { after: ci === arr.length - 1 ? 0 : 40 } })),
  })) }));
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: w, rows: [headRow, ...bodyRows] });
}

const spacer = (after = 120) => new Paragraph({ spacing: { after }, children: [t("")] });

// ============================================================
// CONTEÚDO
// ============================================================
const children = [];

// ---------- CAPA ----------
children.push(new Paragraph({ spacing: { before: 1800, after: 0 }, alignment: AlignmentType.CENTER, children: [t("PASSO A PASSO", { bold: true, color: TEAL, size: 30 })] }));
children.push(new Paragraph({ spacing: { before: 120, after: 0 }, alignment: AlignmentType.CENTER, children: [t("Lançamento Pago Semanal Gravado", { bold: true, color: NAVY, size: 52 })] }));
children.push(new Paragraph({ spacing: { before: 80, after: 0 }, alignment: AlignmentType.CENTER, children: [t("LPSG · do zero à primeira venda", { color: BLUE, size: 26 })] }));
children.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 8 } }, spacing: { before: 360, after: 360 }, alignment: AlignmentType.CENTER, children: [t("")] }));
children.push(new Paragraph({ spacing: { before: 120, after: 0 }, alignment: AlignmentType.CENTER, children: [t("Guia do aluno · o que fazer em cada etapa, inclusive no Claude", { italics: true, color: "555555", size: 22 })] }));
children.push(new Paragraph({ spacing: { before: 700, after: 0 }, alignment: AlignmentType.CENTER, children: [t("Turbo Academy · Método LPSG 5.1", { color: "777777", size: 18 })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- SUMÁRIO ----------
children.push(h1("Sumário"));
children.push(new TableOfContents("Sumário", { hyperlink: true, headingStyleRange: "1-2" }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- INTRO ----------
children.push(h1("O que é o LPSG"));
children.push(p([t("O "), t("Lançamento Pago Semanal Gravado (LPSG)", { bold: true }), t(" é um método de lançamento perpétuo onde a venda do ingresso (R$ 47 a 97) paga o tráfego ANTES do evento começar. O lucro real vem do produto principal, vendido no pitch de domingo. Você roda isso toda semana, com um time enxuto e o Claude executando as peças.")]));
children.push(h3("O resultado que você constrói"));
children.push(bullet("Página de venda do ingresso (5 variações no ar)"));
children.push(bullet("Ficha de interesse que qualifica leads (HOT / WARM / COLD)"));
children.push(bullet("15 criativos rodando no Meta Ads"));
children.push(bullet("Mensageria automatizada (WhatsApp) com disciplina anti-spam"));
children.push(bullet("Evento de 7 dias + carrinho + pós-venda estruturados"));
children.push(spacer());
children.push(calloutBox("A semana do evento em uma linha", [
  "Seg a Sex 7h: 5 aulas técnicas · Sáb 10h: tira-dúvidas · Dom 20h: pitch (aula final).",
  "Segunda seguinte: carrinho abre (ficha entra 6h50 · geral 7h) e fecha na sexta 23h59.",
], TEALBG, TEAL));

// ---------- COMO LER ----------
children.push(h1("Como ler este guia · 3 atores"));
children.push(p("Cada etapa envolve até três atores. Saber quem faz o quê evita travar:"));
children.push(table(
  ["Ator", "O que faz", "Como aparece aqui"],
  [
    [[t("VOCÊ ", { bold: true }), t("(aluno)")], "Cria contas, libera acessos, aprova decisões, grava as aulas, apresenta o evento", [t("AÇÃO SUA", { bold: true, color: "B23A00" })]],
    [[t("Claude", { bold: true })], "Estrutura aulas, escreve copy, monta páginas, gera automações e dashboard", [t("Caixa escura ", {}), t("“Cole isto no Claude”", { italics: true })]],
    [[t("Ferramentas", { bold: true })], "Meta, Hotmart, Vercel, n8n, ManyChat executam o que foi configurado", [t("CONFIG", { bold: true, color: BLUE })]],
  ],
  [1900, 4760, 2700],
));
children.push(spacer());
children.push(calloutBox("Regra de ouro", [
  "O Claude conduz, você aprova. Nunca pule o gate inicial (Etapa 2). Cada fase depende da anterior — siga a ordem.",
], WARNBG, "8A5A00"));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- ETAPA 0 ----------
children.push(h1("Etapa 0 · Pré-requisitos (antes de tudo)"));
children.push(p([t("AÇÃO SUA · 4 a 8 horas. ", { bold: true, color: "B23A00" }), t("São as contas e acessos que precisam existir antes de o Claude começar. Sem isso, a execução trava no meio.")]));
children.push(h3("Contas a criar"));
children.push(table(
  ["Conta", "Para quê", "Tempo"],
  [
    ["Domínio próprio + Cloudflare", "Páginas, ficha e dashboard moram em subdomínios seus", "45 min"],
    ["Conta Google (+ Service Account)", "Planilhas (CRM), Drive, Calendar do CS", "25 min"],
    ["Meta Business + Ad Account + Pixel + CAPI Token", "Rodar anúncios e rastrear conversões", "2-3 h"],
    ["WABA (WhatsApp Business API)", "Mensageria automatizada do evento", "1-2 h"],
    ["Hotmart Pro (2 produtos: ingresso + premium)", "Processar vendas, pixel e webhooks", "1 h"],
    ["Vercel", "Hospedar páginas e dashboard", "20 min"],
    ["n8n (cloud ou self-hosted)", "Rodar os 14 workflows de automação", "5-60 min"],
    ["ManyChat Pro", "Disparar mensagens via WhatsApp e gerenciar tags", "30 min"],
    ["Plataforma de aulas (Hotmart Club)", "Entregar o programa principal pós-compra", "30 min"],
    ["Comunidade (Discord ou grupo WhatsApp)", "Casa dos alunos do produto principal", "30 min"],
  ],
  [3500, 4360, 1500],
));
children.push(spacer());
children.push(calloutBox("Anote tudo num lugar seguro", [
  "Ao terminar, você terá IDs e tokens (Pixel, CAPI, HOTTOK, Phone Number ID, etc). Guarde tokens num gerenciador de senhas. Você vai colar esses dados no cadastro (Etapa 1).",
  "Travou em algo técnico? Peça ao Claude: “como criar service account Google, passo a passo”.",
], TEALBG, TEAL));

// ---------- ETAPA 1 ----------
children.push(h1("Etapa 1 · Cadastro do projeto (intake)"));
children.push(p([t("AÇÃO SUA · 30 a 60 min. ", { bold: true, color: "B23A00" }), t("Preencha UM formulário com todas as informações do seu lançamento: expert, avatar, nicho, oferta, ticket, cores, links e os dados técnicos que você anotou na Etapa 0.")]));
children.push(num("Abra o manual interativo (arquivo manual.html) no navegador — ele tem o formulário com salvamento automático."));
children.push(num("Preencha os 10 blocos do cadastro."));
children.push(num([t("No fim, ele gera um "), t("YAML", { bold: true }), t(" pronto. Copie esse YAML — é o que alimenta tudo.")]));
children.push(spacer());
children.push(calloutBox("Por que isso importa", [
  "O cadastro é a fonte da verdade. Preenchido com cuidado uma vez, alimenta as 10 fases. Preenchido pela metade, a execução para no meio pedindo dados.",
], WARNBG, "8A5A00"));

// ---------- ETAPA 2 ----------
children.push(h1("Etapa 2 · Gate inicial (pesquisa + briefing) — obrigatório"));
children.push(p([t("Esta é a etapa que "), t("não pode ser pulada", { bold: true }), t(". Antes de qualquer página ou criativo, o Claude faz pesquisa de mercado e gera um "), t("briefing pra você aprovar", { bold: true }), t(". Pular isso gera 5 a 10 horas de retrabalho depois.")]));
children.push(h3("O que acontece, em ordem"));
children.push(num([t("Pesquisa interna ", { bold: true }), t("— o Claude organiza voz, avatar e oferta a partir do seu material.")]));
children.push(num([t("Pesquisa de mercado ", { bold: true }), t("— concorrência, benchmarks, objeções e oportunidades do nicho.")]));
children.push(num([t("Briefing ", { bold: true }), t("— tudo vira UM documento (.docx + Google Docs) que você lê de uma vez.")]));
children.push(num([t("Você aprova ", { bold: true }), t("— lê, comenta em modo de revisão e marca: aprovo / aprovo com ajustes / não aprovo.")]));
children.push(num([t("Só então ", { bold: true }), t("começam as 10 fases.")]));
children.push(spacer());
children.push(cmdBox([
  "@lpsg-master crie meu LPSG.",
  "",
  "Aqui está meu cadastro:",
  "[cole o YAML gerado na Etapa 1]",
  "",
  "Quero que voce:",
  "1. Rode o gate inicial: pesquisa + briefing pra eu aprovar",
  "2. PAUSE e aguarde minha aprovacao do briefing",
  "3. So entao execute as 10 fases na ordem",
]));
children.push(spacer());
children.push(calloutBox("O que você faz aqui", [
  "1) Recebe o link do briefing (Google Docs). 2) Lê com calma. 3) Marca alterações em modo de sugestão. 4) Escolhe uma das 3 opções de aprovação. 5) Avisa o Claude: “Briefing aprovado, pode seguir a Fase 1”.",
], TEALBG, TEAL));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- ETAPA 3: AS 10 FASES ----------
children.push(h1("Etapa 3 · As 10 fases de construção"));
children.push(p([t("Depois do briefing aprovado, o Claude executa as 10 fases na ordem abaixo, "), t("uma de cada vez", { bold: true }), t(", pedindo sua confirmação ao fim de cada uma. Você aprova o conteúdo e faz as ações humanas (gravar, subir foto, conectar domínio).")]));
children.push(table(
  ["#", "Fase", "O que o Claude entrega", "Sua ação"],
  [
    ["1", "Estrutura de aulas", "6 aulas (5+1) com escada de crenças. Aula 4 = pré-pitch.", "Revisar e gravar as aulas"],
    ["2", "Mensageria", "Mensagens do evento (cap 4+4) + templates Utility pra WhatsApp", "Submeter templates na Meta"],
    ["3", "Oferta", "Stack de valor, bônus tsunami, dupla garantia", "Aprovar a oferta"],
    ["4", "Criativos", "15 criativos (5 vídeos + 5 estáticos + 5 carrosséis)", "Gravar os 5 vídeos"],
    ["5", "Páginas", "5 variações de página + ficha de interesse", "Subir foto e depoimentos"],
    ["6", "Tráfego", "Campanha Meta Ads (ASC) + análise automática", "Aprovar e ativar budget"],
    ["7", "Automações", "14 workflows n8n + ManyChat + webhook Hotmart", "Conectar contas/tokens"],
    ["8", "Dashboard", "Painel ao vivo com métricas do lançamento", "Conferir os números"],
    ["9", "Operação", "Papéis do time (RACI) + rotinas + SOPs", "Definir quem faz o quê"],
    ["10", "Pós-venda (CS)", "Onboarding 90 dias, NPS, prova social", "Rodar após primeiras vendas"],
  ],
  [500, 1900, 4360, 2600],
));
children.push(spacer());
children.push(calloutBox("Comando padrão entre fases", [
  "Ao fim de cada fase o Claude pergunta “posso continuar?”. Você responde “sim” ou “pausar”. Para retomar depois: “@lpsg-master continue da Fase X”.",
], TEALBG, TEAL));
children.push(spacer());

children.push(h3("Detalhe das fases que pedem mais de você"));
children.push(p([t("Fase 1 (aulas): ", { bold: true }), t("o Claude entrega o roteiro das 6 aulas. A "), t("Aula 4 (quinta) é o pré-pitch", { bold: true }), t(" — 100% sobre o produto, criando desejo, sem falar preço nem bônus. Ela abre a ficha de interesse e avisa que: o carrinho abre na segunda (ficha entra 6h50, geral 7h) e que domingo 20h tem a revelação de preço e bônus. Você grava as aulas (maratona no dia 5).")]));
children.push(p([t("Fase 2 (mensageria): ", { bold: true }), t("máximo 4 mensagens na API + 4 no grupo por dia. Sem repescagem, sem trocar o nome do grupo. Você submete os templates na Meta (aprovação leva 1 a 3 dias).")]));
children.push(p([t("Fase 4 (criativos): ", { bold: true }), t("o Claude entrega os roteiros; você grava os 5 vídeos (vertical, microfone de lapela, sem logo nos 3 primeiros segundos).")]));
children.push(p([t("Fase 5 (páginas): ", { bold: true }), t("você sobe a foto profissional do expert e 6 depoimentos reais com autorização.")]));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- ETAPA 4: SEMANA DO EVENTO ----------
children.push(h1("Etapa 4 · A semana do evento (7 dias)"));
children.push(p([t("Com tudo no ar, o evento roda. Você (ou o expert) apresenta. A mensageria dispara sozinha. ", {}), t("A coreografia do pitch é sagrada:", { bold: true })]));
children.push(table(
  ["Dia / hora", "O que acontece", "O que VOCÊ faz"],
  [
    [[t("Seg 7h", { bold: true })], "Aula 1 — Fundamentação", "Apresenta e responde no chat"],
    [[t("Ter 7h", { bold: true })], "Aula 2 — Aprofundamento", "Apresenta"],
    [[t("Qua 7h", { bold: true })], "Aula 3 — Marco de resultado (“já valeu”)", "Apresenta"],
    [[t("Qui 7h", { bold: true })], [t("Aula 4 — PRÉ-PITCH 100% produto. ", { bold: true }), t("Apresenta o produto, cria desejo, abre a ficha. Sem preço/bônus.")], "Apresenta + abre a ficha"],
    [[t("Sex 7h", { bold: true })], "Aula 5 — Conclusão técnica + lembrete da ficha (NÃO é pré-pitch)", "Apresenta"],
    [[t("Sáb 10h", { bold: true })], "Tira-dúvidas ao vivo (sem replay)", "Conduz a live"],
    [[t("Dom 20h", { bold: true })], "Aula Final — PITCH completo (preço + bônus + dupla garantia)", "Apresenta a oferta"],
  ],
  [1300, 5360, 2700],
));
children.push(spacer());
children.push(calloutBox("Os 3 avisos obrigatórios da Aula 4 (quinta)", [
  "1) Apresenta o produto inteiro + abre a ficha de interesse.",
  "2) Avisa: segunda, quem preencheu a ficha entra 6h50 (10 min antes, com bônus único); o carrinho geral abre 7h.",
  "3) Avisa: domingo 20h tem a revelação de preço e bônus.",
  "Na Aula 4 NÃO se fala preço nem bônus. Isso é só no domingo.",
], WARNBG, "8A5A00"));
children.push(spacer());
children.push(calloutBox("Detalhe importante sobre formato", [
  "Cada aula pode ser ao vivo OU gravada — é decisão interna sua. NUNCA se comunica o formato pro público. Quem se inscreveu chega no horário e participa do que está rodando.",
], TEALBG, TEAL));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- ETAPA 5: CARRINHO ----------
children.push(h1("Etapa 5 · O carrinho (abertura e fechamento)"));
children.push(p([t("O carrinho abre na "), t("segunda seguinte ao pitch", { bold: true }), t(" e é onde a maior parte da venda acontece. Concentre energia no primeiro dia (D1).")]));
children.push(table(
  ["Momento", "O que acontece"],
  [
    [[t("Seg 6h50", { bold: true })], "Janela exclusiva: quem preencheu a ficha entra 10 min antes, com bônus único"],
    [[t("Seg 7h", { bold: true })], "Carrinho abre pra todo mundo"],
    [[t("Seg (D1)", { bold: true })], "5 disparos de mensageria: 6h50, 7h, 8h, 10h, 19h"],
    [[t("Ter a Sex (D2-D7)", { bold: true })], "ZERO mensagem no grupo/API (decisão consciente, evita queimar a lista)"],
    [[t("Sex 23h59", { bold: true })], "Carrinho fecha · documenta os números"],
  ],
  [2200, 7160],
));
children.push(spacer());
children.push(calloutBox("Por que silêncio de terça a sexta?", [
  "A semana inteira preservou atenção pra o D1. Mais mensagens durante o carrinho = menor abertura e menor conversão. Quem não veio no D1 não vem no D5. A recuperação dos indecisos é feita 1 a 1 pelo time de vendas, não por disparo em massa.",
], TEALBG, TEAL));

// ---------- ETAPA 6: PÓS-VENDA ----------
children.push(h1("Etapa 6 · Pós-venda (Customer Success)"));
children.push(p([t("AÇÃO SUA + Claude. ", { bold: true, color: "B23A00" }), t("Aluno satisfeito vira prova social real pro próximo lançamento. Rode após as primeiras vendas:")]));
children.push(bullet([t("Onboarding 90 dias ", { bold: true }), t("— boas-vindas, primeiros passos, marcos de progresso.")]));
children.push(bullet([t("Pesquisa NPS ", { bold: true }), t("— mede satisfação e capta depoimentos.")]));
children.push(bullet([t("Prova social ", { bold: true }), t("— transforma depoimento bruto em estudo de caso narrativo (entra nas páginas e criativos do próximo ciclo).")]));
children.push(spacer());
children.push(cmdBox([
  "@cs-turbo monte o pos-venda do meu produto principal.",
  "Onboarding 90 dias + pesquisa NPS + captura de prova social.",
], "Cole isto no Claude (Etapa 6):"));

// ---------- COMANDOS RÁPIDOS ----------
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(h1("Apêndice · Comandos rápidos pro Claude"));
children.push(p("Guarde estes para o dia a dia:"));
children.push(table(
  ["Quando", "Cole no Claude"],
  [
    ["Começar do zero", [t("@lpsg-master crie meu LPSG. [+ YAML do cadastro]", { font: "Consolas", size: 18 })]],
    ["Retomar uma fase", [t("@lpsg-master continue da Fase 5", { font: "Consolas", size: 18 })]],
    ["Diagnosticar lançamento fraco", [t("@estrategista-turbo meu lançamento não converte, diagnostica", { font: "Consolas", size: 18 })]],
    ["Revisar uma copy (anti-IA)", [t("@revisor-copy-turbo revisa este texto: [cole o texto]", { font: "Consolas", size: 18 })]],
    ["Auditar uma página/criativo", [t("@picasso-auditor-lpsg audita este design", { font: "Consolas", size: 18 })]],
    ["Refazer só uma peça", [t("@copywriter-turbo reescreve a Aula 4 com mais desejo", { font: "Consolas", size: 18 })]],
  ],
  [3000, 6360],
));
children.push(spacer());

// ---------- CHECKLIST FINAL ----------
children.push(h1("Checklist final · você está pronto?"));
const checks = [
  "Pré-requisitos: todas as contas criadas e tokens anotados",
  "Cadastro (YAML) preenchido por completo",
  "Gate inicial: briefing gerado, lido e aprovado",
  "10 fases executadas e aprovadas uma a uma",
  "Aulas gravadas (a Aula 4 contém os 3 avisos obrigatórios)",
  "Templates de mensageria aprovados na Meta",
  "Páginas no ar com foto e depoimentos reais",
  "Campanha de tráfego ativa e dashboard conferido",
  "Coreografia do pitch conferida: quinta pré-pitch, sexta conclusão, domingo pitch",
  "Carrinho: D1 com 5 disparos, D2-D7 em silêncio, fecha sexta 23h59",
  "Pós-venda (CS) pronto pra rodar após as primeiras vendas",
];
checks.forEach((c) => children.push(new Paragraph({ numbering: { reference: "chk", level: 0 }, spacing: { after: 70 }, children: [t(c, { size: 21 })] })));
children.push(spacer(200));
children.push(rule());
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120 }, children: [t("Marcou todos? Você rodou um LPSG completo. Próximo ciclo começa na segunda.", { bold: true, color: NAVY, size: 22 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80 }, children: [t("Turbo Academy · Método LPSG", { color: "777777", size: 18 })] }));

// ============================================================
// DOC
// ============================================================
const doc = new Document({
  creator: "Turbo Academy",
  title: "Passo a Passo LPSG · Guia do Aluno",
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 25, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: TEAL },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 280 } } } }] },
      { reference: "n", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 280 } } } }] },
      { reference: "chk", levels: [{ level: 0, format: LevelFormat.BULLET, text: "☐", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 4, color: GREY, space: 6 } }, children: [t("Passo a Passo LPSG · Guia do Aluno · Turbo Academy   —   página ", { size: 16, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" })] })] }) },
    children,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(__dirname + "/Passo-a-Passo-LPSG-Aluno.docx", buffer);
  console.log("OK · gerado Passo-a-Passo-LPSG-Aluno.docx");
});
