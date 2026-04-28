"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useFrameworkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(".framework-eyebrow");
      const heading = el.querySelector(".framework-heading");
      const lead = el.querySelector(".framework-lead");
      const listItems = el.querySelectorAll(".framework-item");
      const cta = el.querySelector(".framework-cta");

      // Create a timeline for the intro section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Intro Content Fade In
      tl.from([eyebrow, heading], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        lead,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // 2. List Items Staggered Reveal
      listItems.forEach((item) => {
        const number = item.querySelector(".framework-number");
        const content = item.querySelector(".framework-item-content");

        // Animate Number
        if (number) {
          gsap.from(number, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }

        // Animate Content
        if (content) {
          gsap.from(content, {
            x: 20,
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
      });

      // 3. CTA Button Pop-in
      if (cta) {
        gsap.from(cta, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
