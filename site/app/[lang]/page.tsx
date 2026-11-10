import Image from "next/image";
import Link from "next/link";
import { getDict, isLocale, type Locale } from "@/lib/i18n";
import { heroSlides, photo } from "@/lib/images";
import { Figure } from "@/components/figure";
import { HeroSlideshow } from "@/components/hero-slideshow";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);
  const h = t.home;

  const doorPhotos = [photo("sport"), photo("tailor"), photo("market")];

  return (
    <>
      {/* ── I. The opening ───────────────────────────────────────────── */}
      <section className="relative">
        <div className="frame grain relative min-h-[92svh] md:min-h-[96svh]">
          <HeroSlideshow
            slides={heroSlides}
            locale={locale}
            labels={{
              previous: t.hero.previousSlide,
              next: t.hero.nextSlide,
              slide: t.hero.slide,
            }}
          />
          <div className="absolute inset-0 z-[3] flex flex-col justify-end px-5 pt-20 pb-14 md:px-10 md:pt-24 md:pb-20">
            <div className="max-w-[62rem]">
              <span className="rule-mint" aria-hidden />
              <h1 className="display mt-6 text-[clamp(2.5rem,8.6vw,6rem)] text-paper">
                {t.hero.headline}
              </h1>
              <p className="mt-6 max-w-[44ch] text-[1.02rem] leading-[1.62] text-paper/85 md:text-[1.2rem] md:leading-[1.6]">
                {t.hero.mission}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link href={`/${locale}/get-involved`} className="btn btn-mint w-full sm:w-auto">
                  {t.hero.action}
                </Link>
                <Link
                  href={`/${locale}/programmes`}
                  className="btn btn-outline-light w-full sm:w-auto"
                >
                  {t.hero.secondary}
                </Link>
              </div>
            </div>
          </div>
          <p className="absolute top-6 right-5 z-[3] hidden max-w-[34ch] text-right text-[0.68rem] leading-[1.5] tracking-[0.06em] text-paper/60 md:top-8 md:right-10 md:block">
            {t.hero.caption}
          </p>
        </div>
      </section>

      {/* ── II. The three doors, breaking the line of the photograph ──── */}
      <section className="relative z-10 -mt-12 md:-mt-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {h.doors.map((door, index) => (
              <li key={door.title}>
                <Link
                  href={`/${locale}/programmes`}
                  className="card group reveal flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-mint"
                >
                  <Figure
                    photo={doorPhotos[index]}
                    alt={locale === "fr" ? doorPhotos[index].altFr : doorPhotos[index].alt}
                    frameClassName="aspect-[3/2] lg:aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    overlay={
                      <h3 className="display max-w-[14ch] text-[1.15rem] text-paper lg:text-[1.35rem]">
                        {door.title}
                      </h3>
                    }
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="flex-1 text-[0.95rem] leading-[1.7] text-slate">{door.body}</p>
                    <span className="link-rule mt-6 w-fit text-ink">
                      {door.link}
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── III. The problem ─────────────────────────────────────────── */}
      <section className="bg-paper pt-20 md:pt-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <h2 className="display max-w-[18ch] text-[clamp(1.9rem,5.2vw,3.4rem)]">
              {h.problemHeading}
            </h2>
            <div>
              <p className="max-w-[58ch] text-[1.02rem] leading-[1.75] md:text-[1.08rem]">
                {h.problemBody}
              </p>
              <p className="mt-6 text-[0.78rem] leading-[1.6] tracking-[0.04em] text-slate">
                {h.problemSource}
              </p>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px border-t border-mist bg-mist sm:grid-cols-3 md:mt-20">
            {h.problemStats.map((stat) => (
              <div key={stat.figure} className="bg-paper py-8 sm:px-6 md:py-10 lg:px-8">
                <dt className="display text-[clamp(2.4rem,6vw,3.6rem)] leading-none text-ink">
                  {stat.figure}
                </dt>
                <dd className="mt-4 max-w-[26ch] text-[0.95rem] leading-[1.65] text-slate">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── IV. The pathway ──────────────────────────────────────────── */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <h2 className="display max-w-[16ch] text-[clamp(1.9rem,5.2vw,3.4rem)]">
              {h.pathwayHeading}
            </h2>
            <p className="max-w-[52ch] text-[1.02rem] leading-[1.72] text-ink/80">{h.pathwayLead}</p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {h.pathway.map((stage, index) => (
              <li key={stage.title} className="border-t-2 border-ink pt-6">
                <span className="display text-[0.95rem] tracking-[0.1em] text-mint-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-[1.3rem] tracking-[-0.02em] md:text-[1.5rem]">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-[1.7] text-ink/75">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── V. The founder ───────────────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.9rem,5.2vw,3.4rem)]">
              {h.founderHeading}
            </h2>

            <blockquote className="mt-8 md:mt-10">
              <p className="font-quote text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.22] text-ink italic">
                “{h.founderQuote}”
              </p>
              <footer className="label mt-6 text-slate">{h.founderAttribution}</footer>
            </blockquote>

            <p className="mt-8 max-w-[58ch] text-[1rem] leading-[1.78]">{h.founderBody}</p>

            <Link href={`/${locale}/founder`} className="link-rule mt-8 w-fit text-ink">
              {h.founderLink}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Figure
            photo={photo("bridge")}
            alt={locale === "fr" ? photo("bridge").altFr : photo("bridge").alt}
            caption={h.founderCaption}
            credit={photo("bridge").credit}
            frameClassName="aspect-[4/5] lg:aspect-[3/4]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* ── VI. The record ───────────────────────────────────────────── */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <h2 className="display max-w-[12ch] text-[clamp(1.9rem,5.2vw,3.4rem)]">
              {h.recordHeading}
            </h2>
            <div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
                {h.recordRows.map((row) => (
                  <div key={row.figure}>
                    <dt
                      className={`display text-[clamp(2.6rem,6vw,3.9rem)] leading-none ${
                        row.figure.startsWith("600") || row.figure.startsWith("600 ")
                          ? "text-mint-deep"
                          : "text-ink"
                      }`}
                    >
                      {row.figure}
                    </dt>
                    <dd className="mt-4">
                      <p className="max-w-[30ch] text-[0.95rem] leading-[1.68]">{row.label}</p>
                      <p className="mt-2 text-[0.74rem] leading-[1.5] tracking-[0.06em] text-slate">
                        {row.note}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-10 max-w-[58ch] text-[0.8rem] leading-[1.65] text-slate">
                {h.recordSource}
              </p>
              <Link href={`/${locale}/impact`} className="link-rule mt-6 w-fit text-ink">
                {h.recordLink}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VII. The ask — the one green surface in the site ────────── */}
      <section className="bg-mint py-20 text-ink md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <span className="rule-ink" aria-hidden />
          <h2 className="display mt-6 max-w-[20ch] text-[clamp(2rem,6vw,4rem)] text-ink">
            {h.askHeading}
          </h2>
          <p className="mt-7 max-w-[58ch] text-[1.02rem] leading-[1.72] text-ink/80 md:text-[1.1rem]">
            {h.askBody}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link href={`/${locale}/get-involved`} className="btn btn-navy w-full sm:w-auto">
              {h.askPrimary}
            </Link>
            <Link href={`/${locale}/contact`} className="btn btn-outline w-full sm:w-auto">
              {h.askPartner}
            </Link>
            <a href="tel:+237675033792" className="btn btn-outline w-full sm:w-auto">
              {h.askServices}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
