import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
// import { Container, Row, Col } from 'reactstrap';
import dataSkills from '../assets/dataSkills.js';

const SkillContainer = styled.div`
    margin: 5vh auto;
    width: 95%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const Title = styled.h3`
    width: 20vw;
    text-align: center;
    margin: 5vh 5vw;

    @media screen and (max-width: 600px){
        width: auto;
    }
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;

    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        width: auto;
        min-width: 30vh;
    }
`;

const SkillsSection = () => {
    return (
        <div>
            <SkillContainer>
                <Title>Programming skills</Title>
                <Container>
                    {/* <Row xs="3"> */}
                        {dataSkills.filter(skill => skill.category === 'programming').map((skill) => (
                            // <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                            // </Col>
                        ))}
                    {/* </Row> */}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>Dev Tools</Title>
                <Container>
                    {/* <Row xs="3"> */}
                        {dataSkills.filter(skill => skill.category === 'softwares').map((skill) => (
                            // <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                            // </Col>
                        ))}
                    {/* </Row> */}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>API REST</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                    {/* <Row xs="3"> */}
                        {dataSkills.filter(skill => skill.category === 'api').map((skill) => (
                            // <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                            // </Col>
                        ))}
                    {/* </Row> */}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>Design Tools</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                    {/* <Row xs="3"> */}
                        {dataSkills.filter(skill => skill.category === 'design').map((skill) => (
                            // <Col key={skill.name} style={{margin: '10px 0'}}>
                                <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                            // </Col>
                        ))}
                    {/* </Row> */}
                </Container>
            </SkillContainer>
        </div>
    );
};

export default SkillsSection;