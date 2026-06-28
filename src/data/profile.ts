export const profile = {
  name: "Miikka Mäkelä",
  title: "Full stack kehittäjä WordPressin vaikeaan päähän",
  tagline:
    "Tuotanto · integraatiot · automaatio · liiketoimintakriittinen WordPress",
  positioning:
    "Rakennan ja stabilisoin verkkopalveluita, joita yritykset oikeasti käyttävät: integraatiot, maksut, data, suorituskyky ja ylläpito.",
  age: 29,
  motto: "Parhaat vuodet edessä",
  location: "Jyväskylä, Suomi",
  coordinates: {
    latitude: 62.242,
    longitude: 25.7474,
    display: "62.2420°N, 25.7474°E",
    mapsUrl: "https://www.openstreetmap.org/?mlat=62.242&mlon=25.7474#map=13/62.242/25.7474"
  },
  email: "miikka.mla@gmail.com",
  linkedin: "https://www.linkedin.com/in/miikkamgr/",
  github: "https://github.com/Mgrmjp",
  cvPath: "/miikka-makela-cv.pdf",
  avatar: "/poekemecircle.avif",
  avatarWebp: "/poekemecircle.webp",
  avatarPlaceholder: "/poekemecircle-lq.webp",
  avatarAlt: "Miikka Mäkelän profiilikuva",
  metaTitle: "Miikka Mäkelä | Tuotanto, integraatiot ja WordPress",
  metaDescription:
    "Full stack kehittäjä WordPressin vaikeaan päähän. Integraatiot, maksut, automaatio ja tuotannon ongelmanratkaisu.",
  portfolioMetaTitle: "Miikka Mäkelä | Tuotanto, integraatiot ja WordPress",
  portfolioMetaDescription:
    "Full stack kehittäjä WordPressin vaikeaan päähän: integraatiot, maksut, automaatio, suorituskyky ja tuotannon ongelmanratkaisu."
} as const;

export const quickFacts = {
  label: "Lyhyesti",
  role: "Full stack web developer",
  body: "Teen käytännönläheistä kehitystä WordPressin, WooCommercen, integraatioiden ja automaation ympärillä.",
  strength:
    "Vahvuuteni on epäselvien ongelmien purkaminen: mikä hajoaa, miksi se hajoaa ja miten siitä tehdään ylläpidettävämpi.",
  age: `${profile.age} v`,
  experienceYears: "5+ vuotta",
  experienceContext:
    "Tuotantoympäristöt, ylläpito ja jatkokehitys",
  workplace: "Into-Digital",
  location: profile.location
} as const;

export const cvSections = {
  eyebrow: "Ansioluettelo",
  experience: "Kokemus",
  clients: "Asiakastyötä",
  clientsNote: "Teen asiakastyötä Into-Digitalin Huolenpidossa.",
  personal: "Omat projektit",
  personalNote: "Rakennettu ja ylläpidetty työn ulkopuolella.",
  openSite: "Avaa sivusto",
  skills: "Taidot",
  cases: "Tekniset työnäytteet",
  education: "Koulutus",
  interests: "Kiinnostuksen kohteet",
  languages: "Kielet",
  contact: "Yhteystiedot",
  contactEmail: "Sähköposti",
  contactAge: "Ikä",
  contactLocation: "Sijainti",
  downloadPdf: "Lataa CV (PDF)",
  downloadPdfShort: "Lataa CV (PDF)",
  previewPdf: "Esikatsele CV",
  portfolioLink: "Työnäytteet",
  problem: "Ongelma",
  work: "Mitä tein",
  result: "Lopputulos",
  tech: "Työkalut"
} as const;

export const hero = {
  eyebrow: "Full stack · WordPress · WooCommerce",
  headline:
    "Full stack -kehittäjä WordPressiin, WooCommerceen ja käytännön ongelmanratkaisuun.",
  support:
    "Rakennan ja stabiloin verkkopalveluita, joissa liidit, maksut ja data eivät saa hukkata."
} as const;

export const helpSection = {
  label: "Tässä autan",
  title: "Kun WordPress ei ole enää vain sivusto",
  intro: "Työni on yleensä jotain muuta kuin sivuston tekeminen."
} as const;

export const helpCards = [
  {
    title: "Integraatiot & data",
    body: "Tuotteet, hinnat, saldot ja tilaukset kulkemaan verkkokaupan ja taustajärjestelmän välillä."
  },
  {
    title: "Maksut & liidit",
    body: "Stripen, lomakkeiden ja viennin data täsmää ilman käsin tarkistelua."
  },
  {
    title: "Ylläpito & suorituskyky",
    body: "Tuotanto kestää käytön, julkaisut menevät putkeen ja ongelmat saa kiinni nopeasti."
  }
] as const;

