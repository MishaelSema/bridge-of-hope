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
  const p = pages[locale].founder;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "The Founder" : "Le Fondateur"} — ${siteName}`,
    description: `${p.name} — ${p.role}. ${p.bio[0]}`,
    path: "/founder",
    extraKeywords: [
      "Christopher A. Ekom",
      "Fondateur Bridge of Hope",
      "business diplomacy Cameroon disability",
    ],
  });
}

export default async function FounderPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].founder;

  return (
    <>
      <PageHero
        photo={photo("founderCane")}
        alt={locale === "fr" ? photo("founderCane").altFr : photo("founderCane").alt}
        title={p.title}
        lead={`${p.name} — ${p.role}`}
        credit={photo("founderCane").credit}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="max-w-[62ch] space-y-6 text-[1rem] leading-[1.78]">
                {p.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 border-t-2 border-ink pt-8">
                <h2 className="display max-w-[16ch] text-[clamp(1.6rem,4vw,2.6rem)]">
                  {p.beliefHeading}
                </h2>
                <p className="mt-6 max-w-[58ch] text-[1rem] leading-[1.78]">{p.belief}</p>
              </div>
            </div>

            <div>
              <blockquote className="bg-sand px-6 py-9 md:px-8 md:py-11">
                <p className="font-quote text-[clamp(1.4rem,3.2vw,2.1rem)] leading-[1.25] text-ink italic">
                  “{p.quote}”
                </p>
                <footer className="label mt-6 text-slate">{p.name}</footer>
              </blockquote>

              <Figure
                photo={photo("founderLanyard")}
                alt={locale === "fr" ? photo("founderLanyard").altFr : photo("founderLanyard").alt}
                caption={p.caption}
                credit={photo("founderLanyard").credit}
                frameClassName="mt-10 aspect-[3/4] lg:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </div>

          <div className="mt-14 border-t-2 border-ink pt-8 md:mt-20">
            <h2 className="display max-w-[18ch] text-[clamp(1.6rem,4vw,2.6rem)]">
              {p.agnHeading}
            </h2>
            <p className="mt-6 max-w-[64ch] text-[1rem] leading-[1.78]">{p.agn}</p>
          </div>
        </div>
      </section>
    </>
  );
}
