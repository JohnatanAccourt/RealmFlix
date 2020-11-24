import React from 'react';
import '../styles/chooseOneMovie.css';

export default function ChooseGenre(props){
    return(
        <>
            <h5>Humm, acho que ainda não se decidiu!</h5>
            <p>Se chegou até aqui, significa que não encontrou algo no momento... o que acha de sugerirmos apenas um filme certeiro? Escolha o gênero que gostaria de assistir:</p>
            <div className="chooseOneMovie__wrapperButtons">
                <button onClick={props.onClick}>Ação</button>
                <button onClick={props.onClick}>Aventura</button>
                <button onClick={props.onClick}>Comédia</button>
                <button onClick={props.onClick}>Terror</button>
                <button onClick={props.onClick}>Ficção ciên.</button>
            </div>
        </>
    )
}