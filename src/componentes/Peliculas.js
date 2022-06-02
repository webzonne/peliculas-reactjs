import React, {useState, useEffect} from "react";
import CardPeliculas from "./CardPeliculas";
import style from "./styles/Peliculas.module.css";
import {TraerPeliculas} from './TraerPeliculas';

function Peliculas(){
    const [movie, setmovie] = useState();
    useEffect(()=>{
        const TraerDatos = async () =>{
            const datos= await TraerPeliculas();
            setmovie(datos.results);
        }
        TraerDatos();
    },[])
    return(
        <div>
            {movie ?<div className={style.content}>
                {movie.map((e)=>{
                return (
                    <CardPeliculas
                    key={e.id}
                    props={e}
                     />
                    )
                })}
            </div>:null}
            
        </div>
    )
}

export default Peliculas;