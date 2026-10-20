import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate } from "@/components/editorial";

export const metadata: Metadata = { title: "The Founder — Bridge of Hope" };

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
      <PageHead title={p.title} lead={`${p.name} — ${p.role}`} />

      <section className="grid grid-cols-1 md:grid-cols-[1.35fr_1px_0.9fr]">
        <div className="px-5 py-16 md:px-10 md:py-24">
          <div className="max-w-[62ch] space-y-6 text-[1rem] leading-[1.78]">
            {p.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 max-w-[46ch] border-t border-rule pt-10">
            <h2 className="display text-[clamp(1.6rem,2.8vw,2.25rem)]">{p.beliefHeading}</h2>
            <p className="mt-5 text-[1rem] leading-[1.75]">{p.belief}</p>
          </div>

          <blockquote className="mt-14 max-w-[44ch] border-t border-rule pt-10">
            <p className="display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.18]">
              “{p.quote}”
            </p>
            <footer className="caption mt-6">{p.name}</footer>
          </blockquote>

          <div className="mt-14 max-w-[62ch] border-t border-rule pt-10">
            <h2 className="display text-[clamp(1.6rem,2.8vw,2.25rem)]">{p.agnHeading}</h2>
            <p className="mt-5 text-[1rem] leading-[1.75]">{p.agn}</p>
          </div>
        </div>

        <div aria-hidden className="gutter-rule hidden w-px md:block" />

        <div className="flex">
          <Plate caption={p.caption} className="w-full" />
        </div>
      </section>
    </>
  );
}
