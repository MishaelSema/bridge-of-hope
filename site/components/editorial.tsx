import type { CSSProperties, ReactNode } from "react";

/**
 * A photographic plate awaiting real photography.
 *
 * Until Bridge of Hope supplies its own images, every plate renders as a graded
 * photogravure field carrying a ranked caption that names what belongs there.
 * No stock photograph of strangers stands in for the foundation's own people.
 */
export function Plate({
  caption,
  className = "",
  style,
}: {
  caption: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={`plate reveal relative m-0 flex min-h-[46vh] flex-col justify-end overflow-hidden md:min-h-full ${className}`}
      style={style}
    >
      <figcaption className="caption relative z-10 border-t border-paper/40 bg-ink/60 px-5 py-3 text-paper md:px-8">
        {caption}
      </figcaption>
    </figure>
  );
}

/** A hairline seam that marks the gutter between the two pages of a spread. */
export function Gutter({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`gutter-rule w-px shrink-0 ${className}`} />;
}

/** The provenance line that sits under every figure on this site. */
export function Provenance({ children }: { children: ReactNode }) {
  return <p className="caption mt-3 max-w-[52ch]">{children}</p>;
}
