import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {AiOutlineArrowDown} from 'react-icons/ai';
import NavBar from './components/NavBar';
import photoProfil from './assets/photo_profil.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import cv from './assets/CV.pdf';

const IntroductionSection = styled.section`
  background: linear-gradient(to top, #bdc3c7, #2c3e50);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Welcome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImgPhotoProfil = styled.img`
  height: 70vh;
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

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #F1DB66;
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 5vh 0;
  color: #2C3E50;
`;

function App() {
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState('home');

  return (
    <div>
      <IntroductionSection>
        <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
        <Welcome>
          <div>
            <h1>Hi ! I'm <Name>Josué Ferreira</Name></h1>
            <h2>Web Developper</h2>
            <Button href={cv} download>Download CV</Button>
          </div>
          <ImgPhotoProfil src={photoProfil} alt="Josué Ferreira photo" title="Josué Ferreira"/>
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
      </IntroductionSection>
    </div>
  )
}

export default App
