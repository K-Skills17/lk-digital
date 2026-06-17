export interface PortfolioItem {
  client: string;
  description: string;
  url: string;
}

export interface SegmentFAQ {
  question: string;
  answer: string;
}

export interface SegmentConfig {
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    secondaryLabel: string;
    whatsappMessage: string;
  };
  problems: {
    heading: string;
    items: string[];
  };
  features: {
    heading: string;
    items: { title: string; description: string }[];
  };
  demo: {
    heading: string;
    description: string;
    url: string; // TODO per segment
    screenshotAlt: string;
  };
  process: {
    heading: string;
    steps: { number: string; title: string; description: string }[];
  };
  pricing: {
    heading: string;
    buildFee: string; // e.g. "2.500"
    monthlyFee: string; // e.g. "150"
    paymentTerms: string;
  };
  compliance: {
    heading: string;
    text: string;
  };
  portfolio: {
    heading: string;
    description: string;
    items: PortfolioItem[];
  };
  guarantee: {
    heading: string;
    text: string;
  };
  faqs: SegmentFAQ[];
  finalCta: {
    scarcity: string;
    ctaLabel: string;
  };
}

export const segments: Record<string, SegmentConfig> = {
  dentistas: {
    slug: "dentistas",
    title: "Sites Premium para Dentistas | LK Digital",
    metaDescription:
      "Site profissional para seu consultório odontológico. Pronto em dias, você mesmo atualiza. Conforme normas do CFO/CRO.",
    hero: {
      headline: "Seu consultório precisa de pacientes, não de um site bonito.",
      subheadline:
        "Site premium para dentistas — pronto em dias, você mesmo atualiza. Preço de lançamento por tempo limitado.",
      ctaLabel: "Quero Meu Site",
      secondaryLabel: "Ver exemplo real",
      whatsappMessage:
        "Olá! Sou dentista e quero saber mais sobre o site premium.",
    },
    problems: {
      heading: "O custo de não ter presença digital",
      items: [
        "Pacientes procuram no Google e encontram seu concorrente — não você.",
        "Seu perfil no Instagram não aparece quando alguém busca 'dentista perto de mim'.",
        "Sem site profissional, você depende exclusivamente de indicação boca a boca.",
      ],
    },
    features: {
      heading: "O que você recebe",
      items: [
        {
          title: "Site premium e rápido",
          description:
            "Design sob medida, carregamento instantâneo, experiência profissional em qualquer dispositivo.",
        },
        {
          title: "Agendamento via WhatsApp",
          description:
            "Botão direto para WhatsApp — pacientes marcam consulta sem fricção.",
        },
        {
          title: "Otimizado para Google (SEO)",
          description:
            "Estruturado para aparecer quando pacientes buscam dentistas na sua região.",
        },
        {
          title: "Visível para IA (ChatGPT, Gemini)",
          description:
            "Sites preparados para serem citados por assistentes de IA — o novo canal de descoberta que seus concorrentes ainda ignoram.",
        },
        {
          title: "Você mesmo atualiza",
          description:
            "Sistema de conteúdo que você controla — sem depender de desenvolvedor para cada mudança.",
        },
      ],
    },
    demo: {
      heading: "Veja um exemplo real",
      description:
        "Este é o site que construímos para a Biodonth — clínica odontológica em operação.",
      url: "https://biodonth.com.br",
      screenshotAlt: "Captura de tela do site da Biodonth",
    },
    process: {
      heading: "Como funciona",
      steps: [
        {
          number: "01",
          title: "Formulário rápido",
          description:
            "Você responde algumas perguntas sobre seu consultório e o que precisa.",
        },
        {
          number: "02",
          title: "Montamos em poucos dias",
          description:
            "Desenvolvemos seu site sob medida com qualidade premium.",
        },
        {
          number: "03",
          title: "Você atualiza sozinho",
          description:
            "Entregamos o site pronto e você gerencia o conteúdo de forma independente.",
        },
      ],
    },
    pricing: {
      heading: "Investimento",
      buildFee: "2.000", // TODO: confirm price
      monthlyFee: "150",
      paymentTerms: "50% na aprovação do projeto, 50% na entrega.",
    },
    compliance: {
      heading: "Conformidade com normas do CFO/CRO",
      text: "Construímos sites que respeitam as normas de publicidade do Conselho Federal de Odontologia. Sem divulgação de preços de procedimentos, sem imagens de antes e depois, com exibição do dentista responsável e número de CRO.",
    },
    portfolio: {
      heading: "Sites que já entregamos",
      description: "Veja outros projetos que construímos com o mesmo padrão premium.",
      items: [
        {
          client: "Biodonth",
          description: "Site institucional para clínica odontológica — agendamento via WhatsApp, SEO local, conformidade CFO/CRO.",
          url: "https://biodonth.com.br",
        },
        {
          client: "LK Digital",
          description: "Nosso próprio site — construído com o mesmo padrão que entregamos aos clientes.",
          url: "https://lkdigital.odo.br",
        },
      ],
    },
    guarantee: {
      heading: "Satisfação garantida",
      text: "Se você não aprovar o resultado final, devolvemos 100% do valor pago. Sem burocracia, sem letras miúdas. Trabalhamos com revisões até você estar satisfeito porque confiamos no que entregamos.",
    },
    faqs: [
      {
        question: "Em quanto tempo meu site fica pronto?",
        answer:
          "O prazo médio é de 5 a 10 dias úteis após o envio das informações e materiais.",
      },
      {
        question: "O que está incluso no site?",
        answer:
          "Design personalizado, até 5 páginas, otimização para Google (SEO), otimização para IA (ChatGPT, Gemini), integração com WhatsApp, formulário de contato e configuração de domínio próprio.",
      },
      {
        question: "Como funciona a atualização de conteúdo?",
        answer:
          "Você recebe acesso a um sistema simples onde pode editar textos, trocar fotos e adicionar conteúdo sem precisar de desenvolvedor.",
      },
      {
        question: "Posso usar meu próprio domínio?",
        answer:
          "Sim. Se já possui um domínio, fazemos a configuração. Se não, ajudamos a registrar um.",
      },
      {
        question: "O que acontece se eu quiser cancelar?",
        answer:
          "O site é seu. Se cancelar a manutenção mensal, o site continua no ar — você perde apenas suporte e atualizações assistidas.",
      },
    ],
    finalCta: {
      scarcity: "Vagas com preço de lançamento limitadas este mês",
      ctaLabel: "Garantir Minha Vaga",
    },
  },

  advogados: {
    slug: "advogados",
    title: "Sites Premium para Advogados | LK Digital",
    metaDescription:
      "Site institucional para escritórios de advocacia. Discreto, profissional e dentro das normas da OAB.",
    hero: {
      headline: "Seu escritório merece uma presença digital à altura da sua reputação.",
      subheadline:
        "Site institucional para advogados — discreto, profissional e pronto em dias. Preço de lançamento por tempo limitado.",
      ctaLabel: "Quero Meu Site",
      secondaryLabel: "Ver exemplo real",
      whatsappMessage:
        "Olá! Vim pela página de advogados e quero saber mais.",
    },
    problems: {
      heading: "O custo de não ter presença digital",
      items: [
        "Potenciais clientes buscam advogados no Google e escolhem quem tem site profissional.",
        "Sem presença institucional, seu escritório perde credibilidade antes do primeiro contato.",
        "Depender apenas de indicação limita o crescimento do escritório.",
      ],
    },
    features: {
      heading: "O que você recebe",
      items: [
        {
          title: "Site institucional premium",
          description:
            "Design sóbrio e elegante que transmite autoridade e confiança.",
        },
        {
          title: "Contato direto via WhatsApp",
          description:
            "Clientes entram em contato de forma rápida e discreta.",
        },
        {
          title: "Otimizado para Google (SEO)",
          description:
            "Apareça quando buscam advogados na sua área de atuação e região.",
        },
        {
          title: "Visível para IA (ChatGPT, Gemini)",
          description:
            "Sites estruturados para serem recomendados por assistentes de IA — um canal de captação que seus concorrentes ainda não exploram.",
        },
        {
          title: "Você mesmo atualiza",
          description:
            "Atualize áreas de atuação, artigos e informações sem depender de terceiros.",
        },
      ],
    },
    demo: {
      heading: "Veja um exemplo real",
      description: "Em breve — estamos preparando uma demonstração para escritórios de advocacia.",
      url: "#", // TODO: add demo URL
      screenshotAlt: "Exemplo de site para escritório de advocacia",
    },
    process: {
      heading: "Como funciona",
      steps: [
        {
          number: "01",
          title: "Formulário rápido",
          description: "Você nos conta sobre seu escritório e suas necessidades.",
        },
        {
          number: "02",
          title: "Montamos em poucos dias",
          description: "Desenvolvemos seu site com qualidade institucional premium.",
        },
        {
          number: "03",
          title: "Você atualiza sozinho",
          description: "Gerencie conteúdo de forma independente e segura.",
        },
      ],
    },
    pricing: {
      heading: "Investimento",
      buildFee: "2.000", // TODO
      monthlyFee: "150",
      paymentTerms: "50% na aprovação do projeto, 50% na entrega.",
    },
    compliance: {
      heading: "Conformidade com a OAB",
      text: "Construímos sites que respeitam o Código de Ética e as normas de publicidade da Ordem dos Advogados do Brasil. Comunicação institucional, sem captação indevida de clientela ou mercantilização.",
    },
    portfolio: {
      heading: "Sites que já entregamos",
      description: "Veja outros projetos que construímos com o mesmo padrão premium.",
      items: [
        {
          client: "Biodonth",
          description: "Site institucional para clínica odontológica — design limpo, SEO local, conformidade regulatória.",
          url: "https://biodonth.com.br",
        },
        {
          client: "LK Digital",
          description: "Nosso próprio site — construído com o mesmo padrão que entregamos aos clientes.",
          url: "https://lkdigital.odo.br",
        },
      ],
    },
    guarantee: {
      heading: "Satisfação garantida",
      text: "Se você não aprovar o resultado final, devolvemos 100% do valor pago. Sem burocracia, sem letras miúdas. Trabalhamos com revisões até você estar satisfeito.",
    },
    faqs: [
      {
        question: "Em quanto tempo meu site fica pronto?",
        answer: "O prazo médio é de 5 a 10 dias úteis após o envio das informações.",
      },
      {
        question: "O que está incluso?",
        answer:
          "Design personalizado, até 5 páginas, SEO, otimização para IA, WhatsApp, formulário de contato e domínio próprio.",
      },
      {
        question: "Como funciona a atualização de conteúdo?",
        answer: "Sistema simples para editar textos e adicionar artigos sem desenvolvedor.",
      },
      {
        question: "Posso usar meu próprio domínio?",
        answer: "Sim. Configuramos seu domínio existente ou ajudamos a registrar um novo.",
      },
      {
        question: "O que acontece se eu cancelar a manutenção?",
        answer: "O site continua no ar — você perde suporte e atualizações assistidas.",
      },
    ],
    finalCta: {
      scarcity: "Vagas com preço de lançamento limitadas este mês",
      ctaLabel: "Garantir Minha Vaga",
    },
  },

  ecommerce: {
    slug: "ecommerce",
    title: "Sites Premium para E-commerce | LK Digital",
    metaDescription:
      "Loja virtual profissional que vende enquanto você dorme. Rápida, otimizada e pronta em dias.",
    hero: {
      headline: "Venda enquanto dorme — com uma loja que funciona de verdade.",
      subheadline:
        "Loja virtual premium — rápida, otimizada para conversão e pronta em dias. Preço de lançamento por tempo limitado.",
      ctaLabel: "Quero Minha Loja",
      secondaryLabel: "Ver exemplo real",
      whatsappMessage:
        "Olá! Quero saber mais sobre a loja virtual premium.",
    },
    problems: {
      heading: "O custo de uma loja amadora",
      items: [
        "Loja lenta perde vendas — cada segundo de carregamento custa conversões.",
        "Design genérico não transmite confiança e reduz a taxa de compra.",
        "Sem SEO, seus produtos não aparecem quando clientes buscam no Google.",
      ],
    },
    features: {
      heading: "O que você recebe",
      items: [
        {
          title: "Loja rápida e profissional",
          description:
            "Carregamento instantâneo, design premium que converte visitantes em compradores.",
        },
        {
          title: "Atendimento via WhatsApp",
          description:
            "Tire dúvidas e feche vendas direto pelo WhatsApp com um clique.",
        },
        {
          title: "Otimizada para Google (SEO)",
          description:
            "Produtos encontrados organicamente — tráfego que não custa por clique.",
        },
        {
          title: "Visível para IA (ChatGPT, Gemini)",
          description:
            "Loja estruturada para ser recomendada por assistentes de IA quando clientes pedem sugestões de compra.",
        },
        {
          title: "Você mesmo atualiza",
          description:
            "Adicione produtos, altere preços e gerencie estoque sem depender de ninguém.",
        },
      ],
    },
    demo: {
      heading: "Veja um exemplo real",
      description: "Em breve — estamos preparando uma demonstração de loja virtual.",
      url: "#", // TODO
      screenshotAlt: "Exemplo de loja virtual premium",
    },
    process: {
      heading: "Como funciona",
      steps: [
        {
          number: "01",
          title: "Formulário rápido",
          description: "Conte sobre seus produtos e necessidades.",
        },
        {
          number: "02",
          title: "Montamos em poucos dias",
          description: "Loja sob medida com design otimizado para conversão.",
        },
        {
          number: "03",
          title: "Você gerencia sozinho",
          description: "Controle total sobre produtos, preços e conteúdo.",
        },
      ],
    },
    pricing: {
      heading: "Investimento",
      buildFee: "3.500", // TODO
      monthlyFee: "150",
      paymentTerms: "50% na aprovação do projeto, 50% na entrega.",
    },
    compliance: {
      heading: "Segurança e confiança",
      text: "Sites construídos com boas práticas de segurança, certificado SSL e estrutura que transmite confiança ao comprador.",
    },
    portfolio: {
      heading: "Sites que já entregamos",
      description: "Veja outros projetos que construímos com o mesmo padrão premium.",
      items: [
        {
          client: "Biodonth",
          description: "Site institucional para clínica odontológica — design premium, SEO local, integração WhatsApp.",
          url: "https://biodonth.com.br",
        },
        {
          client: "LK Digital",
          description: "Nosso próprio site — construído com o mesmo padrão que entregamos aos clientes.",
          url: "https://lkdigital.odo.br",
        },
      ],
    },
    guarantee: {
      heading: "Satisfação garantida",
      text: "Se você não aprovar o resultado final, devolvemos 100% do valor pago. Sem burocracia, sem letras miúdas. Trabalhamos com revisões até você estar satisfeito.",
    },
    faqs: [
      {
        question: "Em quanto tempo minha loja fica pronta?",
        answer: "O prazo médio é de 7 a 14 dias úteis dependendo da quantidade de produtos.",
      },
      {
        question: "O que está incluso?",
        answer:
          "Design personalizado, catálogo de produtos, carrinho, integração com pagamento, SEO, otimização para IA e WhatsApp.",
      },
      {
        question: "Como adiciono produtos?",
        answer: "Painel simples para cadastrar, editar e remover produtos sem desenvolvedor.",
      },
      {
        question: "Posso usar meu próprio domínio?",
        answer: "Sim. Configuramos seu domínio ou ajudamos a registrar um.",
      },
      {
        question: "O que acontece se eu cancelar?",
        answer: "A loja continua no ar — você perde suporte e atualizações assistidas.",
      },
    ],
    finalCta: {
      scarcity: "Vagas com preço de lançamento limitadas este mês",
      ctaLabel: "Garantir Minha Vaga",
    },
  },

  negocios: {
    slug: "negocios",
    title: "Sites Premium para Pequenos Negócios | LK Digital",
    metaDescription:
      "Site profissional para seu negócio ser encontrado no Google. Pronto em dias, você mesmo atualiza.",
    hero: {
      headline: "Seu negócio existe — mas seus clientes conseguem te encontrar?",
      subheadline:
        "Site premium para pequenos negócios — pronto em dias, você mesmo atualiza. Preço de lançamento por tempo limitado.",
      ctaLabel: "Quero Meu Site",
      secondaryLabel: "Ver exemplo real",
      whatsappMessage:
        "Olá! Tenho um negócio e quero saber mais sobre o site premium.",
    },
    problems: {
      heading: "O custo de ser invisível online",
      items: [
        "Clientes buscam no Google e encontram seu concorrente — não você.",
        "Sem site, você depende apenas de redes sociais que limitam seu alcance.",
        "Um negócio sem presença digital perde credibilidade antes do primeiro contato.",
      ],
    },
    features: {
      heading: "O que você recebe",
      items: [
        {
          title: "Site profissional e rápido",
          description:
            "Design premium que funciona perfeitamente em celular, tablet e computador.",
        },
        {
          title: "Contato direto via WhatsApp",
          description:
            "Clientes entram em contato com um toque — sem barreiras.",
        },
        {
          title: "Apareça no Google",
          description:
            "Site otimizado para buscas — seja encontrado por quem procura o que você oferece.",
        },
        {
          title: "Visível para IA (ChatGPT, Gemini)",
          description:
            "Sites preparados para serem recomendados por assistentes de IA — seus clientes já estão perguntando para a IA onde encontrar o que você vende.",
        },
        {
          title: "Você mesmo atualiza",
          description:
            "Atualize textos, fotos e informações sem depender de ninguém.",
        },
      ],
    },
    demo: {
      heading: "Veja um exemplo real",
      description: "Em breve — estamos preparando uma demonstração para pequenos negócios.",
      url: "#", // TODO
      screenshotAlt: "Exemplo de site para pequeno negócio",
    },
    process: {
      heading: "Como funciona",
      steps: [
        {
          number: "01",
          title: "Formulário rápido",
          description: "Conte sobre seu negócio em poucas perguntas.",
        },
        {
          number: "02",
          title: "Montamos em poucos dias",
          description: "Seu site profissional sob medida, com qualidade premium.",
        },
        {
          number: "03",
          title: "Você atualiza sozinho",
          description: "Controle total sobre seu conteúdo, sem complicação.",
        },
      ],
    },
    pricing: {
      heading: "Investimento",
      buildFee: "2.000", // TODO
      monthlyFee: "150",
      paymentTerms: "50% na aprovação do projeto, 50% na entrega.",
    },
    compliance: {
      heading: "Qualidade garantida",
      text: "Sites construídos com as melhores práticas de desenvolvimento web, garantindo velocidade, segurança e boa experiência para seus clientes.",
    },
    portfolio: {
      heading: "Sites que já entregamos",
      description: "Veja outros projetos que construímos com o mesmo padrão premium.",
      items: [
        {
          client: "Biodonth",
          description: "Site institucional para clínica odontológica — design premium, SEO local, integração WhatsApp.",
          url: "https://biodonth.com.br",
        },
        {
          client: "LK Digital",
          description: "Nosso próprio site — construído com o mesmo padrão que entregamos aos clientes.",
          url: "https://lkdigital.odo.br",
        },
      ],
    },
    guarantee: {
      heading: "Satisfação garantida",
      text: "Se você não aprovar o resultado final, devolvemos 100% do valor pago. Sem burocracia, sem letras miúdas. Trabalhamos com revisões até você estar satisfeito.",
    },
    faqs: [
      {
        question: "Em quanto tempo meu site fica pronto?",
        answer: "O prazo médio é de 5 a 10 dias úteis.",
      },
      {
        question: "O que está incluso?",
        answer:
          "Design personalizado, até 5 páginas, SEO, otimização para IA, WhatsApp, formulário de contato e domínio próprio.",
      },
      {
        question: "Como funciona a atualização?",
        answer: "Sistema intuitivo para você editar textos e fotos sem ajuda técnica.",
      },
      {
        question: "Posso usar meu próprio domínio?",
        answer: "Sim. Configuramos seu domínio ou ajudamos a registrar um novo.",
      },
      {
        question: "E se eu quiser cancelar?",
        answer: "O site é seu e continua no ar. Sem manutenção, perde suporte e atualizações.",
      },
    ],
    finalCta: {
      scarcity: "Vagas com preço de lançamento limitadas este mês",
      ctaLabel: "Garantir Minha Vaga",
    },
  },
};
