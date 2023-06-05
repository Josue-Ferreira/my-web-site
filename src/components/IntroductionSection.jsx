import React from "react";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navigation from "./Navigation";
import textLang from "../assets/text-lang.json";

const Section = styled.section`
  background: linear-gradient(
    to top,
    rgba(189, 195, 199, 0),
    #2c3e50
  ); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Welcome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #f1db66;
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 5vh 0;
  color: #2c3e50;
`;

const ImgPhotoProfil = styled.img`
  height: 70vh;

  @media screen and (max-width: 768px) {
    height: 50vh;
    margin-bottom: 10px;
  }
`;

const Name = styled.strong`
  color: #f1db66;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const ImgLink = styled.img`
  height: 5vh;
  margin-right: 10px;
`;

const Hello = styled.div`
  @media screen and (max-width: 400px) {
    width: 90%;
    margin: auto;
  }
`;

const IntroductionSection = ({ page, language, setLanguage }) => {
  return (
    <Section>
      <Navigation page={page} language={language} setLanguage={setLanguage} />
      <Welcome>
        <Hello id="welcome-text">
          <h1>
            {textLang[language].pages.home.h1}
            <Name>Josué Ferreira</Name>
          </h1>
          <h2>{textLang[language].pages.home.h2}</h2>
          <Button href={textLang[language].pages.home.cvfile} download>
            {textLang[language].pages.home.cv}
          </Button>
        </Hello>
        <ImgPhotoProfil
          id="photo-profil"
          src="photo_profil.resized.png"
          alt="Josué Ferreira photo"
          title="Josué Ferreira"
        />
      </Welcome>
      <Links>
        <a href="https://github.com/Josue-Ferreira" target="_blank">
          <ImgLink
            src="/logos/github.png"
            alt="GitHub link"
            title="Link to GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/josué-ferreira-694095276"
          target="_blank"
        >
          <ImgLink
            src="/logos/linkedin.png"
            alt="LinkedIn link"
            title="Link to LinkedIn"
          />
        </a>
        <AiOutlineArrowDown id="arrow" style={{ flex: "1", fontSize: "3em" }} />
      </Links>
    </Section>
  );
};

export default IntroductionSection;
