import React from 'react';
import style from './styles/Header.module.css';

function Header(props){
    return(
        <div className={style.content}>
            <h1>{props.titulo}</h1>
        </div>
    )
}
export default Header;