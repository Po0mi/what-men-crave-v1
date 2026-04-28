import "./ValueStack.scss";

const bonuses = [
  {
    tag: "Bonus 1",
    title: "The Playground & The Sanctuary",
    duration: "3 Hours",
    value: "$97",
    body: "Deep dive into power dynamics, personality types, and how to guide him without emasculating him. Plus live Q&A.",
  },
  {
    tag: "Bonus 2",
    title: "What Men Actually Want",
    duration: "2.5 Hours",
    value: "$97",
    body: "Why men hide their fantasies. How to create safety for him to open up. The “Curiosity Conversation” that changes everything.",
  },
  {
    tag: "Bonus 3",
    title: "Polarity in Practice",
    duration: "3.5 Hours",
    value: "$97",
    body: "Mastering the masculine/feminine dance. Why enthusiasm beats expertise. How to be the conductor of connection.",
  },
  {
    tag: "Bonus 4",
    title: "Start Here Guide",
    duration: null,
    value: "$27",
    body: "Your quick-start roadmap to using these tools immediately.",
  },
];

const ValueStack = () => {
  return (
    <section className="value-stack">
      <div className="value-stack-container">
        {/* Left — intro + bonuses */}
        <div className="value-stack-left">
          <div className="value-stack-intro">
            <span className="value-stack-eyebrow">The Value Stack</span>
            <h2 className="value-stack-heading">It&apos;s Not Just a PDF.</h2>
            <p className="value-stack-lead">
              When you grab the guide today, you&apos;re not just getting a
              book. You&apos;re getting <strong>The Vault</strong>—including{" "}
              <strong>9+ Hours of Live Workshop Recordings</strong> where I go
              deeper, answer real questions, and coach women live. Unfiltered,
              raw, and transformative.
            </p>
          </div>

          <ul className="bonus-list">
            {bonuses.map((bonus) => (
              <li key={bonus.tag} className="bonus-item">
                <div className="bonus-left">
                  <div className="bonus-meta">
                    <span className="bonus-tag">{bonus.tag}</span>
                    {bonus.duration && (
                      <span className="bonus-duration">{bonus.duration}</span>
                    )}
                  </div>
                  <h3 className="bonus-title">{bonus.title}</h3>
                  <p className="bonus-body">{bonus.body}</p>
                </div>
                <span className="bonus-value">{bonus.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — sticky pricing card */}
        <div className="value-stack-right">
          <div className="price-card">
            <p className="price-card-label">Everything included</p>

            <div className="price-anchor">
              <div className="price-row price-row--struck">
                <span className="price-label">Total Value</span>
                <span className="price-amount">$418</span>
              </div>
              <div className="price-row price-row--struck">
                <span className="price-label">Regular Price</span>
                <span className="price-amount">$97</span>
              </div>
              <div className="price-row price-row--today">
                <span className="price-label">Today Only</span>
                <span className="price-amount">$37</span>
              </div>
            </div>

            <div className="value-stack-cta">
              <a href="#" className="value-stack-btn">
                Yes, I Want Instant Access - $37
              </a>
              <span className="value-stack-reassurance">
                One-time payment. Instant access. No subscriptions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
