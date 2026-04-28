# 01 · Estrutura do criativo — 3 partes

> Hook (3s) · Body (desenvolvimento) · CTA (ação clara). Vale pra estático, carrossel e vídeo.

---

## 🎯 Princípio: criativo ≠ arte bonita

Criativo de tráfego é uma **máquina de 3 partes**:

```
[ HOOK ]  →  [ BODY ]  →  [ CTA ]
   3s         medio        clique
   "para?"    "interessa?" "agora?"
```

Se uma parte falha, todo o criativo falha. Métricas que mapeiam:

```
HOOK falha   → Hook Rate baixo (Views 3s / Impressões < 20%)
BODY falha   → Hold Rate baixo (assistiu 75% / Views 3s < 5%)
CTA falha    → Body Rate baixo (comprou / assistiu 75% < 2%)
```

> Ver `04-alertas-e-diagnostico.md` do dashboard pra regras de ação automática.

---

## 1️⃣ HOOK — primeiros 3 segundos / primeiro card / headline

### O que é

A primeira coisa que o avatar vê. Tem que parar o scroll **em 0,5s**. Sem hook, ele rola e o resto não importa.

### Tipos de hook que funcionam

| Tipo | Como funciona | Exemplo (LPSG) |
|---|---|---|
| **Quebra de padrão** | Visual/frase fora do esperado | "Demitir 80% da sua equipe vai te fazer faturar mais" |
| **Polarização** | Toma um lado contra o senso comum | "Curso de marketing é golpe — explicação em 30s" |
| **Pergunta direta** | Pergunta que ativa o problema | "Vc roda tráfego há 1 ano e não passa de R$ 100k/mês?" |
| **Promessa específica** | Resultado mensurável | "R$ 1M em 5 dias com 3 pessoas e 0 anúncios novos" |
| **Confissão** | Vulnerabilidade controlada | "Quase quebrei minha empresa em 2023. Aqui o que aprendi" |
| **Número estranho** | Quantidade não-redonda chama atenção | "Os 7 templates de WhatsApp que economizam R$ 64k" |
| **Visual contraintuitivo** | Imagem que contradiz texto | Foto sorrindo + "Por que demiti 8 funcionários" |
| **Curiosidade aberta** | Cria gap mental | "Existe um botão na Meta que ninguém clica e vale ouro" |

### Regras do hook

```yaml
DURACAO_VIDEO:        "3 segundos no máximo (até frame 90 em 30fps)"
PALAVRAS_TEXTO:       "≤ 8 palavras (estático/carrossel)"
LEGIBILIDADE:         "5m de distância · letras gigantes"
FACE_VISIBLE:         "rosto do expert em frame nos primeiros 1s"
SOM:                  "OPCIONAL (85% assiste mudo · queima legenda)"
```

### Hook ruim vs hook bom

❌ "Olá, sou João, especialista em marketing digital"
✅ "Faturei 8 milhões — e o que ninguém te conta é..."

❌ "Inscreva-se no nosso evento gratuito"
✅ "5 dias. Zero curso. Você sai com o método rodando."

---

## 2️⃣ BODY — desenvolvimento da promessa

### O que é

Os ~70% do meio do criativo. Onde você **conecta a promessa do hook com a ação do CTA**. Tem que entregar valor (ou prova) suficiente pra fazer a pessoa querer clicar.

### Estrutura body em 4 batidas (vale pra qualquer formato)

```
1. AGITA o problema (2-5s)
   "Você tenta tráfego há meses, ROAS quebrado, dor de cabeça"

2. APRESENTA a solução com prova (5-15s)
   "Eu rodo $1M/mês com método. Aqui o esqueleto:" → 3 pontos

3. QUEBRA objeção principal (3-8s)
   "E não, não precisa ter exército de tráfego — funciono com 3 pessoas"

4. ANTECIPA transformação (3-5s)
   "Em 7 dias você está rodando isso na sua agência"
```

### Tipos de body

| Tipo | Quando usar |
|---|---|
| **Storytelling** | Avatar valoriza autenticidade · longo-prazo |
| **Lista numerada** | Avatar é técnico · gosta de framework |
| **Antes/depois** | Avatar precisa ver transformação |
| **Caso real** | Avatar precisa de prova social pesada |
| **Tutorial mini** | Avatar é DIY · quer ver "como fazer" |
| **Mito vs verdade** | Avatar tem crença errada bloqueando compra |

