import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import linkedin from '../assets/logos/linkedin.png';

const Section = styled.section`
  background: linear-gradient(to top, rgba(189,195,199,0), #2c3e50); //#bdc3c7
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Contact = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    color: #F1DB66;
    margin: 10vh 0;
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

const ContactMe = () => {
    const {page, lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');

    return (
        <Section>
            <Navigation page={'contactme'} language={language} setLanguage={setLanguage} />
            <Contact>
                <Title>Contact Details</Title>
                <ul style={{listStyleType: 'none'}}>
                    <li>Phone Number : +33 6 63 85 39 84</li>
                    <li>
                        <p style={{display: 'inline-block', marginRight: '10px'}}>Send me a message on LinkedIn</p>
                        <a href="https://www.linkedin.com/in/josué-ferreira-694095276" target="_blank">
                            <ImgLink src={linkedin} alt="LinkedIn link" title='Link to LinkedIn' />
                        </a>
                    </li>
                    <li>
                        <Button href="mailto:ferreira.josu@gmail.com">Send me an email</Button>
                    </li>
                </ul>
            </Contact>
        </Section>
    );
};

export default ContactMe;