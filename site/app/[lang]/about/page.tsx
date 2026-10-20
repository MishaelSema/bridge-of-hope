import type { Metadata } from "next";
import { getDict, isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Provenance } from "@/components/editorial";

export const metadata: Metadata = { title: "About — Bridge of Hope" };

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].about;
  const t = getDict(locale);

  return (
    <>
      <PageHead title={p.title} lead={p.lead} />

      <section>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:px-10 md:py-24">
          <div className="md:pr-14">
            <h2 className="display max-w-[18ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.problemHeading}
            </h2>
          </div>
          <div aria-hidden className="gutter-rule hidden w-px md:block" />
          <div className="md:pl-14">
            <p className="max-w-[60ch] text-[1rem] leading-[1.78]">{p.problem}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <h2 className="display text-[clamp(1.75rem,3.2vw,2.6rem)]">{p.valuesHeading}</h2>
          <ul className="mt-10 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-5">
            {p.values.map((value) => (
              <li key={value} className="bg-paper px-6 py-8">
                <p className="display text-[1.4rem]">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:px-10 md:py-24">
          <div className="md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.sustainabilityHeading}
            </h2>
          </div>
          <div aria-hidden className="gutter-rule hidden w-px md:block" />
          <div className="md:pl-14">
            <ul className="max-w-[58ch] space-y-5">
              {p.sustainability.map((item) => (
                <li key={item} className="border-b border-rule pb-5 text-[1rem] leading-[1.7] last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <div>
            <h2 className="display text-[clamp(1.75rem,3.2vw,2.6rem)]">{p.meHeading}</h2>
            <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.75]">{p.me}</p>
          </div>
          <div>
            <h2 className="display text-[clamp(1.75rem,3.2vw,2.6rem)]">{p.partnersHeading}</h2>
            <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.75]">{p.partners}</p>
            <Provenance>{t.footer.legal}</Provenance>
          </div>
        </div>
      </section>
    </>
  );
}
