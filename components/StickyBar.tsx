"use client";
import { useEffect, useRef, useState } from "react";
import "./StickyBar.scss";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Placed right after the hero so bar appears when hero leaves view */}
      <div ref={sentinelRef} aria-hidden="true" />

      <div className={`sticky-bar${visible ? " sticky-bar--visible" : ""}`}>
        <div className="sticky-bar-container">
          <div className="sticky-bar-info">
            <span className="sticky-bar-title">
              What Men Crave (But Will Never Ask For)
            </span>
            <span className="sticky-bar-meta">
              Guide + 9+ Hours of Workshops
            </span>
          </div>
          <a href="#value-stack" className="sticky-bar-btn">
            Get Instant Access - $37
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyBar;
