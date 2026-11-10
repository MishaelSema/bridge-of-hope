import type { Locale } from "@/lib/i18n";
import type { LegalSection } from "@/lib/legal";

/** The shared frame of the legal pages: title, lead, dated sections. */
export function LegalDocument({
  locale,
  title,
  lead,
  updated,
  sections,
}: {
  locale: Locale;
  title: string;
  lead: string;
  updated: string;
  sections: readonly LegalSection[];
}) {
  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h1 className="display max-w-[14ch] text-[clamp(2rem,6vw,3.4rem)]">{title}</h1>
            <p className="mt-6 max-w-[40ch] text-[1.02rem] leading-[1.7]">{lead}</p>
            <p className="mt-8 text-[0.78rem] leading-[1.6] tracking-[0.06em] text-slate">
              {locale === "en" ? "Last updated" : "Dernière mise à jour"}: {updated}
            </p>
          </div>

          <div>
            {sections.map((section, index) => (
              <section key={index} className="border-t border-mist pt-8 pb-10 first:border-t-0 first:pt-0">
                <h2 className="display max-w-[22ch] text-[clamp(1.25rem,2.6vw,1.75rem)]">
                  {section.heading[locale]}
                </h2>
                <div className="mt-5 max-w-[64ch] space-y-4 text-[1rem] leading-[1.75]">
                  {section.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                {section.list ? (
                  <ul className="mt-5 max-w-[64ch] space-y-3">
                    {section.list[locale].map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-4 border-b border-mist pb-3 text-[0.98rem] leading-[1.7]"
                      >
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-mint-deep" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
