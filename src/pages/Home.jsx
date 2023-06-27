import React, { useRef } from 'react';
import { useState } from 'react';
import IntroductionSection from '../components/IntroductionSection';
import SkillsSection from '../components/SkillsSection';
import { useParams } from 'react-router-dom';
import Projects from '../components/Projects';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Background = styled.div`
    background-color: #121212;
`;

const Home = () => {
    const {lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');

    return (
        <Background>
            <IntroductionSection 
              page={'home'}
              language={language} setLanguage={setLanguage} 
            />
            <SkillsSection language={language} />
            <Projects language={language} />
            <Contact language={language} /> 
            <Footer />
        </Background>
    );
};

export default Home;