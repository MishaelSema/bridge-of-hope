export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  nav: {
    skip: "Skip to content",
    home: "Home",
    about: "About",
    programmes: "Programmes",
    founder: "The Founder",
    record: "The Record",
    ecosystem: "Ecosystem",
    involve: "Get Involved",
    contact: "Contact",
    blog: "Journal",
    menu: "Menu",
    close: "Close",
    switch: "Français",
    switchAria: "Switch to French",
    support: "Support the work",
    supportShort: "Support",
  },
  utility: {
    phone: "+237 675 033 792",
    email: "ekhrys@yahoo.com",
    location: "Yaoundé & Ekombitié, Cameroon",
  },
  hero: {
    headline: "From rehabilitation to a livelihood",
    mission:
      "Bridge of Hope Foundation connects persons with disabilities in Cameroon to rehabilitation, skills and markets — so that care becomes a livelihood, and dependence becomes enterprise.",
    action: "Support the work",
    secondary: "See the programmes",
    caption: "Placeholder photography — the foundation's own images to follow.",
    slide: "Slide",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
  },
  home: {
    doors: [
      {
        title: "Rehabilitation & health",
        body: "Physiotherapy, occupational and speech therapy, and psychosocial support for children and adults.",
        link: "Programme 01",
      },
      {
        title: "Skills & livelihoods",
        body: "ICT, tailoring, carpentry, agriculture and events planning, taught to the standard of the labour market.",
        link: "Programme 03",
      },
      {
        title: "Community & advocacy",
        body: "Leadership, self-advocacy, public awareness and integration into ordinary community life.",
        link: "Programme 05",
      },
    ],
    problemHeading: "Rehabilitation without a livelihood returns people to the same dependency.",
    problemBody:
      "In Cameroon, five to six per cent of the population lives with a disability. Existing rehabilitation services are urban-centred and rarely lead to training or income. In rural communities such as Ekombitié, seventy kilometres from Yaoundé, services are close to absent.",
    problemSource: "Source: National Institute of Statistics (INS), 2025; foundation field assessment.",
    problemStats: [
      { figure: "5–6%", label: "of the population lives with a disability" },
      { figure: "70 km", label: "from Ekombitié to the nearest rehabilitation service" },
      { figure: "1", label: "integrated centre planned, with facilities on the farm" },
    ],
    pathwayHeading: "One pathway, taken in four stages.",
    pathwayLead:
      "A beneficiary is assessed, given an individual plan, trained and supported into income — with the community around them brought along.",
    pathway: [
      {
        title: "Rehabilitation",
        body: "Physiotherapy, occupational therapy, speech therapy and psychosocial support for children and adults.",
      },
      {
        title: "Skills",
        body: "ICT, tailoring, carpentry, crafts, events planning, agriculture and animal husbandry, taught to the standard of the labour market.",
      },
      {
        title: "Markets",
        body: "Entrepreneurship training, business mentoring, job placement and linkages to buyers and supply chains.",
      },
      {
        title: "Dignity",
        body: "Leadership, self-advocacy and community integration — the point of the whole undertaking.",
      },
    ],
    founderHeading: "Twenty-two years of connecting people to opportunity.",
    founderQuote:
      "True development begins when people are given the opportunity to discover their potential, develop their capabilities, and participate with dignity in the economic and social life of their communities.",
    founderAttribution: "Christopher A. Ekom, Founder",
    founderBody:
      "Christopher A. Ekom spent more than twenty-two years in commercial diplomacy at the United States Embassy in Yaoundé, strengthening trade and investment between Cameroon and the United States. He founded Bridge of Hope on a belief formed there: that people prosper when knowledge, resources, markets and potential are connected.",
    founderLink: "Read the full profile",
    founderCaption: "The bridge over the Sanaga — the name, and the idea.",
    recordHeading: "The record, kept plainly.",
    recordRows: [
      {
        figure: "1,000",
        label: "persons with disabilities reached in the first cycle",
        note: "Target — youth and women prioritised",
      },
      {
        figure: "600m",
        label: "XAF required for setup and the first two years",
        note: "Estimate — Business Plan, December 2025",
      },
      {
        figure: "2",
        label: "sites — a rehabilitation centre in Yaoundé and operational facilities at Ekombitié",
        note: "Planned",
      },
    ],
    recordSource: "Figures above are planning targets and estimates, not yet recorded results.",
    recordLink: "The full record",
    askHeading: "The bridge is built by those who cross it with us.",
    askBody:
      "Bridge of Hope Foundation is raising the funding that turns this plan into a working centre. Grants, partnerships and individual gifts all carry the same weight: they move a person from dependence to enterprise.",
    askPrimary: "Support the work",
    askPartner: "Partner with us",
    askServices: "Find services",
  },
  footer: {
    pages: "Pages",
    contact: "Contact",
    locationsLabel: "Locations",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    accessibilityLink: "Accessibility",
    values: "Inclusion · Empowerment · Accessibility · Self-reliance · Accountability",
    descriptor:
      "Disability advocacy, rehabilitation and empowerment centre — Yaoundé, Cameroon",
    phone: "+237 675 033 792",
    emails: ["ekhrys@yahoo.com", "chrisekom@gmail.com"],
    locations: "Headquarters and rehabilitation centre in Yaoundé. Operational facilities at Ekombitié village, ~70 km from Yaoundé.",
    accessibility:
      "This site is built to WCAG 2.2 AA. If any part of it obstructs you, write to us and we will fix it.",
    legal: "Registered NGO, MINATD, under Law No. 2010/011.",
  },
};

