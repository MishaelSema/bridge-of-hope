import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getPost, posts } from "@/lib/posts";
import { photo } from "@/lib/images";
import { buildMetadata, canonical, siteName } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    title: `${post.title[locale]} — Bridge of Hope Foundation`,
    description: post.excerpt[locale],
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    // The journal carries its own photograph on every share.
    images: [photo(post.image).src],
    extraKeywords: [
      post.category[locale],
      "disability inclusion Cameroon",
      "handicap Cameroun",
    ],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const post = getPost(slug);
  if (!post) notFound();

  const dateFormat = new Intl.DateTimeFormat(locale === "fr" ? "fr-CM" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: locale,
    image: `${canonical(`/blog/${post.slug}`)}/opengraph-image`,
    author: { "@type": "Organization", name: "Bridge of Hope Foundation" },
    publisher: {
      "@type": "NGO",
      name: "Bridge of Hope Foundation",
      url: canonical("/"),
    },
    mainEntityOfPage: canonical(`/blog/${post.slug}`),
  };

  return (
    <>
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
        />
        <header className="bg-paper">
          <div className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8 md:pt-20">
            <p className="label text-mint-deep">
              {post.category[locale]} · {dateFormat.format(new Date(post.date))} · {post.minutes} min
            </p>
            <h1 className="display mt-5 max-w-[18ch] text-[clamp(2rem,6.4vw,4.25rem)]">
              {post.title[locale]}
            </h1>
            <p className="mt-6 max-w-[56ch] text-[1.05rem] leading-[1.72] text-ink/80 md:text-[1.15rem]">
              {post.excerpt[locale]}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[1400px] px-5 md:mt-14 md:px-8">
            <div className="frame grain relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
              <Image
                src={photo(post.image).src}
                alt={locale === "fr" ? photo(post.image).altFr : photo(post.image).alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[0.7rem] tracking-[0.06em] text-slate">
              {photo(post.image).credit}
            </p>
          </div>
        </header>

        <div className="bg-paper py-14 md:py-20">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <aside>
                <p className="text-[0.82rem] leading-[1.7] text-slate">
                  {locale === "en"
                    ? "Bridge of Hope Foundation publishes what it knows and what it plans. Figures on this site are targets and estimates until results are recorded."
                    : "Bridge of Hope Foundation publie ce qu'elle sait et ce qu'elle planifie. Les chiffres de ce site restent des objectifs et des estimations jusqu'à ce que des résultats soient constatés."}
                </p>
                <Link href={`/${locale}/blog`} className="link-rule mt-6 w-fit text-ink">
                  {locale === "en" ? "All articles" : "Tous les articles"}
                  <span aria-hidden>→</span>
                </Link>
              </aside>

              <div className="max-w-[68ch]">
                {post.sections.map((section, index) => (
                  <section key={index} className="mb-10 last:mb-0">
                    {section.heading ? (
                      <h2 className="display mt-12 mb-5 max-w-[24ch] text-[clamp(1.35rem,3vw,1.9rem)]">
                        {section.heading[locale]}
                      </h2>
                    ) : null}
                    <div className="space-y-5 text-[1.02rem] leading-[1.78] text-ink/85 md:text-[1.06rem]">
                      {section.paragraphs[locale].map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="display max-w-[16ch] text-[clamp(1.4rem,3.4vw,2.2rem)]">
            {locale === "en" ? "Read next" : "À lire ensuite"}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/${locale}/blog/${item.slug}`} className="group flex h-full flex-col">
                  <div className="frame grain relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo(item.image).src}
                      alt={locale === "fr" ? photo(item.image).altFr : photo(item.image).alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="display mt-4 text-[1.1rem] leading-[1.2] md:text-[1.2rem]">
                    {item.title[locale]}
                  </h3>
                  <span className="link-rule mt-4 w-fit text-ink">
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
