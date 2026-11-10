import type { Metadata } from "next";
import type { Locale } from "./i18n";

/**
 * Search and social metadata.
 *
 * One builder for every page: canonical URL, both language alternates,
 * keywords, Open Graph and Twitter cards. The card image itself is drawn on
 * the fly by the `opengraph-image` route in each folder.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bridge-of-hope.vercel.app"
).replace(/\/$/, "");

export const siteName = "Bridge of Hope Foundation";

/** The foundation's own social card, used on every static page. */
export const defaultOgImage = "/bridge_of_hope_opengraph_1200x630.png";

export const keywords: Record<Locale, string[]> = {
  en: [
    "Bridge of Hope Foundation",
    "disability inclusion Cameroon",
    "people with disabilities Cameroon",
    "persons with disabilities Yaoundé",
    "rehabilitation centre Yaoundé",
    "rehabilitation services Cameroon",
    "disability rehabilitation NGO",
    "vocational training for people with disabilities",
    "disability rights Cameroon",
    "disability advocacy Cameroon",
    "inclusive development Cameroon",
    "empowerment of persons with disabilities Africa",
    "assistive devices and therapy Cameroon",
    "livelihood training disability inclusion",
    "accessible communities Cameroon",
    "social enterprise disability Cameroon",
    "Ekombitié Cameroon",
    "non-profit disability Cameroon",
    "support people with disabilities Cameroon",
    "donate to disability NGO Cameroon",
  ],
  fr: [
    "Bridge of Hope Foundation",
    "handicap Cameroun",
    "personnes handicapées Cameroun",
    "personnes en situation de handicap Yaoundé",
    "centre de réhabilitation Yaoundé",
    "réhabilitation Cameroun",
    "ONG personnes handicapées Cameroun",
    "formation professionnelle personnes handicapées",
    "autonomisation personnes handicapées Cameroun",
    "plaidoyer droits des personnes handicapées Cameroun",
    "inclusion des personnes handicapées Cameroun",
    "accompagnement handicap Cameroun",
    "atelier formation personnes handicapées",
    "fonds de dotation handicap Cameroun",
    "don personnes handicapées Cameroun",
    "Ekombitié Cameroun",
  ],
};

export function canonical(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build the metadata for one page. `path` is locale-independent — the
 * English and French routes are derived from it.
 */
export function buildMetadata({
  locale,
  title,
  description,
  path,
  extraKeywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
  images,
}: {
  locale: Locale;
  title: string;
  description: string;
  /** Locale-independent path, e.g. "/about". */
  path: string;
  extraKeywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Overrides the default social card — the journal uses its own photograph. */
  images?: string[];
}): Metadata {
  const en = path === "/" ? "/" : path;
  const enUrl = canonical(en);
  const frUrl = canonical(`/fr${en === "/" ? "" : en}`);

  const wordList = [...keywords[locale], ...extraKeywords];

  // The foundation's own card for the static pages; the journal posts use
  // their own photograph, which carries its own dimensions.
  const cards = images?.length
    ? images.map((url) => ({ url, alt: title }))
    : [{ url: defaultOgImage, width: 1200, height: 630, alt: title }];

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    description,
    keywords: wordList,
    alternates: {
      canonical: locale === "en" ? enUrl : frUrl,
      languages: {
        en: enUrl,
        fr: frUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type,
      locale: locale === "fr" ? "fr_CM" : "en_US",
      url: locale === "en" ? enUrl : frUrl,
      siteName,
      title,
      description,
      images: cards,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@bridgeofhope",
      title,
      description,
      images: cards.map((card) => card.url),
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
