import React, { useEffect, useRef, useState } from 'react';
import '../styles/scrolableSection.css';
import mandalorian from '../images/mandalorian.jpg';

export default function ScrolableSection(props){
    const myDiv = useRef(null);
    const [leftButtom, setLeftButtom] = useState(true);
    
    let pos = 0;
    
    const comeFrontward = () => {
        pos = pos + 6
        let getLastOfRow = myDiv.current.childNodes[pos];

        if(getLastOfRow){
            myDiv.current.scrollLeft = getLastOfRow.offsetLeft;
        }else{
            pos = pos - 6;
        }

    }

    const comeBackward = () => {
        pos = pos - 6
        let getLastOfRow = myDiv.current.childNodes[pos];

        if(getLastOfRow){
            myDiv.current.scrollLeft = getLastOfRow.offsetLeft;
        }else{
            pos = pos + 6;
        }

    }

    return (
        <section className="scrolableSection__container">
            { leftButtom ? <div className="scrolableSection__leftArrow" onClick={() => comeBackward()}></div> : <div></div> }
            <div className="scrolableSection__rightArrow" onClick={() => comeFrontward()}></div>

            <div className="scrolableSection__wrapperItens" ref={myDiv}>
                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/200'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/300'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/500'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/700'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/200'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/300'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/500'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/700'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/200'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/300'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/500'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/700'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/200'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/300'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/500'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/700'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={'https://picsum.photos/900'} alt="movie img" className="scrolableSection__img"/>
                </div>
            </div>
        </section>
    )
}