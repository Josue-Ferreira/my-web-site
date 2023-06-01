import React from 'react';
import { useState } from 'react';
import IntroductionSection from '../components/IntroductionSection';
import SkillsSection from '../components/SkillsSection';
import { useParams } from 'react-router-dom';

const Home = () => {
    const {lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');
    
    return (
        <>
            <IntroductionSection 
              page={'home'}
              language={language} setLanguage={setLanguage} 
            />
            <SkillsSection language={language} />  
        </>
    );
};

export default Home;