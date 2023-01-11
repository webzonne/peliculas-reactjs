import React, { useState } from 'react'
import style from './styles/BuscarPeliculasNav.module.css';
import { useNavigate } from 'react-router-dom';
import iconSearch from '../img/icon-search.png'

export default function BuscarPeliculas() {
    const [search, setsearch] = useState("");
    const navigate = useNavigate();
    const Busqueda = (e) => {
        e.preventDefault();
        navigate("/peliculas-reactjs?search=" + search);
    }
    //console.log(search);

    return (
        <>
            <div className='container text-white'>
                <div className="row">
                    <div className="col-12">
                        <form className={style.buscar} onSubmit={Busqueda}>
                            <div className={style.inputBuscar}>
                                <input placeholder='Search...' type="text" onChange={(e) => { setsearch(e.target.value.toLowerCase()) }} />
                                <div className={style.botonBuscar}>
                                    <button type='submit'>
                                        <img width='22px' src={iconSearch} alt='icon-search' />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
