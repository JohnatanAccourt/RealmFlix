import React, { useState } from 'react';
import '../styles/chooseOneMovie.css';

import ChooseGenre from '../components/ChooseGenre';
import ChooseArtist from '../components/ChooseArtist';
import ChoosePopularity from '../components/ChoosePopularity';
import ChoosedMovie from '../components/ChoosedMovie';

export default function ChooseOneMovie(props){
    const [stage, setStage] = useState(1);

    return (
        <section className="chooseOneMovie__container">
            {
                stage === 1 ?
                <ChooseGenre onClick={() => setStage(2)} />:
                stage === 2 ?
                <ChooseArtist onClick={() => setStage(3)}/>:
                stage === 3 ?
                <ChoosePopularity onClick={() => setStage(4)}/>:
                stage === 4 ?
                <ChoosedMovie onClick={() => setStage(1)} />
                :
                <ChooseGenre />
            }
        </section>
    )
}