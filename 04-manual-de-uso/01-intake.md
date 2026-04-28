# 01 · Cadastro Necessário · formulário mestre do projeto

> **Preencha 1 vez · serve pras 10 estruturas.**
>
> Este é o **único cadastro** que você precisa preencher. Tudo aqui vira variável global em todas as 10 estruturas LPSG.
>
> 💡 **Mais fácil ainda:** abra `manual.html` no browser · vai na aba "Cadastro" · preenche com auto-save · clica "Gerar cadastro" · cola no Claude.
>
> Quando terminar, **manda inteiro pro Claude** com a mensagem:
>
> ```
> @lpsg-master crie meu LPSG.
> Aqui está meu cadastro do projeto:
> [YAML]
> ```

---

## ⏱️ Tempo de preenchimento · 30-60 min

> Demora mais quando o expert não tem clareza sobre **avatar · big idea · ticket**. Vale a pena: cada minuto aqui economiza 10 minutos depois.

---

## 📝 Como preencher

1. **Copia o YAML inteiro** abaixo (use o botão "Raw" se ler no GitHub)
2. **Cola num editor** (VS Code · Notion · Google Doc · qualquer um)
3. **Substitui cada `{ }` ou `_______`** pelo valor real do projeto
4. **Salva como** `intake-{NOME_PROJETO}.yaml` em local seguro
5. **Manda pro Claude** quando terminar

> Campos com `# OBRIGATÓRIO` precisam ser preenchidos. Campos com `# opcional · default ___` podem ficar vazios (Claude usa o default).

---

# 🎬 INTAKE LPSG · {NOME_PROJETO}

