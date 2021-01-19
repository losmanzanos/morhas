import React from "react";
import "./styles.css";

import condo from "../src/Components/images/condo.jpg";

import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "The Park Lane Condominium",
          image: condo,
          purchasePrice: "$172,500",
          currentValue: "$365,302",
          description: "..."
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <section id="projects">
          <h3 className="work-title">Portfolio</h3>
          <div className="gallery">
            <Project projects={this.state.projects} />
          </div>
        </section>
        <Contact />
      </div>
    );
  }
}
