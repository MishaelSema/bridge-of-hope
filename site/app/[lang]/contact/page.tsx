import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata, siteName } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].contact;
  return buildMetadata({
    locale,
    title: `${locale === "en" ? "Contact" : "Contact"} — ${siteName}`,
    description: p.lead,
    path: "/contact",
    extraKeywords: [
      "Bridge of Hope contact Yaoundé",
      "contact fondation handicap Cameroun",
      "rehabilitation centre Yaoundé contact",
    ],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const p = pages[locale].contact;

  return (
    <>
      <PageHero
        photo={photo("city")}
        alt={locale === "fr" ? photo("city").altFr : photo("city").alt}
        title={p.title}
        lead={p.lead}
        credit={photo("city").credit}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(1.7rem,4.6vw,3rem)]">
              {p.form.heading}
            </h2>
            <div className="mt-9">
              <ContactForm locale={locale} form={p.form} />
            </div>
          </div>

          <div>
            <dl className="grid gap-px bg-mist">
              <div className="bg-paper py-6">
                <dt className="label text-mint-deep">
                  {locale === "en" ? "Telephone" : "Téléphone"}
                </dt>
                <dd className="mt-3 text-[1.15rem]">
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a>
                </dd>
              </div>
              <div className="bg-paper py-6">
                <dt className="label text-mint-deep">
                  {locale === "en" ? "Email" : "Courriel"}
                </dt>
                <dd className="mt-3 space-y-1 text-[1.05rem] leading-[1.8]">
                  {p.emails.map((email) => (
                    <p key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  ))}
                </dd>
              </div>
              {p.locations.map((loc) => (
                <div key={loc.name} className="bg-paper py-6">
                  <dt className="label text-mint-deep">{loc.name}</dt>
                  <dd className="mt-3 max-w-[42ch] text-[0.98rem] leading-[1.7]">{loc.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