```yaml
# ════════════════════════════════════════════════════════════════
# BLOCO A · IDENTIDADE DO PROJETO
# ════════════════════════════════════════════════════════════════

projeto:
  nome:                   "{NOME_DO_PROJETO}"             # OBRIGATÓRIO · ex: "LPSG Leo Tabari"
  cliente:                "{NOME_CLIENTE}"                # OBRIGATÓRIO
  data_inicio:            "{YYYY-MM-DD}"                  # OBRIGATÓRIO

especialista:
  nome:                   "{NOME_ESPECIALISTA}"           # OBRIGATÓRIO · ex: "Leo Tabari"
  bio_curta:              "{1 PARAGRAFO}"                 # OBRIGATÓRIO · 2-3 linhas
  foto_url:               "{URL_FOTO_PROFISSIONAL}"       # OBRIGATÓRIO · vai pra página
  instagram:              "@{HANDLE}"                     # OBRIGATÓRIO
  youtube:                "youtube.com/@{CANAL}"          # opcional
  tratamento_plural:      "{TRATAMENTO}"                  # OBRIGATÓRIO · ex: "tubos", "guerreiros", "alunos"
  emoji_identidade:       "{EMOJI}"                       # OBRIGATÓRIO · ex: 🚀

nicho:
  principal:              "{NICHO}"                       # OBRIGATÓRIO · ex: "Marketing digital"
  sub_nicho:              "{SUB_NICHO}"                   # OBRIGATÓRIO · ex: "Lançamento pago para infoprodutores"
  benchmark_nicho:        "{1-10}"                        # OBRIGATÓRIO · qual nicho da tabela `06-benchmarks` mais se aproxima

avatar:
  resumo:                 |
    {DESCREVA O AVATAR EM 4-6 LINHAS}                    # OBRIGATÓRIO
    Idade · profissão · faturamento · dor principal · sonho

  dor_principal:          "{1 FRASE}"                     # OBRIGATÓRIO
  desejo_principal:       "{1 FRASE}"                     # OBRIGATÓRIO
  objecao_mais_forte:     "{1 FRASE}"                     # OBRIGATÓRIO

big_idea:                 "{BIG IDEA EM 1 FRASE}"         # OBRIGATÓRIO · ex: "E se o lead pagasse seu tráfego antes do evento começar?"
big_idea_explicada:       |
  {EXPLICA EM 3-5 LINHAS POR QUE ISSO É CONTRA-INTUITIVO} # OBRIGATÓRIO


# ════════════════════════════════════════════════════════════════
# BLOCO B · OFERTA E PRODUTO
# ════════════════════════════════════════════════════════════════

evento:
  nome:                   "{NOME_DO_EVENTO}"              # OBRIGATÓRIO · ex: "Desafio LPSG"
  sigla:                  "{SIGLA_3_LETRAS}"              # OBRIGATÓRIO · ex: "LPS" (vira nomenclatura de campanhas)
  promessa_principal:     "{PROMESSA_DO_EVENTO}"          # OBRIGATÓRIO · ex: "Construa seu Lançamento Pago Semanal Gravado em 7 dias"
  modelo:                 "5+1 (Híbrido)"                 # FIXO LPSG
  ticket_ingresso:        "{R$_VALOR}"                    # OBRIGATÓRIO · ex: "R$ 62"

  primeira_edicao:
    data_aula_1:          "{YYYY-MM-DD segunda}"          # OBRIGATÓRIO · sempre segunda
    data_aula_5:          "{YYYY-MM-DD sexta}"            # OBRIGATÓRIO · 4 dias depois
    data_tira_duvidas:    "{YYYY-MM-DD sábado}"           # OBRIGATÓRIO
    data_pitch:           "{YYYY-MM-DD domingo}"          # OBRIGATÓRIO
    data_carrinho_abre:   "{YYYY-MM-DD segunda seguinte}" # OBRIGATÓRIO
    data_carrinho_fecha:  "{YYYY-MM-DD sexta seguinte}"   # OBRIGATÓRIO

  horarios:
    aulas:                "07:00"                          # default LPSG
    tira_duvidas:         "10:00"                          # default
    pitch:                "20:00"                          # default

produto_principal:
  nome:                   "{NOME_PRODUTO}"                # OBRIGATÓRIO · ex: "Acelerador Turbo"
  ticket:                 "{R$_VALOR}"                    # OBRIGATÓRIO · ex: "R$ 25.000"
  prazo_acompanhamento:   "{N meses}"                     # OBRIGATÓRIO · ex: "3 meses"
  roi_prometido:          "{N a M}x"                      # OBRIGATÓRIO · ex: "3 a 5x"
  prazo_roi:              "{TEMPO}"                       # OBRIGATÓRIO · ex: "nos próximos meses"

  parcelamento:
    parcelas_max:         "12"                            # default
    valor_pix:            "{R$_VALOR}"                    # OBRIGATÓRIO · valor à vista PIX
    desconto_pix_pct:     "10"                            # default

  garantia:
    tipo:                 "dupla"                         # FIXO LPSG
    incondicional_dias:   "7"                             # FIXO
    condicional_dias:     "30"                            # FIXO
    texto_completo:       |
      {COLE O TEXTO COMPLETO DA GARANTIA}                # OBRIGATÓRIO · vai aparecer na página

bonus_tsunami:                                            # 3 ondas no carrinho aberto
  onda_1:
    quando:               "Seg 7h00 a 7h10"
    bonus:                "{NOME_DO_BÔNUS}"               # OBRIGATÓRIO · ex: "Call 1:1 com Leo"
    descricao_curta:      "{1 LINHA}"
  onda_2:
    quando:               "Seg 7h10 a 8h00"
    bonus:                "{NOME_DO_BÔNUS}"
    descricao_curta:      "{1 LINHA}"
  onda_3:
    quando:               "Seg 8h00 a 23h59"
    bonus:                "{NOME_DO_BÔNUS}"
    descricao_curta:      "{1 LINHA}"


# ════════════════════════════════════════════════════════════════
# BLOCO C · ESTRUTURA DE AULAS (5+1)
# ════════════════════════════════════════════════════════════════

aulas:
  aula_1:
    titulo_publico:       "{TÍTULO COMPLETO YOUTUBE}"     # OBRIGATÓRIO
    funcao:               "Fundamentação · 'é possível'"  # default LPSG
    promessa_da_aula:     "{1 FRASE}"                     # OBRIGATÓRIO

  aula_2:
    titulo_publico:       "{TÍTULO COMPLETO}"
    funcao:               "Construção · 'é pra mim'"
    promessa_da_aula:     "{1 FRASE}"

  aula_3:
    titulo_publico:       "{TÍTULO COMPLETO}"
    funcao:               "Marco de Resultado 1 · 'já valeu'"
    promessa_da_aula:     "{1 FRASE}"

  aula_4:
    titulo_publico:       "{TÍTULO COMPLETO}"
    funcao:               "Pré-pitch + abertura da ficha"
    promessa_da_aula:     "{1 FRASE}"

  aula_5:
    titulo_publico:       "{TÍTULO COMPLETO}"
    funcao:               "Marco de Resultado 2 · checklist"
    promessa_da_aula:     "{1 FRASE}"

  aula_6:
    titulo_publico:       "{TÍTULO COMPLETO}"
    funcao:               "Pitch · oferta + bônus tsunami"
    promessa_da_aula:     "{1 FRASE}"


# ════════════════════════════════════════════════════════════════
# BLOCO D · DOMÍNIOS E URLs
# ════════════════════════════════════════════════════════════════

dominios:
  raiz:                   "{seunome.com.br}"              # OBRIGATÓRIO
  pagina_ingresso:        "lp.{seunome.com.br}"           # default · 1 subdomínio
  ficha_interesse:        "{lpsg}.{seunome.com.br}"       # OBRIGATÓRIO · escolhe slug
  dashboard:              "dashboard.{seunome.com.br}"    # default
  proximo_nivel:          "{seunome.com.br}/proximo-nivel" # default

checkout:
  ingresso_url:           "pay.hotmart.com/{...}"         # OBRIGATÓRIO · pega no Hotmart
  premium_url:            "pay.hotmart.com/{...}"         # OBRIGATÓRIO

obrigado_pages:
  apos_ingresso:          "/obrigado-ingresso"            # default
  apos_ficha:             "/ficha-de-interesse/obrigado"  # default
  apos_premium:           "/obrigado-premium"             # default


# ════════════════════════════════════════════════════════════════
# BLOCO E · INTEGRAÇÕES E TOKENS (do `00-pre-requisitos.md`)
# ════════════════════════════════════════════════════════════════

# Cole aqui o YAML "Resumo final" que você anotou nos pré-requisitos:

meta:
  business_manager_id:    "{...}"
  ad_account_id:          "act_..."
  pixel_id:               "{...}"
  capi_token:             "EAAB..."                       # NUNCA COMITAR EM REPO PÚBLICO
  api_version:            "v22.0"                         # default atual
  waba_phone_number_id:   "{...}"
  waba_account_id:        "{...}"

hotmart:
  product_id_ingresso:    "{...}"
  offer_key_ingresso:     "{...}"
  product_id_premium:     "{...}"
  offer_key_premium:      "{...}"
  hottok:                 "{...}"
  client_id:              "{...}"                         # opcional · só se usar API direta
  client_secret:          "{...}"                         # opcional

google:
  service_account_email:  "{...}@{projeto}.iam.gserviceaccount.com"
  service_account_json_path: "/caminho/seguro/sa.json"    # NUNCA versionar
  sheets_id_master:       "{...}"                         # planilha mestre · CRM
  drive_folder_id:        "{...}"                         # opcional

vercel:
  project_name:           "{slug-do-projeto}"
  team_id:                "{...}"                         # opcional

n8n:
  base_url:               "https://n8n.{...}"
  api_key:                "{...}"
  webhook_base:           "{base_url}/webhook"

manychat:
  api_key:                "{...}"
  page_id:                "{...}"

ga4:
  property_id:            "{...}"                         # opcional
  measurement_id:         "G-{...}"                       # opcional

gtm:
  container_id:           "GTM-{...}"                     # opcional


# ════════════════════════════════════════════════════════════════
# BLOCO F · TIME (papéis)
# ════════════════════════════════════════════════════════════════

time:
  expert:
    nome:                 "{NOME}"                        # OBRIGATÓRIO · pessoa que apresenta
    email:                "{...}"
    whatsapp:             "+55 ___"

  gestor_trafego:
    nome:                 "{NOME}"                        # OBRIGATÓRIO
    email:                "{...}"
    whatsapp:             "+55 ___"

  copywriter:
    nome:                 "{NOME}"                        # OBRIGATÓRIO
    email:                "{...}"

  designer:
    nome:                 "{NOME}"                        # OBRIGATÓRIO · vídeos + estáticos
    email:                "{...}"

  sdr_closer:
    nome:                 "{NOME}"                        # OBRIGATÓRIO · liga pra HOT da ficha
    email:                "{...}"
    whatsapp:             "+55 ___"

  cs_oficial:
    nome:                 "{NOME}"                        # OBRIGATÓRIO se vai abrir CS
    email:                "{...}"
    whatsapp:             "+55 ___"

  suporte:
    nome:                 "{NOME}"                        # opcional · pode ser CS Oficial acumular
    email:                "{...}"


# ════════════════════════════════════════════════════════════════
# BLOCO G · CS / PÓS-VENDA (preencha mesmo que abra só depois)
# ════════════════════════════════════════════════════════════════

cs:
  ativo:                  false                           # mude pra true quando for abrir CS
  plataforma_aulas:       "Hotmart Club"                  # ou outra
  plataforma_aulas_url:   "{...}"
  comunidade_tipo:        "Discord"                       # ou WhatsApp
  comunidade_link:        "{...}"

  rituais:
    live_coletiva:        "Quartas 19:00"                 # default
    office_hours:         "Sextas 14:00"                  # default

  programa_indicacao:
    ativo:                true
    recompensa_bronze:    "1 mês extra (1 indicação)"
    recompensa_prata:     "3 meses + acesso próximo nível 1 mês (3 indicações)"
    recompensa_ouro:      "{...}"
    recompensa_diamante:  "{...}"

  escada_produtos:
    nivel_1_ingresso:     "{R$ 62}"                       # default ingresso
    nivel_2_premium:      "{R$ 25.000}"                   # produto principal
    nivel_3_seguinte:     "{R$ ___}"                      # opcional · ex: Sociedade
    nivel_4_topo:         "{R$ ___}"                      # opcional · ex: Mastermind


# ════════════════════════════════════════════════════════════════
# BLOCO H · TRÁFEGO E CRIATIVOS
# ════════════════════════════════════════════════════════════════

trafego:
  orcamento_inicial_diario: "R$ 100"                      # default LPSG
  orcamento_meta_mensal:    "{R$ ___}"                    # OBRIGATÓRIO · pra dimensionar

  publico:
    localizacao:          "Brasil"                        # default
    faixa_idade:          "25-65"                         # default · ajuste pelo avatar
    idioma:               "Português"

criativos:
  cor_destaque_principal: "{#HEXCODE}"                    # OBRIGATÓRIO · ex: "#FF6B00"
  cor_destaque_secundaria: "{#HEXCODE}"                   # OBRIGATÓRIO
  estilo_visual:          "{Editorial · Energético · Minimalista}"  # OBRIGATÓRIO
  exemplos_referencia:    "{URL ou descrição de 2-3 ref}" # opcional · acelera direção criativa


# ════════════════════════════════════════════════════════════════
# BLOCO I · MENSAGERIA · IDENTIDADE DA COMUNICAÇÃO
# ════════════════════════════════════════════════════════════════

mensageria:
  tom_de_voz:             "{Próximo · Informal · Profissional · Direto}"  # OBRIGATÓRIO
  apelido_lista:          "{tubos · alunos · etc}"        # default = tratamento_plural

  pacto_inicial:
    quer_pacto:           true                            # default LPSG
    palavra_pacto:        "OK"                            # default

  utility_templates_aprovar:                              # Claude vai gerar a estrutura · você aprova na Meta
    onboarding:           true
    pre_aulas:            true
    durante_evento:       true
    pos_ficha_tier:       true
    sabado:               true
    pitch:                true
    carrinho_aberto:      true
    cs_onboarding:        true                            # se abrir CS


# ════════════════════════════════════════════════════════════════
# BLOCO J · METAS DA PRIMEIRA EDIÇÃO
# ════════════════════════════════════════════════════════════════

metas_primeira_edicao:
  inscritos_minimo:       "{N}"                           # OBRIGATÓRIO · ex: 500
  inscritos_alvo:         "{N}"                           # ex: 1000
  vendas_premium_minimo:  "{N}"                           # ex: 5
  vendas_premium_alvo:    "{N}"                           # ex: 15
  faturamento_alvo:       "R$ {N}"                        # ex: R$ 250.000
  cac_max_aceitavel:      "R$ {N}"                        # ex: R$ 50 por inscrito
  roas_alvo_ingresso:     "1.0"                           # default · ajuste por nicho


# ════════════════════════════════════════════════════════════════
# FIM DO INTAKE
# ════════════════════════════════════════════════════════════════
```

