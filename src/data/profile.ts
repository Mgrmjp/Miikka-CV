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
  avatar: "/profile-circle.avif",
  avatarPlaceholder: "/profile-circle-lq.avif",
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
  tenure: "5+ vuotta tuotantoympäristöissä · Into-Digital",
  age: `${profile.age} v`,
  location: profile.location
} as const;

export const cvSections = {
  eyebrow: "Ansioluettelo",
  experience: "Kokemus",
  clients: "Asiakastyötä",
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
  headline: "Full stack kehittäjä WordPressin vaikeaan päähän.",
  lead:
    "Rakennan ja selvitän WordPress-, WooCommerce- ja integraatiopohjaisia verkkopalveluita, joissa pelkkä \"sivuston tekeminen\" ei enää riitä.",
  platformNote:
    "WordPress on usein alusta. Työ on yleensä jotain muuta: integraatioita, dataa, maksupolkuja, suorituskykyä, ylläpitoa, virhetilanteita ja ihmisten työn helpottamista.",
  thesis: {
    lead: "Hyvä verkkopalvelu ei ole vain näyttävä etusivu.",
    body:
      "Se on hallintapaneeli, joka kestää käytön, integraatio, jonka vika ei jää piiloon, vienti, joka tuo oikeat rivit, ja kehitysympäristö, jonka saa käyntiin ilman rituaalitanssia."
  },
  supportLine:
    "Käytännönläheistä kehitystä, ylläpitoa ja ongelmanratkaisua liiketoimintakriittisiin WordPress-ympäristöihin."
} as const;

export const credibilityBlocks = [
  "5+ vuotta liiketoimintakriittistä WordPress-tuotantoa",
  "Asiakkaita mm. World Vision Suomi, Burger King Suomi ja Plan Suomi",
  "Integraatiot, maksut, data ja ylläpito arjen työtä, ei slidessa"
] as const;

export const proofStrip = {
  label: "Mihin minut yleensä tarvitaan",
  lead: "Minut kutsutaan mukaan, kun WordPress ei ole enää vain sivusto."
} as const;

export const proofPoints = [
  "Kun WooCommerce tarvitsee integraatioita",
  "Kun lomakkeet, maksut ja viennit eivät saa hukata dataa",
  "Kun suorituskyky, välimuistit tai seuranta käyttäytyvät oudosti",
  "Kun toistuva työ pitää siirtää automaatioon",
  "Kun Staging toimii mutta Tuotanto ei",
  "Kun data ei täsmää raporttien ja todellisuuden välillä",
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
      "Agenttipohjainen koodaus",
      "Claude Code, Cursor ja Antigravity",
      "Gemini CLI, Codex CLI ja PI CLI",
      "GitHub Copilot ja MCP-työnkulut",
      "OpenCode, OpenRouter ja mallien vertailu",
      "Ollama ja paikalliset LLM-kokeilut"
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
      "Projektin käynnistys, tarkistus ja deploy nojasivat muistiin ja käsin tehtyihin askeliin. Sama virhe toistui stagingissa.",
    work:
      "Yhtenäistin Lando- ja WP-CLI-pohjaisia työnkulkuja dry runeilla, varmuuskopioilla ja selkeällä polulla Local → Staging → Tuotanto.",
    outcome:
      "Nopeampi käynnistys, vähemmän manuaalista säätöä ja vähemmän ympäristöjen välisiä yllätyksiä.",
    tags: ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"]
  },
  {
    title: "Maksu oli onnistunut, mutta vienti ei aina tiennyt sitä",
    mess:
      "Stripe, Gravity Forms ja WP All Export eivät aina kertoneet samaa totuutta ennen kuin raportti ajettiin.",
    work:
      "Selvitin webhook-, merkintä- ja vientiketjun. Rakensin tarkistus- ja korjauslogiikkaa WP-CLI:n kautta, jotta maksetut merkinnät eivät jääneet limboon.",
    outcome:
      "Luotettavampi maksudata ja polku, jota tiimi pystyi auditoida ilman arvailua.",
    tags: ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"]
  },
  {
    title: "Varasto katosi vain tiettyyn aikaan",
    mess:
      "Tuotteet hävisivät kieliversioista importin jälkeen. Ongelma ilmestyi vain tietyllä kellonajalla, ei satunnaisesti.",
    work:
      "Jäljitin PIM-, kategoria- ja tag-ristiriidat sekä aikavyöhykkeeseen sidotun logiikan. Säädin EN/DE/FI-näkyvyyden importin ympärille.",
    outcome:
      "Selkeä vikapolku ja prosessi, jolla tiimi pystyi diagnosoimaan ilman uutta arvailukierrosta.",
    tags: ["WooCommerce", "WP All Import", "WPML", "PIM"]
  }
] as const;

