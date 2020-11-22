import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import ScrolableSection from './components/ScrolableSection';
import Shadow from './components/Shadow';
import KeepWatching from './components/KeepWatching';

import './styles/globalStyle.css';

function App() {
    const [header, setHeader] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', changeHeader);
      return () => window.removeEventListener('scroll', changeHeader);

    }, [])

    function changeHeader(){
        const pos = window.scrollY;
        
        if(pos <= 100){
          setHeader(true)
        }else{
          setHeader(false)
        }
    }

    return (
        <div className="App">
            <Header moved={header} />
            <MainSection />
            <Shadow />
            <ScrolableSection
              listTitle='Novidades do RealmFlix:' 
              marginOn={true} 
            />
            <ScrolableSection
              listTitle='Populares do RealmFlix:' 
              marginOn={false} 
            />
            <KeepWatching />
        </div>
    );
}

export default App;
