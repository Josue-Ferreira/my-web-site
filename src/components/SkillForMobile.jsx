import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import dataSkills from '../assets/dataSkills.json';
import textLang from '../assets/text-lang.json';

const SkillContainer = styled.div`
    margin: 5vh auto;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h3`
    width: auto;
    text-align: center;
    margin: 5vh 5vw;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    min-width: 30vh;
    gap: 20px;
`;

const SkillForMobile = ({language}) => {
    return (
        <div className='skills-mobile'>
            {
                dataSkills.category.map((category, i) => (
                    <SkillContainer>
                        <Title className="text-light">{textLang[language].pages.home.skillsTitle[i]}</Title>
                        <Container>
                                {category[category.name].map((skill) => (
                                    <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                                ))}
                        </Container>
                    </SkillContainer>
                ))
            }
        </div>
    );
};

export default SkillForMobile;