import React from 'react';
import '../styles/drawerContent.css';

import Arrows from '@material-ui/icons/CompareArrows';

import avatar from '../images/user/avatar2.png';

export default function DrawerContent(props){
    
    return (
        <div className='DrawerContent__container'>
            <div className="DraweContent__wrapperUserInfo">
                <img src={avatar} alt="user image"/>
                <p>John Doe</p>
                <Arrows style={{ fontSize: 50, color: '#E3D9FF', cursor: 'pointer'}} />
            </div>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Ínicio</p>
            </buttom>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Ação</p>
            </buttom>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Aventura</p>
            </buttom>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Séries</p>
            </buttom>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Terror</p>
            </buttom>

            <buttom className="DrawerContent__wrapperButtons">
                <div></div>
                <p>Comédia</p>
            </buttom>
        </div>
    )
}