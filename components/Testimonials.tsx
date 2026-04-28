"use client";
import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation"; // Adjust path
import "./Testimonials.scss";

// Simple Star Icon Component
const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="star-icon"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const testimonials = [
  {
    quote:
      "I finally understood why my husband shut down after sex. The ‘After’ chapter literally fixed our marriage. We’re closer now than we’ve been in ten years.",
    name: "Sarah J.",
  },
  {
    quote:
      "I used to think I had to be ‘good at sex.’ Mat taught me I just had to be present. The shift in my partner’s energy was immediate. He’s more affectionate, more open, and more connected.",
    name: "Emily R.",
  },
  {
    quote:
      "The Vault workshops are worth 10x the price. Hearing Mat coach other women helped me realize I wasn’t broken—I was just missing the map.",
    name: "Jessica T.",
  },
];

const Testimonials = () => {
  const { containerRef } = useTestimonialsAnimation();

  return (
    <section className="testimonials">
      {/* Attach ref here */}
      <div className="testimonials-container" ref={containerRef}>
        <span className="testimonials-eyebrow">What Women Are Saying</span>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <span className="testimonial-mark">&ldquo;</span>
              <p className="testimonial-quote">{t.quote}</p>

              <footer className="testimonial-footer">
                {/* Star Rating */}
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="testimonial-name">{t.name}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
