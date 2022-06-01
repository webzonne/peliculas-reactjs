import React from 'react';
import style from './styles/CardPeliculas.module.css';

function CardPeliculas({props}){
    const url="https://image.tmdb.org/t/p/w300"+props.poster_path;
    return(
        <div className={style}>
            <img src={url} alt={props.title} />
            <h3>{props.title}</h3>
        </div>
    )
}

export default CardPeliculas;