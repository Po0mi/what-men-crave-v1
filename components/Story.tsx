import "./Story.scss";

const Story = () => {
  return (
    <section className="story">
      <div className="story-container">
        <span className="story-eyebrow">The Story</span>

        <div className="story-body">
          <p className="story-voice">
            She lay next to him afterward, replaying every moment.
            <br />
            <em>
              Did he like it? Did I ask for too much? Did he notice I
              hesitated?
            </em>
          </p>

          <p>
            He said it was great. He always says that. But she&apos;d seen the
            look on his face—that quiet distance that meant he was thinking
            something he wouldn&apos;t say. And she realized with a sinking
            feeling: She would never know what he actually needed.
          </p>

          <p>
            Most women live in this gap. They wonder if they&apos;re &ldquo;doing
            it right.&rdquo; They worry they&apos;re too demanding or not enough.
            They assume men are simple, or that silence means satisfaction.
          </p>

          <p className="story-turn">They are wrong.</p>

          <p>
            After coaching over 100,000 women and having more honest,
            unfiltered conversations about sex and intimacy than 99% of men
            ever will, I can tell you the truth:
          </p>

          <blockquote className="story-pull">
            Men are starving to be wanted. Not just tolerated. Not just
            &ldquo;accepted.&rdquo; <em>Wanted.</em>
          </blockquote>

          <p>
            But they are afraid to ask. Afraid of judgment. Afraid of
            rejection. So they stay quiet. And you are left guessing.
          </p>

          <p className="story-turn">Until now.</p>
        </div>
      </div>
    </section>
  );
};

export default Story;
