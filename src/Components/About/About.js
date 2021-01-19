import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div id="text">
        <h3>About</h3>

        <p className="text">
          We are a boutique real estate investment company, located in Denver,
          CO.
        </p>

        <p className="text">
          We specialize in rehabing properties in an effort to maximize returns
          for investors by yielding monthly positive cash flow from tenants.
        </p>

        <br />

        <p className="text">Interested in learning more?</p>
        <p className="number">
          <a href="mailto:info@MHInvestmentGroup.com">
            info@MHREInvestments.com
          </a>
          <br />
          <a href="tel:+19705790029">Office: ‪(970) 579-0029‬</a>
        </p>
      </div>
    </div>
  );
};

export default About;
