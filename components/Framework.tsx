import "./Framework.scss";

const cravings = [
  {
    number: "01",
    title: "Presence > Performance",
    body: "Why being 'in your body' beats any sexual technique you've ever learned. How to stop managing the experience and start feeling it.",
  },
  {
    number: "02",
    title: "Desire (Not Just Receptivity)",
    body: "Men are starving to feel wanted. Learn how to show him you desire HIM—not just the act of sex. The difference between 'willingness' and 'hunger' changes everything.",
  },
  {
    number: "03",
    title: "Confidence & Ownership",
    body: "Stop making your pleasure a puzzle he has to solve. How to own your arousal without apology—and why guiding his hand is the hottest form of communication.",
  },
  {
    number: "04",
    title: "The Language of Touch",
    body: "Your hands speak a language he's listening to. How to use curious, exploratory touch to help him discover pleasures he didn't even know he had.",
  },
  {
    number: "05",
    title: "Polarity & The Dance",
    body: "Why sameness kills attraction. How to surrender into receiving to invite him to step fully into his masculine giving. Creating the electric spark through energetic balance.",
  },
  {
    number: "06",
    title: "The Unspoken Words",
    body: "Men are starving for verbal acknowledgment. The specific phrases, sounds, and moments of validation that empower him and deepen his connection to you.",
  },
  {
    number: "07",
    title: "The Aftermath (The Bonding Window)",
    body: "The 30 seconds after sex are when emotional attachment happens—or fails. How to close the experience so he feels closer, safer, and more connected to you.",
  },
];

const Framework = () => {
  return (
    <section className="framework">
      <div className="framework-container">
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
          <a href="#" className="framework-btn">
            Show Me The 7 Cravings - $37
          </a>
        </div>
      </div>
    </section>
  );
};

export default Framework;
