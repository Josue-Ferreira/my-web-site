import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import styled from 'styled-components';
import textLang from '../assets/text-lang.json';

const Img = styled.img`
    height: 10vh;
    width: auto;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 0 10px;

    @media screen and (max-width: 767px){
        display: none;
    }
`;

const Button = styled.button`
  background: rgba(0,0,0,0);
  border-radius: 40px;
  padding: 5px;
  margin: 0 5px;
  color: var(--secondary-color);
  transition: border 0.1s linear;
`;

const Navigation = ({page, language, setLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand={'md'}  >
            <NavbarBrand href="/">
                <Img src='/logos/mylogo.svg' alt="logo-josué-ferreira" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style={{justifyContent: 'center'}}>
                <Nav pills navbar >
                    {
                        textLang[language].nav.map(navtab => (
                            <NavItem key={navtab.name} >
                                <NavLink 
                                    tag={Link}
                                    to={navtab.link+language}
                                    className={page === navtab.name ? 'active' : ''} 
                                    style={page === navtab.name ? {backgroundColor: 'var(--secondary-color)', color: 'white'} : {}}
                                    >
                                        {navtab.content}
                                </NavLink>
                            </NavItem>
                        ))
                    }
                    <NavItem className='display-language' style={language === 'en' ? {backgroundColor: 'var(--secondary-color)', color: 'white', borderRadius: '0.375rem'} : {}} onClick={() => setLanguage('en')}>EN</NavItem>
                    <NavItem className='display-language' style={language === 'fr' ? {backgroundColor: 'var(--secondary-color)', color: 'white', borderRadius: '0.375rem'} : {}} onClick={() => setLanguage('fr')}>FR</NavItem>
                </Nav>
            </Collapse>
            <Container>
                <Button style={language === 'en' ? {border: 'solid'} : {border: 'none'}} onClick={() => setLanguage('en')}>EN</Button>
                <Button style={language === 'fr' ? {border: 'solid'} : {border: 'none'}} onClick={() => setLanguage('fr')}>FR</Button>
            </Container>
        </Navbar>
    );
};

export default Navigation;