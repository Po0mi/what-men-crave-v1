"use client";
import Image from "next/image";
import { useAuthorityAnimation } from "@/hooks/useAuthorityAnimation"; // Adjust path
import "./Authority.scss";

const Authority = () => {
  const { containerRef } = useAuthorityAnimation();

  return (
    <section className="authority">
      {/* Attach ref here */}
      <div className="authority-container" ref={containerRef}>
        <div className="authority-content">
          <span className="authority-eyebrow">Why Listen to Mat?</span>
          <h2 className="authority-name">Hi, I&apos;m Mat Shaffer.</h2>
          <div className="authority-body">
            <p>
              I&apos;m not just a relationship coach. I&apos;m a former attorney
              who left the courtroom to decode the masculine mind.
            </p>
            <p>
              I don&apos;t deal in fluff. I deal in the raw, honest truths men
              rarely share, because I&apos;ve heard them directly from the
              source.
            </p>
            <p>
              This isn&apos;t theory. This is insider access to what men
              actually think, feel, and crave in the bedroom.
            </p>
          </div>

          <div className="authority-stats">
            <div className="authority-stat">
              <span className="authority-stat-number">24M+</span>
              <span className="authority-stat-label">YouTube Views</span>
            </div>
            <div className="authority-stat">
              <span className="authority-stat-number">300K</span>
              <span className="authority-stat-label">Subscribers</span>
            </div>
            <div className="authority-stat">
              <span className="authority-stat-number">100K+</span>
              <span className="authority-stat-label">Women Coached</span>
            </div>
          </div>
        </div>

        <div className="authority-media">
          <div className="authority-photo-wrapper">
            <Image
              src="/images/author.webp"
              alt="Mat Shaffer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // Adjusted size for better loading
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority // Important for LCP (Largest Contentful Paint)
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
