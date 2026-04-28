import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useStoryAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register plugin only once globally if needed, but usually done in main layout.
    // If you haven't registered it elsewhere, keep this line.
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Eyebrow
      const eyebrow = el.querySelector(".story-eyebrow");
      if (eyebrow) {
        gsap.from(eyebrow, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eyebrow,
            start: "top 85%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }

      // 2. Staggered paragraphs
      const textElements = el.querySelectorAll(".story-body > p");
      if (textElements.length) {
        gsap.from(textElements, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.querySelector(".story-body"),
            start: "top 75%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }

      // 3. Blockquote slides in from the left
      const pull = el.querySelector(".story-pull");
      if (pull) {
        gsap.from(pull, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: pull,
            start: "top 80%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }

      // 4. Emphasis on story-turn paragraphs
      el.querySelectorAll(".story-turn").forEach((turn) => {
        gsap.from(turn, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: turn,
            start: "top 85%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
