import React, {useState, useEffect} from "react";
import BuscarPeliculas from "./BuscarPeliculas";
import CardPeliculas from "./CardPeliculas";
import Spinner from "./Spinner";
import style from "./styles/Peliculas.module.css";
//import {TraerPeliculas} from './TraerPeliculas';
import { useLocation } from 'react-router-dom';
import Api from '../utils/Api.json';
import InfiniteScroll from 'react-infinite-scroll-component';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Peliculas(){
    const [movie, setmovie] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [page,setpage]=useState(1);

    const query = useQuery();
    const search = query.get("search");   

    //const location = useLocation();
    //console.log(location);
    //console.log("este "+location.search);
    useEffect(()=>{
       setcargando(true);
        const searchUrl= search
        
        ? Api.url+"/search/movie?"+Api.apiKey+"&query="+search+"&page="+page
        : Api.url+`/discover/movie?`+Api.apiKey+"&page="+page;
        
             fetch(searchUrl)
            .then((result) => result.json())
            .then((data)=>{
                setcargando(false);
                setmovie((prevmovie)=>prevmovie.concat(data.results));
            })
        
    },[search,page])
    if(cargando){
        return <Spinner/>
    }
    
    return(
        <div>
            <InfiniteScroll
            dataLength={movie.length}
            hasMore={true}
            next={()=>setpage((prevPage)=>prevPage+1)}
            loader={<Spinner/>}
            >
             <BuscarPeliculas/>
            {movie ?<div className={style.content}>
                {movie.map((e)=>{
                return (
                    <CardPeliculas
                    props={e}
                     />
                    )
                })}
            </div>:null}
            </InfiniteScroll>
        </div>
    )
}

export default Peliculas;