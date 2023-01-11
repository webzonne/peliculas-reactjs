import React from 'react';
import style from './styles/Header.module.css';
import backIcon from '../img/back.png';

function Header(props){
    return(
        <div className={style.content}>
            <img src={backIcon} alt='back-icon'/>
        </div>
    )
}
export default Header;