"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useFinalCTAAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements with safety checks
      const heading = el.querySelector(".final-cta-heading");
      const paths = el.querySelectorAll(".final-cta-path");
      const vision = el.querySelector(".final-cta-vision");
      const badge = el.querySelector(".guarantee-badge-inner");
      const offerContent = el.querySelector(".final-cta-offer-content");
      const ctaBtn = el.querySelector(".final-cta-btn");

      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true,
        },
      });

      // 1. Heading Fade In
      if (heading) {
        tl.from(heading, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      // 2. Two Choices Cards Reveal
      // Ensure both options exist before animating
      if (paths.length >= 2) {
        // Option A (No) fades in normally
        tl.from(paths[0], {
          x: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
          // Option B (Yes) pops in with emphasis
          .from(
            paths[1],
            {
              x: 0,
              opacity: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
            },
            "-=0.3",
          );
      } else if (paths[1]) {
        // Fallback if only Option B exists
        tl.from(paths[1], {
          y: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }

      // 3. Vision Statement Fade In
      if (vision) {
        tl.from(
          vision,
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      // 4. Offer Block Reveal
      if (badge) {
        tl.from(badge, {
          rotation: -180,
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        });
      }

      if (offerContent) {
        tl.from(
          offerContent,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }

      // 5. CTA Button Pop
      if (ctaBtn) {
        tl.from(
          ctaBtn,
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
