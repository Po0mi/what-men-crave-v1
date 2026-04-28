import "./FinalCTA.scss";

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="final-cta-container">
        {/* Two choices */}
        <h2 className="final-cta-heading">You have two choices.</h2>

        <div className="final-cta-paths">
          <div className="final-cta-path final-cta-path--no">
            <span className="path-marker">Option A</span>
            <p>Keep guessing. Keep wondering. Keep managing.</p>
          </div>
          <div className="final-cta-path final-cta-path--yes">
            <span className="path-marker">Option B</span>
            <p>Get the map. Let him feel truly, deeply wanted.</p>
          </div>
        </div>

        {/* Vision */}
        <p className="final-cta-vision">
          The bedroom should be a sanctuary. A playground. A place where walls
          come down.
        </p>

        {/* Offer + Guarantee */}
        <div className="final-cta-offer-block">
          <div className="guarantee-badge">
            <div className="guarantee-badge-inner">
              <span className="guarantee-badge-number">60</span>
              <span className="guarantee-badge-unit">Day</span>
              <span className="guarantee-badge-text">
                Money-Back
                <br />
                Guarantee
              </span>
            </div>
          </div>

          <div className="final-cta-offer-content">
            <p className="final-cta-promise">
              If you don&apos;t feel a deeper connection after applying the 7
              Cravings, just email me. I&apos;ll refund every penny—no questions
              asked.
            </p>
            <p className="final-cta-offer">
              <strong>Guide + The Vault</strong> (9+ Hours of Workshops) —{" "}
              <strong>$37</strong>
            </p>
            <div className="final-cta-action">
              <a href="#" className="final-cta-btn">
                Get Instant Access Now — $37
              </a>
              <div className="final-cta-trust">
                <span>Secure Checkout</span>
                <span className="trust-dot" aria-hidden="true" />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
