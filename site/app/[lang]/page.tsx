import Link from "next/link";
import { getDict, isLocale, type Locale } from "@/lib/i18n";
import { Gutter, Plate, Provenance } from "@/components/editorial";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);
  const s = t.sections;

  return (
    <>
      {/* ── I. The opening spread ─────────────────────────────────────── */}
      <section className="grid min-h-[calc(100dvh-4rem)] grid-cols-1 md:grid-cols-[1fr_1px_1fr]">
        <Plate caption={t.hero.caption} />
        <Gutter className="hidden md:block" />

        <div className="flex flex-col justify-between gap-16 px-5 pt-12 pb-14 md:px-12 md:pt-16 md:pb-16">
          <div>
            <h1 className="display max-w-[12ch] text-[clamp(3rem,7.4vw,5.75rem)]">
              {t.hero.name}
            </h1>
            <p className="mt-7 max-w-[36ch] text-[1.05rem] leading-[1.62] md:text-[1.15rem]">
              {t.hero.mission}
            </p>
          </div>

          <div className="flex justify-end">
            <Link
              href={`/${locale}/get-involved`}
              className="text-[0.95rem] tracking-[0.04em] text-live transition-opacity duration-200 hover:opacity-70"
            >
              {t.hero.action}
              <span aria-hidden className="ml-3 border-b border-live pb-[2px]">
                ↓
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── II. Why ───────────────────────────────────────────────────── */}
      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:px-10 md:py-28">
          <div className="md:pr-14">
            <h2 className="display max-w-[17ch] text-[clamp(1.9rem,3.6vw,3rem)]">
              {s.claimOne}
            </h2>
          </div>
          <Gutter className="hidden md:block" />
          <div className="md:pl-14">
            <p className="max-w-[58ch] text-[1rem] leading-[1.75] md:text-[1.05rem]">
              {s.evidenceOne}
            </p>
            <Provenance>{s.sourceOne}</Provenance>
          </div>
        </div>
      </section>

      {/* ── III. The pathway — claim on the left page, the four stages answering on the right ── */}
      <section id="programmes" className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:px-10 md:py-28">
          <div className="md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.9rem,3.6vw,3rem)]">
              {s.claimTwo}
            </h2>
            <p className="mt-8">
              <Link
                href={`/${locale}/programmes`}
                className="text-[0.95rem] tracking-[0.04em] transition-opacity duration-200 hover:opacity-70"
              >
                {locale === "en" ? "All six programmes" : "Les six programmes"}
                <span aria-hidden className="ml-3 border-b border-ink/40 pb-[2px]">→</span>
              </Link>
            </p>
          </div>

          <Gutter className="hidden md:block" />

          <div className="md:pl-14">
            <ol className="max-w-[54ch]">
              {s.pathway.map((stage, index) => (
                <li
                  key={stage.title}
                  className="border-b border-rule py-6 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="flex gap-5">
                    <p className="caption pt-2">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="display text-[1.55rem] md:text-[1.75rem]">{stage.title}</h3>
                      <p className="mt-2 max-w-[42ch] text-[0.95rem] leading-[1.7]">{stage.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── IV. The founder ───────────────────────────────────────────── */}
      <section id="founder" className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-[1.35fr_1px_0.9fr]">
          <div className="px-5 py-20 md:px-10 md:py-28">
            <h2 className="display max-w-[20ch] text-[clamp(1.9rem,3.6vw,3rem)]">
              {s.claimThree}
            </h2>

            <blockquote className="mt-12 max-w-[44ch]">
              <p className="display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.18]">
                “{s.founderQuote}”
              </p>
              <footer className="caption mt-6">{s.founderAttribution}</footer>
            </blockquote>

            <p className="mt-12 max-w-[58ch] text-[1rem] leading-[1.75]">{s.founder}</p>
            <p className="mt-8">
              <Link
                href={`/${locale}/founder`}
                className="text-[0.95rem] tracking-[0.04em] transition-opacity duration-200 hover:opacity-70"
              >
                {locale === "en" ? "Read the full profile" : "Lire le profil complet"}
                <span aria-hidden className="ml-3 border-b border-ink/40 pb-[2px]">→</span>
              </Link>
            </p>
          </div>

          <Gutter className="hidden md:block" />

          <div className="flex">
            <Plate caption={s.founderCaption} className="w-full" />
          </div>
        </div>
      </section>

      {/* ── V. The record ─────────────────────────────────────────────── */}
      <section id="record" className="border-t border-rule">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:gap-0">
            <h2 className="display max-w-[14ch] pr-0 text-[clamp(1.9rem,3.6vw,3rem)] md:pr-14">
              {s.claimFour}
            </h2>
            <Gutter className="hidden md:block" />
            <div className="md:pl-14">
              <dl className="grid grid-cols-1 gap-px bg-rule">
                {s.record.map((row) => (
                  <div key={row.figure} className="bg-paper py-7 first:pt-0">
                    <dt
                      className={`display text-[clamp(2.6rem,5vw,3.75rem)] leading-none${
                        row.figure.startsWith("600") ? " text-live" : ""
                      }`}
                    >
                      {row.figure}
                    </dt>
                    <dd className="mt-4 max-w-[46ch]">
                      <p className="text-[1rem] leading-[1.7]">{row.label}</p>
                      <Provenance>{row.note}</Provenance>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="caption mt-8 max-w-[56ch]">{s.sourceRecord}</p>
              <p className="mt-6">
                <Link
                  href={`/${locale}/impact`}
                  className="text-[0.95rem] tracking-[0.04em] transition-opacity duration-200 hover:opacity-70"
                >
                  {locale === "en" ? "The full record" : "Les chiffres au complet"}
                  <span aria-hidden className="ml-3 border-b border-ink/40 pb-[2px]">→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VI. The ask ───────────────────────────────────────────────── */}
      <section id="involved" className="border-t border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
          <h2 className="display max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.75rem)]">
            {s.closingHead}
          </h2>
          <p className="mt-8 max-w-[62ch] text-[1.05rem] leading-[1.72]">{s.closingBody}</p>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:gap-10">
            <Link
              href={`mailto:ekhrys@yahoo.com?subject=${encodeURIComponent(
                locale === "fr" ? "Soutenir Bridge of Hope" : "Supporting Bridge of Hope"
              )}`}
              className="text-[1.05rem] tracking-[0.03em] text-live transition-opacity duration-200 hover:opacity-70"
            >
              {s.actionPrimary}
            </Link>
            <a
              href="mailto:chrisekom@gmail.com?subject=Partnership"
              className="border-b border-ink/25 pb-[2px] text-[0.95rem] transition-colors duration-200 hover:border-ink"
            >
              {s.actionPartner}
            </a>
            <a
              href="tel:+237675033792"
              className="border-b border-ink/25 pb-[2px] text-[0.95rem] transition-colors duration-200 hover:border-ink"
            >
              {s.actionServices}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
