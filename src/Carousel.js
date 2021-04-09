import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import leftArrow from "./images/arrow-left-short.svg";
import rightArrow from "./images/arrow-right-short.svg";

function StyledCarousel() {
  return (
    <StyledCaro fade>
      <StyledCaro.Item>
        <StyledCaro.Caption>
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
        </StyledCaro.Caption>
      </StyledCaro.Item>
      <StyledCaro.Item>
        <StyledCaro.Caption>
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
        </StyledCaro.Caption>
      </StyledCaro.Item>
    </StyledCaro>
  );
}

export default StyledCarousel;

const StyledCaro = styled(Carousel)`
  .carousel {
    width: 100%;
    height: 90%;
  }
  .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .carousel-caption {
    text-align: center;
    color: black;
  }

  .carousel-control-prev-icon {
    background-image: url(${leftArrow});
  }
  .carousel-control-next-icon {
    background-image: url(${rightArrow});
  }
  .carousel-indicators {
    background-color: darkgray;
  }
  a {
    color: black !important;
  }

  // removes "next" and "prev" words
  .sr-only {
    display: none;
  }
  /* ------------------------------- FULL SCREEN ------------------------------ */
  @media (min-width: 769px) {
    .carousel-item {
      height: 500px;
    }

    .carousel-caption {
      bottom: 30%;
    }
  }

  /* --------------------------------- MOBILE --------------------------------- */

  @media (max-width: 768px) {
    .carousel-item {
      height: 250px;
    }
    .carousel-caption {
      bottom: 0;
    }
    h3 {
      font-size: 15px;
    }
  }
`;
