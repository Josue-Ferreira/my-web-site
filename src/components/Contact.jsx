import React from 'react';
import styled from 'styled-components';
import {BsTelephoneFill, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import textLang from '../assets/text-lang.json';

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
  color: white;
  &:hover{
    color: inherit; 
  }
`;

const Title = styled.h3`
    color: var(--secondary-color);
    padding: 20px;
    text-align: center;
`;

const Container = styled.div`
    background-color: white;
    border-radius: 50px;
    width: 50vw;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 426px) {
        flex-direction: column;
    }
`;

const Contact = ({language}) => {
    return (
        <Container>
            <Title>{textLang[language].pages.contactme.title}</Title>
            <Button href="tel:+33663853984"><BsTelephoneFill /></Button>
            <Button href="https://www.linkedin.com/in/josué-ferreira-694095276" target="_blank">
                <BsLinkedin />
            </Button>
            <Button href="mailto:ferreira.josu@gmail.com"><MdEmail/></Button>
        </Container>
    );
};

export default Contact;