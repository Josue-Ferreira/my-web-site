import React from 'react';
import spaceInvader from '../assets/spaceInvader.png'
import cookieClicker from '../assets/cookieClicker.png'
import NavBar from './NavBar';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0), #2c3e50); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const GameContainer = styled.div`
    margin: 5vh 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ImgGame = styled.img`
  height: 30vh;
`;

const Games = ({page, setPage, language, setLanguage}) => {
    return (
        <Section>
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <GameContainer>
                <ImgGame src={spaceInvader} alt="Own Space Invader game picture" />
                <div>
                    <h3 style={{color: '#F1DB66'}}>Space Invader</h3>
                    <p>I had created a Space Invader game with <em style={{color: '#F1DB66'}}>JavaScript Vanilla</em> to work in web browsers</p>
                </div>
            </GameContainer>
            <GameContainer>
                <div style={{padding: '20px'}}>
                    <h3 style={{color: '#F1DB66'}}>Cookie Clicker</h3>
                    <p>With Stéphanie Gentil, we had created a Cookie Clicker game with <em style={{color: '#F1DB66'}}>JavaScript Vanilla</em> to work in web browsers</p>
                </div>
                <ImgGame src={cookieClicker} alt="Own Cookie Clicker game picture" />
            </GameContainer>
        </Section>
    );
};

export default Games;