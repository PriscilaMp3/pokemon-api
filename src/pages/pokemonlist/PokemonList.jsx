import React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/cardspokemon/PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <>
      <div>
        <div className="pokemon-list">
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
