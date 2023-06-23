import React from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/imageback.png');
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ComingSoon = () => {
    const {page, lang} = useParams();
    const [language, setLanguage] = useState(lang ? lang : 'en');

    return (
        <Section>
            <Navigation page={page} language={language} setLanguage={setLanguage} />
            <div className='text-light' style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
        </Section>
    );
};

export default ComingSoon;