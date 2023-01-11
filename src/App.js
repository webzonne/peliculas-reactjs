import "./App.css";
import React, { useState } from "react";
import Peliculas from "./componentes/Peliculas";
import { Routes, Route } from "react-router-dom";
import SobrePelicula from "./componentes/SobrePelicula";
import BuscarPeliculas from "./componentes/BuscarPeliculas"
import { useLocation } from "react-router-dom";
import Slider from "./componentes/Slider";
import Nav from "./componentes/Nav";


function App() {
  const [buttonActive, setbuttonActive] = useState(true);
  const MovieButton = () => {
    setbuttonActive(true)
  }
  const SerieButton = () => {
    setbuttonActive(false)
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const search = query.get("search");
  return (
    <div className="App">
      <header>
        <nav>
          <Nav />
        </nav>
        <Slider
          buttonActive={buttonActive}
        />
        <BuscarPeliculas />

      </header>
      <main>
        <Routes>
          <Route
            path="/peliculas-reactjs"
            element={<Peliculas
              SerieButton={SerieButton}
              MovieButton={MovieButton}
              buttonActive={buttonActive}
              key={search} />}
          />
          <Route path="Sobre/:id" element={<SobrePelicula
            buttonActive={buttonActive}
          />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
