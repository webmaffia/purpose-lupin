"use client"
export default function Framework() {
  return (
    <>
      <section className="section-framework">
        <div
          className="section-framework__bg"
          style={{backgroundImage: "url('/images/New folder/mountain.png')"}}
        ></div>
        <h2 className="section-framework__title">
          OUR GUIDING
          <br />
          FRAMEWORK
        </h2>
        <div className="section-framework__circles">
          <div className="section-framework__circle">
            <span className="section-framework__circle-inner">
              <span className="section-framework__circle-label">PURPOSE</span>
              <span className="section-framework__circle-subtitle">
                Our North Star
              </span>
              <span className="section-framework__circle-desc">
                The very reason we exist beyond profit.
              </span>
            </span>
          </div>
          <div className="section-framework__circle">
            <span className="section-framework__circle-inner">
              <span className="section-framework__circle-label">VISION</span>
              <span className="section-framework__circle-subtitle">
                Our Future Ambition
              </span>
              <span className="section-framework__circle-desc">
                Where we want to go and what we aspire to achieve.
              </span>
            </span>
          </div>
          <div className="section-framework__circle">
            <span className="section-framework__circle-inner">
              <span className="section-framework__circle-label">STRATEGY</span>
              <span className="section-framework__circle-subtitle">
                Our Driving Path
              </span>
              <span className="section-framework__circle-desc">
                What we will do in the short term and the value we add.
              </span>
            </span>
          </div>
          <div className="section-framework__circle">
            <span className="section-framework__circle-inner">
              <span className="section-framework__circle-label">VALUES</span>
              <span className="section-framework__circle-subtitle">
                Our Core Beliefs
              </span>
              <span className="section-framework__circle-desc">
                Attitudes that inform our behaviors and decisions.
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
