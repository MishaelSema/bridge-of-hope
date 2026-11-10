import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function SiteFooter({
  locale,
  t,
}: {
  locale: Locale;
  t: {
    pages: string;
    contact: string;
    locationsLabel: string;
    locations: string;
    values: string;
    descriptor: string;
    phone: string;
    emails: string[];
    legal: string;
    legalLinks: { href: string; label: string }[];
    accessibility: string;
    pagesList: { href: string; label: string }[];
  };
}) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <p className="display text-[1.5rem] tracking-[-0.03em]">
              Bridge of Hope<span className="text-mint">.</span>
            </p>
            <p className="mt-4 max-w-[34ch] text-[0.95rem] leading-[1.7] text-fog">
              {t.descriptor}
            </p>
            <p className="mt-6 text-[0.78rem] font-semibold tracking-[0.12em] text-mint uppercase">
              {t.values}
            </p>
          </div>

          <nav aria-label={t.pages}>
            <p className="label text-mint">{t.pages}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {t.pagesList.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-quiet text-fog transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-mint">{t.contact}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-fog">
              <li>
                <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="link-quiet transition-colors hover:text-paper">
                  {t.phone}
                </a>
              </li>
              {t.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="link-quiet transition-colors hover:text-paper">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-mint">{t.locationsLabel}</p>
            <p className="mt-5 max-w-[30ch] text-[0.95rem] leading-[1.7] text-fog">{t.locations}</p>
            <p className="mt-6 text-[0.8rem] leading-[1.6] text-fog/80">{t.legal}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-[0.78rem] leading-[1.6] text-fog/80 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[62ch]">{t.accessibility}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {t.legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="link-quiet transition-colors hover:text-paper">
                {item.label}
              </Link>
            ))}
            <span className="shrink-0">© {new Date().getFullYear()} Bridge of Hope Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
