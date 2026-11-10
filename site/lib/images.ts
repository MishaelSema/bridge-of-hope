/**
 * The photographic registry.
 *
 * Every photograph on the site is declared here once: file, alt text, and the
 * credit line printed beneath it. Swap a stock file for the foundation's own
 * photography by replacing the file in `public/images` and updating the
 * credit — nothing else in the build needs to change.
 *
 * Current photography is licensed stock (Wikimedia Commons), used as a
 * placeholder until the foundation's own images arrive.
 */

export type Photo = {
  src: string;
  alt: string;
  altFr: string;
  /** Printed under the photograph: author, licence, source. */
  credit: string;
  /**
   * Where the subject sits when the photograph is cropped. Portrait sources
   * need an upward bias so that a wide band keeps the head, not the waist.
   */
  position?: string;
};

const photos = {
  children: {
    src: "/images/hero-children.webp",
    alt: "Children looking toward the camera outdoors in Cameroon.",
    altFr: "Enfants regardant vers l'objectif en plein air au Cameroun.",
    credit: "Photo: 3ch310n, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  bridge: {
    src: "/images/bridge-sanaga.webp",
    alt: "The suspension bridge over the Sanaga river in Cameroon.",
    altFr: "Le pont suspendu au-dessus de la Sanaga au Cameroun.",
    credit: "Photo: Sosojam, Wikimedia Commons, CC BY-SA 3.0 — placeholder",
  },
  sport: {
    src: "/images/inclusive-sport.webp",
    alt: "Players in an inclusive football match on a community pitch.",
    altFr: "Joueurs lors d'un match de football intégré sur un terrain communautaire.",
    credit: "Photo: Myousry6666, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  tailor: {
    src: "/images/tailor-workshop.webp",
    alt: "A tailor working at a sewing machine in her workshop.",
    altFr: "Une couturière travaille à sa machine dans son atelier.",
    credit: "Photo: Maina Pat Mbae, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  tailoringUnit: {
    src: "/images/tailoring-unit.webp",
    alt: "A mobile tailoring unit set up for training.",
    altFr: "Une unité mobile de couture installée pour la formation.",
    credit: "Photo: Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  carpentry: {
    src: "/images/carpentry.webp",
    alt: "A craftsman making wooden chairs in a community workshop.",
    altFr: "Un artisan fabrique des chaises en bois dans un atelier communautaire.",
    credit: "Photo: Martin Hipangwa, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  market: {
    src: "/images/market-women.webp",
    alt: "Women trading vegetables at an open-air market in Cameroon.",
    altFr: "Des femmes vendent des légumes au marché en plein air au Cameroun.",
    credit: "Photo: Minette Lontsie, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  marketBafia: {
    src: "/images/market-bafia.webp",
    alt: "A vegetable market scene in Bafia, Cameroon.",
    altFr: "Une scène de marché aux légumes à Bafia, au Cameroun.",
    credit: "Photo: Bediong, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  farm: {
    src: "/images/farm-rain.webp",
    alt: "Farmland at Ekombitié during the rainy season.",
    altFr: "Terres cultivées à Ekombitié pendant la saison des pluies.",
    credit: "Photo: Simbanematick, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  agroforest: {
    src: "/images/agroforest.webp",
    alt: "Agroforestry planting at Tayap, Cameroon.",
    altFr: "Plantations agroforestières à Tayap, au Cameroun.",
    credit: "Photo: Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  poultry: {
    src: "/images/poultry-farm.webp",
    alt: "A poultry farm with a house and free-ranging birds.",
    altFr: "Une ferme avicole avec un bâtiment et des volailles en liberté.",
    credit: "Photo: Olga Ernst, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  studio: {
    src: "/images/vocational-studio.webp",
    alt: "A recording studio used for vocational training.",
    altFr: "Un studio d'enregistrement utilisé pour la formation professionnelle.",
    credit: "Photo: IICD, Wikimedia Commons, CC BY 2.0 — placeholder",
  },
  business: {
    src: "/images/business-plan.webp",
    alt: "A business plan being worked through at a desk.",
    altFr: "Un plan d'affaires travaillé à un bureau.",
    credit: "Photo: Ed Hawkesworth / DFID, Wikimedia Commons, CC BY 2.0 — placeholder",
  },
  youth: {
    src: "/images/youth-working.webp",
    alt: "A young worker at work outdoors.",
    altFr: "Un jeune travailleur à l'œuvre en plein air.",
    credit: "Photo: Kani Beat, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  city: {
    src: "/images/yaounde-city.webp",
    alt: "A view across Yaoundé, Cameroon.",
    altFr: "Vue sur Yaoundé, au Cameroun.",
    credit: "Photo: Kateregga1, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  cityNight: {
    src: "/images/yaounde-night.webp",
    alt: "Yaoundé at night, lights across the hills.",
    altFr: "Yaoundé la nuit, les lumières sur les collines.",
    credit: "Photo: Shaowu Fan, Wikimedia Commons, CC BY 3.0 — placeholder",
  },

  /* ── The foundation's own archive ─────────────────────────────────── */

  eventGroup: {
    src: "/images/event-group.webp",
    alt: "Twenty-odd people in business attire standing together for a group photograph at a foundation gathering.",
    altFr: "Une vingtaine de personnes en tenue de ville, réunies pour une photo de groupe lors d'une rencontre de la fondation.",
    credit: "Photograph: the foundation's own archive",
  },
  applause: {
    src: "/images/applause.webp",
    alt: "A man in a suit applauds at a gathering, beside a man who uses crutches.",
    altFr: "Un homme en costume applaudit lors d'une rencontre, à côté d'un homme qui utilise des béquilles.",
    credit: "Photograph: the foundation's own archive",
  },
  crutchesMan: {
    src: "/images/crutches-man.webp",
    alt: "A man using blue crutches looks down at a phone at an indoor event.",
    altFr: "Un homme qui utilise des béquilles regarde son téléphone lors d'un événement.",
    credit: "Photograph: the foundation's own archive",
  },
  crutchesPhone: {
    src: "/images/crutches-phone.webp",
    alt: "A man in a grey suit with crutches at his side looks at his phone while people talk behind him.",
    altFr: "Un homme en costume gris, des béquilles à ses côtés, regarde son téléphone pendant que l'on discute derrière lui.",
    credit: "Photograph: the foundation's own archive",
  },
  communityTable: {
    src: "/images/community-table.webp",
    alt: "People seated around a round table in conversation and laughter at a community dinner.",
    altFr: "Des personnes réunies autour d'une table ronde, en discussion et riant, lors d'un dîner communautaire.",
    credit: "Photograph: the foundation's own archive",
  },
  eventNetworking: {
    src: "/images/event-networking.webp",
    alt: "People in business attire stand in conversation, glasses in hand, at an indoor reception.",
    altFr: "Des personnes en tenue de ville conversent, verre en main, lors d'une réception.",
    credit: "Photograph: the foundation's own archive",
  },
  meetingSpeaking: {
    src: "/images/meeting-speaking.webp",
    alt: "A man in a grey suit speaks from a sofa while two others listen in a bright lounge.",
    altFr: "Un homme en costume gris s'exprime depuis un canapé tandis que deux autres l'écoutent dans un salon lumineux.",
    credit: "Photograph: the foundation's own archive",
  },
  associationBanner: {
    src: "/images/association-banner.webp",
    alt: "Three men stand in front of a Bridge of Hope Cameroon Association banner; one of them uses crutches.",
    altFr: "Trois hommes se tiennent devant une bannière de l'association Bridge of Hope Cameroon ; l'un d'eux utilise des béquilles.",
    credit: "Photograph: the foundation's own archive",
  },
  advocacyHandshake: {
    src: "/images/advocacy-handshake.webp",
    alt: "A man in a blue suit shakes hands with a man in red traditional dress who uses crutches.",
    altFr: "Un homme en costume bleu serre la main d'un homme en tenue traditionnelle rouge qui utilise des béquilles.",
    credit: "Photograph: the foundation's own archive",
  },
  advocacyHandover: {
    src: "/images/advocacy-handover.webp",
    alt: "A document is presented to a man in red traditional dress and a black hat who uses crutches.",
    altFr: "Un document est remis à un homme en tenue traditionnelle rouge et chapeau noir qui utilise des béquilles.",
    credit: "Photograph: the foundation's own archive",
  },
  awardCertificate: {
    src: "/images/award-certificate.webp",
    position: "center 30%",
    alt: "A woman in a black evening gown holds a certificate beside a seated participant who uses a white cane.",
    altFr: "Une femme en robe de soirée noire tient un certificat à côté d'un participant assis qui utilise une canne blanche.",
    credit: "Photograph: the foundation's own archive",
  },
  awardGroup: {
    src: "/images/award-group.webp",
    position: "center 28%",
    alt: "Six people stand together holding certificates after an award ceremony; one of them uses a white cane.",
    altFr: "Six personnes se tiennent ensemble, certificats en main, après une cérémonie de remise de prix ; l'une d'elles utilise une canne blanche.",
    credit: "Photograph: the foundation's own archive",
  },
  awardSmile: {
    src: "/images/award-smile.webp",
    position: "center 24%",
    alt: "A woman in a black gown smiles holding a certificate, with the award group behind her.",
    altFr: "Une femme en robe noire sourit en tenant un certificat, le groupe des lauréats derrière elle.",
    credit: "Photograph: the foundation's own archive",
  },
  expoSelfie: {
    src: "/images/expo-selfie.webp",
    alt: "Two men in blazers wearing lanyards pose together at a trade-show booth.",
    altFr: "Deux hommes en blousons portant un badge posent ensemble devant un stand.",
    credit: "Photograph: the foundation's own archive",
  },
  expoPowerAfrica: {
    src: "/images/expo-power-africa.webp",
    alt: "A group at a Power Africa booth; a man in white traditional dress sits at the front on a mobility scooter.",
    altFr: "Un groupe devant le stand Power Africa ; un homme en tenue traditionnelle blanche est assis au premier plan sur un scooter de mobilité.",
    credit: "Photograph: the foundation's own archive",
  },
  expoScooter: {
    src: "/images/expo-scooter.webp",
    position: "center 30%",
    alt: "A man in white traditional dress on a red mobility scooter at a trade-show booth, with people standing behind him.",
    altFr: "Un homme en tenue traditionnelle blanche sur un scooter de mobilité rouge devant un stand, entouré de personnes.",
    credit: "Photograph: the foundation's own archive",
  },
  founderCane: {
    src: "/images/founder-cane.webp",
    position: "center 28%",
    alt: "A man in black traditional dress and a black hat, seated, with a white cane resting on the floor beside him.",
    altFr: "Un homme en tenue traditionnelle noire et chapeau noir, assis, une canne blanche posée à côté de lui.",
    credit: "Photograph: the foundation's own archive",
  },
  founderLanyard: {
    src: "/images/founder-lanyard.webp",
    alt: "A man in a blue traditional outfit, black hat and glasses, wearing an event lanyard.",
    altFr: "Un homme en tenue traditionnelle bleue, chapeau noir et lunettes, portant un badge d'événement.",
    credit: "Photograph: the foundation's own archive",
  },
  founderPortrait: {
    src: "/images/founder-portrait.webp",
    alt: "A head-and-shoulders portrait of a man in a suit, patterned shirt, tie and glasses.",
    altFr: "Portrait buste d'un homme en costume, chemise à motifs, cravate et lunettes.",
    credit: "Photograph: the foundation's own archive",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function photo(id: PhotoId): Photo {
  return photos[id];
}

/**
 * The hero sequence — the photographs that cycle behind the opening
 * statement. Four moments from the foundation's own archive: the gathering,
 * the founder, the recognition, the international stage.
 */
export const heroSlides: Photo[] = [
  photos.eventGroup,
  photos.founderCane,
  photos.awardCertificate,
  photos.expoPowerAfrica,
];
