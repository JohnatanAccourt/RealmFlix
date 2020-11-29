import React, { useEffect, useRef, useState} from 'react';
import '../styles/scrolableSection.css';

import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function ScrolableSection({data, listTitle, marginOn}){
    const myDiv = useRef(null);
    const [leftButtom, setLeftButtom] = useState(true);
    
    let pos = 0;
    
    const comeForward = () => {
        pos = pos + 5
        
        if(myDiv.current.childNodes[pos]){
            myDiv.current.scroll({ top: 0, left: myDiv.current.childNodes[pos].offsetLeft, behavior: "smooth"})
        }else{
            pos = pos - 5;
        } 
    }

    const comeBackward = () => {
        pos = pos - 5
        let getLastOfRow = myDiv.current.childNodes[pos];

        if(getLastOfRow){
            myDiv.current.scroll({ top: 0, left: myDiv.current.childNodes[pos].offsetLeft, behavior: "smooth"})
        }else{
            pos = pos + 5;

        }
    }

    return (
        <>
            <h3 className={marginOn ? 'scrolableSection__listTitle' : ' scrolableSection__listTitle scrolableSection--listTitle'}>{listTitle}</h3>
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
                {data.map((index, key) => {
                    return(
                            <div className="scrolableSection__items">
                                <img key={key} src={`https://image.tmdb.org/t/p/w500/${index.poster_path}`} alt="movie img" className="scrolableSection__img" />
                            </div>
                        )
                    })
                }
                </div>
                
                

            </section>
        </>
    )
}