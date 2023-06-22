import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import textLang from '../assets/text-lang.json';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0.5), var(--primary-color)); //#bdc3c7
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
  background-color: var(--secondary-color);
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 1vh 0;
  color: white;

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
                {
                    textLang[language].pages.projects.content.map(element => (
                        <>
                            <img src={element.picture} alt={element.h3} />
                            <div style={{width: '70%'}}>
                                <h3 style={{color: 'var(--secondary-color)'}}>{element.h3}</h3>
                                <p>{parse(element.description)}</p>
                                <Button href={element.link} target='_blank'>{textLang[language].pages.projects.linkText}</Button>
                            </div>
                        </>
                    ))
                }
            </GameContainer>
        </Section>
    );
};

export default Games;