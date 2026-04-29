"use client";
import { useFrameworkAnimation } from "@/hooks/useFrameworkAnimation"; // Adjust path
import "./Framework.scss";
const cravings = [
  {
    number: "01",
    title: "Presence > Performance",
    body: "Why being fully in your body creates deeper intimacy than any technique or performance ever could.",
  },
  {
    number: "02",
    title: "Desire (Not Just Receptivity)",
    body: "Men don’t just want permission. They want to feel actively wanted, not just accepted.",
  },
  {
    number: "03",
    title: "Confidence & Ownership",
    body: "How to stop overthinking your pleasure and start owning it naturally, without hesitation or apology.",
  },
  {
    number: "04",
    title: "The Language of Touch",
    body: "How subtle, intentional touch communicates curiosity, confidence, and emotional connection without words.",
  },
  {
    number: "05",
    title: "Polarity & The Dance",
    body: "Why attraction fades when energy becomes neutral, and how contrast creates emotional and physical tension.",
  },
  {
    number: "06",
    title: "The Unspoken Words",
    body: "The quiet affirmations and signals men crave but rarely receive, and how they deepen emotional safety.",
  },
  {
    number: "07",
    title: "The Aftermath",
    body: "Why the moments right after intimacy shape emotional attachment more than the act itself.",
  },
];

const Framework = () => {
  const { containerRef } = useFrameworkAnimation();

  return (
    <section className="framework">
      {/* Attach ref here */}
      <div className="framework-container" ref={containerRef}>
        <div className="framework-intro">
          <span className="framework-eyebrow">The Framework</span>
          <h2 className="framework-heading">The 7 Unspoken Cravings</h2>
          <p className="framework-lead">
            You don&apos;t need more &ldquo;techniques.&rdquo; You need a map.
            Inside <em>What Men Crave (But Will Never Ask For)</em>, I reveal
            the specific emotional and energetic shifts that transform intimacy
            from a routine into a sanctuary.
          </p>
        </div>

        <ol className="framework-list">
          {cravings.map((craving, i) => (
            <li
              key={craving.number}
              className={`framework-item${i === 6 ? " framework-item--last" : ""}`}
            >
              <span className="framework-number">{craving.number}</span>
              <div className="framework-item-content">
                <h3 className="framework-item-title">{craving.title}</h3>
                <p className="framework-item-body">{craving.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="framework-cta">
          <a href="#value-stack" className="framework-btn">
            Show Me The 7 Cravings - $37
          </a>
        </div>
      </div>
    </section>
  );
};

export default Framework;
