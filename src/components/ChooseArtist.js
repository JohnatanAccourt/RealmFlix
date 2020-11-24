import React from 'react';
import '../styles/chooseOneMovie.css';

export default function ChooseGenre(props){
    return(
        <>
            <h5>Quais desses atores/atrizes você conhece?</h5>

            <div className="ChooseGenre__wrapperArtists">
                <img onClick={props.onClick} src={'https://www.listchallenges.com/f/items/46aa4f76-bd8d-4f66-bd94-ce5c5efab1ff.jpg'} alt="artist"/>
                <img onClick={props.onClick} src={'https://www.listchallenges.com/f/items/937a2364-a181-46a9-841e-66318b2f59a6.jpg'} alt="artist"/>
                <img onClick={props.onClick} src={'https://www.listchallenges.com/f/items/5f223aa8-c114-445a-8737-5005939433c3.jpg'} alt="artist"/>
                <img onClick={props.onClick} src={'https://www.listchallenges.com/f/items/756d804f-f4fa-430b-a5ae-952de331a1b4.jpg'} alt="artist"/>
            </div>
        </>
    )
}