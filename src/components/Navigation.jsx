import React from 'react';
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
import logo from '../assets/logos/mylogo.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 10vh;
    width: auto;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 0 10px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Button = styled.button`
  background: rgba(0,0,0,0);
  border-radius: 40px;
  padding: 5px;
  margin: 0 5px;
  color: #F1DB66;
  transition: border 0.1s linear;
`;

const Navigation = ({page, setPage, language, setLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand={'md'}  >
            <NavbarBrand href="/">
                <Img src={logo} alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style={{justifyContent: 'center'}}>
                <Nav pills navbar >
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={page === 'home' ? 'active' : ''} 
                            style={page === 'home' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                            onClick={() => setPage('home')}
                            >
                                {language === 'en' ? "HOME" : "ACCUEIL"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={page === 'aboutme' ? 'active' : ''} 
                            style={page === 'aboutme' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                            onClick={() => setPage('aboutme')}
                            >
                                {language === 'en' ? "ABOUT ME" : "PRESENTATION"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={page === 'hobbies' ? 'active' : ''} 
                            style={page === 'hobbies' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                            onClick={() => setPage('hobbies')}
                            >
                                {language === 'en' ? "HOBBIES" : "LOISIRS"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={page === 'projects' ? 'active' : ''} 
                            style={page === 'projects' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                            onClick={() => setPage('projects')}
                            >
                                {language === 'en' ? "PROJECTS" : "PROJETS"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={page === 'contactme' ? 'active' : ''} 
                            style={page === 'contactme' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                            onClick={() => setPage('contactme')}
                            >
                                {language === 'en' ? "CONTACT ME" : "CONTACTEZ MOI"}
                        </NavLink>
                    </NavItem>
                    <NavItem style={language === 'en' ? {backgroundColor: '#F1DB66', borderRadius: '0.375rem'} : {color: '#bdc3c7'}} onClick={() => setLanguage('en')}>EN</NavItem>
                    <NavItem style={language === 'fr' ? {backgroundColor: '#F1DB66', borderRadius: '0.375rem'} : {color: '#bdc3c7'}} onClick={() => setLanguage('fr')}>FR</NavItem>
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