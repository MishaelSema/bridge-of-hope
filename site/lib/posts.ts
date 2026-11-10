/**
 * The journal.
 *
 * Long-form writing on disability inclusion, rehabilitation and livelihoods in
 * Cameroon. The posts are stored here rather than in a CMS so that the whole
 * site can be built and deployed as one artefact.
 */

export type Post = {
  slug: string;
  date: string;
  updated?: string;
  category: { en: string; fr: string };
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  minutes: number;
  image: "sport" | "tailor" | "farm" | "business" | "market";
  sections: {
    heading?: { en: string; fr: string };
    paragraphs: { en: string[]; fr: string[] };
  }[];
};

export const posts: Post[] = [
  {
    slug: "rehabilitation-without-income",
    date: "2026-01-14",
    category: { en: "Evidence", fr: "Preuves" },
    title: {
      en: "Why rehabilitation without income fails",
      fr: "Pourquoi la réhabilitation sans revenu échoue",
    },
    excerpt: {
      en: "Therapy restores a body. Only work restores a life. What the evidence says about linking both.",
      fr: "La thérapie répare un corps. Seul le travail répare une vie. Ce que disent les preuves.",
    },
    minutes: 6,
    image: "sport",
    sections: [
      {
        paragraphs: {
          en: [
            "Rehabilitation programmes across Cameroon and across the continent do real work: they restore movement, they teach a child to communicate, they give a family back a routine. What they rarely do is answer the question that decides whether a person stays independent: what happens on Monday, after the sessions stop?",
            "When rehabilitation is delivered without a route to income, it becomes a pause rather than a passage. The gains are real but temporary, because the conditions that produced them — equipment, transport, a trained therapist — do not travel with the person back into the village or the market.",
          ],
          fr: [
            "Les programmes de rééducation au Cameroun et sur le continent font un travail réel : ils rendent le mouvement, ils apprennent à un enfant à communiquer, ils rendent à une famille une routine. Ce qu'ils font rarement, c'est répondre à la question qui décide de l'autonomie : que se passe-t-il lundi, après la fin des séances ?",
            "Lorsque la réhabilitation est dispensée sans voie vers le revenu, elle devient une pause plutôt qu'un passage. Les acquis sont réels mais temporaires, car les conditions qui les ont produits — matériel, transport, thérapeute formé — ne suivent pas la personne dans son village ou son marché.",
          ],
        },
      },
      {
        heading: {
          en: "The dependency trap",
          fr: "Le piège de la dépendance",
        },
        paragraphs: {
          en: [
            "The pattern repeats across the sector. A person is referred for therapy, attends for a season, and then returns to the same household economy they came from — often in a worse position, because the interruption cost them work and income as well as function.",
            "There is a second cost. When the only visible route out of difficulty is a handout, families and communities learn to expect handouts, and the person with the disability is quietly reclassified as someone to be helped rather than someone to be hired. Rehabilitation that does not lead to work therefore produces two kinds of harm: material dependence, and a social status that is harder to undo.",
          ],
          fr: [
            "Le schéma se répète dans tout le secteur. Une personne est orientée vers la thérapie, suit les séances pendant une saison, puis revient à la même économie familiale qu'elle avait quittée — souvent dans une position pire, parce que l'interruption lui a coûté du travail et du revenu en plus de la fonction.",
            "Il y a un second coût. Lorsque la seule voie visible de sortie de la difficulté est une aide, les familles et les communautés apprennent à attendre des aides, et la personne handicapée est discrètement reclassée comme quelqu'un à aider plutôt que quelqu'un à employer. Une réhabilitation qui ne conduit pas à l'emploi produit donc deux types de préjudice : la dépendance matérielle, et un statut social plus difficile à défaire.",
          ],
        },
      },
      {
        heading: {
          en: "What changes the outcome",
          fr: "Ce qui change le résultat",
        },
        paragraphs: {
          en: [
            "Three things reliably move a rehabilitation programme from care to independence: an assessment that starts with the person's own goals, skills training that is taught to the standard of the labour market rather than the standard of the classroom, and a named pathway to a specific employer, buyer or market.",
            "None of the three is expensive on its own. What is expensive — and what usually stops them — is doing all three at once, in one place, with one budget. That is the argument for an integrated centre rather than a sequence of separate projects, and it is why Bridge of Hope is designed as one programme with six parts rather than six programmes with separate funding.",
            "The test is simple, and it is the test we intend to be judged by: not how many people attended therapy, but how many can now earn.",
          ],
          fr: [
            "Trois choses font passer de façon fiable un programme de réhabilitation du soin à l'autonomie : une évaluation qui part des objectifs de la personne, une formation aux compétences enseignée au niveau du marché du travail et non de la salle de classe, et un chemin nommé vers un employeur, un acheteur ou un marché précis.",
            "Aucune des trois n'est coûteuse à elle seule. Ce qui est coûteux — et ce qui les arrête le plus souvent — c'est de faire les trois en même temps, au même endroit, avec un seul budget. C'est l'argument d'un centre intégré plutôt que d'une suite de projets séparés, et c'est pourquoi Bridge of Hope est conçu comme un seul programme en six parties, et non comme six programmes à financements distincts.",
            "Le test est simple, et c'est celui sur lequel nous voulons être jugés : non pas combien de personnes ont suivi une thérapie, mais combien peuvent désormais gagner leur vie.",
          ],
        },
      },
    ],
  },
  {
    slug: "six-programmes-one-pathway",
    date: "2026-02-02",
    category: { en: "Programmes", fr: "Programmes" },
    title: {
      en: "Six programmes, one pathway",
      fr: "Six programmes, un seul parcours",
    },
    excerpt: {
      en: "How a person moves from an intake assessment to income — and what happens at every step.",
      fr: "Comment une personne passe de l'évaluation d'accueil au revenu — et ce qui se passe à chaque étape.",
    },
    minutes: 5,
    image: "tailor",
    sections: [
      {
        paragraphs: {
          en: [
            "A programme list is easy to publish and hard to deliver. The foundation's answer is to publish the pathway instead: the sequence a beneficiary actually walks, from the first conversation to the first income, and the standard at each step.",
            "The pathway is five moves. Intake assessment, an individual rehabilitation and training plan, therapy and skills training with empowerment sessions alongside, progress monitoring, and finally advocacy, market linkages and community engagement. Each move produces the evidence needed for the next.",
          ],
          fr: [
            "Une liste de programmes est facile à publier et difficile à délivrer. La réponse de la fondation est de publier le parcours : la séquence qu'un bénéficiaire emprunte réellement, de la première conversation au premier revenu, et la norme à chaque étape.",
            "Le parcours compte cinq mouvements. Évaluation d'accueil, un plan individuel de réhabilitation et de formation, séances de thérapie et de formation avec des ateliers d'autonomisation en parallèle, suivi des progrès, et enfin plaidoyer, accès aux marchés et engagement communautaire. Chaque mouvement produit les preuves du suivant.",
          ],
        },
      },
      {
        heading: {
          en: "Rehabilitation and health",
          fr: "Réhabilitation et santé",
        },
        paragraphs: {
          en: [
            "Physiotherapy, occupational therapy and speech therapy for children and adults with disabilities, and for vulnerable young people. The goal is function in the life the person actually has — not a score on a test administered in a clinic.",
            "Alongside therapy runs counselling and psychosocial support, for beneficiaries and for the caregivers who carry the work of support at home, unpaid and usually unacknowledged.",
          ],
          fr: [
            "Kinésithérapie, ergothérapie et orthophonie pour les enfants et les adultes en situation de handicap, ainsi que pour les jeunes vulnérables. L'objectif est la fonction dans la vie que la personne a réellement — pas un score à un test passé en clinique.",
            "En parallèle de la thérapie, un soutien psychologique et psychosocial pour les bénéficiaires et pour les aidants qui portent le soutien à domicile, sans rémunération et presque jamais reconnu.",
          ],
        },
      },
      {
        heading: {
          en: "Skills, empowerment and the long run",
          fr: "Compétences, autonomisation et durée",
        },
        paragraphs: {
          en: [
            "ICT, events planning, agriculture, animal husbandry, tailoring, crafts and carpentry are taught to the standard of the Cameroonian labour market, with entrepreneurship training running alongside. Public demand for ICT services, for well-fitted clothes and for trained carpenters is not in doubt; the shortage is of people trained to the standard that demand requires.",
            "Then empowerment: leadership training, self-advocacy, mentorship and peer-support networks, so that beneficiaries speak for themselves rather than being spoken for. And community integration — the ordinary social life that exclusion quietly takes away.",
            "The final move leaves the foundation. Advocacy, market linkages and community engagement are the point at which a beneficiary's income no longer depends on the foundation that trained them. If that has not happened, the work is not finished.",
          ],
          fr: [
            "TIC, organisation d'événements, agriculture, élevage, couture, artisanat et menuiserie sont enseignés au niveau du marché du travail camerounais, avec une formation en entrepreneuriat en parallèle. La demande publique pour les services informatiques, pour des vêtements bien coupés et pour des menuisiers formés n'est pas en cause ; c'est le nombre de personnes formées au niveau exigé par cette demande qui manque.",
            "Vient ensuite l'autonomisation : formation au leadership, auto-représentation, mentorat et réseaux d'entraide, pour que les bénéficiaires parlent d'eux-mêmes au lieu d'être parlés. Puis l'intégration communautaire — la vie sociale ordinaire que l'exclusion enlève en silence.",
            "Le dernier mouvement fait sortir de la fondation. Plaidoyer, accès aux marchés et engagement communautaire sont le moment où le revenu du bénéficiaire ne dépend plus de la fondation qui l'a formé. Si ce n'est pas arrivé, le travail n'est pas terminé.",
          ],
        },
      },
    ],
  },
  {
    slug: "ekombitie-land-and-livelihoods",
    date: "2026-02-20",
    category: { en: "Livelihoods", fr: "Revenus" },
    title: {
      en: "Ekombitié: land, workshops and a farm",
      fr: "Ekombitié : terre, ateliers et ferme",
    },
    excerpt: {
      en: "Why the foundation's operational facilities sit seventy kilometres from the city — and what they are for.",
      fr: "Pourquoi les installations opérationnelles sont à soixante-dix kilomètres de la ville — et à quoi elles servent.",
    },
    minutes: 4,
    image: "farm",
    sections: [
      {
        paragraphs: {
          en: [
            "The rehabilitation centre will stand in Yaoundé, where people can reach it on public transport and where therapists, clinics and referrers already exist. The operational facilities sit at Ekombitié village, seventy kilometres away, and they exist for a different reason: cost, land and the ability to make things.",
            "A rehabilitation centre in a capital city consumes rent. Workshops, a farm and poultry units need land, and in Ekombitié there is land that can be worked. What is produced there — trained hands, repaired tools, food, animals — is what pays for the therapy delivered in the city.",
          ],
          fr: [
            "Le centre de réhabilitation s'établira à Yaoundé, où l'on peut y accéder en transports en commun et où existent déjà les thérapeutes, les cliniques et les services d'orientation. Les installations opérationnelles sont au village d'Ekombitié, à soixante-dix kilomètres, et elles existent pour une autre raison : le coût, la terre, et la capacité à fabriquer.",
            "Un centre de réhabilitation dans une capitale coûte cher en loyer. Les ateliers, une ferme et des unités avicoles ont besoin de terre, et à Ekombitié il y a une terre qui se travaille. Ce qui y est produit — des mains formées, des outils réparés, de la nourriture, des animaux — paie la thérapie délivrée en ville.",
          ],
        },
      },
      {
        heading: {
          en: "Ownership that stays local",
          fr: "Une propriété qui reste locale",
        },
        paragraphs: {
          en: [
            "The sustainability plan has four parts: skills transfer, so that income does not depend on the foundation; community ownership of the Ekombitié facilities; partnerships with local authorities, health professionals and international organisations; and income-generating activity on the farm and in the workshops.",
            "That last part is the one that decides everything. The farm and the workshops are not a charity project. They are the demonstration platform for the foundation's own agriculture and vocational training, and the reason a trainee's placement is real rather than simulated.",
          ],
          fr: [
            "Le plan de durabilité comporte quatre parties : le transfert des compétences, pour que le revenu ne dépende pas de la fondation ; l'appropriation communautaire des installations d'Ekombitié ; des partenariats avec les autorités locales, les professionnels de santé et les organisations internationales ; et des activités génératrices de revenus à la ferme et dans les ateliers.",
            "Cette dernière partie est celle qui décide de tout. La ferme et les ateliers ne sont pas un projet caritatif. Ils sont la plateforme de démonstration de la formation agricole et professionnelle de la fondation, et la raison pour laquelle le placement d'un stagiaire est réel et non simulé.",
          ],
        },
      },
    ],
  },
  {
    slug: "what-we-measure",
    date: "2026-03-05",
    category: { en: "Accountability", fr: "Reddition des comptes" },
    title: {
      en: "What we measure, and how we report it",
      fr: "Ce que nous mesurons, et comment nous en rendons compte",
    },
    excerpt: {
      en: "The indicators a funder can audit — and why results will be published, not just promised.",
      fr: "Les indicateurs qu'un financeur peut auditer — et pourquoi les résultats seront publiés, pas seulement promis.",
    },
    minutes: 4,
    image: "business",
    sections: [
      {
        paragraphs: {
          en: [
            "Bridge of Hope is pre-operational. Every figure published on this site today is a target or an estimate drawn from the Concept Note and the Business Plan, and they are labelled that way. When results exist, they will replace the targets — in the same place, on the same page.",
            "The measures we will report against are deliberately few, and deliberately the kind that can be audited: rehabilitation programme completion, vocational training completion followed by employment or business creation, participation in empowerment workshops, policy changes influenced through advocacy, and community awareness levels.",
          ],
          fr: [
            "Bridge of Hope est en phase de pré-exploitation. Chaque chiffre publié aujourd'hui sur ce site est un objectif ou une estimation issue de la Note de concept et du Plan d'affaires, et il est présenté comme tel. Quand les résultats existeront, ils remplaceront les objectifs — au même endroit, sur la même page.",
            "Les mesures que nous rapporterons sont délibérément peu nombreuses, et délibérément du type auditable : achèvement des programmes de réhabilitation, achèvement de la formation professionnelle suivi d'un emploi ou d'une création d'entreprise, participation aux ateliers d'autonomisation, évolutions réglementaires influencées par le plaidoyer, et niveaux de sensibilisation de la communauté.",
          ],
        },
      },
      {
        heading: {
          en: "How the reporting works",
          fr: "Comment fonctionne le reporting",
        },
        paragraphs: {
          en: [
            "Quarterly and annual reports go to funders and stakeholders. Beneficiary surveys and feedback sessions are part of the routine, not an exception. Regular audits and impact assessments sit alongside them, and a final evaluation closes the first cycle.",
            "Money is reported with the same discipline as outcomes. The foundation is registered with MINATD under Law No. 2010/011, and the accounts of a public charity should be as legible as its results.",
          ],
          fr: [
            "Des rapports trimestriels et annuels vont aux financeurs et aux parties prenantes. Les enquêtes et les sessions de retour des bénéficiaires font partie de la routine, pas de l'exception. Des audits réguliers et des évaluations d'impact les accompagnent, et une évaluation finale clôt le premier cycle.",
            "L'argent est rapporté avec la même rigueur que les résultats. La fondation est enregistrée au MINATD en vertu de la Loi n° 2010/011, et les comptes d'une organisation publique doivent être aussi lisibles que ses résultats.",
          ],
        },
      },
    ],
  },
  {
    slug: "disability-inclusion-cameroon",
    date: "2026-03-24",
    category: { en: "Insight", fr: "Analyse" },
    title: {
      en: "Disability inclusion in Cameroon: what the numbers say",
      fr: "L'inclusion des personnes handicapées au Cameroun : ce que disent les chiffres",
    },
    excerpt: {
      en: "Five to six per cent of the population. Services that are urban-centred, and rarely lead to income.",
      fr: "Cinq à six pour cent de la population. Des services concentrés en ville, et qui aboutissent rarement à un revenu.",
    },
    minutes: 5,
    image: "market",
    sections: [
      {
        paragraphs: {
          en: [
            "Between five and six per cent of Cameroon's population lives with a disability. It is a large number — in the order of a million and a half people — and it is not a marginal statistic. It is the size of the community the foundation intends to serve.",
            "The distribution is uneven in a way that matters. Rehabilitation services are concentrated in the cities, and in the villages they are close to absent. Ekombitié, seventy kilometres from Yaoundé, is not an extreme case; it is ordinary.",
          ],
          fr: [
            "Entre cinq et six pour cent de la population camerounaise vit avec un handicap. C'est un nombre important — de l'ordre d'un million et demi de personnes — et ce n'est pas une statistique marginale. C'est la taille de la constituency que la fondation entend servir.",
            "La répartition est inéquitable d'une manière qui compte. Les services de réhabilitation sont concentrés dans les villes, et dans les villages ils sont quasiment absents. Ekombitié, à soixante-dix kilomètres de Yaoundé, n'est pas un cas extrême ; c'est un cas ordinaire.",
          ],
        },
      },
      {
        heading: {
          en: "Where the gap bites",
          fr: "Là où l'écart mord",
        },
        paragraphs: {
          en: [
            "Three failures compound. Access: the distance between a person and the nearest service. Continuity: rehabilitation that stops without a plan for the years after. And recognition: a stigma that keeps people out of family and community life even after treatment, because the treatment addressed the body and not the standing.",
            "Vocational opportunity is rarer still. For most people with a disability in Cameroon, the route into paid work does not exist in any practical form — which is why an integrated centre, with training and enterprise and advocacy under one roof, is a more honest answer than another therapy programme.",
          ],
          fr: [
            "Trois échecs se cumulent. L'accès : la distance entre une personne et le service le plus proche. La continuité : une réhabilitation qui s'arrête sans plan pour les années suivantes. Et la reconnaissance : une stigmatisation qui maintient les gens hors de la vie familiale et communautaire même après le traitement, parce que le traitement a soigné le corps et non le statut.",
            "L'opportunité professionnelle est plus rare encore. Pour la plupart des personnes handicapées au Cameroun, la voie vers l'emploi rémunéré n'existe pas sous une forme pratique — ce qui explique qu'un centre intégré, associant formation, entreprise et plaidoyer sous un même toit, soit une réponse plus honnête qu'un autre programme de thérapie.",
          ],
        },
      },
      {
        heading: {
          en: "What inclusion would mean here",
          fr: "Ce que l'inclusion signifierait ici",
        },
        paragraphs: {
          en: [
            "Inclusion is measurable. It looks like a rehabilitation centre within reach, a training programme taught to the standard of the labour market, a business that survives its first year, a policy that changes because someone made the case, and a community that no longer treats a disability as a verdict.",
            "That is what Bridge of Hope is being built to produce, and it is measurable in ways a funder can check and a beneficiary can feel.",
          ],
          fr: [
            "L'inclusion se mesure. Elle ressemble à un centre de réhabilitation à portée de main, une formation enseignée au niveau du marché du travail, une entreprise qui survit à sa première année, une politique qui change parce que quelqu'un a plaidé, et une communauté qui ne traite plus un handicap comme un verdict.",
            "C'est ce que Bridge of Hope est en train de construire, et cela se mesure de façon qu'un financeur puisse vérifier et qu'un bénéficiaire puisse ressentir.",
          ],
        },
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
