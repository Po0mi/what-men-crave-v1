"use client";

import { useEffect, useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation"; // Adjust path as needed
import "./Hero.scss";

const Hero = () => {
  const { containerRef } = useHeroAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create an IntersectionObserver to watch the hero section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the hero section is in view, play the video
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        } else {
          // If the hero section is out of view, pause the video
          video.pause();
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the hero section is visible
    );

    // Start observing the hero container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <section className="hero" id="hero">
      {/* Attach ref here */}
      <div className="hero-container" ref={containerRef}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
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
