/** The opening of an inner page: one didone title, one lead, a hairline rule. */
export function PageHead({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <h1 className="display max-w-[15ch] text-[clamp(2.4rem,5.2vw,4.25rem)]">{title}</h1>
        <p className="mt-8 max-w-[58ch] text-[1.05rem] leading-[1.7]">{lead}</p>
      </div>
    </section>
  );
}
