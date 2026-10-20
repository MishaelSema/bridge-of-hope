import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate, Provenance } from "@/components/editorial";

export const metadata: Metadata = { title: "The Record — Bridge of Hope" };

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
      <PageHead title={p.title} lead={p.lead} />

      <section className="border-b border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1600px] px-5 py-8 md:px-10 md:py-10">
          <p className="caption max-w-[70ch]">{p.banner}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {p.figures.map((item) => (
              <li key={item.figure} className="bg-paper px-6 py-10 md:px-8 md:py-12">
                <p className={`display text-[clamp(2.6rem,4.4vw,3.6rem)]${item.figure.startsWith("600") ? " text-live" : ""}`}>
                  {item.figure}
                </p>
                <p className="mt-5 max-w-[30ch] text-[0.95rem] leading-[1.65]">
                  {item.label}
                </p>
                <Provenance>{item.note}</Provenance>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:px-10 md:py-24">
          <div className="md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.kpiHeading}
            </h2>
            <ul className="mt-8 max-w-[54ch] space-y-5">
              {p.kpis.map((kpi) => (
                <li key={kpi} className="border-b border-rule pb-5 text-[1rem] leading-[1.7] last:border-0">
                  {kpi}
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden className="gutter-rule hidden w-px md:block" />
          <div className="md:pl-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.reportHeading}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">{p.report}</p>
            <Plate
              caption={locale === "en" ? "Plate — reporting archive. Photograph to come." : "Planche — archives de rapports. Photographie à venir."}
              className="mt-10 h-[36vh] md:h-[42vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
