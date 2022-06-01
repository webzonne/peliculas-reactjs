import './App.css';
import React from "react";
import Header from './componentes/Header';
//import Imprimir from './componentes/Imprimir';
//import { TraerPeliculas } from "./componentes/TraerPeliculas";
import Peliculas from './componentes/Peliculas';

function App() {
  return (
      <div className='App'>
        <header>
          <Header
          titulo="PELICULAS"
           />
        </header>
        <main>
          <Peliculas/>
         {/*<TraerPeliculas/>*/}
          {/*<Imprimir/>*/}
        </main>
      </div>
  )
}

export default App;
