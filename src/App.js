import styled from "styled-components";
import HeroImage from "./images/hero.jpg";
import Image1 from "./images/img-1.jpg";
import Banner1 from "./images/banner-1.jpg";
import Banner2 from "./images/banner-2.jpg";
import logoWhite from "./images/logo-white.svg";
import HomeRention from "./images/home-retention.svg";
import HomeLab from "./images/home-lab.svg";
import HomeHygiene from "./images/home-hygiene.svg";
import HomeExpertise from "./images/home-expertise.svg";
import Star from "./images/star-fill.svg";
import { Button } from "react-bootstrap";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import AOS from "aos";

import StyledCarousel from "./Carousel";

function App() {
  AOS.init();
  return (
    <Container>
      <Hero
        style={{ backgroundImage: `url(${HeroImage})` }}
        data-aos="fade-in"
        data-aos-offset="600"
        data-aos-duration="800"
      >
        <img className="rooster-logo" src={logoWhite} alt="Rooster Grin Logo" />
        <div className="heading">
          <p className="top-line">WELCOME TO</p>
          <p className="second-line">Rooster Grin</p>
          <StyledButton hero href="/">
            BUTTON BUTTON
          </StyledButton>
        </div>
      </Hero>

      <SplitSection>
        <SubSection className="sub-section-1-left">
          <div>
            <h1>LOREM IPSUM</h1>
            <p>
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit
              quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus
              est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet
              sem tellus suspendisse. Condimentum non aliquet sed, quisque risus
              vitae semper duis feugiat .
            </p>
            <a href="/"> > Lorem Ipsum</a>
          </div>
        </SubSection>
        <SubSection
          className="sub-section-1-right"
          style={{ backgroundImage: `url(${Image1})` }}
        ></SubSection>
      </SplitSection>

      <Section style={{ backgroundImage: `url(${Banner1})` }}>
        <div className="section-1">
          <h1>LOREM IPSUM</h1>
          <StyledButton href="/">BUTTON BUTTON</StyledButton>
        </div>
      </Section>

      <SplitSection>
        <SubSection className="sub-section-2-left">
          <div>
            <h1>LORE IPSUM DOLOR SIT AMET</h1>
            <p>
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit
              quam, ut pede ut ante, in viverra eros dictum nisl ligula.
            </p>
            <a href="/"> > Lorem Ipsum</a>
          </div>
        </SubSection>
        <SubSection className="sub-section-2-right">
          <div className="logo-container">
            <div data-aos="flip-up" data-aos-anchor-placement="top-center">
              <FourLogoGroup
                style={{ backgroundImage: `url(${HomeExpertise})` }}
              />
              <p>LOREM</p>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <FourLogoGroup
                style={{ backgroundImage: `url(${HomeHygiene})` }}
              />
              <p>LOREM IPSUM</p>
            </div>
            <div data-aos="flip-up" data-aos-anchor-placement="top-center">
              <FourLogoGroup style={{ backgroundImage: `url(${HomeLab})` }} />
              <p>LOREM IPSUM</p>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <FourLogoGroup
                style={{ backgroundImage: `url(${HomeRention})` }}
              />
              <p>LOREM</p>
            </div>
          </div>
        </SubSection>
      </SplitSection>

      <Section
        className="section-2"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div>
          <h1>LOREM IPSUM</h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula.
          </p>
          <StyledButton href="/">BUTTON BUTTON</StyledButton>
        </div>
      </Section>

      <SplitSection>
        <SubSection className="sub-section-3-left">
          <div>
            <h1>LORE IPSUM DOLOR SIT AMET</h1>
            <div className="star-group">
              <img className="star-icon" src={Star} alt="star-logo"></img>
              <img className="star-icon" src={Star} alt="star-logo"></img>
              <img className="star-icon" src={Star} alt="star-logo"></img>
              <img className="star-icon" src={Star} alt="star-logo"></img>
              <img className="star-icon" src={Star} alt="star-logo"></img>
            </div>
          </div>
        </SubSection>
        <SubSection className="sub-section-3-right">
          <StyledCarousel image={Image1} image2={Image1} image3={Image1} />
        </SubSection>
      </SplitSection>

      <Footer>
        <div className="icon-group">
          <p>Follow us:</p>
          <a href="/">
            <img src={Facebook} alt="facebook link"></img>
          </a>
          <a href="/">
            <img src={Instagram} alt="instagram link"></img>
          </a>
        </div>
      </Footer>
    </Container>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  color: black;
  background: ${(props) => (props.hero ? "#ac5fd0" : "#FF7218")};
  :hover {
    background: #ac5fd005;
  }
  color: white;
  font-size: 20px;
  margin: 0 auto;
  padding: 20px;

  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 10px;
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */
  @media (min-width: 769px) {
  }
`;
const Hero = styled.div`
  .top-line {
    font-family: "Train One", cursive;
  }
  .second-line {
    font-family: "Open Sans", sans-serif;
  }

  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */
  @media (max-width: 768px) {
    height: 300px;
    background-position: right;
    display: flex;
    justify-content: center;
    align-items: center;

    .rooster-logo {
      height: 0;
    }
    .heading {
      text-align: center;

      .top-line {
        font-size: 40px;
        color: white;
      }
      .second-line {
        font-family: Open Sans;
        font-size: 30px;
        color: white;
      }
    }
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */

  @media (min-width: 769px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    height: 700px;

    .rooster-logo {
      height: 45px;
      width: 249px;
      margin: 33px 0 0 173px;
      display: block;
      background-repeat: no-repeat;
    }

    .heading {
      text-align: center;
      // margin: auto;
      .top-line {
        font-size: 72px;
        color: white;
      }
      .second-line {
        font-family: Open Sans;
        font-size: 64px;
        color: white;
      }
    }
  }
`;

const Section = styled.div`
  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */

  @media (max-width: 768px) {
    background-position: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 150px;
    h1 {
      font-size: 30px;
      color: #613476;
    }
    p {
      font-size: 12px;
    }

    div.section-1 {
    }

    &.section-2 {
      background-position: center;
      height: 300px;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      div {
        width: 50%;
      }
    }
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */
  @media (min-width: 769px) {
    height: 600px;
    background-size: auto;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    h1 {
      font-size: 50px;
      color: #613476;
    }
    p {
      font-size: 20px;
    }

    div.section-1 {
      width: 50%;
      margin-right: 150px;
    }

    &.section-2 {
      background-position: center;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      div {
        margin-right: 300px;
        width: 25%;
      }
    }
  }
`;
const SplitSection = styled.div`
  display: flex;
  flex-direction: row;
  background-position: right;

  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */

  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
    flex-direction: column;
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */
  @media (min-width: 769px) {
    height: 600px;
  }
`;
const SubSection = styled.div`
  flex: 1;
  width: 30px;
  background-color: #ffffff;

  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */

  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
    flex-direction: column;
    h1 {
      font-size: 20px;
      color: #613476;
    }
    p {
      font-size: 10px;
    }
    a {
      text-decoration: none;
      font-size: 20px;
      color: #613476 !important;
    }
    &.sub-section-1-left {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 90%;
      }
    }

    &.sub-section-1-right {
      width: 100%;
      height: 300px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &.sub-section-2-left {
      height: 300px;
      margin: 0
      margin-left: 10px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 90%;
      }
    }

    &.sub-section-2-right {
      background-color: #f8eaff;
      display: flex;
      justify-content: center;
      height: 150px;
      div.logo-container {
        width: 100%;
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: row;

        div{
          margin: auto;
        }
      }
    }

    &.sub-section-3-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      div {
        margin: 20px 0;
        text-align: center;
      }
      h1 {
        color: black;
      }
      img.star-icon {
        margin: 0 5px;
      }
    }

    &.sub-section-3-right {
      height: 300px;
    }
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */
  @media (min-width: 769px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 600px;

    &.sub-section-1-left {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        margin-right: 100px;
        width: 50%;
      }
      h1 {
        font-size: 50px;
        color: #613476;
      }
      p {
        font-size: 20px;
      }
      a {
        text-decoration: none;
        font-size: 20px;
        color: #613476 !important;
      }
    }

    &.sub-section-2-left {
      background-color: #ffffff;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        margin-right: 100px;
        width: 50%;
      }
      h1 {
        font-size: 50px;
        color: black;
      }
      p {
        font-size: 20px;
      }
      a {
        text-decoration: none;
        font-size: 20px;
        color: #613476 !important;

      }
    }
    &.sub-section-2-right {
      background-color: #f8eaff;
      display: flex;
      justify-content: center;

      div.logo-container {
        width: 100%;
        height: 100%;
        display: flex;
        text-align:center;
        align-items: center;
        align-content: center;
        flex-direction: row;
        flex-flow: row wrap;

        div{
          margin: 30px auto;
          flex: 1 0 50%;
        }

      }


    }


      &.sub-section-3-left {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        div {
          margin-right: 100px;
          width: 50%;
          font-size: 60px;
        }
        div.star-group{
          margin: 0;
          width: 100%;
        }
        h1 {
          margin-bottom:
          color: black;
        }

        img.star-icon {
          margin: 0 5px;
        }
      }
  }
`;

const FourLogoGroup = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  border: #613476 solid 0.1px;
  border-radius: 50%;
  margin: 0 20px;

  /* -------------------------- Mobile/Small devices (portrait tablets and large phones, 768px and below)-------------------------- */
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    background-size: 30px;

    p {
      font-size: 10px;
      text-align: center;
    }
  }

  /* ------------------------- Laptops (769px and up) ------------------------- */
  @media (min-width: 769px) {
    height: 130px;
    width: 130px;
    background-size: 88px;

    p {
      font-size: 22px;
      text-align: center;
    }
  }
`;

const Footer = styled.div`
  height: 152px;
  text-align: center;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  div {
    margin: 30px;
  }
  img {
    margin: 0 10px;
    height: 30px;
  }
  @media (max-width: 639px) {
  }

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: (1024px)) {
  }
`;
