import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { getDict, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildMetadata, canonical, keywords, siteName, siteUrl } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);

  const meta = buildMetadata({
    locale,
    title:
      locale === "fr"
        ? "Bridge of Hope — Relier les communautés et les opportunités"
        : "Bridge of Hope — Connecting Communities and Opportunities",
    description: t.hero.mission,
    path: "/",
  });

  return {
    ...meta,
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);

  const pagesList = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/programmes`, label: t.nav.programmes },
    { href: `/${locale}/founder`, label: t.nav.founder },
    { href: `/${locale}/impact`, label: t.nav.record },
    { href: `/${locale}/ecosystem`, label: t.nav.ecosystem },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/get-involved`, label: t.nav.involve },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy`, label: t.footer.privacy },
    { href: `/${locale}/terms`, label: t.footer.terms },
    { href: `/${locale}/cookies`, label: t.footer.cookies },
    { href: `/${locale}/accessibility`, label: t.footer.accessibilityLink },
  ];

  // Structured data: the foundation as an organisation, and the site itself.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${canonical("/")}#organisation`,
        name: "Bridge of Hope Foundation",
        alternateName: "Bridge of Hope",
        url: canonical("/"),
        description:
          locale === "fr"
            ? "Fondation de plaidoyer, de réhabilitation et d'autonomisation des personnes handicapées au Cameroun."
            : "Disability advocacy, rehabilitation and empowerment foundation in Cameroon.",
        email: "ekhrys@yahoo.com",
        telephone: "+237675033792",
        areaServed: "CM",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yaoundé",
          addressCountry: "CM",
        },
        nonprofitStatus: "Nonprofit501c3",
        slogan:
          locale === "fr"
            ? "Relier les communautés et les opportunités"
            : "Connecting communities and opportunities",
      },
      {
        "@type": "WebSite",
        "@id": `${canonical("/")}#website`,
        url: canonical("/"),
        name: "Bridge of Hope Foundation",
        inLanguage: locale,
        publisher: { "@id": `${canonical("/")}#organisation` },
      },
    ],
  };

  return (
    <html lang={locale} className={`${archivo.variable} ${instrument.variable}`}>
      <body>
        <a href="#main" className="skip">
          {t.nav.skip}
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <SiteHeader
          locale={locale}
          nav={t.nav}
          utility={t.utility}
          cta={t.nav.support}
          ctaShort={t.nav.supportShort}
        />

        <main id="main">{children}</main>

        <SiteFooter
          locale={locale}
          t={{
            pages: t.footer.pages,
            contact: t.footer.contact,
            locationsLabel: t.footer.locationsLabel,
            locations: t.footer.locations,
            values: t.footer.values,
            descriptor: t.footer.descriptor,
            phone: t.footer.phone,
            emails: t.footer.emails,
            legal: t.footer.legal,
            legalLinks,
            accessibility: t.footer.accessibility,
            pagesList,
          }}
        />
      </body>
    </html>
  );
}
