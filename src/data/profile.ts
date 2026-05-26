export const profile = {
  name: "Miikka Mäkelä",
  title: "Verkkokehittäjä · Full-Stack Care / Huolenpito",
  tagline:
    "Ihmisläheinen kehittäjä · Into-Digital (WordPress, WooCommerce, integraatiot) · Jyväskylä",
  positioning:
    "Autan rakentamaan WordPress-kokonaisuuksia, joissa suorituskyky, siistit integraatiot ja mitattava hyöty kulkevat käsi kädessä.",
  location: "Jyväskylä, Suomi",
  email: "miikka.mla@gmail.com",
  linkedin: "https://www.linkedin.com/in/miikkamgr/",
  github: "https://github.com/miikkamgr",
  cvPath: "/miikka-makela-cv.pdf",
  avatar: "/profile-circle.png",
  avatarAlt: "Miikka Mäkelän profiilikuva",
  metaTitle: "Miikka Mäkelä | WordPress, WooCommerce, integraatiot",
  metaDescription:
    "Mediatekniikan insinööri ja full stack -kehittäjä. WordPress, WooCommerce, ACF, integraatiot ja tekninen ylläpito Into-Digitalilla.",
  portfolioMetaTitle: "Miikka Mäkelä | Työnäytteet ja tuotantotyö",
  portfolioMetaDescription:
    "WordPress- ja WooCommerce-tuotantotyö: integraatiot, automaatio ja suorituskyky. Työnäytteitä oikeista asiakasprojekteista."
} as const;

export const cvSnapshot = {
  title: "Verkkokehittäjä · Full-Stack Care / Huolenpito",
  tenure: "5+ vuotta · Into-Digital Oy",
  location: profile.location,
  focus: "WordPress, WooCommerce, ACF, integraatiot, analytiikka, ylläpito",
  openTo: "Avoin uusille työmahdollisuuksille — WordPress, full stack, ylläpito ja integraatiot"
} as const;

export const cvSections = {
  eyebrow: "Ansioluettelo",
  experience: "Kokemus",
  clients: "Asiakastyötä",
  personal: "Omat projektit",
  personalNote: "Rakennettu ja ylläpidetty työn ulkopuolella.",
  skills: "Taidot",
  cases: "Tekniset työnäytteet",
  casesNote: "Tarkemmin <a href=\"/\">etusivulla</a>.",
  education: "Koulutus",
  interests: "Kiinnostuksen kohteet",
  languages: "Kielet",
  contact: "Yhteystiedot",
  downloadPdf: "Lataa CV (PDF)",
  downloadPdfShort: "Lataa CV (PDF)",
  portfolioLink: "Työnäytteet",
  problem: "Ongelma",
  work: "Mitä tein",
  result: "Lopputulos",
  tech: "Työkalut"
} as const;

export const hero = {
  headline:
    "WordPress-kokonaisuudet, joissa suorituskyky, integraatiot ja mitattava hyöty kulkevat käsi kädessä.",
  lead:
    "Mediatekniikan insinööri ja full stack -kehittäjä Into-Digitalin Huolenpidossa. Vahvuuteni ovat WordPress, WooCommerce, ACF, WP-CLI, integraatiot, analytiikka ja tekninen ylläpito.",
  credibility:
    "Työskentelen muun muassa World Vision Suomen, Burger King Suomen ja Plan Suomen verkkopalvelujen parissa. Työn ytimessä ovat turvallisuus, suorituskyky ja jatkuva kehitys WordPress-alustalla."
} as const;

export const proofPoints = [
  "WordPress & WooCommerce",
  "ACF & Gutenberg",
  "WP-CLI & automaatio",
  "LiteSpeed & Redis",
  "GA4 & Consent Mode",
  "Lando & Docker",
  "WPML & monikielisyys",
  "REST & SOAP"
] as const;

export const portfolio = {
  proofSection: {
    label: "Työnäytteet",
    title: "Miten ratkon sotkuja",
    intro:
      "Teknisiä tuotantoesimerkkejä. Asiakastyö ja pitkäaikainen ylläpito löytyvät CV:stä — mm. World Vision Suomi, Burger King Suomi ja Plan Suomi."
  }
} as const;

