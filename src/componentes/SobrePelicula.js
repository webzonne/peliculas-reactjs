import React, { useEffect, useState } from 'react';
import style from './styles/SobrePelicula.module.css';
import {useParams} from "react-router-dom";
import { TraerDetalles } from './TraerPeliculas';

export default function SobrePelicula(){
    let { id } = useParams();
    const [detalle, setdetalle] = useState();
    useEffect(()=>{
        const TraerDatos = async ()=>{
            const datos = await TraerDetalles(id);
            setdetalle(datos);
        }
        TraerDatos()  
    },[id])
    
    //const url="https://image.tmdb.org/t/p/w500"+detalle.poster_path;
    return(
        <div>
            {detalle ? <div className={style.content}>
                <div className={style.contentimg}>
                <img src={"https://image.tmdb.org/t/p/w500"+detalle.poster_path} alt={detalle.id}/>
                </div>
                <div>
                <h2>{detalle.title}</h2>
                <p>{detalle.overview}</p>
                </div>
                
            </div>:null}
        </div>
    )
};