export const credibilityBlocks = [
  "5+ vuotta liiketoimintakriittistä WordPress-tuotantoa",
  "Into-Digitalilla ylläpidän mm. World Visionin, Burger Kingin ja Planin sivustoja",
  "Integraatiot, maksut ja data arjen työtä"
] as const;

export const proofStrip = {
  label: "Mihin minut yleensä tarvitaan",
  lead: "Minut kutsutaan mukaan, kun WordPress ei ole enää vain sivusto."
} as const;

export const proofPoints = [
  "Kun WooCommerce tarvitsee integraatioita",
  "Kun lomakkeet, maksut ja viennit eivät saa hukata dataa",
  "Kun konversiot laskee mutta kukaan ei tiedä miksi",
  "Kun liidit hukkuu lomakkeen ja CRM:n väliseen aukkoon",
  "Kun suorituskyky, välimuistit tai seuranta käyttäytyvät oudosti",
  "Kun markkinointi ei luota raportteihin koska datat ei täsmää",
  "Kun toistuva työ pitää siirtää automaatioon",
  "Kun Staging toimii mutta Tuotanto ei",
  "Kun ylläpito kaipaa rakennetta eikä sammuttelua",
  "Kun tarvitaan tekijä, joka vie asian maaliin"
] as const;

export const technicalCore = {
  label: "Osaaminen arvoittain",
  intro: "WordPress on väline. Alla on se, mitä oikeasti teen päivittäin."
} as const;

export const technicalSkillGroups = [
  {
    label: "Alustat",
    items: ["WordPress", "WooCommerce", "Multisite", "ACF", "Gutenberg", "WPML"]
  },
  {
    label: "Integraatiot",
    items: [
      "REST ja SOAP",
      "CRM ja PIM",
      "Stripe ja maksut",
      "Gravity Forms",
      "WP All Import / Export"
    ]
  },
  {
    label: "Automaatio",
    items: [
      "WP-CLI",
      "Cron ja ajastukset",
      "Export/import-prosessit",
      "Lando ja Docker",
      "CI/CD"
    ]
  },
  {
    label: "Laatu",
    items: [
      "Suorituskyky ja välimuistit",
      "LiteSpeed ja Redis",
      "Analytiikka ja Consent Mode",
      "Tuotantodebuggaus",
      "Sähköpostin toimitus (SPF, DKIM, DMARC)"
    ]
  },
  {
    label: "Työkalut",
    items: ["Git", "Playwright", "GA4 ja GTM"]
  },
  {
    label: "AI-työnkulut",
    items: [
      "AI-avusteinen kehitys",
      "Claude Code ja Cursor",
      "GitHub Copilot ja MCP-työnkulut",
      "Ollama ja paikalliset LLM:t"
    ]
  }
] as const;

export const portfolio = {
  proofSection: {
    label: "Keissejä oikeasta elämästä",
    title: "Tuotannon ongelmia, ei vain komponentteja",
    intro:
      "Kolme esimerkkiä siitä, mitä rikki meni, mitä tein ja miksi sillä oli merkitystä liiketoiminnalle."
  },
  experienceSection: {
    label: "Kokemus",
    title: "Kun sivusto muuttuu järjestelmäksi",
    intro:
      "Pitkäaikainen ylläpito, integraatiot ja tuotantodebuggaus asiakkaiden kriittisissä WordPress-ympäristöissä."
  }
} as const;

export const stories = [
  {
    title: "Paikallinen kehitys hidasti työtä ja rikkoi rytmin",
    mess:
      "Projektin käynnistys ja deploy nojasivat muistiin ja käsin tehtyihin askeliin. Sama virhe toistui stagingissa.",
    work:
      "Yhtenäistin Lando- ja WP-CLI-työnkulut dry runeilla ja selkeällä polulla Local → Staging → Tuotanto.",
    outcome:
      "Uudet jäsenet pääsevät nopeammin tuotantoon ja deployjen riski pieneni.",
    tags: ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"]
  },
  {
    title: "Maksu oli onnistunut, mutta vienti ei aina tiennyt sitä",
    mess:
      "Stripe, Gravity Forms ja WP All Export eivät aina kertoneet samaa totuutta ennen kuin raportti ajettiin.",
    work:
      "Selvitin webhook-, merkintä- ja vientiketjun ja rakensin tarkistuslogiikkaa WP-CLI:n kautta.",
    outcome:
      "Maksudata täsmää Stripen, lomakkeiden ja viennin välillä ilman manuaalista tarkistusta.",
    tags: ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"]
  },
  {
    title: "Varasto katosi vain tiettyyn aikaan",
    mess:
      "Tuotteet hävisivät kieliversioista importin jälkeen vain tietyllä kellonajalla, ei satunnaisesti.",
    work:
      "Jäljitin PIM-, kategoria- ja tag-ristiriidat sekä aikavyöhykelogiikan importissa.",
    outcome:
      "Tuotteet pysyvät myynnissä kaikilla kielillä eikä varasto enää katoa importin jälkeen.",
    tags: ["WooCommerce", "WP All Import", "WPML", "PIM"]
  }
] as const;

