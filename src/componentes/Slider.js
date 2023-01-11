import React, { useEffect, useState } from 'react'
import {movieSlider} from "./TraerPeliculas";
export default function Slider({buttonActive}) {
  const [movies, setmovies] = useState([]);
  let image = []
  let titleMovie = []
  useEffect(()=>{
    (async()=>{
      const active = buttonActive ? 'movie' : 'tv'
      const dato = await movieSlider(active)
      setmovies(dato)
    })()
  },[buttonActive])
  //console.log(buttonActive)
  // todas las peliculas
 
  // PELICULAS
  //todos las imagenes de las peliculas
  image.push(movies.map((e)=>{
    return(
      e.backdrop_path
    )
  }))
  //todos los titulos de las peliculas
  titleMovie.push(movies.map((e)=>{
    return(
      e.title
    )
  }))

   //SERIES
   //todos los titulos de las peliculas
   titleMovie.push(movies.map((e)=>{
    return(
      e.name
    )
  }))

  //las primeras 5 imagenes de las peliculas
  const imagen = image[0].slice(0,5);

  //los primeros 5 titulos de las Series
  const tituloMovies = titleMovie[0].slice(0,5);
  const tituloTv = titleMovie[1].slice(0,5);
  return (
    <div>
        <div className='slider-content'>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active slider-content-img">
                {imagen && <img src={'https://image.tmdb.org/t/p/original'+imagen[0]} className="d-block w-100" alt='sliderimagen0' />}
                <h3 className='titles-movies-slider'>{buttonActive ? tituloMovies[0] : tituloTv[0]}</h3>
                {/* <img src={slider1} className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
              {imagen && <img src={'https://image.tmdb.org/t/p/original'+imagen[1]} className="d-block w-100" alt='sliderimagen0' />}
              <h3 className='titles-movies-slider'>{buttonActive ? tituloMovies[1] : tituloTv[1]}</h3>
               {/* <img src={slider2} className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
              {imagen && <img src={'https://image.tmdb.org/t/p/original'+imagen[2]} className="d-block w-100" alt='sliderimagen0' />}
              <h3 className='titles-movies-slider'>{buttonActive ? tituloMovies[2] : tituloTv[2]}</h3>
              {/* <img src={slider3} className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
              {imagen && <img src={'https://image.tmdb.org/t/p/original'+imagen[3]} className="d-block w-100" alt='sliderimagen0' />}
              <h3 className='titles-movies-slider'>{buttonActive ? tituloMovies[3] : tituloTv[3]}</h3>
              {/* <img src={slider4} className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
              {imagen && <img src={'https://image.tmdb.org/t/p/original'+imagen[4]} className="d-block w-100" alt='sliderimagen0' />}
              <h3 className='titles-movies-slider'>{buttonActive ? tituloMovies[4] : tituloTv[4]}</h3>
              {/* <img src={slider5} className="d-block w-100" alt="..." /> */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </div>
  )
}
