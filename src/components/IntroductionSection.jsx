import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown} from 'react-icons/ai';
import NavBar from './NavBar';
import photoProfil from '../assets/photo_profil.resized.png';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import cv from '../assets/CV.pdf';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0), #2c3e50); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 768px){
    height: auto;
  }
`;

const Welcome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px){
    flex-direction: column-reverse;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #F1DB66;
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 5vh 0;
  color: #2C3E50;
`;

const ImgPhotoProfil = styled.img`
  height: 70vh;

  @media screen and (max-width: 768px){
    height: 50vh;
    margin-bottom: 10px;
  }
`;

const Name = styled.strong`
  color: #F1DB66;
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

const IntroductionSection = ({page, setPage, language, setLanguage}) => {
    return (
        <Section>
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <Welcome>
                <div id="welcome-text">
                    <h1>{language === 'en' ? "Hi ! I'm " : "Salut ! Je suis "}<Name>Josué Ferreira</Name></h1>
                    <h2>{language === 'en' ? "React Web Developper" : "Développeur Web React"}</h2>
                    <Button href={cv} download>Download CV</Button>
                </div>
                <ImgPhotoProfil id="photo-profil" src={photoProfil} alt="Josué Ferreira photo" title="Josué Ferreira"/>
            </Welcome>
            <Links>
                <a href="https://github.com/Josue-Ferreira" target="_blank">
                    <ImgLink src={github} alt="GitHub link" title='Link to GitHub'/>
                </a>
                <a href="https://www.linkedin.com/in/josué-ferreira-694095276" target="_blank">
                    <ImgLink src={linkedin} alt="LinkedIn link" title='Link to LinkedIn' />
                </a>
                <AiOutlineArrowDown id='arrow' style={{flex: '1', fontSize: '3em'}} />
            </Links>
        </Section>
    );
};

export default IntroductionSection;