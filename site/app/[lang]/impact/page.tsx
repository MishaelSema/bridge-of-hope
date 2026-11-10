import type { Metadata } from "next";
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
  const p = pages[locale].impact;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "The Record" : "Les Chiffres"} — ${siteName}`,
    description: p.lead,
    path: "/impact",
    extraKeywords: [
      "disability NGO impact Cameroon",
      "Bridge of Hope results",
      "impact personnes handicapées Cameroun",
    ],
  });
}

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].impact;

  return (
    <>
      <PageHero
        photo={photo("awardSmile")}
        alt={locale === "fr" ? photo("awardSmile").altFr : photo("awardSmile").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("awardSmile").credit}
      />

      {/* The honesty strip */}
      <section className="bg-mint">
        <div className="mx-auto max-w-[1400px] px-5 py-6 md:px-8 md:py-7">
          <p className="max-w-[76ch] text-[0.92rem] leading-[1.65] text-ink md:text-[0.98rem]">
            {p.banner}
          </p>
        </div>
      </section>

      {/* The figures */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {p.figures.map((item) => (
              <li key={item.figure} className="border-t-2 border-ink pt-6">
                <p
                  className={`display text-[clamp(2.6rem,6.5vw,4rem)] leading-none ${
                    item.figure.startsWith("600") ? "text-mint-deep" : "text-ink"
                  }`}
                >
                  {item.figure}
                </p>
                <p className="mt-5 max-w-[28ch] text-[0.95rem] leading-[1.68]">{item.label}</p>
                <p className="mt-3 text-[0.74rem] leading-[1.5] tracking-[0.06em] text-slate">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recognition — moments from the foundation's own archive */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
                {p.recognitionHeading}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.75]">{p.recognitionBody}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Figure
                photo={photo("awardGroup")}
                alt={locale === "fr" ? photo("awardGroup").altFr : photo("awardGroup").alt}
                caption={p.recognitionCaptionOne}
                credit={photo("awardGroup").credit}
                frameClassName="aspect-[4/5]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <Figure
                photo={photo("advocacyHandover")}
                alt={locale === "fr" ? photo("advocacyHandover").altFr : photo("advocacyHandover").alt}
                caption={p.recognitionCaptionTwo}
                credit={photo("advocacyHandover").credit}
                frameClassName="aspect-[4/5] sm:mt-12"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What will be measured */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.kpiHeading}
            </h2>
            <ul className="mt-8">
              {p.kpis.map((kpi) => (
                <li key={kpi} className="border-t border-mist py-5 text-[1rem] leading-[1.7] last:border-b">
                  {kpi}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.reportHeading}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">{p.report}</p>
            <Figure
              photo={photo("business")}
              alt={locale === "fr" ? photo("business").altFr : photo("business").alt}
              caption={p.imageCaption}
              credit={photo("business").credit}
              frameClassName="mt-9 aspect-[3/2]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
