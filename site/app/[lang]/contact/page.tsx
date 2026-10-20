import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pages } from "@/lib/pages";
import { PageHead } from "@/components/page-head";
import { Plate, Provenance } from "@/components/editorial";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact — Bridge of Hope" };

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
      <PageHead title={p.title} lead={p.lead} />

      <section>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-[1.05fr_1px_0.95fr] md:gap-0 md:px-10 md:py-24">
          <div className="md:pr-14">
            <h2 className="display max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.6rem)]">
              {p.form.heading}
            </h2>
            <div className="mt-10">
              <ContactForm locale={locale} form={p.form} />
            </div>
          </div>

          <div aria-hidden className="gutter-rule hidden w-px md:block" />

          <div className="md:pl-14">
            <ul>
              <li className="border-b border-rule pb-6">
                <p className="caption">{locale === "en" ? "Telephone" : "Téléphone"}</p>
                <p className="mt-3 text-[1.05rem]">
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a>
                </p>
              </li>
              <li className="border-b border-rule py-6">
                <p className="caption">{locale === "en" ? "Email" : "Courriel"}</p>
                <p className="mt-3 text-[1.05rem] leading-[1.9]">
                  {p.emails.map((email, index) => (
                    <span key={email}>
                      {index > 0 && <br />}
                      <a href={`mailto:${email}`}>{email}</a>
                    </span>
                  ))}
                </p>
              </li>
              {p.locations.map((loc) => (
                <li key={loc.name} className="border-b border-rule py-6">
                  <p className="caption">{loc.name}</p>
                  <p className="mt-3 max-w-[42ch] text-[0.98rem] leading-[1.7]">{loc.detail}</p>
                </li>
              ))}
            </ul>

            <Plate
              caption={
                locale === "en"
                  ? "Plate — headquarters and the road to Ekombitié. Photograph to come."
                  : "Planche — le siège et la route d'Ekombitié. Photographie à venir."
              }
              className="mt-10 h-[38vh] md:h-[44vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
