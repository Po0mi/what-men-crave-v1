"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useTestimonialsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(".testimonials-eyebrow");
      const cards = el.querySelectorAll(".testimonial-card");

      // Create a timeline for the intro section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Eyebrow Fade In
      if (eyebrow) {
        tl.from(eyebrow, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // 2. Cards Staggered Reveal
      // We animate each card individually for a clean cascade effect
      cards.forEach((card) => {
        const quoteMark = card.querySelector(".testimonial-mark");
        const quoteText = card.querySelector(".testimonial-quote");
        const footer = card.querySelector(".testimonial-footer");

        // Animate Quote Mark (Large &ldquo;)
        if (quoteMark) {
          gsap.from(quoteMark, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }

        // Animate Quote Text
        if (quoteText) {
          gsap.from(quoteText, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }

        // Animate Footer (Stars + Name)
        if (footer) {
          gsap.from(footer, {
            y: 10,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
