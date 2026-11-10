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
};

const photos = {
  children: {
    src: "/images/hero-children.jpg",
    alt: "Children looking toward the camera outdoors in Cameroon.",
    altFr: "Enfants regardant vers l'objectif en plein air au Cameroun.",
    credit: "Photo: 3ch310n, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  bridge: {
    src: "/images/bridge-sanaga.jpg",
    alt: "The suspension bridge over the Sanaga river in Cameroon.",
    altFr: "Le pont suspendu au-dessus de la Sanaga au Cameroun.",
    credit: "Photo: Sosojam, Wikimedia Commons, CC BY-SA 3.0 — placeholder",
  },
  sport: {
    src: "/images/inclusive-sport.jpg",
    alt: "Players in an inclusive football match on a community pitch.",
    altFr: "Joueurs lors d'un match de football intégré sur un terrain communautaire.",
    credit: "Photo: Myousry6666, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  tailor: {
    src: "/images/tailor-workshop.jpg",
    alt: "A tailor working at a sewing machine in her workshop.",
    altFr: "Une couturière travaille à sa machine dans son atelier.",
    credit: "Photo: Maina Pat Mbae, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  tailoringUnit: {
    src: "/images/tailoring-unit.jpg",
    alt: "A mobile tailoring unit set up for training.",
    altFr: "Une unité mobile de couture installée pour la formation.",
    credit: "Photo: Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  carpentry: {
    src: "/images/carpentry.jpg",
    alt: "A craftsman making wooden chairs in a community workshop.",
    altFr: "Un artisan fabrique des chaises en bois dans un atelier communautaire.",
    credit: "Photo: Martin Hipangwa, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  market: {
    src: "/images/market-women.jpg",
    alt: "Women trading vegetables at an open-air market in Cameroon.",
    altFr: "Des femmes vendent des légumes au marché en plein air au Cameroun.",
    credit: "Photo: Minette Lontsie, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  marketBafia: {
    src: "/images/market-bafia.jpg",
    alt: "A vegetable market scene in Bafia, Cameroon.",
    altFr: "Une scène de marché aux légumes à Bafia, au Cameroun.",
    credit: "Photo: Bediong, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  farm: {
    src: "/images/farm-rain.jpg",
    alt: "Farmland at Ekombitié during the rainy season.",
    altFr: "Terres cultivées à Ekombitié pendant la saison des pluies.",
    credit: "Photo: Simbanematick, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  agroforest: {
    src: "/images/agroforest.jpg",
    alt: "Agroforestry planting at Tayap, Cameroon.",
    altFr: "Plantations agroforestières à Tayap, au Cameroun.",
    credit: "Photo: Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  poultry: {
    src: "/images/poultry-farm.jpg",
    alt: "A poultry farm with a house and free-ranging birds.",
    altFr: "Une ferme avicole avec un bâtiment et des volailles en liberté.",
    credit: "Photo: Olga Ernst, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  studio: {
    src: "/images/vocational-studio.jpg",
    alt: "A recording studio used for vocational training.",
    altFr: "Un studio d'enregistrement utilisé pour la formation professionnelle.",
    credit: "Photo: IICD, Wikimedia Commons, CC BY 2.0 — placeholder",
  },
  business: {
    src: "/images/business-plan.jpg",
    alt: "A business plan being worked through at a desk.",
    altFr: "Un plan d'affaires travaillé à un bureau.",
    credit: "Photo: Ed Hawkesworth / DFID, Wikimedia Commons, CC BY 2.0 — placeholder",
  },
  youth: {
    src: "/images/youth-working.jpg",
    alt: "A young worker at work outdoors.",
    altFr: "Un jeune travailleur à l'œuvre en plein air.",
    credit: "Photo: Kani Beat, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  city: {
    src: "/images/yaounde-city.jpg",
    alt: "A view across Yaoundé, Cameroon.",
    altFr: "Vue sur Yaoundé, au Cameroun.",
    credit: "Photo: Kateregga1, Wikimedia Commons, CC BY-SA 4.0 — placeholder",
  },
  cityNight: {
    src: "/images/yaounde-night.jpg",
    alt: "Yaoundé at night, lights across the hills.",
    altFr: "Yaoundé la nuit, les lumières sur les collines.",
    credit: "Photo: Shaowu Fan, Wikimedia Commons, CC BY 3.0 — placeholder",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function photo(id: PhotoId): Photo {
  return photos[id];
}

/**
 * The hero sequence — the photographs that cycle behind the opening
 * statement. Ordered as a story: the people, the market, the land, the city.
 */
export const heroSlides: Photo[] = [
  photos.children,
  photos.market,
  photos.agroforest,
  photos.city,
];
