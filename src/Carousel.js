import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
// import Image1 from "./images/img-1.jpg";

const testimonialData = [
  {
    date: "08/08/2019",
    name: "John Doe 08/08/2019",
    description:
      "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
  {
    date: "08/08/2019",
    name: "John Doe ",
    description:
      "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
  {
    date: "08/08/2019",
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
];

function StyledCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Nancy Drew</h3>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum
            dolor sit amet, et felis integer. Cras ac, duis nisl magna est
            sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut
            ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet,
            et felis integer. Cras ac, duis nisl magna est sociis, neque in.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>John Doe</h3>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum
            dolor sit amet, et felis integer. Cras ac, duis nisl magna est sasa
            soci sxis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede
            ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit
            amet, et felis integer. Cras ac, duis nisl magna est sociis, neque
            in.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default StyledCarousel;
