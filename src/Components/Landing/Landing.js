import React from "react";
import "./Landing.css";

import hamburger from "../images/hamburger.png";
import skyline from "../images/skyline.png";

const reveal = () => {
  console.log("Hello!");
  document.getElementById("hidden").classList.remove("hidden");
};

const hide = () => {
  console.log("Bye...");
  document.getElementById("hidden").classList.add("hidden");
};

const about = () => {
  document.getElementById("about").scrollIntoView(true);
};

const contact = () => {
  document.getElementById("contact").scrollIntoView(true);
};

const Landing = () => {
  return (
    <div>
      <div class="drop-down" onMouseEnter={reveal} onMouseLeave={hide}>
        <img src={hamburger} id="hamburger" alt="hamburger" />
        <br />
        <div id="hidden" className="hidden">
          <ul>
            <li onClick={about}>About</li>

            <li onClick={contact}>Contact</li>
          </ul>
        </div>
      </div>
      <div id="landing">
        <div id="name">
          <h1>Morhas Investments</h1>
        </div>
        <img src={skyline} id="skyline" alt="skyline" />
      </div>
    </div>
  );
};

export default Landing;
