import React, {useState, useEffect} from "react";
import BuscarPeliculas from "./BuscarPeliculas";
import CardPeliculas from "./CardPeliculas";
import Spinner from "./Spinner";
import style from "./styles/Peliculas.module.css";
//import {TraerPeliculas} from './TraerPeliculas';
import { useLocation } from 'react-router-dom';
import Api from '../utils/Api.json';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Peliculas(){
    const [movie, setmovie] = useState();
    const [cargando, setcargando] = useState(true);

    const query = useQuery();
    const search = query.get("search");   

    //const location = useLocation();
    //console.log(location);
    //console.log("este "+location.search);
    useEffect(()=>{
        setcargando(true);
        const searchUrl= search
        
        ? Api.url+"/search/movie?"+Api.apiKey+"&query="+search
        : Api.url+"/discover/movie?"+Api.apiKey;
        
             fetch(searchUrl)
            .then((result) => result.json())
            .then((data)=>{
                setcargando(false);
                setmovie(data.results);
            })
        
 
        /*const TraerDatos = async () =>{
            const datos= await TraerPeliculas();
            setcargando(false);
            setmovie(datos.results);
        }
        TraerDatos();*/
    },[search])
    
    if(cargando){
        return <Spinner/>
    }
    return(
        <div>
             <BuscarPeliculas/>
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