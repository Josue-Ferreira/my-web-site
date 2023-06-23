import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import {BsTelephoneFill, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import textLang from '../assets/text-lang.json';

const Section = styled.section`
  background-image: url('/imageback.png');
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: auto;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const Contact = styled.div`
    display: grid;
    grid-template: repeat(3, 100px)/repeat(2, 1fr);
    align-items: center;
`;

const Title = styled.h2`
    color: var(--secondary-color);
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
  background-color: var(--secondary-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  /* margin: 5vh 0; */
  color: white;
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
            <ContainerCenter>
              <Title>{textLang[language].pages.contactme.title}</Title>
              <Contact className='text-light'>
                  <Button href="tel:+33663853984"><BsTelephoneFill /></Button>
                  <div>+33 6 63 85 39 84</div>
                  <Button href="https://www.linkedin.com/in/josué-ferreira-694095276" target="_blank">
                      <BsLinkedin />
                  </Button>
                  <div>{textLang[language].pages.contactme.linkedIn}</div>
                  <Button href="mailto:ferreira.josu@gmail.com"><MdEmail/></Button>
                  <div>{textLang[language].pages.contactme.mail}</div>
              </Contact>
            </ContainerCenter>
        </Section>
    );
};

export default ContactMe;