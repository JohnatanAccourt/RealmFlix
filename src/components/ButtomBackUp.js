import React from 'react';
import '../styles/buttomBackup.css';

import Arrow from '@material-ui/icons/ArrowDropUp';

export default function ButtomBackUp(props){
    
    return (
        <div className={!props.buttomShown ? 'ButtomBackUp__Container' : 'ButtomBackUp--Container'} onClick={props.onClick}>
            <Arrow style={{color: "white", fontSize: 60}} />
        </div>
    )
}