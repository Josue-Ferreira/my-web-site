import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import { Container, Row, Col } from 'reactstrap';
import dataSkills from '../assets/dataSkills.js';

const SkillContainer = styled.div`
    margin: 5vh auto;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Title = styled.h3`
    width: 20vw;
    text-align: center;
    margin: 0 5vw;
`;

const SkillsSection = () => {
    return (
        <div>
            <SkillContainer>
                <Title>Programming skills</Title>
                <Container>
                    <Row xs="3">
                        {dataSkills.filter(skill => skill.category === 'programming').map((skill) => (
                            <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard cardTitle={skill.name} cardPicture={skill.picture}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Container>
                    <Row xs="3">
                        {dataSkills.filter(skill => skill.category === 'softwares').map((skill) => (
                            <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard cardTitle={skill.name} cardPicture={skill.picture}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Title>Dev Tools</Title>
            </SkillContainer>
            <SkillContainer>
            <Title>Design Tools</Title>
                <Container>
                    <Row xs="3">
                        {dataSkills.filter(skill => skill.category === 'design').map((skill) => (
                            <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard cardTitle={skill.name} cardPicture={skill.picture}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </SkillContainer>
        </div>
    );
};

export default SkillsSection;