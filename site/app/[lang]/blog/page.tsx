import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { photo } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  return buildMetadata({
    locale,
    title:
      locale === "en" ? "Journal — Bridge of Hope Foundation" : "Journal — Bridge of Hope Foundation",
    description:
      locale === "en"
        ? "Writing on disability inclusion, rehabilitation and livelihoods in Cameroon."
        : "Écritures sur l'inclusion, la réhabilitation et les revenus au Cameroun.",
    path: "/blog",
    extraKeywords: [
      "disability inclusion articles Cameroon",
      "réhabilitation articles personnes handicapées",
      "disability rights blog Cameroon",
    ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const [lead, ...rest] = posts;

  const dateFormat = new Intl.DateTimeFormat(locale === "fr" ? "fr-CM" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 pt-14 pb-10 md:px-8 md:pt-20">
          <h1 className="display max-w-[14ch] text-[clamp(2.2rem,7vw,4.5rem)]">
            {locale === "en" ? "The Journal" : "Le Journal"}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[1.02rem] leading-[1.72] text-ink/80 md:text-[1.1rem]">
            {locale === "en"
              ? "Working notes on disability inclusion, rehabilitation and livelihoods in Cameroon — what the evidence says, what is planned, and how the work is measured."
              : "Notes de travail sur l'inclusion, la réhabilitation et les revenus au Cameroun — ce que disent les preuves, ce qui est planifié, et comment le travail est mesuré."}
          </p>
        </div>
      </section>

      {/* The lead article */}
      <section className="bg-paper pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Link
            href={`/${locale}/blog/${lead.slug}`}
            className="group grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
          >
            <div className="frame grain relative aspect-[16/10] overflow-hidden lg:aspect-[16/11]">
              <Image
                src={photo(lead.image).src}
                alt={locale === "fr" ? photo(lead.image).altFr : photo(lead.image).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="label text-mint-deep">
                {lead.category[locale]} · {dateFormat.format(new Date(lead.date))} ·{" "}
                {lead.minutes} min
              </p>
              <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.7rem,4.4vw,2.9rem)]">
                {lead.title[locale]}
              </h2>
              <p className="mt-5 max-w-[48ch] text-[1rem] leading-[1.72] text-ink/75">
                {lead.excerpt[locale]}
              </p>
              <span className="link-rule mt-7 w-fit text-ink">
                {locale === "en" ? "Read the article" : "Lire l'article"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* The rest */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link href={`/${locale}/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="frame grain relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo(post.image).src}
                      alt={locale === "fr" ? photo(post.image).altFr : photo(post.image).alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="label mt-5 text-mint-deep">
                    {post.category[locale]} · {dateFormat.format(new Date(post.date))}
                  </p>
                  <h2 className="display mt-3 text-[1.2rem] leading-[1.15] md:text-[1.35rem]">
                    {post.title[locale]}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-[1.7] text-ink/70">
                    {post.excerpt[locale]}
                  </p>
                  <span className="link-rule mt-5 w-fit text-ink">
                    {locale === "en" ? "Read" : "Lire"}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