export const about = {
  title: "Tämä ei ole vain WordPressiä",
  short:
    "29-vuotias mediatekniikan insinööri. Yli viisi vuotta Into-Digitalin Huolenpidossa. Opin koodaamisen tekemällä ja dokumentoin sen verran, että seuraavalla tekijällä on helpompaa.",
  paragraphs: [
    "En ole kiinnostunut vain siitä, miltä sivusto näyttää julkisella puolella. Olen kiinnostunut siitä, toimiiko kokonaisuus vielä silloin, kun data liikkuu, asiakkaat ostavat ja joku oikeasti käyttää järjestelmää.",
    "Arjessa liikun koodin, integraatioiden, tuen ja liiketoiminnan tarpeiden välillä. Usein roolini on selvittää, mikä on rikki, miksi se on rikki ja miten siitä tehdään ylläpidettävämpi ilman uutta teknistä velkaa.",
    "Uusi ei pelota. Opin tekemällä. AI-työkalut ovat osa arkea, mutta tuotannon totuus ratkaisee aina."
  ],
  interestsBlurb:
    "Vapaa-ajalla: 3D-tulostus, paikallisten LLM:ien säätö ja kokeilu, kaikki tekniikkaan liittyvä, botaniikka ja melkein aina seuraava projekti on jo suunnitteilla. Musiikki inspiroi, ja teen sitä myös itse, usein AI:n avulla, koska soittimen opetteluun ei juuri nyt riitä aikaa."
} as const;

export const interests = [
  "3D-tulostus",
  "Paikalliset LLM:t",
  "Musiikki",
  "Tekniikka",
  "Botaniikka",
  "Seuraava projekti"
] as const;

export const experiences = [
  {
    company: "Into-Digital Oy",
    url: "https://into-digital.fi/",
    role: "Verkkokehittäjä · Full-Stack Care / Huolenpito",
    period: "helmi 2021 –",
    location: "Jyväskylä",
    bullets: [
      "Rakennan ja ylläpidän tuotannon WordPress- ja WooCommerce-palveluita ACF:n, WP-CLI:n, LiteSpeedin ja API-integraatioiden kanssa.",
      "Parannan luotettavuutta staging-käytännöillä, debuggausrutiineilla, automaatioskripteillä ja selkeällä dokumentaatiolla.",
      "Tuettavia asiakaskriittisiä sivustoja ovat mm. World Vision Suomi, Burger King Suomi ja Plan Suomi."
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
      "Suomalaisten NHL-pelaajien seuranta yhdestä paikasta: ottelukohtaiset maalit, syötöt, pisteet ja peliaika. Tiedot tulevat NHL:n virallisista lähteistä ja päivittyvät myös pelien aikana.",
    tags: ["NHL API", "Live-tilastot", "Data"]
  },
  {
    name: "Waves Jyväskylä",
    url: "https://wavesdemo.koubou.eu/",
    hostname: "wavesdemo.koubou.eu",
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
    url: "https://www.worldvision.fi/",
    summary:
      "Verkkopalvelun ylläpito ja jatkuva kehitys Huolenpidossa: saavutettavuus, turvallisuus ja toimintavarmuus varainhankinnan ja viestinnän tarpeisiin."
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
    result: "Luotettavampi maksudata ja auditoitava polku ilman arvailua.",
    tags: ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"]
  },
  {
    title: "Paikallinen kehitys hidasti työtä ja rikkoi rytmin",
    problem:
      "Projektin käynnistys ja deploy nojasivat muistiin. Sama virhe toistui Stagingissa.",
    work:
      "Yhtenäistin Lando- ja WP-CLI-työnkulut dry runeilla ja polulla Local → Staging → Tuotanto.",
    result: "Nopeampi käynnistys ja vähemmän ympäristöjen välisiä yllätyksiä.",
    tags: ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"]
  },
  {
    title: "Varasto katosi vain tiettyyn aikaan",
    problem:
      "Tuotteet hävisivät kieliversioista importin jälkeen tietyllä kellonajalla.",
    work:
      "Jäljitin PIM-, kategoria- ja tag-ristiriidat sekä aikavyöhykelogiikan. Säädin näkyvyyden importin ympärille.",
    result: "Selkeä vikapolku ilman uutta arvailukierrosta.",
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
  offer:
    "Jos sulla on WordPress- tai WooCommerce-kokonaisuus, jossa integraatioihin, suorituskykyyn tai ylläpitoon kaivataan selkeyttä, ota yhteyttä. Katsotaan ensin, voinko auttaa.",
  links: [
    { key: "A", label: "Sähköposti", href: `mailto:${profile.email}`, primary: true },
    { key: "B", label: "Lataa CV (PDF)", href: profile.cvPath, download: true },
    { key: "C", label: "LinkedIn", href: profile.linkedin, external: true },
    { key: "D", label: "GitHub", href: profile.github, external: true }
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
