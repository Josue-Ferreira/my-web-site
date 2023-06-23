import React, {useState} from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import dataSkills from '../assets/dataSkills.json';
import textLang from '../assets/text-lang.json';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import SkillsCarousel from './SkillsCarousel';
import SkillForMobile from './SkillForMobile';

const Skills = styled.div`
    /* background: radial-gradient(ellipse at right bottom, #8F3949, #C33764, #240b36, #121212); */
    /* background-color: #121212; */
    background: radial-gradient(ellipse at left bottom, #322652,#492740 10%, #121212 28%); 
    padding: 50px 0;
`;

const SkillsSection = ({language}) => {
    
    return (
        <Skills id='skills'>
            <SkillsCarousel language={language}/>
            <SkillForMobile language={language} />
        </Skills>
    );
};

export default SkillsSection;