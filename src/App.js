import './App.css';
import React from "react";
import Peliculas from './componentes/Peliculas';
import { Routes, Route, Link} from "react-router-dom";
import SobrePelicula from './componentes/SobrePelicula';
import Header from './componentes/Header';

function App() {
  return (
      <div className='App'>
        <header>
            <Link to ="/peliculas-reactjs"> <Header titulo="PELICULAS" /></Link>
            <nav>
            </nav>
            <main>
                <Routes>
                    <Route path="/peliculas-reactjs" element={<Peliculas/>} />
                    <Route path="Sobre/:id" element={<SobrePelicula/>} />
                </Routes>
            </main>
        </header>
      </div>
  )
}

export default App;
