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
  const p = legal.privacy;
  return buildMetadata({
    locale,
    title: `${p.title[locale]} — Bridge of Hope Foundation`,
    description:
      locale === "en"
        ? "What this website collects, why it collects it, and what you can ask us to do about it."
        : "Ce que ce site collecte, pourquoi, et ce que vous pouvez nous demander de faire.",
    path: "/privacy",
    extraKeywords: ["privacy policy Cameroon NGO", "protection des données personnelles Cameroun"],
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = legal.privacy;
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
