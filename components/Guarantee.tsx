import "./Guarantee.scss";

const Guarantee = () => {
  return (
    <section className="guarantee">
      <div className="guarantee-container">

        <div className="guarantee-badge">
          <div className="guarantee-badge-inner">
            <span className="guarantee-badge-number">60</span>
            <span className="guarantee-badge-unit">Day</span>
            <span className="guarantee-badge-text">Money-Back<br />Guarantee</span>
          </div>
        </div>

        <div className="guarantee-content">
          <span className="guarantee-eyebrow">The Guarantee</span>
          <h2 className="guarantee-heading">
            My &ldquo;No-Questions-Asked&rdquo; Promise to You.
          </h2>
          <div className="guarantee-body">
            <p>
              I know buying a guide about intimacy from a man requires trust.
              That&apos;s why I take all the risk.
            </p>
            <p>
              If you read the guide, watch the workshops, and apply the 7
              Unspoken Cravings—and you don&apos;t feel a deeper sense of
              connection, confidence, and clarity...
            </p>
            <p className="guarantee-promise">
              Just email me. I&apos;ll refund every penny. No hard feelings.
              No hoops to jump through.
            </p>
            <p>You have nothing to lose but the guesswork.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Guarantee;
