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
  const p = pages[locale].ecosystem;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "The Ecosystem" : "L'écosystème"} — ${siteName}`,
    description: p.lead,
    path: "/ecosystem",
    extraKeywords: [
      "ACE Global Nexus",
      "ACE-AGRO Farms Ekombitié",
      "African business investment disability inclusion",
    ],
  });
}

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].ecosystem;

  return (
    <>
      <PageHero
        photo={photo("eventNetworking")}
        alt={locale === "fr" ? photo("eventNetworking").altFr : photo("eventNetworking").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("eventNetworking").credit}
      />

      {/* The four pieces */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-px bg-mist md:grid-cols-2">
            {p.items.map((item, index) => (
              <li key={item.name} className="flex flex-col bg-paper px-6 py-9 md:px-10 md:py-12">
                <span className="label text-mint-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.92rem] font-semibold tracking-[0.02em] text-ink/70">
                  {item.role}
                </p>
                <h2 className="display mt-3 max-w-[16ch] text-[clamp(1.35rem,3vw,1.9rem)]">
                  {item.name}
                </h2>
                <p className="mt-4 flex-1 max-w-[46ch] text-[0.96rem] leading-[1.72] text-ink/80">
                  {item.body}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="link-rule mt-7 w-fit text-ink"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {locale === "en" ? "Visit" : "Visiter"}{" "}
                    {item.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    <span aria-hidden>↗</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The formula */}
      <section className="bg-mint py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="display max-w-[26ch] text-[clamp(1.4rem,3.6vw,2.6rem)] leading-[1.15]">
            {p.formula}
          </p>
        </div>
      </section>

      {/* Where the connection is practical */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.linkHeading}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">{p.link}</p>
            <p className="mt-6 text-[0.78rem] leading-[1.6] tracking-[0.04em] text-slate">
              {locale === "en"
                ? "Ekombitié, ~70 km from Yaoundé — farm, workshops and training ground."
                : "Ekombitié, à ~70 km de Yaoundé — ferme, ateliers et terrain de formation."}
            </p>
          </div>

          <Figure
            photo={photo("farm")}
            alt={locale === "fr" ? photo("farm").altFr : photo("farm").alt}
            caption={p.imageCaption}
            credit={photo("farm").credit}
            frameClassName="aspect-[3/2]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* The wider stage — the founder's work beyond the foundation */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Figure
            photo={photo("expoSelfie")}
            alt={locale === "fr" ? photo("expoSelfie").altFr : photo("expoSelfie").alt}
            caption={p.stageCaption}
            credit={photo("expoSelfie").credit}
            frameClassName="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.stageHeading}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">{p.stageBody}</p>
          </div>
        </div>
      </section>
    </>
  );
}
