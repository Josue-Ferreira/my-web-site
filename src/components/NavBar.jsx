import React from 'react';
import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
`;

const Button = styled.button`
  background: rgba(0,0,0,0);
  border-radius: 40px;
  padding: 5px;
  margin: 0 5px;
  color: #F1DB66;
  transition: border 0.1s linear;
`;

const NavBar = ({page, setPage, language, setLanguage}) => {
    return (
        <Container>
            <Img src={logo} alt="" />
            <Nav pills>
                <NavItem>
                    <NavLink 
                        href="#" 
                        className={page === 'home' ? 'active' : ''} 
                        style={page === 'home' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                        onClick={() => setPage('home')}
                        >
                            HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href="#" 
                        className={page === 'aboutme' ? 'active' : ''} 
                        style={page === 'aboutme' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                        onClick={() => setPage('aboutme')}
                        >
                            ABOUT ME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href="#" 
                        className={page === 'projects' ? 'active' : ''} 
                        style={page === 'projects' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                        onClick={() => setPage('projects')}
                        >
                            HOBBIES
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href="#" 
                        className={page === 'hobbies' ? 'active' : ''} 
                        style={page === 'hobbies' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                        onClick={() => setPage('hobbies')}
                        >
                            GAMES
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href="#" 
                        className={page === 'contactme' ? 'active' : ''} 
                        style={page === 'contactme' ? {backgroundColor: '#F1DB66'} : {color: '#bdc3c7'}}
                        onClick={() => setPage('contactme')}
                        >
                            CONTACT ME
                    </NavLink>
                </NavItem>
            </Nav>
            <Container>
                <Button style={language === 'en' ? {border: 'solid'} : {border: 'none'}} onClick={() => setLanguage('en')}>EN</Button>
                <Button style={language === 'fr' ? {border: 'solid'} : {border: 'none'}} onClick={() => setLanguage('fr')}>FR</Button>
            </Container>
        </Container>
    );
};

export default NavBar;