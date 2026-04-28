import "./FAQ.scss";

const faqs = [
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
    a: "Your purchase is discreet. But more importantly, this guide is for you. It's about your confidence, your presence, and your ability to connect. The changes he sees will be in you—your confidence, your warmth, your ease.",
  },
  {
    q: "How quickly can I see results?",
    a: "Many women report a shift in their partner's responsiveness within the first few days of applying the 'Presence' and 'Desire' principles. It's not about learning new tricks; it's about shifting your energy.",
  },
];

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq-container">
        <span className="faq-eyebrow">FAQ</span>
        <h2 className="faq-heading">Common Questions</h2>

        <dl className="faq-list">
          {faqs.map((item) => (
            <div key={item.q} className="faq-item">
              <dt className="faq-question">{item.q}</dt>
              <dd className="faq-answer">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
