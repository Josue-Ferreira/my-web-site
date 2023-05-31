import React from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';

const ComingSoon = () => {
    const [language, setLanguage] = useState('en');
    const {page} = useParams();

    return (
        <>
            <Navigation page={page} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
        </>
    );
};

export default ComingSoon;