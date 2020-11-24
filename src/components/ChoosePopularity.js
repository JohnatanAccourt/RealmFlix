import React from 'react';
import '../styles/chooseOneMovie.css';

export default function ChoosePopularity(props){
    return(
        <>
            <h5>Qual o nível de popularidade ele deve ter?</h5>
            <div className="ChoosePopularity__wrapperButtons">
                <button onClick={props.onClick}>Baixa</button>
                <button onClick={props.onClick}>Mediana</button>
                <button onClick={props.onClick}>Alta</button>
                <button onClick={props.onClick}>Muito Alta</button>
            </div>
        </>
    )
}