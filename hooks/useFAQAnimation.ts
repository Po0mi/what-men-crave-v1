"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useFAQAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(".faq-eyebrow");
      const heading = el.querySelector(".faq-heading");
      const items = el.querySelectorAll(".faq-item");

      // Create a timeline for initial entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Eyebrow & Heading Fade In
      if (eyebrow && heading) {
        tl.from([eyebrow, heading], {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // 2. FAQ Items Staggered Reveal
      items.forEach((item) => {
        const question = item.querySelector(".faq-question");

        // Animate Question Row
        if (question) {
          gsap.from(question, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }

        // Note: We don't animate the answer wrapper initially because it's hidden by CSS grid.
        // The React state handles the opening/closing logic.
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
