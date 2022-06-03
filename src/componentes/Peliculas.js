import React, {useState, useEffect} from "react";
import BuscarPeliculas from "./BuscarPeliculas";
import CardPeliculas from "./CardPeliculas";
import Spinner from "./Spinner";
import style from "./styles/Peliculas.module.css";
//import {TraerPeliculas} from './TraerPeliculas';
import { useLocation } from 'react-router-dom';

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
        
        ? "https://api.themoviedb.org/3/search/movie?api_key=381d15531fa0c6e6317d31105419bf57&query="+search
        : "https://api.themoviedb.org/3/discover/movie?api_key=381d15531fa0c6e6317d31105419bf57";
        
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
    console.log(movie);
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