export const stories = [
  {
    title: "Kuinka säästin viisi tuntia viikossa yhden asiakkaan latausputkesta",
    mess: "Kymmeniä projekteja, sama manuaalinen kaava: tietokannan synkkaus, uploadit, URL-vaihdot ja eri .env jokaisessa ympäristössä. Joku ohitti aina jonkin askeleen ja ihmetteli, miksi staging ei näytä samalta.",
    work: "Rakensin Lando-pohjaisen putken ja WP-CLI-apurit: dry run, varmuuskopiot, URL-korvaukset ja selkeä polku localista stagingiin ja tuotantoon.",
    outcome:
      "Vähemmän säätöä, nopeampi debuggaus ja vähemmän “kuka koski tuotantoon” -paniikkia.",
    tags: ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"]
  },
  {
    title: "Kun Stripe, Gravity Forms ja aikataulut eivät puhuneet samaa kieltä",
    mess: "Maksustatukset eivät aina ehtineet mukaan ennen kuin vienti ajettiin — raportit ja todellisuus erosivat.",
    work: "Yhtenäinen Stripe-laskulogiikka, Gravity Forms -päivitykset, audit-metadata ja WP-CLI-rekonsiliointi ristiriitojen löytämiseen.",
    outcome: "Luotettavampi maksudata ja polku, jota tiimi voi auditoida ilman arvailua.",
    tags: ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"]
  },
  {
    title: "WooCommerce-varasto, joka hävisi vain kellon vaihtuessa",
    mess: "Tuotteet katosivat kieliversioista importin jälkeen — mutta vain tiettyyn aikaan vuodesta. PIM, tagit ja aikavyöhyke eivät olleet linjassa.",
    work: "Jäljitin PIM/kategoria/tag-ristiriidat ja säädin EN/DE/FI-näkyvyyslogiikan importin ympärille.",
    outcome:
      "Selkeä syy-seuraussuhde ja prosessi, jonka kautta tiimi pystyi diagnosoimaan ongelman ilman “kokeillaan uudestaan” -ketjua.",
    tags: ["WooCommerce", "WP All Import", "WPML", "PIM"]
  }
] as const;

export const about = {
  title: "Graafikosta full stack -kehittäjäksi",
  short:
    "29-vuotias mediatekniikan insinööri. Aloitin graafikkona Zaibatsulla, opin koodaamisen tekemällä ja olen työskennellyt yli viisi vuotta Into-Digitalin Huolenpidossa. Teen mieluummin kuin puhun, mutta dokumentoin sen verran, että seuraavalla tekijällä on helpompaa.",
  paragraphs: [
    "Autan rakentamaan WordPress-kokonaisuuksia, joissa suorituskyky, siistit integraatiot ja mitattava hyöty kulkevat käsi kädessä. Vahvinta aluettani ovat WordPress, WooCommerce, ACF, WP-CLI, integraatiot, analytiikka ja tekninen ylläpito.",
    "Arjessa liikun luontevasti koodin, ongelmanratkaisun, koordinoinnin ja asiakkaan tarpeiden välillä. Usein roolini on viedä projektia käytännössä eteenpäin: pidän langat käsissä, selkeytän tekemistä ja huolehdin, että asiat oikeasti etenevät.",
    "Uusi ei pelota — opin parhaiten tekemällä. AI-työkalut ovat vahva osa omaa työskentelyäni."
  ],
  interestsBlurb:
    "Vapaa-ajalla: 3D-tulostus, paikallisten LLM:ien säätö ja kokeilu, kaikki tekniikkaan liittyvä, botaniikka — ja melkein aina seuraava projekti on jo suunnitteilla."
} as const;

export const interests = [
  "3D-tulostus",
  "Paikalliset LLM:t",
  "Tekniikka",
  "Botaniikka",
  "Seuraava projekti"
] as const;

