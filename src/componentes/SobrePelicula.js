import React, { useEffect, useState } from "react";
import style from "./styles/SobrePelicula.module.css";
import { useParams, Link } from "react-router-dom";
import { Proveedor, TraerDetalles, TraerDetallesIngles } from "./TraerPeliculas";
import Spinner from "./Spinner";
import Header from "../componentes/Header";

export default function SobrePelicula({buttonActive}) {
  let { id } = useParams();
  const [cargando, setcargando] = useState(true);
  const [detalle, setdetalle] = useState();
  const [detalleIngles, setdetalleIngles] = useState();
  const [provedor, setprovedor] = useState();

  useEffect(() => {
    setcargando(true);
    const TraerDatosMovies = async () => {
      const selection = buttonActive ? 'movie' : 'tv'
      const datos = await TraerDetalles(id, selection);
      const datosIngles = await TraerDetallesIngles(id, selection)
      setcargando(false);
      setdetalleIngles(datosIngles) 
      setdetalle(datos);
    };
    const TraerProveedor = async () => {
      const datosProveedor = await Proveedor(id);
      setprovedor(datosProveedor);
    };
    TraerProveedor();
    TraerDatosMovies();
  }, [id,buttonActive]);
  console.log(provedor)
  if (cargando) {
    return <Spinner />;
  }

  return (
    <div>
      <Link to="/peliculas-reactjs">
        <Header titulo="PELICULAS" />
      </Link>
      {buttonActive ? 
        <div className={style.content}>
          {/*IMAGEN */}
          <div className={style.contentimg}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + detalle.poster_path}
              alt={detalle.id}
            />
          </div>
          {/*DESCRIPCION */}
          <div className={style.detal}>
            <h2 className={style.title}>{detalleIngles.title}</h2>
            <div className={style.lineaDegradado}></div>
            <p className={style.description}>{detalle.overview}</p>
            {/*Genero */}
            <div className={style.genero}>
              <p>
                <strong>Genero:</strong>
              </p>
              <p>
                {detalle.genres
                  .map((g) => {
                    return g.name;
                  })
                  .join(", ")}
              </p>
            </div>
            {/*Idioma */}
            <div className={style.genero}>
              <p>
                <strong>Idioma:</strong>
              </p>
              <p>{detalle.spoken_languages[0].name}</p>
            </div>
            {/*Fecha */}
            <div className={style.genero}>
              <p>
                <strong>Fecha:</strong>
              </p>
              <p>{detalle.release_date}</p>
            </div>
            {/* Donde verla */}
            {provedor.US
              ? provedor.US.flatrate
                ? provedor.US.flatrate.map((e, index) => {
                  return (
                    <div key={index}>
                      <p>
                        <strong>Ver en</strong>
                      </p>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original" + e.logo_path
                        }
                        alt="proveedor"
                      />
                      <p>{e.provider_name}</p>
                    </div>
                  );
                })
                : null
              : null}
          </div>
        </div>
       :
       <div className={style.content}>
        <div className={style.contentimg}>
          {/*IMAGEN */}
          <img src={"https://image.tmdb.org/t/p/w500" + detalleIngles.poster_path} alt={detalle.id}/>         
        </div>
         {/* Description */}
         <div className={style.detal}>
          {/* titulo */}
            <h2 className={style.title}>{detalleIngles.name}</h2>
            <div className={style.lineaDegradado}></div>
            {/* Descripcion */}
            <p className={style.description}>{detalle.overview}</p>
            {/* Pais */}
            <div className={style.pais}>
              <p>
                <strong>Pais:</strong>
              </p>
              <p>{detalle.production_countries.map((p)=>{
                return p.name
              })}</p>
            </div>
               {/*Genero */}
            <div className={style.genero}>
              <p>
                <strong>Genero:</strong>
              </p>
              <p>
                {detalle.genres
                  .map((g) => {
                    return g.name;
                  })
                  .join(", ")}
              </p>
            </div>
             {/*Idioma */}
             <div className={style.genero}>
              <p>
                <strong>Idioma:</strong>
              </p>
              <p>{detalle.spoken_languages[0].name}</p>
            </div>
            {/* Temporadas */}
            <div className={style.temporadas}>
              <p>
                <strong>Temporadas:</strong>
              </p>
              <p>{detalle.seasons.length}</p>
            </div>
            {/* donde verla */}
            <div className={style.watch}>
              <p>
                <strong>Donde verla:</strong>
              </p>
            
            {detalle.networks.map((e)=>{
              return(
                  <img src={"https://image.tmdb.org/t/p/w154"+e.logo_path} alt='logo-networks'/>   
              )
            })}
            </div>
         </div>
       </div>
       }
    </div>
  );
}
