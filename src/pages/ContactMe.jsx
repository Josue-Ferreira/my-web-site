import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import textLang from '../assets/text-lang.json';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0), #2c3e50); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Contact = styled.div`
    height: 70vh;
    width: 30vw;
    margin: 0 auto;
    display: grid;
    grid-template: repeat(4, 100px)/repeat(2, 1fr);
    align-items: center;
`;

const Title = styled.h2`
    color: #F1DB66;
    margin: 5vh 0;
    grid-column: 1/3;
    text-align: center;
`;

const ImgLink = styled.img`
  height: 30px;
`;

const Button = styled.a`
  justify-self: end;
  display: flex;
  text-decoration: none;
  background-color: #F1DB66;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  /* margin: 5vh 0; */
  color: inherit;
  &:hover{
    color: inherit; 
  }
`;

const ContactMe = () => {
    const {lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');

    return (
        <Section>
            <Navigation page={'contactme'} language={language} setLanguage={setLanguage} />
            <Contact>
                <Title>{textLang[language].pages.contactme.title}</Title>
                <Button href="tel:+33663853984"><BsTelephoneFill /></Button>
                <div>+33 6 63 85 39 84</div>
                <Button href="https://www.linkedin.com/in/josué-ferreira-694095276" target="_blank">
                    <ImgLink src='logos/linkedin.png' alt="LinkedIn link" title='Link to LinkedIn' />
                </Button>
                <div>{textLang[language].pages.contactme.linkedIn}</div>
                <Button href="mailto:ferreira.josu@gmail.com"><MdEmail/></Button>
                <div>{textLang[language].pages.contactme.mail}</div>
            </Contact>
        </Section>
    );
};

export default ContactMe;