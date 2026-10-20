import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate, Provenance } from "@/components/editorial";

export const metadata: Metadata = { title: "Programmes — Bridge of Hope" };

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
      <PageHead title={p.title} lead={p.lead} />

      <section>
        <Plate caption={p.caption} className="h-[42vh] md:h-[64vh]" />
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <ol className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2">
            {p.items.map((item) => (
              <li key={item.n} className="bg-paper px-6 py-10 md:px-10 md:py-12">
                <p className="caption">{item.n}</p>
                <h2 className="display mt-4 max-w-[18ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-[1.72]">{item.body}</p>
                <Provenance>{item.target}</Provenance>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
            {p.flowHeading}
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-5">
            {p.flow.map((step, index) => (
              <li key={step} className="bg-paper-deep px-6 py-8">
                <p className="caption">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-[0.95rem] leading-[1.6]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
