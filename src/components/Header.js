import React from 'react';
import '../styles/header.css'; 

import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';

export default function Header(props){
    
    return (
        <header className={props.moved ? 'Header__container' : 'Header__container Header--container'} >
            <div className='Header__wrapper'>
                <div className='Header__inner'>
                    <Menu id='animaIco' onClick={props.onClick} style={{color: "#E3D9FF", fontSize: 35}} />
                    <p>REALMFLIX</p>
                </div>

                <Search style={{color: "white", fontSize: 35, cursor: 'pointer'}} />
            </div>
        </header>
    )
}