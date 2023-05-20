import React from 'react';
import spaceInvader from '../assets/spaceInvader.resized.png'
import cookieClicker from '../assets/cookieClicker.resized.png'
import Navigation from './Navigation';
import styled from 'styled-components';

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
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #F1DB66;
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 1vh 0;
  color: #2C3E50;
`;

const Games = ({page, setPage, language, setLanguage}) => {
    return (
        <Section>
            <Navigation page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <GameContainer>
                <img src={spaceInvader} alt="Own Space Invader game picture" />
                <div style={{width: '70%'}}>
                    <h3 style={{color: '#F1DB66'}}>Space Invader</h3>
                    <p>I had created a Space Invader game with <em style={{color: '#F1DB66'}}>JavaScript Vanilla</em> to work in desktop web browsers</p>
                    <Button href='https://josue-ferreira.github.io/galaxia/' target='_blank'>Try it !</Button>
                </div>
                <img src={cookieClicker} alt="Own Cookie Clicker game picture" />
                <div style={{width: '70%'}}>
                    <h3 style={{color: '#F1DB66'}}>Cookie Clicker</h3>
                    <p>With Stéphanie Gentil, we had created a Cookie Clicker game with <em style={{color: '#F1DB66'}}>JavaScript Vanilla</em> to work in desktop web browsers</p>
                    <Button href='https://josue-ferreira.github.io/cookies-clicker/' target='_blank'>Try it !</Button>
                </div>
            </GameContainer>
        </Section>
    );
};

export default Games;