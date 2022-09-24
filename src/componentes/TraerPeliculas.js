export const TraerPeliculas = async () =>{
    try{
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=381d15531fa0c6e6317d31105419bf57");
        const data = await response.json();
        return data;
    }catch(err){
        alert("SIN CONEXION");
    }
   
}

export const TraerDetalles = async (id) =>{
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=381d15531fa0c6e6317d31105419bf57`);
        const data = await response.json();
        return data;
    }catch(err){
        alert("SIN CONEXION");
    }
   
}
export const Proveedor = async (id) =>{
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=381d15531fa0c6e6317d31105419bf57&locale=US`);
        const data = await response.json();
        console.log(data.results)
        return data.results;
    }catch(err){
        alert("SIN CONEXION");
    }
   
}



