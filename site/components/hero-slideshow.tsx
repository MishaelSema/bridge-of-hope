"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/images";

/**
 * The hero slideshow.
 *
 * Photographs cycle behind the opening statement — one message, several
 * windows onto the work. The slides cross-fade; the movement stops for
 * visitors who ask for reduced motion, and pauses while the pointer rests on
 * the frame.
 */
export function HeroSlideshow({
  slides,
  locale,
  interval = 7000,
  labels,
}: {
  slides: Photo[];
  locale: "en" | "fr";
  interval?: number;
  labels: { previous: string; next: string; slide: string };
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const advance = useCallback(
    (step: number) => setIndex((current) => (current + step + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || reduced || slides.length < 2) return;
    const timer = window.setInterval(() => advance(1), interval);
    return () => window.clearInterval(timer);
  }, [paused, reduced, interval, advance, slides.length]);

  return (
    <>
      <div
        className="absolute inset-0"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        {slides.map((slide, position) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-out motion-reduce:transition-none"
            style={{ opacity: position === index ? 1 : 0 }}
            aria-hidden={position !== index}
          >
            <Image
              src={slide.src}
              alt={position === index ? (locale === "fr" ? slide.altFr : slide.alt) : ""}
              fill
              priority={position === 0}
              loading={
                position === 0
                  ? undefined
                  : position === index || position === (index + 1) % slides.length
                    ? "eager"
                    : "lazy"
              }
              sizes="100vw"
              className="object-cover"
              style={slide.position ? { objectPosition: slide.position } : undefined}
            />
          </div>
        ))}
      </div>

      {/* Slide markers: thin bars, no icons, keyboard reachable. */}
      <div className="absolute right-5 bottom-6 z-[4] flex items-center gap-2 md:right-10 md:bottom-8">
        {slides.map((slide, position) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(position)}
            aria-label={`${labels.slide} ${position + 1} — ${locale === "fr" ? slide.altFr : slide.alt}`}
            aria-current={position === index}
            className="group/dot flex h-6 w-8 items-center"
          >
            <span
              className={`block h-[3px] w-full transition-colors duration-300 ${
                position === index ? "bg-mint" : "bg-paper/40 group-hover/dot:bg-paper/70"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
