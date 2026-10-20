import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import { getDict, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);

  return {
    title:
      locale === "fr"
        ? "Bridge of Hope — Relier les communautés et les opportunités"
        : "Bridge of Hope — Connecting Communities and Opportunities",
    description: t.hero.mission,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const t = getDict(locale);
  const other: Locale = locale === "en" ? "fr" : "en";

  return (
    <html lang={locale} className={`${bodoni.variable} ${jost.variable}`}>
      <body>
        <a href="#main" className="skip">
          {t.nav.skip}
        </a>

        <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-[2px]">
          <nav
            aria-label={locale === "fr" ? "Principale" : "Primary"}
            className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-6 px-5 md:h-16 md:px-10"
          >
            <Link
              href={`/${locale}`}
              className="display text-[1.05rem] tracking-[-0.01em] whitespace-nowrap md:text-[1.2rem]"
            >
              Bridge of Hope
            </Link>

            <div className="flex items-center gap-4 text-[0.82rem] tracking-[0.06em] md:gap-6 md:text-[0.86rem] lg:gap-8">
              <Link href={`/${locale}/about`} className="hidden lg:inline">
                {t.nav.about}
              </Link>
              <Link href={`/${locale}/programmes`} className="hidden md:inline">
                {t.nav.programmes}
              </Link>
              <Link href={`/${locale}/founder`} className="hidden md:inline">
                {t.nav.founder}
              </Link>
              <Link href={`/${locale}/impact`} className="hidden md:inline">
                {t.nav.record}
              </Link>
              <Link href={`/${locale}/ecosystem`} className="hidden lg:inline">
                {t.nav.ecosystem}
              </Link>
              <Link href={`/${locale}/get-involved`}>{t.nav.involve}</Link>
              <Link href={`/${locale}/contact`} className="hidden md:inline">
                {t.footer.contact}
              </Link>

              {/* Small screens: a disclosure menu so every page stays reachable. */}
              <details className="relative md:hidden">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {t.nav.menu}
                </summary>
                <div className="absolute top-[calc(100%+0.6rem)] right-0 z-50 w-[min(17rem,calc(100vw-2.5rem))] border border-rule bg-paper px-5 py-1">
                  {[
                    { href: "about", label: t.nav.about },
                    { href: "programmes", label: t.nav.programmes },
                    { href: "founder", label: t.nav.founder },
                    { href: "impact", label: t.nav.record },
                    { href: "ecosystem", label: t.nav.ecosystem },
                    { href: "get-involved", label: t.nav.involve },
                    { href: "contact", label: t.footer.contact },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}/${item.href}`}
                      className="block border-b border-rule py-3 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href={`/${other}`}
                hrefLang={other}
                className="text-grey transition-colors duration-200 hover:text-ink"
              >
                {t.nav.switch}
              </Link>
            </div>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="border-t border-rule">
          <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
              <div>
                <p className="display text-[1.4rem]">Bridge of Hope</p>
                <p className="mt-3 max-w-[38ch] text-[0.9rem] leading-[1.7] text-grey">
                  {t.footer.descriptor}
                </p>
                <p className="caption mt-5">{t.footer.values}</p>
              </div>

              <div>
                <p className="caption">{locale === "fr" ? "Pages" : "Pages"}</p>
                <ul className="mt-3 text-[0.9rem] leading-[2]">
                  {[
                    { href: "", label: locale === "fr" ? "Accueil" : "Home" },
                    { href: "about", label: t.nav.about },
                    { href: "programmes", label: t.nav.programmes },
                    { href: "founder", label: t.nav.founder },
                    { href: "impact", label: t.nav.record },
                    { href: "ecosystem", label: t.nav.ecosystem },
                    { href: "get-involved", label: t.nav.involve },
                    { href: "contact", label: t.footer.contact },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={`/${locale}${item.href ? `/${item.href}` : ""}`}
                        className="hover:underline hover:underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="caption">{t.footer.contact}</p>
                <p className="mt-3 text-[0.92rem] leading-[1.8]">
                  <a href="tel:+237675033792">{t.footer.phone}</a>
                  <br />
                  <a href="mailto:ekhrys@yahoo.com">ekhrys@yahoo.com</a>
                  <br />
                  <a href="mailto:chrisekom@gmail.com">chrisekom@gmail.com</a>
                </p>
              </div>

              <div>
                <p className="caption">{locale === "fr" ? "Implantations" : "Locations"}</p>
                <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-[1.7]">{t.footer.locations}</p>
                <p className="mt-4 text-[0.82rem] leading-[1.6] text-grey">{t.footer.legal}</p>
              </div>
            </div>

            <p className="mt-12 max-w-[70ch] border-t border-rule pt-6 text-[0.82rem] leading-[1.7] text-grey">
              {t.footer.accessibility}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
