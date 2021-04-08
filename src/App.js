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

import StyledCarousel from "./Carousel";

// TODO
// recatoring
/**
 * Logo component
 *
 *
 *
 */

function App() {
  return (
    <Container>
      <Hero style={{ backgroundImage: `url(${HeroImage})` }}>
        <LogoWhite style={{ backgroundImage: `url(${logoWhite})` }}></LogoWhite>
        <Heading>
          <p className="top-line">WELCOME TO</p>
          <p className="second-line">Rooster Grin</p>
          <StyledButton hero>BUTTON BUTTON</StyledButton>
        </Heading>
      </Hero>
      <SplitSection style={{ height: "526px" }}>
        <SubSection className="sub-section-1-left">
          <div>
            <h1>Lorem Ipsum</h1>
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
        <SectionDescriptionTwo>
          <h1>Lorem Ipsum</h1>
          <StyledButton>BUTTON BUTTON</StyledButton>
        </SectionDescriptionTwo>
      </Section>
      <SplitSection>
        <SubSection className="sub-section-2-left">
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
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
            <FourLogoGroup style={{ backgroundImage: `url(${HomeExpertise})` }}>
              <p>LOREM</p>
            </FourLogoGroup>
            <FourLogoGroup style={{ backgroundImage: `url(${HomeHygiene})` }}>
              <p>LOREM IPSUM</p>
            </FourLogoGroup>
            <FourLogoGroup style={{ backgroundImage: `url(${HomeLab})` }}>
              <p>LOREM IPSUM</p>
            </FourLogoGroup>
            <FourLogoGroup style={{ backgroundImage: `url(${HomeRention})` }}>
              <p>LOREM</p>
            </FourLogoGroup>
          </div>
        </SubSection>
      </SplitSection>
      <Section
        className="section-3"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula.
          </p>
          <StyledButton>BUTTON BUTTON</StyledButton>
        </div>
      </Section>
      <SplitSection>
        <SubSection className="sub-section-3-left">
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
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
            <img src={Facebook}></img>
          </a>
          <a href="/">
            <img src={Instagram}></img>
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
  color: white;
  font-size: 20px;
  margin: 0 auto;
  padding: 20px;
`;
const Heading = styled.div`
  text-align: center;
  .top-line {
    font-family: Open Sans;
    font-size: 72px;
    color: white;
  }
  .second-line {
    font-family: Open Sans;
    font-size: 64px;
    color: white;
  }
`;

const LogoWhite = styled.div`
  height: 45px;
  width: 249px;
  margin: 33px 0 0 173px;
  display: block;
  background-repeat: no-repeat;
`;
const Hero = styled.div`
  height: 750px;

  /* Mobile ( max 639px ) */
  @media (max-width: 639px) {
    background-position: right;
  }

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
    height: 750px;

    background-size: 0px;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: 1024px) {
    height: 750px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
  }
`;

const Section = styled.div`
  height: 600px;

  &.section-3 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h1 {
      font-size: 68px;
      color: #613476;
    }
    p {
      font-size: 30px;
    }
    a {
      text-decoration: none;
      font-size: 20px;
      color: #613476;
    }
    div {
      width: 25%;
      margin-right: 100px;
    }
  }

  /* Mobile ( max 639px ) */
  @media (max-width: 639px) {
  }

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: 1024px) {
    height: 750px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
  }
`;
const SplitSection = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  background-position: right;

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: (1024px)) {
  }
`;
const SubSection = styled.div`
  flex: 1;
  width: 30px;
  background-color: #ffffff;

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
      color: #613476;
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
      color: #613476;
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
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-direction: row;
      flex-flow: row wrap;
    }
  }

  &.sub-section-3-left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      margin-right: 100px;
      width: 50%;
    }
    h1 {
      margin-bottom:
      font-size: 50px;
      color: black;
    }

    img.star-icon {
      margin: 0 5px;
    }
  }

  @media (max-width: 639px) {
  }
  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: 1024px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const FourLogoGroup = styled.div`
  height: 102px;
  width: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70px;
  border: #613476 solid 0.1px;
  border-radius: 50%;
  margin: 50px;
  p {
    font-size: 22px;
    text-align: center;
    margin-top: 122px;
  }
`;
const SectionDescriptionTwo = styled.div`
  width: 50%;
  margin: 300px 300px;
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
    color: #613476;
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
