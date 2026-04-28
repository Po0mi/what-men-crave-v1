"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useValueStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(".value-stack-eyebrow");
      const heading = el.querySelector(".value-stack-heading");
      const lead = el.querySelector(".value-stack-lead");
      const bonusItems = el.querySelectorAll(".bonus-item");
      const priceCard = el.querySelector(".price-card");
      const priceRows = el.querySelectorAll(".price-row");
      const ctaBtn = el.querySelector(".value-stack-btn");

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

      // 2. Bonus Items Staggered Reveal
      bonusItems.forEach((item) => {
        const leftContent = item.querySelector(".bonus-left");
        const rightValue = item.querySelector(".bonus-value");

        // Animate Left Content (Tag, Title, Body)
        if (leftContent) {
          gsap.from(leftContent, {
            x: -30,
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

        // Animate Right Value (Price) with a slight delay and pop effect
        if (rightValue) {
          gsap.from(rightValue, {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }
      });

      // 3. Pricing Card Reveal
      // We animate the card as a whole when it comes into view
      const priceCardWrapper = el.querySelector(".value-stack-right");
      if (priceCard && priceCardWrapper) {
        gsap.from(priceCard, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: priceCardWrapper,
            start: "top 80%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }

      // 4. Price Rows Stagger (Strikethroughs then Final Price)
      const priceAnchor = el.querySelector(".price-anchor");
      if (priceAnchor && priceRows.length > 0) {
        gsap.from(priceRows, {
          x: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: priceAnchor,
            start: "top 85%",
            once: true, // <--- ADDED: Fires only once
          },
        });
      }

      // 5. CTA Button Pop
      if (ctaBtn) {
        gsap.from(ctaBtn, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaBtn,
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
