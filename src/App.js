import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import ScrolableSection from './components/ScrolableSection';
import Shadow from './components/Shadow';
import KeepWatching from './components/KeepWatching';
import ButtomBackUp from './components/ButtomBackUp';
import DrawerContent from './components/DrawerContent';
import ChooseOneMovie from './components/ChooseOneMovie';

import { Drawer } from '@material-ui/core';

import axios from 'axios';

import './styles/globalStyle.css';

function App() {
    const [header, setHeader] = useState(true);
    const [backUp, setbackUp] = useState(true);
    const [drawer, setDrawer] = useState(true);

    const [info, setInformation] = useState([]);
    
    useEffect(async () => {
        await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1c7242f856ed0a3790d9817ddbc70e67&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then((res) => {
            console.log(res.data.results);
            setInformation(res.data.results);
        })
        .catch(err => console.log(err))

    }, [])
    
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
            <Drawer 
                anchor='left'
                open={!drawer} 
                onClose={() => setDrawer(!drawer)}
            >
                <DrawerContent />
            </Drawer>

            <MainSection />
            <Shadow />

            <ScrolableSection
                listTitle='Novidades do RealmFlix:' 
                marginOn={true}
                data={info}
            />

            <ScrolableSection
                listTitle='Populares do RealmFlix:' 
                marginOn={false} 
                data={info}
            />

            <ChooseOneMovie />
            
            <ScrolableSection
                listTitle='Populares marcados como Ação:' 
                marginOn={false} 
                data={info}
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
