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
  const p = legal.accessibility;
  return buildMetadata({
    locale,
    title: `${p.title[locale]} — Bridge of Hope Foundation`,
    description:
      locale === "en"
        ? "This site is built to WCAG 2.2 Level AA, and we would like to know where it falls short."
        : "Ce site est conçu pour le niveau AA de la norme WCAG 2.2, et nous aimerions savoir où il ne l'atteint pas.",
    path: "/accessibility",
    extraKeywords: ["accessibility statement WCAG 2.2 AA", "accessibilité site web Cameroun"],
  });
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = legal.accessibility;
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
