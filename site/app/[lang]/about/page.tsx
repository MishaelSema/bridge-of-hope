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
  const p = pages[locale].about;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "About the foundation" : "À propos de la fondation"} — ${siteName}`,
    description: p.lead,
    path: "/about",
    extraKeywords: [
      "disability foundation Cameroon",
      "fondation handicap Cameroun",
      "Bridge of Hope Foundation about",
    ],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].about;

  return (
    <>
      <PageHero
        photo={photo("meetingSpeaking")}
        alt={locale === "fr" ? photo("meetingSpeaking").altFr : photo("meetingSpeaking").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("meetingSpeaking").credit}
      />

      {/* The problem */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.problemHeading}
            </h2>
            <p className="mt-7 max-w-[58ch] text-[1rem] leading-[1.78] md:text-[1.05rem]">
              {p.problem}
            </p>
          </div>

          <Figure
            photo={photo("youth")}
            alt={locale === "fr" ? photo("youth").altFr : photo("youth").alt}
            caption={p.imageCaption}
            credit={photo("youth").credit}
            frameClassName="aspect-[4/3] lg:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-16">
            <div>
              <h2 className="display max-w-[14ch] text-[clamp(1.7rem,4.6vw,3rem)] text-paper">
                {p.valuesHeading}
              </h2>
              <p className="mt-6 max-w-[48ch] text-[1rem] leading-[1.72] text-paper/75">
                {p.valuesLead}
              </p>
            </div>

            <Figure
              photo={photo("associationBanner")}
              alt={locale === "fr" ? photo("associationBanner").altFr : photo("associationBanner").alt}
              caption={
                locale === "en"
                  ? "Bridge of Hope Cameroon Association, at a gathering with partners."
                  : "Bridge of Hope Cameroon Association, lors d'une rencontre avec des partenaires."
              }
              credit={photo("associationBanner").credit}
              frameClassName="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 35vw"
              dark
            />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-px bg-white/12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
            {p.values.map((value, index) => (
              <li key={value} className="bg-ink px-6 py-8">
                <span className="label text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="display mt-4 text-[1.25rem] tracking-[-0.02em] text-paper md:text-[1.4rem]">
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.sustainabilityHeading}
            </h2>
            <Figure
              photo={photo("poultry")}
              alt={locale === "fr" ? photo("poultry").altFr : photo("poultry").alt}
              caption={locale === "en" ? "Income-generating activity on the farm." : "Activité génératrice de revenus à la ferme."}
              credit={photo("poultry").credit}
              frameClassName="mt-8 aspect-[3/2]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <ol className="lg:pt-2">
            {p.sustainability.map((item, index) => (
              <li
                key={item}
                className="flex gap-5 border-t border-mist py-6 first:border-t-0 first:pt-0"
              >
                <span className="label pt-1 text-mint-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[46ch] text-[1rem] leading-[1.72]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Monitoring and partners */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.meHeading}
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.75]">{p.me}</p>
          </div>
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.partnersHeading}
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.75]">{p.partners}</p>
            <p className="mt-6 text-[0.78rem] leading-[1.6] tracking-[0.04em] text-slate">
              {locale === "en"
                ? "Registered NGO, MINATD, under Law No. 2010/011."
                : "ONG enregistrée au MINATD, en vertu de la Loi n° 2010/011."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
