import React, { useEffect, useState } from 'react';
import style from './styles/SobrePelicula.module.css';
import {useParams} from "react-router-dom";
import { TraerDetalles } from './TraerPeliculas';
import Spinner from './Spinner';

export default function SobrePelicula(){
    let { id } = useParams();
    const [cargando, setcargando] = useState(true);
    const [detalle, setdetalle] = useState();
    useEffect(()=>{
        setcargando(true);
        const TraerDatos = async ()=>{
            const datos = await TraerDetalles(id);
            setcargando(false);
            setdetalle(datos);
        }
        TraerDatos()  
    },[id])
    if(cargando){
        return <Spinner/>
    }
    return(
        <div>
            
            {detalle ? <div className={style.content}>
                {/*IMAGEN */}
                <div className={style.contentimg}>
                <img src={"https://image.tmdb.org/t/p/w500"+detalle.poster_path} alt={detalle.id}/>
                </div>
                {/*DESCRIPCION */}
                <div className={style.detal}>
                <h2 className={style.title}>{detalle.title}</h2>
                <p className={style.description}>{detalle.overview}</p>
                 {/*Genero */}
                <div className={style.genero}>
                    <p><strong>Genero:</strong></p>
                    <p>{detalle.genres.map((g)=>{return g.name}).join(", ")}</p>
                </div>
                 {/*Idioma */}
                <div className={style.genero}>
                    <p><strong>Idioma:</strong></p>
                    <p>{detalle.spoken_languages[0].name}</p>
                </div>
                 {/*Fecha */}
                 <div className={style.genero}>
                    <p><strong>Fecha:</strong></p>
                    <p>{detalle.release_date}</p>
                </div>
                
                </div>
                
            </div>:null}
        </div>
    )
};