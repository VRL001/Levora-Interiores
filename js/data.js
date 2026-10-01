/* ====== DADOS EDITÁVEIS — altere aqui ====== */
const C = {
  whatsapp: "554199866798", // DDI+DDD+número, só dígitos
  instagram: "https://instagram.com/SEU_INSTAGRAM", // PLACEHOLDER
  google: "#", // PLACEHOLDER: link de avaliação do Google
  email: "contato@seudominio.com.br", // PLACEHOLDER
  telefone: "(41) 9986-6798",
  local: "Curitiba - PR",
  msg: "Olá! Vim pelo site da Levora Interiores e gostaria de solicitar um orçamento.",
  destaque: { img: "" }, // foto do hero: "img/hero.jpg"
  sobreFoto: "", // foto profissional (opcional)
  projetos: [
    // img = capa; galeria = lista de fotos
    {
      nome: "Projeto 01 — nome do projeto",
      tipo: "Projeto de interiores",
      metragem: "00 m²",
      local: "Cidade - UF",
      desc: "Descrição curta do projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Projeto 02 — nome do projeto",
      tipo: "Projeto de interiores",
      metragem: "00 m²",
      local: "Cidade - UF",
      desc: "Descrição curta do projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Projeto 03 — nome do projeto",
      tipo: "Projeto de interiores",
      metragem: "00 m²",
      local: "Cidade - UF",
      desc: "Descrição curta do projeto (placeholder).",
      img: "",
      galeria: [],
    },
  ],
  valores: [
    // seção "Quanto custa?"
    {
      nome: "Projeto de apartamento",
      sub: "Projeto completo",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Projeto de casa",
      sub: "Projeto completo",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Ambiente único",
      sub: "Projeto de interiores",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
  ],
  novos: [
    // seção "Comprou um apartamento novo?"
    {
      nome: "Apartamento 55 m²",
      sub: "Projeto completo",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Apartamento 70 m²",
      sub: "Projeto completo",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
    {
      nome: "Apartamento 85 m²",
      sub: "Projeto completo",
      preco: "R$ X.XXX",
      prazo: "X dias",
      desc: "Descrição do que o cliente recebe neste projeto (placeholder).",
      img: "",
      galeria: [],
    },
  ],
  incluso: [
    "Estudo inicial",
    "Layout",
    "Projeto de interiores",
    "Modelagem 3D",
    "Imagens / renderizações",
    "Detalhamento",
    "Projeto personalizado",
    "Orientações para execução",
  ], // confirme com a Levora
  passos: [
    ["Você entra em contato", "Conte o que você precisa."],
    [
      "Conversamos sobre o projeto",
      "Entendemos suas necessidades e expectativas.",
    ],
    ["Desenvolvemos o projeto", "Feito de acordo com o que foi definido."],
    ["Receba seu orçamento", "Apresentamos valores e condições."],
    ["Entrega", "Você recebe o projeto finalizado."],
  ],
  faq: [
    // 5 perguntas por enquanto — adicione mais linhas quando quiser
    [
      "Quanto custa um projeto de interiores?",
      "Depende da metragem e da complexidade. Veja os valores de referência na seção “Quanto custa?” e peça um orçamento.",
    ],
    [
      "O que está incluso no projeto?",
      "Veja a lista completa na seção “O que está incluso?”. [Confirmar com a Levora]",
    ],
    ["Vocês atendem apartamentos novos?", "[Resposta a definir pela Levora]"],
    [
      "Como funciona o orçamento?",
      "Você conta sobre seu projeto, conversamos e enviamos valores e condições.",
    ],
    [
      "Como faço para contratar?",
      "Solicite o orçamento pelo WhatsApp ou pelo formulário. Depois é só aprovar a proposta.",
    ],
  ],
  avaliacoesNota:
    "Cards de exemplo. Substitua pelas avaliações reais e autorizadas (ou apague esta frase).", // aparece abaixo do carrossel
  avaliacoes: [
    // {nome, data, texto} — copie/apague linhas à vontade
    {
      nome: "Nome do cliente 1",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 1 — substitua aqui]",
    },
    {
      nome: "Nome do cliente 2",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 2 — substitua aqui]",
    },
    {
      nome: "Nome do cliente 3",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 3 — substitua aqui]",
    },
    {
      nome: "Nome do cliente 4",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 4 — substitua aqui]",
    },
    {
      nome: "Nome do cliente 5",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 5 — substitua aqui]",
    },
    {
      nome: "Nome do cliente 6",
      data: "00 mês 0000",
      texto: "[Texto da avaliação real do cliente 6 — substitua aqui]",
    },
  ],
  sobre: {
    titulo: "Quem é a Levora Interiores",
    texto:
      "[Texto curto sobre a Levora: quem é, experiência e forma de trabalho — a preencher.]",
    difs: ["Diferencial 1", "Diferencial 2", "Diferencial 3"],
  },
};
