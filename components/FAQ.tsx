"use client";
import { useState } from "react";
import { useFAQAnimation } from "@/hooks/useFAQAnimation"; // Adjust path
import gsap from "gsap";
import "./FAQ.scss";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Is this explicit?",
    a: "This is a guide about emotional connection, psychology, and intimacy dynamics. It is direct and honest, but it is not erotica. It's about understanding the mind and energy behind the act.",
  },
  {
    q: "What if I'm not currently in a relationship?",
    a: "These principles apply to any future partner. Understanding masculine psychology now prepares you to build healthier, more connected relationships from day one.",
  },
  {
    q: "Will my partner know I bought this?",
    a: "Your purchase is discreet. But more importantly, this guide is for you. It's about your confidence, your presence, and your ability to connect. The changes he sees will be in you, your confidence, your warmth, your ease.",
  },
  {
    q: "How quickly can I see results?",
    a: "Many women report a shift in their partner's responsiveness within the first few days of applying the 'Presence' and 'Desire' principles. It's not about learning new tricks; it's about shifting your energy.",
  },
];

const FAQ = () => {
  const { containerRef } = useFAQAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Optional: Add a small GSAP tween for the icon rotation if you want it extra smooth
    // though CSS transition usually handles this well enough.

    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* Attach ref here */}
      <div className="faq-container" ref={containerRef}>
        <span className="faq-eyebrow">FAQ</span>
        <h2 className="faq-heading">Common Questions</h2>

        <dl className="faq-list">
          {faqs.map((item: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <dt className="faq-question">
                  {item.q}
                  <span className="faq-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="vertical-line"
                      />
                    </svg>
                  </span>
                </dt>

                {/* Wrapper handles the animation */}
                <div className="faq-answer-wrapper">
                  <dd className="faq-answer">{item.a}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