---

## ✅ Validação · antes de mandar pro Claude

Confere se você preencheu **TODOS os campos OBRIGATÓRIOS**:

- [ ] Bloco A · projeto · especialista · nicho · avatar · big idea
- [ ] Bloco B · evento · primeira edição (datas) · produto · garantia · 3 ondas tsunami
- [ ] Bloco C · 6 títulos de aula
- [ ] Bloco D · 4 domínios · 2 URLs de checkout
- [ ] Bloco E · todas as integrações (Meta · Hotmart · Google · Vercel · n8n · ManyChat)
- [ ] Bloco F · 6 papéis do time (mín · expert + gestor + copy + designer + sdr + cs)
- [ ] Bloco G · CS configurado (mesmo que `ativo: false` por enquanto)
- [ ] Bloco H · orçamento · cores · estilo
- [ ] Bloco I · tom de voz
- [ ] Bloco J · metas da primeira edição

---

## 🚀 Próximo passo

Manda pro Claude:

> **"Estou começando o projeto LPSG. Aqui está meu intake preenchido. Use o `02-passo-a-passo.md` e me guia da Fase 1 até o fim."**
>
> *(cola o YAML preenchido)*

Claude vai:
1. Validar se faltou algum campo obrigatório
2. Te avisar se algo precisa de ajuste (ticket muito alto pro nicho · garantia confusa · etc)
3. Começar pela **Fase 1 · Fundação** (estrutura de aulas)

---

## 💾 Versionamento do intake

Salva o YAML preenchido com nome:
```
intake-{NOME_PROJETO}-{YYYY-MM-DD}.yaml
```

Conforme o projeto evolui, **atualiza** o intake (não joga fora). Versões úteis:
- `v1` — antes da 1ª edição
- `v2` — após 1ª edição (com aprendizados aplicados · ticket recalibrado)
- `v3+` — quando muda nicho · escala · ascensão

> **Toda vez que voltar ao projeto · começa relendo o intake atualizado.**
