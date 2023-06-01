import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import dataSkills from '../../public/dataSkills.js';
import textLang from '../assets/text-lang.json';

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

const SkillsSection = ({language}) => {
    return (
        <div>
            <SkillContainer>
                <Title>{textLang[language].pages.home.skillsTitle[0]}</Title>
                <Container>
                        {dataSkills.filter(skill => skill.category === 'programming').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>{textLang[language].pages.home.skillsTitle[1]}</Title>
                <Container>
                        {dataSkills.filter(skill => skill.category === 'softwares').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>{textLang[language].pages.home.skillsTitle[2]}</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                        {dataSkills.filter(skill => skill.category === 'api').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title>{textLang[language].pages.home.skillsTitle[3]}</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                        {dataSkills.filter(skill => skill.category === 'design').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
        </div>
    );
};

export default SkillsSection;