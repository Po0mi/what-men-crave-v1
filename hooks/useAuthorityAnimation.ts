"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin safely for SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useAuthorityAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(".authority-eyebrow");
      const name = el.querySelector(".authority-name");
      const bodyText = el.querySelectorAll(".authority-body p");
      const stats = el.querySelectorAll(".authority-stat");
      const mediaWrapper = el.querySelector(".authority-photo-wrapper");

      // Create a timeline that starts when the section enters the viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Media Reveal (Image) - Faster
      tl.from(mediaWrapper, {
        x: 30, // Reduced distance for speed
        opacity: 0,
        duration: 0.6, // Reduced from 1s
        ease: "power3.out",
      })
        // 2. Text Content Stagger - Faster & More Overlap
        .from(
          [eyebrow, name],
          {
            y: 15,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5, // Reduced from 0.8s
            ease: "power2.out",
          },
          "-=0.4", // Increased overlap
        )
        .from(
          bodyText,
          {
            y: 15,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5, // Reduced from 0.8s
            ease: "power2.out",
          },
          "-=0.3", // Increased overlap
        )
        // 3. Stats Pop-in - Faster
        .from(
          stats,
          {
            y: 15,
            opacity: 0,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.4, // Reduced from 0.6s
            ease: "back.out(1.7)",
          },
          "-=0.3", // Increased overlap
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return { containerRef };
}
