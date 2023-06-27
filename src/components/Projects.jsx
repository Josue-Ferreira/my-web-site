import React from 'react';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col,
    NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom'
import textLang from '../assets/text-lang.json';

const Section = styled.div`
    background: linear-gradient(to right, #c33764, #1d2671);
    width: 90vw;
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    text-align: center;
    margin: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: var(--secondary-color);
  border-radius: 40px;
  padding: 5px 5vw;
  margin: 1rem 0;
  color: white;
  &:hover{
    color: inherit;
  }

  @media screen and (max-width: 767px) {
        display: none;
    }
`;

const Projects = ({language}) => {
    return (
        <Section>
            <Title className='text-light'>{textLang[language].pages.projects.name}</Title>
            <Container>
                <Row>
                    {
                        textLang[language].pages.projects.content.map(element => (
                            <Col key={element.h3} sm={6} md={4}>
                                <div className="proj-imgbx">
                                    <img src={element.picture} alt={element.h3} style={{maxHeight: '300px'}} />
                                    <div className="proj-txtx">
                                        <h4 className='text-light'>{element.h3}</h4>
                                        <NavLink tag={Link} to={'/projects/'+language} >{textLang[language].pages.projects.shortDescription}</NavLink>
                                        <Button href={element.link} target='_blank'>{textLang[language].pages.projects.linkText}</Button>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Section>
    );
};

export default Projects;