import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useStoryAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register plugin only once globally if needed
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Eyebrow (e.g., "THE STORY")
      const eyebrow = el.querySelector(".story-eyebrow");
      if (eyebrow) {
        gsap.from(eyebrow, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eyebrow,
            start: "top 85%",
            once: true,
          },
        });
      }

      // 2. Staggered Paragraphs
      // We select all paragraphs inside the story body
      const textElements = el.querySelectorAll(".story-body > p");
      if (textElements.length) {
        gsap.from(textElements, {
          opacity: 0,
          y: 25, // Slightly larger movement for elegance
          duration: 0.7,
          stagger: 0.15, // Smooth cascade effect
          ease: "power3.out", // Smoother easing
          scrollTrigger: {
            trigger: el.querySelector(".story-body"),
            start: "top 75%",
            once: true,
          },
        });
      }

      // 3. Blockquote (The "Pull Quote")
      // This needs to stand out. We slide it in from the left with a slight rotation or scale for impact.
      const pull = el.querySelector(".story-pull");
      if (pull) {
        gsap.from(pull, {
          x: -40, // Slide from left
          opacity: 0,
          scale: 0.98, // Subtle zoom in
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pull,
            start: "top 80%",
            once: true,
          },
        });
      }

      // 4. Emphasis on Story-Turn Paragraphs
      // These are likely short, punchy sentences (e.g., "They are wrong.")
      // We give them a subtle "pop" effect to grab attention.
      el.querySelectorAll(".story-turn").forEach((turn) => {
        gsap.from(turn, {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.2)", // Subtle bounce
          scrollTrigger: {
            trigger: turn,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
