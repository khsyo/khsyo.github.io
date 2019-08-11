import React from "react";
import BioDiv from "./BioDiv";
import ControlledCarousel from "./ControlledCarousel";

function Homepage() {
  return (
    <div>
      <BioDiv />
      <div className="portfolio">
        <h4 className="portfolio-title">Recent projects:</h4>
        <ControlledCarousel />
      </div>
    </div>
  );
}

export default Homepage;
