import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from "./pages/pokemonlist/PokemonList";
import Detallespokemon from "./pages/details/Details";
import SearchBar from "./components/searchbar/Searchbar";
import Footer from "./components/footer/Footer";
import Apipokemon from "./api/api";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [busquedaPokemon, setbusquedaPokemon] = useState('');
  const [paginaInicio, setpaginaInicio] = useState(1);

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await Apipokemon(paginaInicio); 
      setPokemons(pokemonDetails);
    };
    fetchPokemonsData();
  }, [paginaInicio]);

  const cambioPokemon = (event) => {
    setbusquedaPokemon(event.target.value);
  };

  const saltoPagina = (page) => {
    setpaginaInicio(page);
  };

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busquedaPokemon.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <SearchBar busquedaPokemon={busquedaPokemon} cambioPokemon={cambioPokemon} />
      <Router>
        <Routes> {/* Aquí se debe usar Routes en lugar de Router */}
          <Route path="/" element={<PokemonList pokemons={pokemonsFiltrados} />} />
          <Route path="/pokemon/:id" element={<Detallespokemon />} />
        </Routes>
      </Router>
      <Footer paginaInicio={paginaInicio} cambioPagina={saltoPagina} />
    </div>
  );
};

export default App;
