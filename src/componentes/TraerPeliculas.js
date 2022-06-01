export const TraerPeliculas = async () =>{
    try{
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=381d15531fa0c6e6317d31105419bf57");
        const data = await response.json();
        return data;
    }catch(err){
        alert("no encontrado");
    }
   
}



