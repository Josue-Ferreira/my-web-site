import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navigation from "./Navigation";
import textLang from "../assets/text-lang.json";
import Typewriter from 'typewriter-effect/dist/core';
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Section = styled.section`
  background-image: url('/imageback.png');
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Button = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  background-color: var(--secondary-color);
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 5vh 0;
  color: white;//#2c3e50;
  &:hover{
    color: inherit;
  }
`;

const ImgPhotoProfil = styled.img`
  height: 70vh;

  @media screen and (max-width: 768px) {
    height: 50vh;
    margin-bottom: 10px;
  }
`;

const Name = styled.strong`
  color: var(--secondary-color);
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const ImgLink = styled.a`
  font-size: 3rem;
  margin-right: 20px;
`;

const Hello = styled.div`
  @media screen and (max-width: 400px) {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IntroductionSection = ({ page, language, setLanguage }) => {
  useEffect(() => {
    const typewriter = new Typewriter('#job-resume',{
      autoStart: true,
      delay: 100
    });

    typewriter
      .pauseFor(1500)
      .typeString(textLang[language].pages.home.h2[0])
      .pauseFor(300)
      .deleteAll()
      .typeString('<img class="img-react" src="/logos/react2.svg" alt="react logo" />'+textLang[language].pages.home.h2[1])
      .start();
  }, [language]);

  return (
    <Section className="text-light" >
      <Navigation page={page} language={language} setLanguage={setLanguage} />
      <Welcome>
        <Hello id="welcome-text">
          <h1>
            {textLang[language].pages.home.h1}
            <Name>Josué Ferreira</Name>
          </h1>
          <h2 id="job-resume" style={{display: 'inline'}} ></h2> 
          <Button href={textLang[language].pages.home.cvfile} download>
            {textLang[language].pages.home.cv}
          </Button>
        </Hello>
        <img src="/spaceship.svg" id="child-spaceship"/>
        <ImgPhotoProfil
          id="photo-profil"
          src="photo_profil.resized.png"
          alt="Josué Ferreira photo"
          title="Josué Ferreira"
        />
      </Welcome>
      <Links>
        <ImgLink 
          className="text-light" 
          href="https://github.com/Josue-Ferreira" 
          target="_blank"
          >
          <BsGithub />
        </ImgLink>
        <ImgLink
          className="text-light"
          href="https://www.linkedin.com/in/josué-ferreira-694095276"
          target="_blank"
          >
          <BsLinkedin />
        </ImgLink>
        <AiOutlineArrowDown id="arrow" style={{ flex: "1", fontSize: "3em" }} />
      </Links>
    </Section>
  );
};

export default IntroductionSection;
