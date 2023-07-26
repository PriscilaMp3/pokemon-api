import React from "react";
import { useState, useEffect } from "react";
import detallesApi from "../../api/detallesApi";
import { useLocation, useParams } from "react-router-dom";

const Detallespokemon = ({ pokemon }) => {
  const [Pokemon, setPokemon] = useState({});
  const location = useLocation();
  const parametros = useParams();
  const pokemonid = parametros.id;
  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await detallesApi(pokemonid);
      setPokemon(pokemonDetails);
      console.log(pokemonDetails);
    };
    fetchPokemonsData();
  }, [pokemonid]);

  return (
    <div>
      {/* <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} /> */}
      <p>ID: {Pokemon.id}</p>
      <p>{Pokemon.name}</p>
     
    </div>
  );
};

export default Detallespokemon;
