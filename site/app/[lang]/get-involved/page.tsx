import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate, Provenance } from "@/components/editorial";

export const metadata: Metadata = { title: "Get Involved — Bridge of Hope" };

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
      <PageHead title={p.title} lead={p.lead} />

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-px bg-rule lg:grid-cols-3">
            {p.cards.map((card, index) => (
              <div key={card.heading} className="flex flex-col bg-paper px-6 py-10 md:px-10 md:py-12">
                <p className="caption">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display mt-4 max-w-[14ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
                  {card.heading}
                </h2>
                <p className="mt-5 flex-1 max-w-[44ch] text-[0.98rem] leading-[1.72]">
                  {card.body}
                </p>
                <a
                  href={card.href}
                  className="mt-8 inline-block w-fit border border-ink px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper"
                >
                  {card.action}
                </a>
              </div>
            ))}
          </div>
          <Provenance>{p.note}</Provenance>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-deep">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch gap-0 px-0 md:grid-cols-[1.1fr_1px_0.9fr]">
          <div className="px-5 py-16 md:px-10 md:py-24 md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {locale === "en"
                ? "Every gift carries the same weight."
                : "Chaque don pèse de la même façon."}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">
              {locale === "en"
                ? "Bridge of Hope is raising the funding that turns the plan into a working centre: therapy and assistive equipment, vocational tools and laboratories, staffing, and the advocacy programme. Grants, sponsorship and individual gifts all move one person from dependence to enterprise."
                : "Bridge of Hope lève les financements qui transforment le projet en centre fonctionnel : thérapie et équipements techniques, outils et laboratoires de formation, personnel et programme de plaidoyer. Subventions, parrainage et dons individuels font passer une personne de la dépendance à l'entreprise."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-8 inline-block bg-live px-8 py-4 text-[0.8rem] tracking-[0.16em] text-paper uppercase transition-colors duration-200 hover:bg-ink focus-visible:bg-ink"
            >
              {locale === "en" ? "Write to the foundation" : "Écrire à la fondation"}
            </Link>
          </div>
          <div aria-hidden className="gutter-rule hidden w-px md:block" />
          <div className="px-5 pb-16 md:px-10 md:pb-24 md:pl-14">
            <Plate
              caption={
                locale === "en"
                  ? "Plate — where support lands. Photograph to come."
                  : "Planche — là où le soutien atterrit. Photographie à venir."
              }
              className="h-[40vh] md:h-full md:min-h-[52vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
