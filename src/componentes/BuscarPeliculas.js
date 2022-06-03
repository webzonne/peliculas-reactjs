import React, { useState } from 'react'
import style from './styles/BuscarPeliculas.module.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function BuscarPeliculas() {
    const [search, setsearch] = useState("");
    const navigate = useNavigate();
    const Busqueda= (e)=>{
        e.preventDefault();
        navigate("/peliculas-reactjs?search="+search);
    }
    //console.log(search);
   
  return (
    <div>
        <form className={style.buscar} onSubmit={Busqueda}>
            <div className={style.inputBuscar}>
                <input placeholder='  Buscar Peliculas...' type="text" onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}/>
                <div className={style.botonBuscar}>
                    <button  type='submit'>
                        <FaSearch size={20}/>
                    </button>
                </div>
            </div>
            
        </form>
    </div>  
    
  )
}
