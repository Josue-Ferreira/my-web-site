import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsSection from './components/SkillsSection';
import IntroductionSection from './components/IntroductionSection';
import Navigation from './components/Navigation';
import ContactMe from './components/ContactMe';
import Games from './components/Games';


function App() {
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState('home');

  return (
    <div>
     {(() => {
      switch(page) {
        case 'home': return (
          <div>
            <IntroductionSection 
              page={page} setPage={setPage} 
              language={language} setLanguage={setLanguage} 
            />
            <SkillsSection />
          </div> 
        )

        case 'aboutme': return (
          <div>
            <Navigation page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )

        case 'hobbies': return (
          <div>
            <Navigation page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )

        case 'projects': return (
          <Games page={page} setPage={setPage} language={language} setLanguage={setLanguage}/>
        )

        case 'contactme' : return (
          <ContactMe page={page} setPage={setPage} language={language} setLanguage={setLanguage}/>
        )
      }
     })()}
      
    </div>
  )
}

export default App
