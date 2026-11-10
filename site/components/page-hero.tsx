import Image from "next/image";
import type { Photo } from "@/lib/images";

/**
 * The opening of every inner page: one band of photography, the page title
 * set over it, and the lead beneath. Mobile first — the band is the whole
 * first screen, the title sits on the ground of the image.
 */
export function PageHero({
  photo,
  title,
  lead,
  alt,
  credit,
}: {
  photo: Photo;
  title: string;
  lead: string;
  alt?: string;
  credit?: string;
}) {
  return (
    <section>
      <div className="frame grain relative h-[46vh] min-h-[300px] w-full md:h-[64vh]">
        <Image
          src={photo.src}
          alt={alt ?? photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
        <div className="absolute inset-0 z-[3] flex flex-col justify-end px-5 pb-7 md:px-10 md:pb-12">
          <span className="rule-mint" aria-hidden />
          <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.1rem,7.5vw,4.75rem)] text-paper">
            {title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pt-8 pb-2 md:px-8 md:pt-12">
        <p className="max-w-[64ch] text-[1.02rem] leading-[1.72] text-ink md:text-[1.12rem]">
          {lead}
        </p>
        {credit ? (
          <p className="mt-4 text-[0.7rem] tracking-[0.08em] text-slate">{credit}</p>
        ) : null}
      </div>
    </section>
  );
}
