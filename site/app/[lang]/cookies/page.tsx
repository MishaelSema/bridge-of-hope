import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { legal } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/legal-document";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = legal.cookies;
  return buildMetadata({
    locale,
    title: `${p.title[locale]} — Bridge of Hope Foundation`,
    description:
      locale === "en"
        ? "This website uses no advertising cookies, no tracking pixels and no analytics."
        : "Ce site n'utilise ni cookies publicitaires, ni pixels de suivi, ni outil d'analyse.",
    path: "/cookies",
    extraKeywords: ["cookie policy NGO", "politique cookies site internet"],
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = legal.cookies;
  return (
    <LegalDocument
      locale={locale}
      title={p.title[locale]}
      lead={p.lead[locale]}
      updated={p.updated}
      sections={p.sections}
    />
  );
}
