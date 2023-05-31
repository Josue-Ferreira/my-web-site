import React from 'react';
import { useState } from 'react';
import IntroductionSection from '../components/IntroductionSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
    const [language, setLanguage] = useState('en');
    
    return (
        <>
            <IntroductionSection 
              page={'home'}
              language={language} setLanguage={setLanguage} 
            />
            <SkillsSection />  
        </>
    );
};

export default Home;