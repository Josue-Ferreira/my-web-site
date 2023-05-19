import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsSection from './components/SkillsSection';
import IntroductionSection from './components/IntroductionSection';
import NavBar from './components/NavBar';


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
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )

        case 'hobbies': return (
          <div>
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )

        case 'games': return (
          <div>
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )

        case 'contactme' : return (
          <div>
            <NavBar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            <div style={{textAlign: 'center', fontSize: '3em'}}>COMING SOON</div>
          </div>
        )
      }
     })()}
      
    </div>
  )
}

export default App


// {page === 'home' ? 
// <div>
//   <IntroductionSection 
//     page={page} setPage={setPage} 
//     language={language} setLanguage={setLanguage} 
//   />
//   <SkillsSection />
// </div> 
// : null
// }
