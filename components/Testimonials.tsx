import "./Testimonials.scss";

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
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <span className="testimonials-eyebrow">What Women Are Saying</span>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <span className="testimonial-mark">&ldquo;</span>
              <p className="testimonial-quote">{t.quote}</p>
              <footer className="testimonial-footer">
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
