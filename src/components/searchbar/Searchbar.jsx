import React from "react";
import "./Searchbar.css";

const SearchBar = ({ busquedaPokemon, cambioPokemon }) => {
  return (
    <section className="container-buscar">
      <input className="input-buscar"
        type="text"
        placeholder=" Buscar Pokémon..."
        value={busquedaPokemon}
        onChange={cambioPokemon}
      />
      {/* <button className="btn-buscar">Buscar</button> */}
    </section>
  );
};

export default SearchBar;