export const experiences = [
  {
    company: "Into-Digital Oy",
    role: "Verkkokehittäjä · Full-Stack Care / Huolenpito",
    period: "helmi 2021 –",
    location: "Jyväskylä",
    bullets: [
      "Rakennan, ylläpidän ja toisinaan elvytän WordPress- ja WooCommerce-sivustoja räätälöidyillä ACF-toteutuksilla, ripauksella Vuea ja reippaalla määrällä komentorivitaikuutta.",
      "Huolenpito-tiimissä pidän asiakkaiden sivustot turvallisina, nopeina ja toimivina. Työ ulottuu WP-CLI-skripteistä LiteSpeed-virityksiin, API-integraatioihin ja omiin lisäosiin.",
      "World Vision Suomi, Burger King Suomi, Plan Suomi ja muut — ylläpito, analytiikkaan perustuva kehitys ja tuotantodebuggaus.",
      "Autan tiimiä selvittämään, miksi jokin toimii vain staging-ympäristössä, ja vien projektia käytännössä eteenpäin."
    ]
  },
  {
    company: "Zaibatsu Interactive Inc.",
    role: "Graafikon harjoittelija",
    period: "syys 2019 – touko 2020",
    location: "Jyväskylä",
    bullets: [
      "Aloitin graafisesta suunnittelusta, siirryin 3D-mallinnukseen ja edelleen JavaScript-tehtäviin (Vue, React).",
      "Tärkeä askel kohti full stack -työtä ja visuaalista silmää WordPress-projekteissa."
    ]
  }
] as const;

export const personalProjectsSection = {
  label: "Omat projektit",
  title: "Rakennettu työn ulkopuolella",
  intro:
    "Näissä yhdistyvät oma kiinnostukseni urheiluun, paikalliseen ravintolaan ja fanityökaluihin. Suunnittelu, toteutus ja ylläpito ovat omalla vastuullani — ei asiakastyötä Into-Digitalilla."
} as const;

export const personalProjects = [
  {
    name: "Suomalaiset NHL:ssä",
    url: "https://suomalaisetnhlssa.fi/",
    hostname: "suomalaisetnhlssa.fi",
    description:
      "Suomalaisten NHL-pelaajien seuranta yhdestä paikasta: ottelukohtaiset maalit, syötöt, pisteet ja peliaika. Tiedot tulevat NHL:n virallisista lähteistä ja päivittyvät myös pelien aikana.",
    tags: ["NHL API", "Live-tilastot", "Data"]
  },
  {
    name: "Waves Jyväskylä",
    url: "https://wavesjyvaskyla.fi/",
    hostname: "wavesjyvaskyla.fi",
    description:
      "Konttiravintola Wavesin sivusto Jyväskylän satamassa: ruokalista, lounas, tapahtumat, aukioloajat ja yhteystiedot. Kaksikielinen sivusto (fi/en).",
    tags: ["Ravintola", "Monikielinen", "SEO"]
  },
  {
    name: "Lukko kokoonpano",
    url: "https://lukkokokoonpano.koubou.eu/",
    hostname: "lukkokokoonpano.koubou.eu",
    description:
      "Rauman Lukon fanityökalu: hyökkäysketjut, puolustajaparit, ylivoimat, alivoimat ja ottelupäivän kokoonpano (13F / 7D) yhdessä näkymässä.",
    tags: ["Liiga", "Fanityökalu", "UI"]
  }
] as const;

export const featuredClients = [
  {
    name: "World Vision Suomi",
    summary:
      "Verkkopalvelun ylläpito ja jatkuva kehitys Huolenpidossa: saavutettavuus, turvallisuus ja toimintavarmuus varainhankinnan ja viestinnän tarpeisiin."
  },
  {
    name: "Burger King Suomi",
    summary:
      "Verkkosivuston jatkuva ylläpito ja kehitys: tuotteet, ravintolat, aukioloajat ja kampanjat — data, analytiikka ja suorituskyky WordPressillä."
  },
  {
    name: "Plan Suomi",
    summary:
      "Päivittäinen ylläpito ja jatkokehitys: tietosisältö, digitaalinen varainhankinta ja luotettava toiminta WordPress-alustalla."
  }
] as const;

export const cvSkills =
  "WordPress, WooCommerce, PHP, ACF, Gutenberg, WP-CLI, Vue.js, JavaScript, REST API, SOAP, WPML, Polylang, multisite, LiteSpeed, Redis, Lando, Docker, WSL2, Linux, MariaDB, GA4, GTM, Consent Mode, SPF, DKIM, DMARC, Puppeteer, Playwright, automaatio, suorituskyky, sähköpostin toimitettavuus." as const;

export const languages = [
  { name: "Suomi", level: "Äidinkieli" },
  { name: "Englanti", level: "Ammattitaitoinen työkieli" }
] as const;

