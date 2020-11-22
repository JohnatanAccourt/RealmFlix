import React, { useEffect, useRef, useState} from 'react';
import '../styles/scrolableSection.css';

import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function ScrolableSection(props){
    const myDiv = useRef(null);
    const [leftButtom, setLeftButtom] = useState(true);
    
    let pos = 0;
    
    const comeForward = () => {
        pos = pos + 6
        
        if(myDiv.current.childNodes[pos]){
            myDiv.current.scroll({ top: 0, left: myDiv.current.childNodes[pos].offsetLeft, behavior: "smooth"})
        }else{
            pos = pos - 6;
        } 
    }

    const comeBackward = () => {
        pos = pos - 6
        let getLastOfRow = myDiv.current.childNodes[pos];

        if(getLastOfRow){
            myDiv.current.scroll({ top: 0, left: myDiv.current.childNodes[pos].offsetLeft, behavior: "smooth"})
        }else{
            pos = pos + 6;

        }
    }

    return (
        <>
            <h3 className={props.marginOn ? 'scrolableSection__listTitle' : ' scrolableSection__listTitle scrolableSection--listTitle'}>{props.listTitle}</h3>
            <section className="scrolableSection__container">

                { leftButtom ? 
                <div className="scrolableSection__leftArrow" onClick={() => comeBackward()}>
                    <ArrowLeft style={{color: "white", fontSize: 35, backgroundColor: 'transparent'}} />
                </div>
                : 
                <div></div> 
                }
                <div className="scrolableSection__rightArrow" onClick={() => comeForward()}>
                    <ArrowRight style={{color: "white", fontSize: 35, backgroundColor: 'transparent'}} />
                </div>


                <div className="scrolableSection__wrapperItens" ref={myDiv}>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>
                    <div className="scrolableSection__items">
                        <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3C0AGhDtCU1kvRJErekyu7PPpyH.jpg'} alt="movie img" className="scrolableSection__img"/>
                    </div>

                </div>
            </section>
        </>
    )
}