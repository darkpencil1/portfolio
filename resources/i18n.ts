export const translations = {
  en: {
    title: "Art of Ville Lähetkangas",
    nav: {
      artwork: "Artwork",
      about: "About",
      contact: "Contact",
      shop: "Shop",
    },
    langButton: "FI",
    about: {
      title: "Hello there",
      body: `My name is Ville Lähetkangas. I'm a portrait and character artist based in Helsinki, Finland. I originally did mainly digital art, but since then I've taken a turn into traditional painting with oils and gouache. I also share my drawings here, they are something I enjoy doing a lot. Thanks for visiting the site, feel free to drop me a message from the contact section :)`,
      imageAlt: "Here should be my face. Why it's not here?",
      imageDesc: "Cheers",
    },
    contact: {
      pageTitle: "Contact me",
      pageSubtitle: "Always joy to hear from you, feel free to contact me.",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        message: "Max 500 characters",
      },
      captcha: {
        label: "Please prove that you're not a bot. Copy the generated content.",
        generateButton: "Generate CAPTCHA",
        inputPlaceholder: "Write here the generated text",
      },
      submit: {
        idle: "Submit",
        sending: "Sending...",
      },
      errors: {
        generic: "An error occured, please try again soon.",
        checkInputs: "Check the inputs:",
      },
      successPopup: {
        title: "Message succesfully sent!",
        body: "I'll get back to you soon.",
      },
    },
    footer: {
      commissionTitle: "Accepting commissions!",
      commissionBody: "Send me a message via contact form.",
      pagesHeading: "Pages",
      socialHeading: "Social",
      links: {
        home: "Home",
        about: "About",
        contact: "Contact",
        shop: "Shop",
      },
      social: {
        instagram: "Instagram",
      },
      copyright: (year: number) => `© ${year} Ville Lähetkangas`,
    },
    shop: {
      banner: {
        title: "Shop",
        desc: "Looking for a unique, hand-painted artwork? I'm open for commissions.",
      },
      noProducts: {
        title: "No available products...yet",
        desc: `I'll have prints and original paintings available through this shop. Stay tuned.`,
      },
      productItem: {
        from: "from",
        readMore: "Read more",
      },
    },
    product: {
      selectPrompt: "Please select a product from shop to view details.",
      priceHeadExtra: "+100€ for each additional head",
      priceLabel: "Price:",
      estimatedTime: "Estimated time:",
      estimatedDuration: "1 week",
      shipping: "Shipping:",
      shippingRegion: "within Finland",
      contactButton: "Contact me",
    },
    productTypes: {
      Commission: "Commission",
      Poster: "Poster",
    },
    artwork: {
      topics: {
        all: "All",
        painting: "Painting",
        digital: "Digital",
        drawing: "Drawing",
      },
    },
  },
  fi: {
    title: "Ville Lähetkangas",
    nav: {
      artwork: "Taideteokset",
      about: "Tietoa",
      contact: "Ota yhteyttä",
      shop: "Kauppa",
    },
    langButton: "EN",
    about: {
      title: "Hei",
      body: `Nimeni on Ville Lähetkangas. Olen muotokuva- ja hahmotaiteilija, joka asuu Helsingissä. Maalaan nykyään pääasiassa öljyväreillä ja jonkun verran guassilla. Sivuilla näet myös piirustuksiani ja digitaalista taidetta, mitä tein etenkin ennen. Teen tilaustöitä, joten jos olet harkinnut muotokuvaa niin ota rohkeasti yhteyttä yhteydenottolomakkeen kautta.`,
      imageAlt: "Tässä pitäisi olla kasvoni. Miksi se ei ole täällä?",
      imageDesc: "Terve!",
    },
    contact: {
      pageTitle: "Ota yhteyttä",
      pageSubtitle: "Jos on kysyttävää tai ajatuksia niin laita tästä viestiä. Kuulen mielelläni sinusta.",
      labels: {
        name: "Nimi",
        email: "Sähköposti",
        message: "Viesti",
      },
      placeholders: {
        message: "Max 500 merkkiä",
      },
      captcha: {
        label: "Todistathan ystävällisesti, ettet ole botti. Kopioi generoitu sisältö.",
        generateButton: "Generoi CAPTCHA",
        inputPlaceholder: "Kirjoita generoitu teksti tähän",
      },
      submit: {
        idle: "Lähetä",
        sending: "Lähetetään...",
      },
      errors: {
        generic: "Tapahtui virhe, yritä hetken päästä uudelleen.",
        checkInputs: "Tarkista kentät:",
      },
      successPopup: {
        title: "Viesti lähetetty onnistuneesti!",
        body: "Vastaan sinulle pian.",
      },
    },
    footer: {
      commissionTitle: "Teen tilaustöitä!",
      commissionBody: "Lähetä minulle viesti yhteydenottolomakkeen kautta.",
      pagesHeading: "Sivut",
      socialHeading: "Some",
      links: {
        home: "Koti",
        about: "Tietoa",
        contact: "Ota yhteyttä",
        shop: "Kauppa",
      },
      social: {
        instagram: "Instagram",
      },
      copyright: (year: number) => `© ${year} Ville Lähetkangas`,
    },
    shop: {
      banner: {
        title: "Kauppa",
        desc: "Etsitkö uniikkia, käsin maalattua teosta? Minulta voin tilata tilaustyön.",
      },
      noProducts: {
        title: "Ei saatavilla olevia tuotteita...vielä",
        desc: `Tähän kauppaan tulee myyntiin tilaustöitä ja alkuperäisteoksia. Pysy kuulolla.`,
      },
      productItem: {
        from: "alkaen",
        readMore: "Lue lisää",
      },
    },
    product: {
      selectPrompt: "Valitse tuote kaupasta nähdäksesi lisätiedot.",
      priceHeadExtra: "+100€ jokaisesta lisäpäästä",
      priceLabel: "Hinta:",
      estimatedTime: "Arvioitu aika:",
      estimatedDuration: "1 viikko",
      shipping: "Toimitus:",
      shippingRegion: "Suomen sisällä",
      contactButton: "Ota yhteyttä",
    },
    productTypes: {
      Commission: "Tilaustyö",
      Poster: "Juliste",
    },
    artwork: {
      topics: {
        all: "Kaikki",
        painting: "Maalaus",
        digital: "Digitaalinen",
        drawing: "Piirustus",
      },
    },
  },
} as const;

export type SupportedLang = keyof typeof translations;
