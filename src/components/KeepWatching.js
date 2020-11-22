import React from 'react';
import '../styles/keepWatching.css';
import friends from '../images/friends.jpg';

import PlayArrow from '@material-ui/icons/PlayArrow';

export default function KeepWatching(props){
    
    return (
        <section className="KeepWatching__container">
            <div className="KeepWatching__video">
                <img src={friends} alt="thumbnail play" className="KeepWatching__img"/>
                <div className="KeepWatching__play">
                    <PlayArrow style={{color: "#E3D9FF", fontSize: 80 }} />
                </div>
            </div>

            <div className="KeepWatching__video">
                <img src={friends} alt="thumbnail play" className="KeepWatching__img"/>
                <div className="KeepWatching__play">
                    <PlayArrow style={{color: "#E3D9FF", fontSize: 80 }} />
                </div>
            </div>

            <div className="KeepWatching__video">
                <img src={friends} alt="thumbnail play" className="KeepWatching__img"/>
                <div className="KeepWatching__play">
                    <PlayArrow style={{color: "#E3D9FF", fontSize: 80, transition: '0.2s' }} />
                </div>
            </div>
        </section>
    )
}