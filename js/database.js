// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/books/darkforces.png",
    nameItem: "As Artes das Trevas: Um Guia para Auto-Proteção",
    description:
      "Por Quentin Trimble. Esse Livro contém informações sobre varias criaturas das trevas, e como lançar feitiços defensivos e ofensivos.",
    value: [1, 2, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 2,
    img: "./img/books/easySpells.png",
    nameItem: "Feitiços Fáceis para Enganar Trouxas",
    description:
      "Por Luca Caruso. Um livro com feitiços simples, muito útil para esconder evidências do mundo bruxo dos trouxas.",
    value: [0, 10, 5],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 3,
    img: "./img/books/FantasticBeasts.png",
    nameItem: "Animais Fantásticos e onde Encontrá-los",
    description:
      "Por Newt Scamander. Um guia completo sobre tudo o que é preciso saber sobre criaturas mágicas.",
    value: [2, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 4,
    img: "./img/books/historyOfMagic.png",
    nameItem: "Uma História de Magia",
    description:
      "Por Bathilda Bagshot. Um livro de história do mundo bruxo até o século XIX. Cobre várias pessoas e eventos como: caça as bruxas, rebeliões de goblins, Uric the Oddbal, guerras gigantes e outros eventos.",
    value: [2, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 5,
    img: "./img/books/monsterBook.png",
    nameItem: "O Monstruoso Livro dos Monstros",
    description:
      "Por Edwardus Lima. Um livro muito informativo, apesar de difícil acesso. Não se esqueça um pouco de carinho faz uma grande diferença!",
    value: [4, 0, 3],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 6,
    img: "./img/books/potions.png",
    nameItem: "Rascunhos e Poções Mágicas",
    description:
      "Por Arsenius Jigger. Para poções básicas, não procure mais. Você precisará comprar e coletar ingredientes para preparar poções deste livro, então faça um estoque de tantos itens quanto puder.",
    value: [2, 5, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 7,
    img: "./img/books/spells.png",
    nameItem: "O Livro Padrão de Feitiços: Ano 5",
    description:
      "Por Miranda Goshawk. Quinto Livro da serie O Livro Padão de Feitiços, contém mais alguns feitiços para a continuação dos estudos em feitiços.",
    value: [1, 0, 3],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 8,
    img: "./img/books/transfiguration.png",
    nameItem: "Guia de Transfiguração para Iniciantes ",
    description:
      "Por Emeric Switch. Mais usado para a introdução de transfiguração à novos bruxos e bruxas, contém feitiços básicos de transfiguração.",
    value: [1, 2, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Livro",
  },
  {
    id: 9,
    img: "./img/wands/cedricsWand.png",
    nameItem: "Madeira de Freixo",
    description:
      "Feita em 1988, com madeira de freixo, tem 12,2 polegadas com núcleo de cabelo de unicórnio. Agradávelmente Elástica.",
    value: [5, 3, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 10,
    img: "./img/wands/fleurWand.png",
    nameItem: "Madeira de Jacarandá",
    description:
      "Feita em 1994, com madeira de Jacarandá, tem 9,5 polegadas com núcleo de cabelo de Veela. Inflexíel.",
    value: [10, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 11,
    img: "./img/wands/bellatrixWand.png",
    nameItem: "Madeira de Nogueira",
    description:
      "Feita em 1982, com madeira de Nogueira, tem 12,8 polegadas com núcleo de coração de dragão. Inflexível.",
    value: [5, 13, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 12,
    img: "./img/wands/hermionesWand.png",
    nameItem: "Madeira de Videira",
    description:
      "Feita em 1991, com madeira de Videira, tem 10,8 polegadas com núcleo de coração de dragão. Poderosa e um pouco Flexível.",
    value: [9, 5, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 13,
    img: "./img/wands/remusWand.png",
    nameItem: "Madeira de Cipreste",
    description:
      "Feita em 1970, com madeira de Cipreste, tem 10,2 polegadas com núcleo de cabelo de unicórnio. Flexível.",
    value: [7, 6, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 14,
    img: "./img/wands/ronsWand.png",
    nameItem: "Madeira de Salgueiro",
    description:
      "Feita em 1994, com madeira de Salgueiro, tem 14 polegadas com núcleo de cabelo de unicórnio. Consistente e Flexível.",
    value: [4, 0, 3],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 15,
    img: "./img/wands/McGonagallWand.png",
    nameItem: "Madeira de Abeto",
    description:
      "Feita em 1947, com madeira de Abeto, tem 9,5 polegadas com núcleo de coração de dragão. Rígida.",
    value: [9, 7, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 16,
    img: "./img/wands/slughornWand.png",
    nameItem: "Madeira de Cedro",
    description:
      "Feita em 1944, com madeira de Cedro, tem 10,2 polegadas com núcleo de coração de dragão. Bastante Flexível.",
    value: [10, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
  },
  {
    id: 17,
    img: "./img/quidditch/bat.png",
    nameItem: "Taco do Batedor",
    description:
      "O taco mais resistente e vai mandar seu balaço direto para o seu oponente, equipamento essencial para qualquer batedor.",
    value: [0, 15, 6],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 18,
    img: "./img/quidditch/bludger.png",
    nameItem: "Balaço",
    description:
      "Esse balaço foi enfeitiçado perfeitamente para derrubar seu oponente, e facilitar o trabalho do batedor.",
    value: [0, 10, 3],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 19,
    img: "./img/quidditch/quaffle.png",
    nameItem: "Goles",
    description:
      "A goles possuí a aderência perfeita para o seu time marcar o gol.",
    value: [0, 13, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 20,
    img: "./img/quidditch/goldenSnitch.png",
    nameItem: "Pomo de Ouro",
    description:
      "Esse é o pomo mais rápido que você vai encontrar, ou não.",
    value: [20, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 21,
    img: "./img/quidditch/quidditchgear.png",
    nameItem: "Equipamento de porteção de Quadribol",
    description:
      "Equipamento com luvas, caneleiras e joelheiras de melhor qualidade, você nem vai sentir o balaço te encostar.",
    value: [8, 11, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 22,
    img: "./img/quidditch/helmet.png",
    nameItem: "Capacete de Quadribol",
    description:
      "Seus miolos nunca estiveram tão protegidos!",
    value: [7, 13, 10],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 23,
    img: "./img/quidditch/firebolt.png",
    nameItem: "Firebolt",
    description:
      "A Firebolt possuí um equilíbrio insuperável e precisão exata. Também tem uma aceleração de 150 milhas por hora em 10 segundos e incorpora um feitiço de frenagem inquebrável.",
    value: [25, 13, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 24,
    img: "./img/quidditch/nimbus2000.png",
    nameItem: "Nimbus 2000",
    description:
      "Uma dos modelos de maior sucesso da Companhia de vassouras de corrida Nimbus, Altamente confiável com boa velocidade e manuseio excepcional - não é para iniciates!",
    value: [19, 7, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Quadribol",
  },
  {
    id: 25,
    img: "./img/weasleyShop/BoxingTelescope.png",
    nameItem: "Telescópio Boxeador",
    description:
      "A pegadinha perfeita para aquele seu amigo que se acha mais inteligente que todos! Nada como um leve soco na cara para fazer seu amigo ficar um pouco mais humilde.",
    value: [0, 12, 26],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 26,
    img: "./img/weasleyShop/dungbombs.png",
    nameItem: "Bombas de Bosta",
    description:
      "Uma bomba fedorenta, deixa um fedor podre. E cuidado ao manusear, vai com certeza sujar você também. ",
    value: [0, 1, 20],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 27,
    img: "./img/weasleyShop/fangedFrisbee.png",
    nameItem: "Frisbee com Presas",
    description:
      "Bem similar ao frisbee trouxa, mas com dentes, e rosna.",
    value: [6, 0, 80],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 28,
    img: "./img/weasleyShop/JinxOffPackage.png",
    nameItem: "Tira Azar",
    description:
      "Contém um chapéu, uma capa e um par de luvas. Para proteção máxima use o conjunto todo, e lembre-se ue uma peça danificada pode comprometer a eficácia da proteção.",
    value: [4, 16, 25],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 29,
    img: "./img/weasleyShop/screamingYoyo.png",
    nameItem: "Ioiô Berrante",
    description:
      "Como o nome sugere, eles gritam quando usados.",
    value: [5, 0, 0],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 30,
    img: "./img/weasleyShop/noseBitting.png",
    nameItem: "Xícara Moderdora de Nariz",
    description:
      "Uma xícara normal, só possuí um feitiço pra morder o nariz de quem bebe dela.",
    value: [3, 11, 95],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 31,
    img: "./img/weasleyShop/ThorsThunderCracker.png",
    nameItem: "Foquete Trovão do Thor",
    description:
      "Foquete da Empreendimentos Explosivos, linha de foquetes exclusiva da Weasleys' Wizard Wheezes.",
    value: [1, 2, 11],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
  {
    id: 32,
    img: "./img/weasleyShop/WeatherinaBottle.png",
    nameItem: "Clima Engarrafado",
    description:
      "Produto perfeito para uma pequena distração, cria algum clima em uma pequena área quando liberado.",
    value: [2, 5, 13],
    addCart: "Adicionar ao carrinho",
    tag: "Gemialidades Weasley",
  },
]
