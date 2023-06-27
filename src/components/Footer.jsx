import React from 'react';
import styled from 'styled-components';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Img = styled.img`
    height: 10vh;
    width: auto;
`;

const Links = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
  width: 90%;
  margin: auto;
`;

const ImgLink = styled.a`
  font-size: 3rem;
  margin-right: 20px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Img src='/logos/mylogo.svg' alt="logo-josué-ferreira" />
            <p className='text-light' style={{alignSelf: 'end'}}><AiOutlineCopyrightCircle />Josué Ferreira</p>
            <Links>
                <ImgLink 
                className="text-light" 
                href="https://github.com/Josue-Ferreira" 
                target="_blank"
                >
                <BsGithub />
                </ImgLink>
                <ImgLink
                className="text-light"
                href="https://www.linkedin.com/in/josué-ferreira-694095276"
                target="_blank"
                >
                <BsLinkedin />
                </ImgLink>
            </Links>
        </Container>
    );
};

export default Footer;