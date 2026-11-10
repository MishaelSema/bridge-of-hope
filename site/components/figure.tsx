import Image from "next/image";
import type { Photo } from "@/lib/images";

/**
 * The frame — every photograph in the site.
 *
 * The image is screened onto the navy ground so all photography shares one
 * blue-green duotone, washed for legibility, and finished with press grain.
 * Colour can be restored per frame with `tone="colour"`.
 */
export function Figure({
  photo,
  alt,
  caption,
  credit,
  className = "",
  frameClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  tone = "duo",
  dark = false,
  overlay,
}: {
  photo: Photo;
  alt?: string;
  caption?: string;
  credit?: string;
  className?: string;
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "duo" | "colour";
  /** Caption and credit sit on a dark ground. */
  dark?: boolean;
  /** Text pinned to the foot of the frame, over the wash. */
  overlay?: React.ReactNode;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`frame grain relative ${frameClassName} ${tone === "colour" ? "frame-color" : ""}`}>
        <Image
          src={photo.src}
          alt={alt ?? photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
        {overlay ? (
          <div className="absolute inset-x-0 bottom-0 z-[3] p-5 md:p-7">{overlay}</div>
        ) : null}
      </div>
      {caption || credit ? (
        <figcaption
          className={`mt-3 flex flex-col gap-1 text-[0.72rem] leading-[1.5] tracking-[0.06em] ${
            dark ? "text-paper/60" : "text-slate"
          }`}
        >
          {caption ? <span className={dark ? "text-paper/90" : "text-ink"}>{caption}</span> : null}
          {credit ? <span>{credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
