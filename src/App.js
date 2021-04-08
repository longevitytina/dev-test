import "./App.css";
import styled from "styled-components";
import HeroImage from "./images/hero.jpg";
import Image1 from "./images/img-1.jpg";
import Banner1 from "./images/banner-1.jpg";
import Banner2 from "./images/banner-2.jpg";

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
        <SubSection>
          <SectionDescription>
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
          </SectionDescription>
        </SubSection>
        <SubSection style={{ backgroundImage: `url(${Image1})` }}></SubSection>
      </SplitSection>
      <Section style={{ backgroundImage: `url(${Banner1})` }}>
        <SectionDescriptionTwo>
          <h1>Lorem Ipsum</h1>
          <StyledButton>BUTTON BUTTON</StyledButton>
        </SectionDescriptionTwo>
      </Section>
      <SplitSection>
        <SubSection style={{}}>Split</SubSection>
        <SubSection style={{ backgroundColor: "#F7F7F7" }}></SubSection>
      </SplitSection>
      <Section style={{ backgroundImage: `url(${Banner2})` }}>
        <SectionDescriptionThree>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula.
          </p>
          <StyledButton>BUTTON BUTTON</StyledButton>
        </SectionDescriptionThree>
      </Section>
      <SplitSection>
        <SubSection></SubSection>
        <SubSection></SubSection>
      </SplitSection>
      <Footer> footer</Footer>
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
  background: ${(props) => (props.hero ? "#ac5fd0" : "FF7218")};
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
  background-color: pink;
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
  /* Mobile ( max 639px ) */
  @media (max-width: 639px) {
    flex-direction: column;

    background-position: right;
  

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: (1024px)) {
  }
`;
const SubSection = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
`;

const Footer = styled.div`
  height: 152px;
  background-color: #fafafa;
  @media (max-width: 639px) {
  }

  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media (min-width: 640px and max-width:1023px) {
  }

  /* Large devices (laptops/desktops, 1024px and up) */
  @media (min-width: (1024px)) {
  }
`;
