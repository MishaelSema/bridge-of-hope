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
  const p = legal.terms;
  return buildMetadata({
    locale,
    title: `${p.title[locale]} — Bridge of Hope Foundation`,
    description:
      locale === "en"
        ? "The terms on which the Bridge of Hope Foundation website is published and may be used."
        : "Les conditions de publication et d'utilisation du site de Bridge of Hope Foundation.",
    path: "/terms",
    extraKeywords: ["terms of use Cameroon NGO", "conditions d'utilisation site ONG Cameroun"],
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = legal.terms;
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
