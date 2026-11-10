"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type NavItem = { href: string; label: string };

export function SiteHeader({
  locale,
  nav,
  utility,
  cta,
  ctaShort,
}: {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    programmes: string;
    founder: string;
    record: string;
    ecosystem: string;
    involve: string;
    contact: string;
    blog: string;
    menu: string;
    close: string;
    switch: string;
    switchAria: string;
    skip: string;
  };
  utility: { phone: string; email: string; location: string };
  cta: string;
  ctaShort: string;
}) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items: NavItem[] = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/programmes`, label: nav.programmes },
    { href: `/${locale}/founder`, label: nav.founder },
    { href: `/${locale}/impact`, label: nav.record },
    { href: `/${locale}/ecosystem`, label: nav.ecosystem },
    { href: `/${locale}/blog`, label: nav.blog },
    { href: `/${locale}/get-involved`, label: nav.involve },
    { href: `/${locale}/contact`, label: nav.contact },
  ];

  // Which links make it into the bar at each width: the bar grows as the
  // screen does, and the full set always lives in the menu.
  const barVisibility: Record<string, string> = {
    [nav.about]: "hidden md:inline",
    [nav.programmes]: "hidden md:inline",
    [nav.founder]: "hidden lg:inline",
    [nav.record]: "hidden md:inline",
    [nav.ecosystem]: "hidden xl:inline",
    [nav.blog]: "hidden xl:inline",
    [nav.involve]: "hidden",
    [nav.contact]: "hidden",
  };

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  // The panel owns the screen while it is open, and hands focus back when
  // it closes.
  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const focus = window.setTimeout(() => closeRef.current?.focus(), 120);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focus);
    };
  }, [open, close]);

  /** A row of the panel: it rises into place, one after another. */
  const row = (index: number, extra = "") => ({
    className: `transition-[opacity,transform] duration-[350ms] ease-out motion-reduce:transition-none motion-reduce:translate-y-0 ${
      open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    } ${extra}`,
    style: { transitionDelay: open ? `${index * 40}ms` : "0ms" },
  });

  return (
    <>
      {/* Utility bar — the practical facts. It scrolls away; the bar below stays. */}
      <div className="bg-mint text-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2 md:px-8">
          <div className="flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.1em] uppercase md:gap-6 md:text-[0.72rem]">
            <a href={`tel:${utility.phone.replace(/\s/g, "")}`}>{utility.phone}</a>
            <a href={`mailto:${utility.email}`} className="hidden sm:inline">
              {utility.email}
            </a>
            <span className="hidden text-ink/70 md:inline">{utility.location}</span>
          </div>
          <Link
            href={locale === "en" ? "/fr" : "/en"}
            hrefLang={locale === "en" ? "fr" : "en"}
            className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-60 md:text-[0.72rem]"
          >
            {nav.switch}
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50">
        <div className="border-b border-mist bg-paper/95 backdrop-blur-md">
          <nav
            aria-label={locale === "fr" ? "Navigation principale" : "Primary"}
            className="mx-auto flex h-16 max-w-[1400px] flex-nowrap items-center justify-between gap-3 px-5 md:h-20 md:px-8 lg:gap-4 xl:gap-6"
          >
            <Link
              href={`/${locale}`}
              className="wordmark shrink-0 text-[1.05rem] md:text-[1.25rem]"
            >
              Bridge of Hope<span className="text-mint-deep">.</span>
            </Link>

            <div className="hidden flex-nowrap items-center gap-4 md:flex lg:gap-5 xl:gap-7">
              {items.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`label whitespace-nowrap border-b-2 pb-1 transition-colors duration-200 ${barVisibility[item.label] ?? "hidden"} ${
                    isActive(item.href)
                      ? "border-mint-deep text-ink"
                      : "border-transparent text-slate hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-3 md:gap-4">
              <Link
                href={`/${locale}/get-involved`}
                className="btn btn-ink hidden sm:inline-flex"
              >
                <span className="lg:hidden">{ctaShort}</span>
                <span className="hidden lg:inline">{cta}</span>
              </Link>

              <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={nav.menu}
                className="flex h-10 w-10 items-center justify-center text-ink transition-opacity duration-200 hover:opacity-60"
              >
                <span className="burger" aria-hidden>
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* The mobile panel: one screen, the whole site, and the ways in.
          It eases in and out — a fade with a short rise, never a cut. */}
      <div
        id="site-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink text-paper transition-[opacity,transform,visibility] duration-[400ms] ease-out motion-reduce:transition-none motion-reduce:translate-y-0 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div {...row(0, "flex items-center justify-between border-b border-white/10 px-5 py-5")}>
          <span className="display text-[1.1rem]">
            Bridge of Hope<span className="text-mint">.</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={nav.close}
            className="flex h-10 w-10 items-center justify-center text-paper transition-opacity duration-200 hover:opacity-70"
          >
            <span className="burger burger-x" aria-hidden>
              <span />
              <span />
            </span>
          </button>
        </div>

        <ul className="flex flex-1 flex-col">
          {items.map((item, index) => (
            <li
              key={item.href}
              {...row(index + 1, "border-b border-white/10")}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 px-5 py-5"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="display text-[1.6rem] tracking-[-0.02em]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div {...row(items.length + 1, "space-y-5 px-5 py-8")}>
          <Link
            href={`/${locale}/get-involved`}
            onClick={() => setOpen(false)}
            className="btn btn-mint w-full"
          >
            {cta}
          </Link>
          <div className="space-y-1 text-[0.9rem] text-fog">
            <a href={`tel:${utility.phone.replace(/\s/g, "")}`} className="block">
              {utility.phone}
            </a>
            <a href={`mailto:${utility.email}`} className="block">
              {utility.email}
            </a>
            <p>{utility.location}</p>
          </div>
          <Link
            href={locale === "en" ? "/fr" : "/en"}
            hrefLang={locale === "en" ? "fr" : "en"}
            onClick={() => setOpen(false)}
            className="label inline-block border-b-2 border-mint pb-1"
          >
            {nav.switch}
          </Link>
        </div>
      </div>
    </>
  );
}
