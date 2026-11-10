import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { Figure } from "@/components/figure";
import { buildMetadata, siteName } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].involve;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "Get Involved" : "S'engager"} — ${siteName}`,
    description: p.lead,
    path: "/get-involved",
    extraKeywords: [
      "support disability NGO Cameroon",
      "donate disability Cameroon",
      "soutenir fondation handicap Cameroun",
      "partenariat ONG Cameroun",
    ],
  });
}

export default async function GetInvolvedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].involve;

  return (
    <>
      <PageHero
        photo={photo("applause")}
        alt={locale === "fr" ? photo("applause").altFr : photo("applause").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("applause").credit}
      />

      {/* Three ways in */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {p.cards.map((card, index) => (
              <li key={card.heading} className="card flex flex-col p-7 md:p-9">
                <span className="display text-[1rem] tracking-[0.1em] text-mint-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-5 max-w-[14ch] text-[clamp(1.35rem,3vw,1.85rem)]">
                  {card.heading}
                </h2>
                <p className="mt-4 flex-1 max-w-[40ch] text-[0.96rem] leading-[1.72] text-ink/80">
                  {card.body}
                </p>
                <a href={card.href} className="btn btn-ink mt-8 w-fit">
                  {card.action}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[64ch] text-[0.82rem] leading-[1.65] text-slate">{p.note}</p>
        </div>
      </section>

      {/* The close — green, like every call to action on the site. */}
      <section className="bg-mint py-16 text-ink md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <span className="rule-ink" aria-hidden />
            <h2 className="display mt-6 max-w-[16ch] text-[clamp(1.8rem,5vw,3.2rem)] text-ink">
              {locale === "en" ? "Every gift carries the same weight." : "Chaque don pèse de la même façon."}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.76] text-ink/80">
              {locale === "en"
                ? "Bridge of Hope is raising the funding that turns the plan into a working centre: therapy and assistive equipment, vocational tools and laboratories, staffing, and the advocacy programme. Grants, sponsorship and individual gifts all move one person from dependence to enterprise."
                : "Bridge of Hope lève les financements qui transforment le projet en centre fonctionnel : thérapie et équipements techniques, outils et laboratoires de formation, personnel et programme de plaidoyer. Subventions, parrainage et dons individuels font passer une personne de la dépendance à l'entreprise."}
            </p>
            <Link href={`/${locale}/contact`} className="btn btn-navy mt-9 w-full sm:w-auto">
              {locale === "en" ? "Write to the foundation" : "Écrire à la fondation"}
            </Link>
          </div>

          <Figure
            photo={photo("tailoringUnit")}
            alt={locale === "fr" ? photo("tailoringUnit").altFr : photo("tailoringUnit").alt}
            caption={p.imageCaption}
            credit={photo("tailoringUnit").credit}
            frameClassName="aspect-[4/3] lg:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>
    </>
  );
}