const fr: typeof en = {
  nav: {
    skip: "Aller au contenu",
    home: "Accueil",
    about: "À propos",
    programmes: "Programmes",
    founder: "Le Fondateur",
    record: "Les Chiffres",
    ecosystem: "L'écosystème",
    involve: "S'engager",
    contact: "Contact",
    blog: "Journal",
    menu: "Menu",
    close: "Fermer",
    switch: "English",
    switchAria: "Switch to English",
    support: "Soutenir l'action",
    supportShort: "Soutenir",
  },
  utility: {
    phone: "+237 675 033 792",
    email: "ekhrys@yahoo.com",
    location: "Yaoundé & Ekombitié, Cameroun",
  },
  hero: {
    headline: "De la réhabilitation au revenu",
    mission:
      "Bridge of Hope Foundation relie les personnes en situation de handicap au Cameroun à la réhabilitation, aux compétences et aux marchés — pour que le soin devienne un revenu, et la dépendance une entreprise.",
    action: "Soutenir l'action",
    secondary: "Voir les programmes",
    caption: "Photographies de substitution — les images de la fondation suivront.",
    slide: "Diapositive",
    previousSlide: "Diapositive précédente",
    nextSlide: "Diapositive suivante",
  },
  home: {
    doors: [
      {
        title: "Réhabilitation & santé",
        body: "Kinésithérapie, ergothérapie, orthophonie et soutien psychosocial pour les enfants et les adultes.",
        link: "Programme 01",
      },
      {
        title: "Compétences & revenus",
        body: "TIC, couture, menuiserie, agriculture et organisation d'événements, au niveau du marché du travail.",
        link: "Programme 03",
      },
      {
        title: "Communauté & plaidoyer",
        body: "Leadership, auto-représentation, sensibilisation publique et intégration à la vie communautaire.",
        link: "Programme 05",
      },
    ],
    problemHeading: "La réhabilitation, sans revenu, ramène à la même dépendance.",
    problemBody:
      "Au Cameroun, cinq à six pour cent de la population vit avec un handicap. Les services de réhabilitation existants se concentrent en ville et aboutissent rarement à une formation ou à un revenu. Dans les communautés rurales comme Ekombitié, à soixante-dix kilomètres de Yaoundé, ces services sont quasiment absents.",
    problemSource: "Source : Institut National de la Statistique (INS), 2025 ; évaluation de terrain de la Fondation.",
    problemStats: [
      { figure: "5–6 %", label: "de la population vit avec un handicap" },
      { figure: "70 km", label: "d'Ekombitié au service de réhabilitation le plus proche" },
      { figure: "1", label: "centre intégré prévu, avec des installations à la ferme" },
    ],
    pathwayHeading: "Un seul parcours, en quatre étapes.",
    pathwayLead:
      "Un bénéficiaire est évalué, reçoit un plan individuel, se forme et est accompagné vers le revenu — avec sa communauté emmenée avec lui.",
    pathway: [
      {
        title: "Réhabilitation",
        body: "Kinésithérapie, ergothérapie, orthophonie et soutien psychosocial pour les enfants et les adultes.",
      },
      {
        title: "Compétences",
        body: "TIC, couture, menuiserie, artisanat, organisation d'événements, agriculture et élevage, enseignés au niveau du marché du travail.",
      },
      {
        title: "Marchés",
        body: "Formation en entrepreneuriat, mentorat, insertion professionnelle et accès aux acheteurs et aux chaînes d'approvisionnement.",
      },
      {
        title: "Dignité",
        body: "Leadership, auto-représentation et intégration communautaire — le but de toute l'entreprise.",
      },
    ],
    founderHeading: "Vingt-deux ans à relier les gens aux opportunités.",
    founderQuote:
      "Le véritable développement commence lorsque les gens ont l'occasion de découvrir leur potentiel, de développer leurs capacités et de participer avec dignité à la vie économique et sociale de leur communauté.",
    founderAttribution: "Christopher A. Ekom, Fondateur",
    founderBody:
      "Christopher A. Ekom a passé plus de vingt-deux ans dans la diplomatie commerciale à l'Ambassade des États-Unis à Yaoundé, où il a renforcé les échanges commerciaux et investissements entre le Cameroun et les États-Unis. Il a fondé Bridge of Hope sur une conviction née là-bas : les gens prospèrent lorsque les connaissances, les ressources, les marchés et le potentiel sont reliés.",
    founderLink: "Lire le profil complet",
    founderCaption: "Le pont sur la Sanaga — le nom, et l'idée.",
    recordHeading: "Les chiffres, sans ornement.",
    recordRows: [
      {
        figure: "1 000",
        label: "personnes en situation de handicap atteintes au premier cycle",
        note: "Objectif — jeunes et femmes en priorité",
      },
      {
        figure: "600 M",
        label: "FCFA requis pour l'installation et les deux premières années",
        note: "Estimation — Plan d'affaires, décembre 2025",
      },
      {
        figure: "2",
        label: "sites — un centre de réhabilitation à Yaoundé et des installations à Ekombitié",
        note: "Prévu",
      },
    ],
    recordSource: "Les chiffres ci-dessus sont des objectifs de planification et des estimations, pas encore des résultats constatés.",
    recordLink: "Les chiffres au complet",
    askHeading: "Le pont se construit avec ceux qui le traversent avec nous.",
    askBody:
      "Bridge of Hope Foundation lève les financements qui transforment ce projet en centre fonctionnel. Subventions, partenariats et dons individuels pèsent de la même façon : ils font passer une personne de la dépendance à l'entreprise.",
    askPrimary: "Soutenir l'action",
    askPartner: "Devenir partenaire",
    askServices: "Trouver des services",
  },
  footer: {
    pages: "Pages",
    contact: "Contact",
    locationsLabel: "Implantations",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
    accessibilityLink: "Accessibilité",
    values: "Inclusion · Autonomisation · Accessibilité · Autonomie · Reddition des comptes",
    descriptor:
      "Centre de plaidoyer, de réhabilitation et d'autonomisation des personnes handicapées — Yaoundé, Cameroun",
    phone: "+237 675 033 792",
    emails: ["ekhrys@yahoo.com", "chrisekom@gmail.com"],
    locations:
      "Siège et centre de réhabilitation à Yaoundé. Installations opérationnelles au village d'Ekombitié, à ~70 km de Yaoundé.",
    accessibility:
      "Ce site est conforme au niveau AA de la norme WCAG 2.2. S'il vous entrave quelque part, écrivez-nous et nous le corrigerons.",
    legal: "ONG enregistrée au MINATD, en vertu de la Loi n° 2010/011.",
  },
};

export const dictionaries = { en, fr };

export function getDict(locale: Locale) {
  return dictionaries[locale];
}
