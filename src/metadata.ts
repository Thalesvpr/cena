export const metadata = {
  brand: {
    name: "Cena Nacional",
    logourl: "/cena_logo.png",
    logotext: "Centro de Estudos Nacionais Autônomos",
    slogan: "Conectando a cultura brasileira",
    description:
      "Promovemos a cultura brasileira através de eventos memoráveis, conectando artistas, produtores e público em experiências únicas.",
    contact: {
      email: "contato@cenanacional.com.br",
      phone: "(11) 99999-9999",
      address: "Rua da Cultura, 123 - São Paulo/SP",
    },
    social: [
      {
        name: "Twitter",
        url: "https://x.com/CenaNacional_",
        icon: "FaXTwitter",
        handle: "@CenaNacional_",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/cenanacional/",
        icon: "FaInstagram",
        handle: "@cenanacional",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/c/CenaNacional",
        icon: "FaYoutube",
        handle: "Cena Nacional",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/CenaNacional",
        icon: "FaFacebookF",
        handle: "Cena Nacional",
      },
    ],
  },
  navigation: {
    header: [
      {
        label: "Início",
        path: "/",
        icon: "MdHome",
      },
      {
        label: "Eventos",
        path: "/eventos",
        icon: "MdEvent",
      },
      {
        label: "Artistas",
        path: "/artistas",
        icon: "MdPeople",
      },
      {
        label: "Blog",
        path: "/blog",
        icon: "MdArticle",
      },
      {
        label: "Contato",
        path: "/contato",
        icon: "MdMail",
      },
    ],
    footer: [
      {
        label: "Termos de Uso",
        path: "/termos",
      },
      {
        label: "Política de Privacidade",
        path: "/privacidade",
      },
      {
        label: "Trabalhe Conosco",
        path: "/trabalhe-conosco",
      },
      {
        label: "FAQ",
        path: "/faq",
      },
    ],
  },
  sections: {
    hero: {
      title: "Bem-vindo à Cena Nacional",
      biglogourl: "/cena_big_logo.png",

      description:
        "Explore os melhores eventos culturais do Brasil e conecte-se com a arte que move o país.",
      cta: [
        {
          label: "Ver Eventos",
          path: "/eventos",
          icon: "MdEvent",
        },
        {
          label: "Sobre Nós",
          path: "/sobre",
          icon: "MdGroups3",
        },
      ],
    },
    about: {
      title: "Sobre a Cena Nacional",
      description:
        "Somos uma plataforma dedicada a promover e conectar a cultura brasileira, oferecendo uma experiência única para artistas e público.",
      highlights: [
        {
          icon: "MdPeople",
          title: "+500 Artistas",
          description: "Conectados em nossa plataforma",
        },
        {
          icon: "MdEvent",
          title: "+1000 Eventos",
          description: "Realizados com nosso apoio",
        },
        {
          icon: "MdMap",
          title: "Nacional",
          description: "Presente em todo o Brasil",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      description: "Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!",
      form: {
        name: "Seu Nome",
        email: "Seu E-mail",
        message: "Sua Mensagem",
        submit: "Enviar Mensagem",
      },
    },
  },
  legal: {
    terms: {
      title: "Termos de Uso",
      content: "Texto completo dos termos de uso...",
    },
    privacy: {
      title: "Política de Privacidade",
      content: "Texto completo da política de privacidade...",
    },
  },
};
