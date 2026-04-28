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
          y: 25,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.querySelector(".story-body"),
            start: "top 75%",
            once: true,
          },
        });
      }

      // 3. Blockquote (The "Pull Quote")
      const pull = el.querySelector(".story-pull");
      if (pull) {
        gsap.from(pull, {
          x: -40,
          opacity: 0,
          scale: 0.98,
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
      // FIXED: Using a timeline for cleaner execution and avoiding scale on inline text
      const turns = el.querySelectorAll(".story-turn");

      if (turns.length > 0) {
        // Create a master timeline for all turn elements
        const turnTl = gsap.timeline({
          scrollTrigger: {
            trigger: el.querySelector(".story-body"), // Trigger when the whole section is visible
            start: "top 60%", // Start slightly earlier so they are ready when user reads them
            once: true,
          },
        });

        turns.forEach((turn) => {
          // Animate Opacity and Y position only.
          // Avoiding Scale prevents layout jitter on inline elements.
          turnTl.from(
            turn,
            {
              opacity: 0,
              y: 10, // Subtle upward movement
              duration: 0.5,
              ease: "power2.out",
              force3D: true, // Improves performance
            },
            "-=0.2",
          ); // Overlap slightly for a continuous flow feel
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
