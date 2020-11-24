import React from 'react';
import '../styles/chooseOneMovie.css';
import mand from '../images/mandalorian.jpg'

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import Return from '@material-ui/icons/KeyboardReturn';

export default function ChoosedMovie(props){
    return(
        <>
            <div className="ChoosedMovie__wrapper">
                <img src={mand} alt="Movie image"/>
                <div className="ChoosedMovie__inner">
                    <p>Encontramos uma opção para você!</p>
                    <h1>Mandalorian</h1>
                    <h5>
                        Um atirador solitário explora os confins da galáxia, longe da autoridade da Nova República.
                    </h5>
                    <div className="ChoosedMovie__buttons">
                        <button className="ChoosedMovie__watchMovie">
                            <PlayArrow style={{color: "#E3D9FF", fontSize: 30 }}/>
                            <p className="ChoosedMovie__btnText">Assistir</p>
                        </button>
                        <button className="ChoosedMovie__watchMovie">
                            <Add style={{color: "#E3D9FF", fontSize: 30 }}/>
                            <p className="ChoosedMovie__btnText">Minha lista</p>
                        </button>

                        <button className="ChoosedMovie__watchMovie red" onClick={props.onClick}>
                            <Return style={{color: "#E3D9FF", fontSize: 30 }}/>
                            <p className="ChoosedMovie__btnText">Novamente</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}