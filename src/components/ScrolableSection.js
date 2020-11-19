import React from 'react';
import '../styles/scrolableSection.css';
import mandalorian from '../images/mandalorian.jpg';

export default function ScrolableSection(props){

    // useEffect(() => {
    //     window.addEventListener('scroll', changeHeader);
    //     return () => window.removeEventListener('scroll', changeHeader);
    //   }, [])

    function comeFoward(){
        console.log(window);
        window.pageXOffset = 0;
    }

    return (
        <section className="scrolableSection__container">
            {/* <div className="scrolableSection__leftArrow" onClick={comeBack()}></div> */}
            <div className="scrolableSection__rightArrow" onClick={() => comeFoward()}></div>

            <div className="scrolableSection__wrapperItens">
                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>

                <div className="scrolableSection__items">
                    <img src={mandalorian} alt="movie img" className="scrolableSection__img"/>
                </div>
            </div>
        </section>
    )
}