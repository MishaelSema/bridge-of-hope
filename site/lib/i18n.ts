export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  nav: {
    skip: "Skip to content",
    menu: "Menu",
    about: "About",
    programmes: "Programmes",
    founder: "The Founder",
    record: "The Record",
    ecosystem: "Ecosystem",
    involve: "Get Involved",
    switch: "Français",
    switchAria: "Passer en français",
  },
  hero: {
    name: "Bridge of Hope",
    mission:
      "Connecting communities and opportunities for persons with disabilities in Cameroon.",
    caption: "Plate I — Yaoundé, Cameroon. Photograph to come.",
    action: "Support the work",
  },
  sections: {
    claimOne: "Rehabilitation without a livelihood returns people to the same dependency.",
    evidenceOne:
      "In Cameroon, five to six per cent of the population lives with a disability. Existing rehabilitation services are urban-centred and rarely lead to training or income. In rural communities such as Ekombitié, seventy kilometres from Yaoundé, services are close to absent.",
    sourceOne: "Source: National Institute of Statistics (INS), 2025; Foundation field assessment.",
    claimTwo: "One pathway, taken in four stages.",
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
    claimThree: "Twenty-two years of connecting people to opportunity.",
    founder:
      "Christopher A. Ekom spent more than twenty-two years in commercial diplomacy at the United States Embassy in Yaoundé, strengthening trade and investment between Cameroon and the United States. He founded Bridge of Hope on a belief formed there: that people prosper when knowledge, resources, markets and potential are connected.",
    founderQuote:
      "True development begins when people are given the opportunity to discover their potential, develop their capabilities, and participate with dignity in the economic and social life of their communities.",
    founderAttribution: "Christopher A. Ekom, Founder",
    founderCaption: "Portrait of the Founder to come.",
    claimFour: "The record, kept plainly.",
    record: [
      { figure: "1,000", label: "persons with disabilities reached in the first cycle", note: "Target — youth and women prioritised" },
      { figure: "600m", label: "XAF required for setup and the first two years", note: "Estimate — Business Plan, December 2025" },
      { figure: "2", label: "sites — a rehabilitation centre in Yaoundé and operational facilities at Ekombitié", note: "Planned" },
    ],
    sourceRecord: "Figures above are planning targets and estimates, not yet recorded results.",
    claimFive: "Every figure carries its source.",
    closingHead: "The bridge is built by those who cross it with us.",
    closingBody:
      "Bridge of Hope Foundation is raising the funding that turns this plan into a working centre. Grants, partnerships and individual gifts all carry the same weight: they move a person from dependence to enterprise.",
    actionPrimary: "Support the work",
    actionPartner: "Partner with us",
    actionServices: "Find services",
  },
  footer: {
    values: "Inclusion · Empowerment · Accessibility · Self-reliance · Accountability",
    descriptor: "Disability Advocacy, Rehabilitation and Empowerment Center — Yaoundé, Cameroon",
    contact: "Contact",
    phone: "+237 675 033 792",
    emails: "ekhrys@yahoo.com · chrisekom@gmail.com",
    locations: "Headquarters: Yaoundé. Operational facilities: Ekombitié village, ~70 km from Yaoundé.",
    accessibility: "This site is built to WCAG 2.2 AA. If any part of it obstructs you, write to us and we will fix it.",
    legal: "Registered NGO, MINATD, under Law No. 2010/011.",
  },
};

const fr: typeof en = {
  nav: {
    skip: "Aller au contenu",
    menu: "Menu",
    about: "À propos",
    programmes: "Programmes",
    founder: "Le Fondateur",
    record: "Les Chiffres",
    ecosystem: "L'écosystème",
    involve: "S'engager",
    switch: "English",
    switchAria: "Switch to English",
  },
  hero: {
    name: "Bridge of Hope",
    mission:
      "Relier les communautés et les opportunités pour les personnes en situation de handicap au Cameroun.",
    caption: "Planche I — Yaoundé, Cameroun. Photographie à venir.",
    action: "Soutenir l'action",
  },
  sections: {
    claimOne: "La réhabilitation, sans revenu, ramène à la même dépendance.",
    evidenceOne:
      "Au Cameroun, cinq à six pour cent de la population vit avec un handicap. Les services de réhabilitation existants se concentrent en ville et aboutissent rarement à une formation ou à un revenu. Dans les communautés rurales comme Ekombitié, à soixante-dix kilomètres de Yaoundé, ces services sont quasiment absents.",
    sourceOne: "Source : Institut National de la Statistique (INS), 2025 ; évaluation de terrain de la Fondation.",
    claimTwo: "Un seul parcours, en quatre étapes.",
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
    claimThree: "Vingt-deux ans à relier les gens aux opportunités.",
    founder:
      "Christopher A. Ekom a passé plus de vingt-deux ans dans la diplomatie commerciale à l'Ambassade des États-Unis à Yaoundé, où il a renforcé les échanges commerciaux et investissements entre le Cameroun et les États-Unis. Il a fondé Bridge of Hope sur une conviction née là-bas : les gens prospèrent lorsque les connaissances, les ressources, les marchés et le potentiel sont reliés.",
    founderQuote:
      "Le véritable développement commence lorsque les gens ont l'occasion de découvrir leur potentiel, de développer leurs capacités et de participer avec dignité à la vie économique et sociale de leur communauté.",
    founderAttribution: "Christopher A. Ekom, Fondateur",
    founderCaption: "Portrait du fondateur à venir.",
    claimFour: "Les chiffres, sans ornement.",
    record: [
      { figure: "1 000", label: "personnes en situation de handicap atteintes au premier cycle", note: "Objectif — jeunes et femmes en priorité" },
      { figure: "600 M", label: "FCFA requis pour l'installation et les deux premières années", note: "Estimation — Plan d'affaires, décembre 2025" },
      { figure: "2", label: "sites — un centre de réhabilitation à Yaoundé et des installations à Ekombitié", note: "Prévu" },
    ],
    sourceRecord: "Les chiffres ci-dessus sont des objectifs de planification et des estimations, pas encore des résultats constatés.",
    claimFive: "Chaque chiffre porte sa source.",
    closingHead: "Le pont se construit avec ceux qui le traversent à nos côtés.",
    closingBody:
      "Bridge of Hope Foundation lève les financements qui transforment ce projet en centre fonctionnel. Subventions, partenariats et dons individuels pèsent de la même façon : ils font passer une personne de la dépendance à l'entreprise.",
    actionPrimary: "Soutenir l'action",
    actionPartner: "Devenir partenaire",
    actionServices: "Trouver des services",
  },
  footer: {
    values: "Inclusion · Autonomisation · Accessibilité · Autonomie · Reddition des comptes",
    descriptor: "Centre de plaidoyer, de réhabilitation et d'autonomisation des personnes handicapées — Yaoundé, Cameroun",
    contact: "Contact",
    phone: "+237 675 033 792",
    emails: "ekhrys@yahoo.com · chrisekom@gmail.com",
    locations: "Siège : Yaoundé. Installations opérationnelles : village d'Ekombitié, à ~70 km de Yaoundé.",
    accessibility: "Ce site est conforme au niveau AA de la norme WCAG 2.2. S'il vous entrave quelque part, écrivez-nous et nous le corrigerons.",
    legal: "ONG enregistrée au MINATD, en vertu de la Loi n° 2010/011.",
  },
};

export const dictionaries = { en, fr };

export function getDict(locale: Locale) {
  return dictionaries[locale];
}
