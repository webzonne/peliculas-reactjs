import React from 'react';
import style from './styles/CardPeliculas.module.css';
import {Link} from "react-router-dom";

function CardPeliculas({props}){
    const url="https://image.tmdb.org/t/p/w300"+props.poster_path;
    return(
        <div className={style.content} key={props.id}>
            <Link to={"/sobre/"+props.id}>
            <img className={style.imgCard} src={url} alt={props.title} />
            <p className={style.titleCard}>{props.title}{props.name}</p>
            </Link>
        </div>
    )
}

export default CardPeliculas;