### Regras do body

```yaml
RITMO:                "muda a cada 3-5s (corte/zoom/foco)"
DENSIDADE:            "1 ideia por batida · sem amontoar"
PROVA:                "1+ prova mensurável (número/screenshot/depoimento)"
EXPERT_PRESENCE:      "expert aparece em ≥ 70% do tempo (vídeo) / ≥ 70% dos cards (carrossel)"
```

---

## 3️⃣ CTA — chamada pra ação

### O que é

Os últimos 5-10 segundos. Onde você fala **exatamente o que fazer agora**. Sem CTA, a pessoa fecha e a compra não acontece.

### Anatomia do CTA

```
[ COMANDO claro ] + [ DESTINO específico ] + [ URGÊNCIA / RECOMPENSA ]

Ex: "Clique no link da bio e garante sua vaga no LPSG por R$ 62 — 1.000 vagas, fecha sexta"
        ↑                          ↑                            ↑
       comando                  destino                  urgência+ancoragem
```

### Comandos que funcionam

✅ "Clique no link da bio"
✅ "Toque em saiba mais aí embaixo"
✅ "Garante a sua vaga"
✅ "Pega a sua aqui [seta apontando]"
✅ "Vou te esperar dentro · clica no link"

❌ "Saiba mais sobre nosso evento"
❌ "Acesse nosso site"
❌ "Clique aqui"

### Urgência sem mentira

```yaml
URGENCIA_REAL:
  - "Carrinho abre {DATA} {HORA}"
  - "Janela de bônus dura 10min · então 3h · então 24h"
  - "1.000 ingressos · depois fecha"
  - "Próxima edição só daqui 30 dias"

URGENCIA_FALSA_PROIBIDO:
  - "Última vaga!" (se ainda tem 800)
  - "Promoção termina hoje!" (se vc renova amanhã)
  - "Apenas 5 vagas restantes" (sem ser verdade)
```

> Mentir mata reputação no longo prazo. Use só o que é real.

---

## 📊 Adaptação por formato

| | Estático | Carrossel | Vídeo |
|---|---|---|---|
| **Hook** | Headline + foto expert (visual chocante) | Card 1 (foto + frase 8 palavras) | 3s iniciais (rosto + frase) |
| **Body** | Subtexto + prova social | Cards 2-9 (1 ideia/card) | Frames 90-1200 (30s) |
| **CTA** | Botão visual + texto da copy | Card 10 (vídeo 4-5s + CTA visual) | Últimos 5-10s |

---

## 🎬 Variação obrigatória dentro da batelada

Pra Meta ASC otimizar, os 15 criativos da batelada **PRECISAM ser variados**. Senão o algoritmo não tem o que escolher.

```yaml
TIPOS_DE_HOOK_NA_BATELADA:
  - 1 quebra de padrão
  - 1 promessa específica
  - 1 pergunta direta
  - 1 confissão
  - 1 polarização

TIPOS_DE_BODY_NA_BATELADA:
  - 2 storytelling (1 estático · 1 vídeo)
  - 2 listas numeradas (1 carrossel · 1 vídeo)
  - 2 prova social (1 estático · 1 carrossel)
  - 2 tutorial mini (vídeos)
  - 2 mito vs verdade (carrosséis)

TONS_NA_BATELADA:
  - 5 sérios/autoridade
  - 5 leves/conversacionais
  - 5 polêmicos/provocativos
```

> A batelada inteira responde: **"de quantas formas diferentes posso vender o mesmo evento?"**

---

## ⚠️ Erros que matam o criativo

```yaml
ERROS_MORTAIS:
  HOOK:
    - "Apresentação institucional ('olá, sou X, especialista em Y')"
    - "Logo grande no primeiro frame (esconde o rosto)"
    - "Música sem voz (Meta penaliza · 85% assiste mudo)"
    - "Texto pequeno (não lê em 9:16 mobile)"
  BODY:
    - "1 ideia esticada por 30s (perde retenção)"
    - "Sem prova social (declarações vagas)"
    - "Expert sumido (foto/voz só no fim)"
    - "Linguagem corporativa ('aproveite essa oportunidade única')"
  CTA:
    - "Genérico ('saiba mais')"
    - "Múltiplos CTAs ('clique aqui OU veja no site OU manda DM')"
    - "Sem urgência real ('inscreva-se quando puder')"
    - "Esquecer de falar o link"
```
