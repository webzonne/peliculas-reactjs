import React from 'react';
import style from './styles/CardPeliculas.module.css';
import {Link} from "react-router-dom";

function CardPeliculas({props}){
    const url="https://image.tmdb.org/t/p/w300"+props.poster_path;
    return(
        <div className={style.content}>
            <Link to={"/sobre/"+props.id}>
            <img src={url} alt={props.title} />
            <h3>{props.title}</h3>
            </Link>
        </div>
    )
}

export default CardPeliculas;