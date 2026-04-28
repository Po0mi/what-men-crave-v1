"use client";
import { useHeroAnimation } from "@/hooks/useHeroAnimation"; // Adjust path as needed
import "./Hero.scss";

const Hero = () => {
  const { containerRef } = useHeroAnimation();

  return (
    <section className="hero" id="hero">
      {/* Attach ref here */}
      <div className="hero-container" ref={containerRef}>
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video/hero-bg.webm" type="video/webm" />
        </video>
        <div className="hero-overlay" />

        <span className="hero-eyebrow">
          A guide for the woman who wants the truth
        </span>

        <h1 className="hero-title">
          He’s Thinking Something He Will Never Say Out Loud.
        </h1>

        <p className="hero-subtitle">
          Discover the 7 Unspoken Cravings that turn physical intimacy into deep
          emotional connection, without guessing, performing, or asking.
        </p>

        <div className="hero-cta">
          {/* The hook looks for .primary-cta for hover effects */}
          <a href="#value-stack" className="primary-cta">
            Get Instant Access - $37
          </a>

          <span className="hero-meta">
            Includes 9+ Hours of Live Workshop Recordings
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
