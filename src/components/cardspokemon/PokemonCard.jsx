import React from 'react';
import './CardPokemon.css';

const PokemonCard = ({ name, imageUrl }) => {
  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={imageUrl} alt={name} />
      <p className="pokemon-name">{name}</p>
    </div>
  );
};

export default PokemonCard;
