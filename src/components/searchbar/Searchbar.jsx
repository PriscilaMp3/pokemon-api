import React from 'react';

const SearchBar = ({ busquedaPokemon, cambioPokemon }) => {
  return (
    <input
      type="text"
      placeholder=" Buscar Pokémon..."
      value={busquedaPokemon}
      onChange={cambioPokemon}
    />
  );
};

export default SearchBar;