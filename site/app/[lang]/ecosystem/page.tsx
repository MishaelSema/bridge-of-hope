import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate, Provenance } from "@/components/editorial";

export const metadata: Metadata = { title: "The Ecosystem — Bridge of Hope" };

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
      <PageHead title={p.title} lead={p.lead} />

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <ul className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2">
            {p.items.map((item) => (
              <li key={item.name} className="bg-paper px-6 py-10 md:px-10 md:py-12">
                <p className="caption">{item.role}</p>
                <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
                  {item.name}
                </h2>
                <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-[1.72]">{item.body}</p>
                {"href" in item && item.href ? (
                  <p className="mt-6">
                    <a
                      href={item.href}
                      className="text-[0.95rem] tracking-[0.04em] transition-opacity duration-200 hover:opacity-70"
                    >
                      {locale === "en" ? "Visit " : "Visiter "}
                      {item.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      <span aria-hidden className="ml-3 border-b border-ink/40 pb-[2px]">→</span>
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1600px] px-5 py-14 text-center md:px-10 md:py-20">
          <p className="display mx-auto max-w-[24ch] text-[clamp(1.4rem,3vw,2.4rem)]">
            {p.formula}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-[1fr_1px_1.1fr] md:gap-0 md:px-10 md:py-24">
          <div className="md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.linkHeading}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.78]">{p.link}</p>
            <Provenance>
              {locale === "en"
                ? "Ekombitié, ~70 km from Yaoundé — farm, workshops and training ground."
                : "Ekombitié, à ~70 km de Yaoundé — ferme, ateliers et terrain de formation."}
            </Provenance>
          </div>
          <div aria-hidden className="gutter-rule hidden w-px md:block" />
          <div className="flex flex-col md:pl-14">
            <Plate
              caption={
                locale === "en"
                  ? "Plate — the four pillars in one frame. Photograph to come."
                  : "Planche — les quatre piliers en une image. Photographie à venir."
              }
              className="h-[46vh] md:h-[58vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
