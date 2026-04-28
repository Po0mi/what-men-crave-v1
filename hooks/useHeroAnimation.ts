"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 1. Hand-drawn Circle Animation (if present)
    const path = el.querySelector(
      ".handdrawn-circle path",
    ) as SVGPathElement | null;
    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.8, // Wait for text to appear first
      });
    }

    // 2. Staggered Text Entrance
    // We use a timeline to chain animations with overlaps ("-=")
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(el.querySelector(".hero-eyebrow"), { opacity: 0, y: 20 })
      .from(el.querySelector(".hero-title"), { opacity: 0, y: 30 }, "-=0.4")
      .from(el.querySelector(".hero-subtitle"), { opacity: 0, y: 20 }, "-=0.45")
      .from(el.querySelector(".hero-cta"), { opacity: 0, y: 20 }, "-=0.45");

    // 3. CTA Button Hover Effect
    const btn = el.querySelector(".primary-cta") as HTMLElement | null;

    // Define handlers outside so we can remove them later
    const handleMouseEnter = () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" });
    };

    if (btn) {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function to prevent memory leaks
    return () => {
      tl.kill(); // Kill the timeline
      if (btn) {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return { containerRef };
}
