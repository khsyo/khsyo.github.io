import React, { useState } from "react";

// import PropTypes from "prop-types";

import Carousel from "react-bootstrap/Carousel";

import canaan1 from "../../asset/canaan/canaan_homepage.png";
import canaan2 from "../../asset/canaan/post_a_job.png";
import canaan3 from "../../asset/canaan/sign_up_function.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const portfolio_list = [
    {
      "project-name": "CanaanJobs",
      "project-img": [canaan1, canaan2, canaan3],
      "project-link": "",
      "project-github": "https://github.com/khsyo/connect-the-x",
      "project-caption": ["caption1", "caption2", "caption3"]
    },
    {
      "project-name": "CanaanJobs",
      "project-img": [canaan1, canaan2, canaan3],
      "project-link": "",
      "project-github": "https://github.com/khsyo/connect-the-x",
      "project-caption": ["caption1", "caption2", "caption3"]
    }
  ];

  const carousel = portfolio_list
    ? portfolio_list.map(p => (
        <div>
          <h4>{p["project-name"]}</h4>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
          >
            {p["project-img"]
              ? p["project-img"].map((image, index) => (
                  <Carousel.Item>
                    <img
                      className="d-block portfolio-img"
                      src={image}
                      alt={index}
                      key={index}
                    />
                    <Carousel.Caption>
                      <p>{p["project-caption"][index]}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              : null}
          </Carousel>
          <h4>
            <a href={p["project-github"]} />
          </h4>
        </div>
      ))
    : null;

  return <div>{carousel}</div>;
}

ControlledCarousel.propTypes = {};

export default ControlledCarousel;
