import React, {useState, useEffect} from "react";
import CardPeliculas from "./CardPeliculas";
import Spinner from "./Spinner";
import style from "./styles/Peliculas.module.css";
import { useLocation } from 'react-router-dom';
import Api from '../utils/Api.json';
import InfiniteScroll from 'react-infinite-scroll-component';


function Peliculas({SerieButton, MovieButton,buttonActive}){
    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }
    const [movie, setmovie] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [page,setpage]=useState(2);
    const [hasMore, sethasmore] = useState(true)
    

    const query = useQuery();
    const search = query.get("search"); 

    //const location = useLocation();
    //console.log(location);
    //console.log("este "+location.search);
    useEffect(()=>{
       setcargando(true);
       const selector = buttonActive ?'movie':'tv'
        const searchUrl= search
        
        ? Api.url+"/search/"+selector+`?`+Api.apiKey+"&query="+search+"&page=1"
        : Api.url+"/discover/"+selector+`?`+Api.apiKey+"&page=1";
        
             fetch(searchUrl)
            .then((result) => result.json())
            .then((data)=>{
                setcargando(false);
                //setmovie((prevmovie)=>prevmovie.concat(data.results));
                setmovie(data.results)
            })
        
    },[search,buttonActive])
    // termina useEffect
    const fetchMoreData = ()=>{
        const selectorMore = buttonActive ?'movie':'tv'
        const urlMore =search 
        ? Api.url+"/search/"+selectorMore+`?`+Api.apiKey+"&query="+search+"&page="+page
        : Api.url+"/discover/"+selectorMore+`?`+Api.apiKey+"&page="+page;
        fetch(urlMore)
            .then((result) => result.json())
            .then((data)=>{
                setcargando(false);
                //setmovie((prevmovie)=>prevmovie.concat(data.results))
                setmovie([...movie, ...data.results])
                if(movie.length === 0 || data.results.length ===0){
                    sethasmore(false)
                }
                    
            })
            setpage(page+1)
    }
    //console.log(movie)
    if(cargando){
        return <Spinner/>
    }
    const buttonMovie = buttonActive ? 'active':'desactive';
    const buttonSerie = buttonActive ? 'desactive':'active';
    const selectorAll = buttonActive ? 'ALL MOVIES':'ALL SERIES'
    
    return(
        <div>
          
            <InfiniteScroll
            dataLength={movie.length}
            hasMore={hasMore}
            next={fetchMoreData}
            loader={<Spinner/>}
            >
             {/* SELECTION COMIENZA */}
             <div className="container container-selector">
                <h3>{selectorAll}</h3>
                <div className="Linea-degradado"></div>
                <div className="d-flex botones-selector">
                    <button onClick={MovieButton} className={`button-movies ${buttonMovie}`}>MOVIES</button>
                    <button onClick={SerieButton} className={`button-series ${buttonSerie}`}>SERIES</button>
                </div>
            </div>
             {/* SELECTION TERMINA */}
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
            </InfiniteScroll>
        </div>
    )
}

export default Peliculas;