export const about = {
  title: "Tämä ei ole vain WordPressiä",
  paragraphs: [
    "29-vuotias mediatekniikan insinööri ja yli viisi vuotta Into-Digitalin Huolenpidossa. Opin koodaamalla ja dokumentoin sen verran, että seuraavalla tekijällä on helpompaa.",
    "Liikun koodin, integraatioiden ja liiketoiminnan tarpeiden välillä. Usein roolini on selvittää, mikä on rikki ja miten siitä tehdään ylläpidettävämpi ilman uutta teknistä velkaa."
  ]
} as const;

export const interests = [
  "3D-tulostus",
  "Paikalliset LLM:t",
  "Musiikki",
  "Botaniikka"
] as const;

export const experiences = [
  {
    company: "Into-Digital Oy",
    url: "https://into-digital.fi/",
    role: "Verkkokehittäjä · Full-Stack Care / Huolenpito",
    period: "helmi 2021 –",
    location: "Jyväskylä",
    bullets: [
      "Rakennan ja ylläpidän tuotannon WordPress- ja WooCommerce-palveluita ACF:n, WP-CLI:n ja API-integraatioiden kanssa.",
      "Parannan luotettavuutta staging-käytännöillä, debuggausrutiineilla ja automaatioskripteillä.",
      "Työskentelen mm. World Vision Suomen, Burger King Suomen ja Plan Suomen parissa."
    ]
  },
  {
    company: "Zaibatsu Interactive Inc.",
    url: "https://zaibatsu.fi/",
    role: "Harjoittelija · suunnittelu ja kehitys",
    period: "syys 2019 – touko 2020",
    location: "Jyväskylä",
    bullets: [
      "Aloitin graafisesta suunnittelusta, siirryin 3D-mallinnukseen ja edelleen JavaScript-tehtäviin (Vue, React).",
      "Askel kohti full stack -työtä ja visuaalista silmää WordPress-projekteissa."
    ]
  }
] as const;

export const personalProjectsSection = {
  label: "Projektit",
  title: "Rakennettu työn ulkopuolella",
  intro:
    "Näissä yhdistyvät oma kiinnostukseni urheiluun, paikalliseen ravintolaan ja fanityökaluihin. Suunnittelu, toteutus ja ylläpito ovat omalla vastuullani, ei asiakastyötä Into-Digitalilla."
} as const;

export const personalProjects = [
  {
    name: "Suomalaiset NHL:ssä",
    url: "https://suomalaisetnhlssa.fi/",
    hostname: "suomalaisetnhlssa.fi",
    description:
      "Suomalaisten NHL-pelaajien seuranta yhdestä paikasta: ottelukohtaiset maalit, syötöt ja pisteet, päivittyvät pelien aikana.",
    tags: ["NHL API", "Live-data", "WordPress"]
  },
  {
    name: "Waves Jyväskylä",
    url: "https://wavesdemo.koubou.eu/",
    hostname: "wavesdemo.koubou.eu",
    description:
      "Konttiravintola Wavesin kaksikielinen sivusto Jyväskylän satamassa: ruokalista, tapahtumat ja yhteystiedot.",
    tags: ["Monikielinen", "Ravintola", "WordPress"]
  },
  {
    name: "Lukko kokoonpano",
    url: "https://lukkokokoonpano.koubou.eu/",
    hostname: "lukkokokoonpano.koubou.eu",
    description:
      "Rauman Lukon fanityökalu: hyökkäysketjut, puolustajaparit ja ottelupäivän kokoonpano yhdessä näkymässä.",
    tags: ["Liiga", "Fanityökalu", "UI"]
  }
] as const;

