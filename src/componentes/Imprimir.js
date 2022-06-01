import React, { useEffect, useState } from "react";
import { TraerPeliculas } from "./TraerPeliculas";


   function Imprimir(){
    const [datos, setdatos] =useState();
     useEffect(()=>{
        const array =TraerPeliculas();
        setdatos(array)
    },[])
    console.log(datos);
    return(
        <div>
            {datos ? <p>{datos.name}</p>:<p>nada</p>}
        </div>
    )
}

export default Imprimir;