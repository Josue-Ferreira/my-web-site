import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import spaceInvader from '../assets/spaceInvader.resized.png'
import cookieClicker from '../assets/cookieClicker.resized.png'
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import textLang from '../assets/text-lang.json';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0), #2c3e50); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const GameContainer = styled.div`
    margin: 5vh 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 0;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #F1DB66;
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 1vh 0;
  color: #2C3E50;

  @media screen and (max-width: 767px) {
        display: none;
    }
`;

const Games = () => {
    const {lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');
   
    return (
        <Section>
            <Navigation page={'projects'} language={language} setLanguage={setLanguage} />
            <GameContainer>
                <img src={spaceInvader} alt="Own Space Invader game picture" />
                <div style={{width: '70%'}}>
                    <h3 style={{color: '#F1DB66'}}>{textLang[language].pages.projects.project[0].h3}</h3>
                    <p>{parse(textLang[language].pages.projects.project[0].description)}</p>
                    <Button href={textLang[language].pages.projects.project[0].link} target='_blank'>{textLang[language].pages.projects.linkText}</Button>
                </div>
                <img src={cookieClicker} alt="Own Cookie Clicker game picture" />
                <div style={{width: '70%'}}>
                    <h3 style={{color: '#F1DB66'}}>{textLang[language].pages.projects.project[1].h3}</h3>
                    <p>{parse(textLang[language].pages.projects.project[1].description)}</p>
                    <Button href={textLang[language].pages.projects.project[1].link} target='_blank'>{textLang[language].pages.projects.linkText}</Button>
                </div>
            </GameContainer>
        </Section>
    );
};

export default Games;