export const featuredClients = [
  {
    name: "World Vision Suomi",
    url: "https://www.worldvision.fi/",
    summary:
      "Verkkopalvelun ylläpito ja jatkuva kehitys Huolenpidossa: saavutettavuus, turvallisuus ja toimintavarmuus — lahjoitusten, liidien ja viestinnän kriittisessä risteyksessä."
  },
  {
    name: "Burger King Suomi",
    url: "https://www.burgerking.fi/",
    summary:
      "Verkkosivuston jatkuva ylläpito ja kehitys: tuotteet, ravintolat, aukioloajat ja kampanjat, data, analytiikka ja suorituskyky WordPressillä."
  },
  {
    name: "Plan Suomi",
    url: "https://www.plan.fi/",
    summary:
      "Päivittäinen ylläpito ja jatkokehitys: tietosisältö, digitaalinen varainhankinta ja luotettava toiminta WordPress-alustalla."
  }
] as const;

export const languages = [
  { name: "Suomi", level: "Äidinkieli" },
  { name: "Englanti", level: "Ammattitaitoinen työkieli" },
  { name: "Ruotsi", level: "Perustaso, työn alla" }
] as const;

export const cvCaseStudies = [
  {
    title: "Maksu oli onnistunut, mutta vienti ei aina tiennyt sitä",
    problem:
      "Stripe, Gravity Forms ja WP All Export eivät aina kertoneet samaa totuutta ennen kuin raportti ajettiin.",
    work:
      "Selvitin webhook-, merkintä- ja vientiketjun. Rakensin tarkistus- ja korjauslogiikkaa WP-CLI:n kautta.",
    result: "Maksudata täsmää Stripen, lomakkeiden ja viennin välillä ilman manuaalista tarkistusta. Tiimi luottaa raportteihin ja tilitykset eivät enää vaadi selvittelyä.",
    tags: ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"]
  },
  {
    title: "Paikallinen kehitys hidasti työtä ja rikkoi rytmin",
    problem:
      "Projektin käynnistys ja deploy nojasivat muistiin. Sama virhe toistui Stagingissa.",
    work:
      "Yhtenäistin Lando- ja WP-CLI-työnkulut dry runeilla ja polulla Local → Staging → Tuotanto.",
    result: "Tiimi saa uudet jäsenet nopeammin tuotantoon. Deployjen riski pieneni ja tuotanto-ongelmiin käytetty aika väheni.",
    tags: ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"]
  },
  {
    title: "Varasto katosi vain tiettyyn aikaan",
    problem:
      "Tuotteet hävisivät kieliversioista importin jälkeen tietyllä kellonajalla.",
    work:
      "Jäljitin PIM-, kategoria- ja tag-ristiriidat sekä aikavyöhykelogiikan. Säädin näkyvyyden importin ympärille.",
    result: "Tuotteet pysyvät myynnissä kaikilla kielillä. Importti ei enää piilota varastoa — vähemmän tukipyyntöjä, enemmän myyntiä.",
    tags: ["WooCommerce", "WP All Import", "WPML", "PIM"]
  }
] as const;

export const educationEntries = [
  {
    title: "Insinööri (AMK), mediatekniikka / tieto- ja viestintätekniikka",
    org: "Jyväskylän ammattikorkeakoulu (JAMK)",
    period: "2016 – 2020"
  },
  {
    title: "Ylioppilas",
    org: "Vammalan lukio"
  },
  {
    title: "Varusmiespalvelus",
    org: "Niinisalo"
  }
] as const;

export const cvPage = {
  intro:
    "29-vuotias full stack WordPress-kehittäjä vaativiin verkkopalveluihin. Yli viisi vuotta tuotannon WordPress-, WooCommerce- ja integraatiotyötä Into-Digitalin Huolenpidossa."
} as const;

export const rinkPlays = [
  {
    id: "play-1",
    zone: "vasen",
    title: "Ylläpito ja kehitys",
    hook: "World Vision, Plan, Burger King: jatkuva ylläpito",
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
    hook: "Local → Staging → Tuotanto",
    tools: "Lando · Docker"
  }
] as const;

export const contactCta = {
  title: "Kerro, mikä sotku siellä on",
  support:
    "Selvitetään nopeasti, onko tässä jotain, missä voin auttaa.",
  links: [
    { key: "A", label: "Sähköposti", href: `mailto:${profile.email}` },
    { key: "B", label: "LinkedIn", href: profile.linkedin, external: true },
    { key: "C", label: "GitHub", href: profile.github, external: true },
    { key: "D", label: "CV (PDF)", href: profile.cvPath, download: true }
  ]
} as const;

export const navPortfolio = [
  { href: "#tyonaytteet", label: "Työnäytteet" },
  { href: "/cv", label: "CV" },
  { href: "#omat", label: "Projektit" },
  { href: "#yhteys", label: "Yhteys" }
] as const;

export const navCv = [
  { href: "/", label: "Työnäytteet" },
  { href: "/cv", label: "CV" },
  { href: profile.cvPath, label: "PDF", download: true }
] as const;
