import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import ScrolableSection from './components/ScrolableSection';
import Shadow from './components/Shadow';
import KeepWatching from './components/KeepWatching';
import ButtomBackUp from './components/ButtomBackUp';
import DrawerContent from './components/DrawerContent';

import { Drawer } from '@material-ui/core';

import './styles/globalStyle.css';

function App() {
    const [header, setHeader] = useState(true);
    const [backUp, setbackUp] = useState(true);
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
        return () => window.removeEventListener('scroll', changeHeader);

    }, [])

    function changeHeader(){
        const pos = window.scrollY;

        pos <= 300 ? setbackUp(true) : setbackUp(false);
        pos <= 100 ? setHeader(true) : setHeader(false);
    }

    function toTopPage(){
      window.scroll({ top: 0, left: 0, behavior: "smooth"})
    }

    return (
        <div className="App">
            <Header
                moved={header}
                onClick={() => setDrawer(!drawer)} 
            />
            <Drawer anchor='left' open={!drawer} onClose={() => setDrawer(!drawer)}>
                <DrawerContent />
            </Drawer>

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

            <ButtomBackUp
                buttomShown={backUp}
                onClick={() => toTopPage()}
            />
        </div>
    );
}

export default App;