export const cvCaseStudies = [
  {
    title: "Gravity Forms + Stripe + WP All Export — maksusynkronointi",
    problem:
      "Maksustatukset eivät aina ehtineet mukaan ennen kuin vienti ajettiin — raportit ja todellisuus erosivat.",
    work:
      "Yhtenäinen Stripe-laskulogiikka, Gravity Forms -päivitykset, audit-metadata ja WP-CLI-rekonsiliointi ristiriitojen löytämiseen.",
    result: "Luotettavampi maksudata ja polku, jota tiimi voi auditoida ilman arvailua.",
    tech: "Stripe, Gravity Forms, WP-CLI, WP All Export"
  },
  {
    title: "ACF + WPML — käännös- ja kenttädebuggaus",
    problem:
      "Monikielinen sisältö ja ACF-kentät aiheuttivat epäjohdonmukaista editori- ja käyttäjäkokemusta kieliversioissa.",
    work:
      "Jäljitin kenttäryhmät, käännösvirrat ja teeman renderöinnin; linjasin ACF:n ja WPML:n todellisiin sisältötarpeisiin.",
    result: "Ennustettava monikielinen editointi ja vähemmän “väärä kieli / puuttuva kenttä” -yllätyksiä tuotannossa.",
    tech: "ACF, WPML, WordPress, PHP"
  },
  {
    title: "WooCommerce — varasto / import / aikavyöhyke",
    problem:
      "Tuotteet katosivat kieliversioista importin jälkeen — ongelma oli sidoksissa aikavyöhykkeeseen ja ajastuksiin.",
    work:
      "Jäljitin PIM/kategoria/tag-ristiriidat ja säädin EN/DE/FI-näkyvyyslogiikan importin ympärille.",
    result: "Selkeä vikapolku ja prosessi, jonka kautta tiimi pystyi diagnosoimaan ilman arvailua.",
    tech: "WooCommerce, WP All Import, WPML, PIM"
  }
] as const;

export const education = {
  degree: "Insinööri (AMK), mediatekniikka / tieto- ja viestintätekniikka",
  school: "Jyväskylän ammattikorkeakoulu (JAMK)",
  period: "2016 – 2020"
} as const;

export const cvPage = {
  intro:
    "Autan rakentamaan WordPress-kokonaisuuksia, joissa suorituskyky, siistit integraatiot ja mitattava hyöty kulkevat käsi kädessä. Olen mediatekniikan insinööri, ja minulla on yli viisi vuotta kokemusta Into-Digitalin Huolenpidossa WordPress-, WooCommerce- ja integraatioprojektien parissa."
} as const;

export const rinkPlays = [
  {
    id: "play-1",
    zone: "vasen",
    title: "Ylläpito ja kehitys",
    hook: "World Vision, Plan, Burger King — jatkuva ylläpito",
    tools: "WordPress · GA4"
  },
  {
    id: "play-2",
    zone: "keski",
    title: "Stripe + GF",
    hook: "Maksustatus vs. vientiajoitus",
    tools: "Stripe · WP-CLI"
  },
  {
    id: "play-3",
    zone: "oikea",
    title: "Woo + WPML",
    hook: "Varasto ja aikavyöhyke",
    tools: "WooCommerce · WPML"
  },
  {
    id: "play-4",
    zone: "maali",
    title: "Lando & WP-CLI",
    hook: "local → staging → tuotanto",
    tools: "Lando · Docker"
  }
] as const;

export const contactCta = {
  offer:
    "Jos sulla on WordPress- tai WooCommerce-kokonaisuus, jossa integraatioihin, suorituskykyyn tai ylläpitoon kaivataan selkeyttä, ota yhteyttä — katsotaan ensin, voinko auttaa.",
  links: [
    { key: "A", label: "Sähköposti", href: `mailto:${profile.email}`, primary: true },
    { key: "B", label: "LinkedIn", href: profile.linkedin, external: true },
    { key: "C", label: "GitHub", href: profile.github, external: true },
    { key: "D", label: "Lataa CV (PDF)", href: profile.cvPath, download: true }
  ]
} as const;

export const navPortfolio = [
  { href: "/cv", label: "CV" },
  { href: "#tyonaytteet", label: "Työnäytteet" },
  { href: "#omat", label: "Omat projektit" },
  { href: "#yhteys", label: "Yhteys" }
] as const;

export const navCv = [
  { href: "/", label: "Työnäytteet" },
  { href: "/cv", label: "CV" },
  { href: profile.cvPath, label: "PDF", download: true }
] as const;
