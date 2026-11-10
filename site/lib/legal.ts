/**
 * The legal pages: privacy, terms, cookies and the accessibility statement.
 *
 * Plain-language copy, written for the foundation as it stands today. Each
 * page states the facts of how this site actually works rather than a generic
 * template.
 */

export type LegalSection = {
  readonly heading: { readonly en: string; readonly fr: string };
  readonly paragraphs: { readonly en: readonly string[]; readonly fr: readonly string[] };
  readonly list?: { readonly en: readonly string[]; readonly fr: readonly string[] };
};

export type LegalPage = {
  title: { en: string; fr: string };
  lead: { en: string; fr: string };
  updated: string;
  sections: LegalSection[];
};

export const legal = {
  privacy: {
    title: { en: "Privacy policy", fr: "Politique de confidentialité" },
    lead: {
      en: "What this site collects, why it collects it, and what you can ask us to do about it.",
      fr: "Ce que ce site collecte, pourquoi, et ce que vous pouvez nous demander de faire.",
    },
    updated: "2026-04-02",
    sections: [
      {
        heading: { en: "The short version", fr: "En résumé" },
        paragraphs: {
          en: [
            "This website does not use advertising, tracking pixels or third-party analytics. We collect personal information only when you choose to send it to us through the contact form or by email, and we use it only to answer you.",
          ],
          fr: [
            "Ce site n'utilise ni publicité, ni pixels de suivi, ni outil d'analyse tiers. Nous ne collectons de données personnelles que lorsque vous choisissez de nous les envoyer via le formulaire de contact ou par courriel, et nous les utilisons uniquement pour vous répondre.",
          ],
        },
      },
      {
        heading: { en: "What we collect", fr: "Ce que nous collectons" },
        paragraphs: {
          en: [
            "When you use the contact form we receive the name, email address, reason for writing and message you enter. When you telephone us we keep a note of the call and its purpose. When you write to us by email, we keep the correspondence.",
          ],
          fr: [
            "Lorsque vous utilisez le formulaire de contact, nous recevons le nom, l'adresse électronique, le motif de votre message et le texte que vous saisissez. Lorsque vous nous appelez, nous conservons une note de l'appel et de son objet. Lorsque vous nous écrivez par courriel, nous conservons la correspondance.",
          ],
        },
        list: {
          en: [
            "Contact form submissions are stored in the foundation's database and emailed to the foundation's address.",
            "Records are kept for as long as needed to deal with the matter, and then deleted or anonymised.",
            "We never sell, rent or trade personal information, and we never share it with advertisers.",
          ],
          fr: [
            "Les envois du formulaire de contact sont conservés dans la base de données de la fondation et transmis par courriel à son adresse.",
            "Les enregistrements sont conservés le temps nécessaire au traitement de la demande, puis supprimés ou anonymisés.",
            "Nous ne vendons, ne louons et n'échangeons jamais d'informations personnelles, et ne les communiquons jamais à des annonceurs.",
          ],
        },
      },
      {
        heading: { en: "Service providers", fr: "Prestataires de services" },
        paragraphs: {
          en: [
            "The site is hosted on Vercel, and messages are delivered through an email provider. Both process data only to deliver the service on our behalf. Photography is stored on Cloudinary when the foundation's own images arrive. Each provider keeps the data for the length of our relationship with them and no longer.",
          ],
          fr: [
            "Le site est hébergé par Vercel, et les messages sont transmis via un fournisseur de messagerie. Les deux traitent des données uniquement pour fournir le service en notre nom. Les photographies sont stockées sur Cloudinary lorsque les images de la fondation arrivent. Chaque prestataire conserve les données pendant la durée de notre relation avec lui, et pas davantage.",
          ],
        },
      },
      {
        heading: { en: "Your rights", fr: "Vos droits" },
        paragraphs: {
          en: [
            "You may ask us what we hold about you, ask for it to be corrected, ask for it to be deleted, or object to how we use it. Write to the foundation and we will answer within thirty days. If you are not satisfied with our answer, you may complain to the relevant authority in Cameroon.",
          ],
          fr: [
            "Vous pouvez nous demander quelles informations nous détenons à votre sujet, demander leur rectification, leur suppression, ou vous opposer à leur utilisation. Écrivez à la fondation et nous répondrons dans un délai de trente jours. Si notre réponse ne vous satisfait pas, vous pouvez introduire une réclamation auprès de l'autorité compétente au Cameroun.",
          ],
        },
      },
    ],
  },

  terms: {
    title: { en: "Terms of use", fr: "Conditions d'utilisation" },
    lead: {
      en: "The terms on which this website is published and may be used.",
      fr: "Les conditions de publication et d'utilisation de ce site.",
    },
    updated: "2026-04-02",
    sections: [
      {
        heading: { en: "About the information on this site", fr: "À propos des informations du site" },
        paragraphs: {
          en: [
            "Bridge of Hope Foundation is pre-operational. Figures published on this site are planning targets and estimates drawn from the Concept Note and the Business Plan of December 2025. They are not recorded results, and every one of them is labelled as a target or an estimate where it appears.",
            "Programme descriptions describe what is planned and what the foundation intends to build. Where an activity has not yet begun, the site says so.",
          ],
          fr: [
            "Bridge of Hope Foundation est en phase de pré-exploitation. Les chiffres publiés sur ce site sont des objectifs de planification et des estimations issus de la Note de concept et du Plan d'affaires de décembre 2025. Ce ne sont pas des résultats constatés, et chacun d'eux est présenté comme objectif ou estimation là où il apparaît.",
            "Les descriptions de programmes exposent ce qui est planifié et ce que la fondation entend construire. Lorsqu'une activité n'a pas encore commencé, le site le précise.",
          ],
        },
      },
      {
        heading: { en: "Photography", fr: "Photographies" },
        paragraphs: {
          en: [
            "The photographs currently published are licensed stock images used as placeholders, credited beneath each frame. They do not show the foundation's beneficiaries, staff or sites. They will be replaced by the foundation's own photography as it is produced, with consent releases and named credits.",
          ],
          fr: [
            "Les photographies actuellement publiées sont des images sous licence utilisées comme substituts, créditées sous chaque cadre. Elles ne montrent ni les bénéficiaires, ni le personnel, ni les sites de la fondation. Elles seront remplacées par la photographie propre de la fondation à mesure qu'elle sera produite, avec autorisations de diffusion et crédits nominatifs.",
          ],
        },
      },
      {
        heading: { en: "Donations and enquiries", fr: "Dons et demandes" },
        paragraphs: {
          en: [
            "This site does not process payments. Every support action leads to a conversation with the foundation, and the terms of any gift, grant or sponsorship are agreed in writing between the foundation and the donor.",
            "Nothing on this site is an offer capable of binding the foundation to a funding commitment.",
          ],
          fr: [
            "Ce site ne traite aucun paiement. Toute action de soutien mène à un échange avec la fondation, et les conditions de tout don, subvention ou parrainage sont convenues par écrit entre la fondation et le donateur.",
            "Rien sur ce site ne constitue une offre engageant la fondation à un engagement de financement.",
          ],
        },
      },
      {
        heading: { en: "Liability and governing law", fr: "Responsabilité et droit applicable" },
        paragraphs: {
          en: [
            "We take care to keep the information on this site accurate and current, but we give no warranty that it is complete or error-free, and we accept no liability for decisions taken on the basis of it alone. Links to external websites are provided for convenience; we do not control those sites and are not responsible for their content.",
            "These terms are governed by the laws of the Republic of Cameroon. The foundation is registered with MINATD under Law No. 2010/011.",
          ],
          fr: [
            "Nous veillons à l'exactitude et à l'actualité des informations de ce site, mais nous ne garantissons pas qu'elles soient complètes ou sans erreur, et n'assumons aucune responsabilité pour les décisions prises sur leur seule base. Les liens vers des sites externes sont fournis par commodité ; nous ne contrôlons pas ces sites et ne sommes pas responsables de leur contenu.",
            "Ces conditions sont régies par les lois de la République du Cameroun. La fondation est enregistrée au MINATD en vertu de la Loi n° 2010/011.",
          ],
        },
      },
    ],
  },

  cookies: {
    title: { en: "Cookie policy", fr: "Politique de cookies" },
    lead: {
      en: "This site uses no advertising cookies, no tracking pixels and no analytics.",
      fr: "Ce site n'utilise ni cookies publicitaires, ni pixels de suivi, ni outil d'analyse.",
    },
    updated: "2026-04-02",
    sections: [
      {
        heading: { en: "What a cookie is", fr: "Qu'est-ce qu'un cookie" },
        paragraphs: {
          en: [
            "A cookie is a small file a website asks your browser to store. Cookies can be essential — keeping you signed in to a service — or optional, used to track how people move around a site.",
          ],
          fr: [
            "Un cookie est un petit fichier qu'un site demande à votre navigateur de stocker. Les cookies peuvent être essentiels — vous maintenir connecté à un service — ou facultatifs, utilisés pour suivre la navigation des visiteurs.",
          ],
        },
      },
      {
        heading: { en: "What this site uses", fr: "Ce que ce site utilise" },
        paragraphs: {
          en: [
            "This website sets no cookies of its own. Fonts are served from the same origin as the site, so opening a page does not contact an external provider. There is no advertising, no behavioural targeting and no analytics.",
            "If the foundation adds an analytics tool in future, this page will be updated before it is added, and the change will be described here.",
          ],
          fr: [
            "Ce site ne dépose aucun cookie lui-même. Les polices de caractères sont servies depuis la même origine que le site : l'ouverture d'une page ne contacte donc aucun fournisseur externe. Il n'y a ni publicité, ni ciblage comportemental, ni analyse d'audience.",
            "Si la fondation ajoute un outil d'analyse à l'avenir, cette page sera mise à jour avant son ajout, et le changement y sera décrit.",
          ],
        },
      },
      {
        heading: { en: "Turning cookies off", fr: "Désactiver les cookies" },
        paragraphs: {
          en: [
            "Your browser can be set to refuse cookies, or to clear them whenever you close it. Because this site does not rely on cookies, nothing on it will stop working if you do.",
          ],
          fr: [
            "Votre navigateur peut être configuré pour refuser les cookies, ou pour les effacer à chaque fermeture. Comme ce site ne dépend d'aucun cookie, rien de ce qu'il contient ne cessera de fonctionner si vous le faites.",
          ],
        },
      },
    ],
  },

  accessibility: {
    title: { en: "Accessibility statement", fr: "Déclaration d'accessibilité" },
    lead: {
      en: "This site is built to WCAG 2.2 Level AA, and we would like to know where it falls short.",
      fr: "Ce site est conçu pour le niveau AA de la norme WCAG 2.2, et nous aimerions savoir où il ne l'atteint pas.",
    },
    updated: "2026-04-02",
    sections: [
      {
        heading: { en: "What we have done", fr: "Ce que nous avons fait" },
        paragraphs: {
          en: [
            "The site is built with semantic HTML and real headings, works with a keyboard throughout, carries a visible focus indicator on every interactive element, and meets the AA contrast requirement for text and interface colours. Type scales with the browser setting rather than fighting it, and the layout reflows to a single column on a small screen without horizontal scrolling.",
            "Motion is limited to a slow reveal as a section enters the screen, and that effect is disabled entirely for visitors whose system asks for reduced motion. No content is ever behind an animation.",
          ],
          fr: [
            "Le site est bâti sur du HTML sémantique et de vrais titres, fonctionne entièrement au clavier, propose un indicateur de focus visible sur chaque élément interactif, et respecte le niveau AA de contraste pour le texte et les couleurs d'interface. La typographie suit le réglage du navigateur au lieu de lui resists, et la mise en page se réduit à une seule colonne sur petit écran sans défilement horizontal.",
            "Les animations se limitent à une apparition lente quand une section entre dans l'écran, effet entièrement désactivé pour les visiteurs dont le système demande une réduction des animations. Aucun contenu n'est jamais caché derrière une animation.",
          ],
        },
      },
      {
        heading: { en: "Known limitations", fr: "Limites connues" },
        paragraphs: {
          en: [
            "The placeholders for the foundation's own photography are drawn as duotone frames. When real photographs are published, each will carry a text description, and the team will check that the description conveys the same information as the image.",
            "Some documents linked from this site may not yet be structured for screen readers. These are being reworked, and we will note here when the work is done.",
          ],
          fr: [
            "Les substituts prévus pour la photographie propre de la fondation sont dessinés en cadres duotones. Lorsque de véritables photographies seront publiées, chacune comportera une description textuelle, et l'équipe vérifiera que cette description transmet la même information que l'image.",
            "Certains documents liés depuis ce site ne sont pas encore structurés pour les lecteurs d'écran. Ils sont en cours de refonte, et nous l'indiquerons ici lorsque le travail sera terminé.",
          ],
        },
      },
      {
        heading: { en: "Tell us what is wrong", fr: "Dites-nous ce qui ne va pas" },
        paragraphs: {
          en: [
            "If any part of this site obstructs you, write to the foundation and we will fix it. Describe the page and the problem in your own words; you do not need to know the technical name for it.",
          ],
          fr: [
            "Si une partie de ce site vous entrave, écrivez à la fondation et nous la corrigerons. Décrivez la page et le problème avec vos propres mots ; vous n'avez pas besoin d'en connaître le nom technique.",
          ],
        },
      },
    ],
  },
} as const;

export type LegalKey = keyof typeof legal;
