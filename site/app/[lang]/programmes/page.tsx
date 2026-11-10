import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, siteName } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].programmes;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "Programmes" : "Programmes"} — ${siteName}`,
    description: p.lead,
    path: "/programmes",
    extraKeywords: [
      "rehabilitation programmes Cameroon",
      "vocational training disability Cameroon",
      "programmes rééducation Cameroun",
      "formation professionnelle handicap Cameroun",
    ],
  });
}

export default async function ProgrammesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].programmes;

  return (
    <>
      <PageHero
        photo={photo("carpentry")}
        alt={locale === "fr" ? photo("carpentry").altFr : photo("carpentry").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("carpentry").credit}
      />

      {/* The six programmes */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ol className="grid grid-cols-1 gap-px bg-mist md:grid-cols-2 lg:grid-cols-3">
            {p.items.map((item) => (
              <li key={item.n} className="flex flex-col bg-paper px-6 py-9 md:px-8 md:py-11">
                <span className="display text-[1rem] tracking-[0.1em] text-mint-deep">{item.n}</span>
                <h2 className="display mt-5 max-w-[16ch] text-[clamp(1.35rem,3vw,1.85rem)]">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 max-w-[42ch] text-[0.96rem] leading-[1.72] text-ink/80">
                  {item.body}
                </p>
                <p className="mt-6 border-t border-mist pt-4 text-[0.74rem] leading-[1.5] tracking-[0.06em] text-slate">
                  {item.target}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[0.74rem] tracking-[0.06em] text-slate">{p.caption}</p>
        </div>
      </section>

      {/* How a beneficiary moves through it */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="display max-w-[18ch] text-[clamp(1.7rem,4.6vw,3rem)] text-paper">
            {p.flowHeading}
          </h2>

          <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
            {p.flow.map((step, index) => (
              <li key={step} className="border-t-2 border-mint pt-5">
                <span className="display text-[0.9rem] tracking-[0.1em] text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 max-w-[30ch] text-[0.98rem] leading-[1.65] text-paper/85">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
