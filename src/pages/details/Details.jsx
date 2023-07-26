import React from 'react';

const Detallespokemon = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
    </div>
  );
};

export default Detallespokemon;
