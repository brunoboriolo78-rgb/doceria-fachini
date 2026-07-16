# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Doceria Fachini

## O que é esse workspace

Operação da Doceria Fachini — confeitaria artesanal premium de Mariana
Fachini. Aqui vivem a memória do negócio, a identidade visual e tudo
que o sistema produz (conteúdo, marketing, materiais).

**Estrutura de pastas:**
- `_memoria/` — quem é a Doceria Fachini, como ela fala, foco atual
- `identidade/` — logo, cores, tipografia, fotos de produto — aplicado em tudo que o sistema gera
- `marketing/` — campanhas, conteúdo, mídia paga
- `saidas/` — documentos pontuais
- `dados/` — arquivos a analisar
- `scripts/` — automações

*(Pastas como `comercial/`, `financeiro/` ou `operacoes/` podem ser
criadas depois se a operação crescer — hoje a equipe é pequena e não
precisa dessa divisão formal.)*

## Sobre a empresa

Doceria Fachini é uma confeitaria artesanal premium. Produção sob
encomenda de bolos decorados (aniversário, casamento, chá revelação),
doces finos, brigadeiros gourmet, chocolates e cookies personalizados.
Atende mulheres de 25-45 anos, classe média/alta, em datas especiais e
presentes. Equipe pequena (3-5 pessoas) dividindo produção, atendimento
e entrega.

## Setores e responsáveis

- **Produção:** Mariana Fachini + equipe — bolos, doces finos, chocolates, cookies
- **Atendimento/Vendas:** WhatsApp — hoje é o maior ralo de tempo (pedidos e dúvidas repetitivas de preço/prazo/sabor)
- **Redes sociais:** Instagram — vitrine da marca
- **Entrega:** equipe de apoio

## O que mais fazemos aqui

- Conteúdo e carrosséis pro Instagram com a identidade da marca
- Atendimento e organização de pedidos via WhatsApp
- Site vitrine (cardápio + pedido via WhatsApp) — projeto em andamento, fora do escopo das skills nativas do MazyOS

## Tom de voz

Carinhoso, elegante, natural, afetivo, profissional. Editorial e
enxuto — a foto do produto carrega a peça, o texto é curto. Nunca
soa como "guru de marketing" ou genérico.

Evitar: "vamos juntos!", "caro cliente", jargão tipo "alavancar" ou
"sinergia", qualquer coisa que pareça barata pra uma marca premium.

## Regras do sistema

- Todo material visual (carrossel, post, site) consulta `identidade/design-guide.md` primeiro
- Fotos de produto reais ficam em `identidade/fotos/`
- Gargalo atual é tempo/produção — ao sugerir prioridades, favorecer o que reduz esse atrito (ex: automatizar respostas repetitivas do WhatsApp) antes de tarefas novas
- Não copiar logo, fotos ou elementos exclusivos de outras marcas de confeitaria/luxo — usar só como referência de princípios de design

## Ferramentas conectadas

- [ ] WhatsApp Business
- [ ] Instagram
- [ ] Google Calendar

*(Marcar conforme for instalando os MCPs)*
