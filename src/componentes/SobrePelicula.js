import React, { useEffect, useState } from "react";
import style from "./styles/SobrePelicula.module.css";
import { useParams } from "react-router-dom";
import { Proveedor, TraerDetalles } from "./TraerPeliculas";
import Spinner from "./Spinner";

export default function SobrePelicula() {
  let { id } = useParams();
  const [cargando, setcargando] = useState(true);
  const [detalle, setdetalle] = useState();
  const [provedor, setprovedor] = useState();
  useEffect(() => {
    setcargando(true);
    const TraerDatos = async () => {
      const datos = await TraerDetalles(id);
      setcargando(false);
      setdetalle(datos);
    };
    const TraerProveedor = async () => {
      const datosProveedor = await Proveedor(id);
      setprovedor(datosProveedor);
    };
    TraerProveedor();
    TraerDatos();
  }, [id]);
  if (cargando) {
    return <Spinner />;
  }
  return (
    <div>
      {detalle ? (
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
            <h2 className={style.title}>{detalle.title}</h2>
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
            {provedor.VE
              ? provedor.VE.flatrate
                ? provedor.VE.flatrate.map((e, index) => {
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
                : provedor.VE.buy
                ? provedor.VE.buy.map((e, index) => {
                    return (
                      <div key={index}>
                         <p>
                          <strong>Comprar en</strong>
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
                : provedor.US ? 
                provedor.US.buy ? provedor.VE.buy.map((e, index) => {
                  return (
                    <div key={index}>
                      <p>
                        <strong>Comprar en</strong>
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
              : provedor.US.flatrate
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
              :null:null:null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
