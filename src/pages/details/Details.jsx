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
      
    };
    fetchPokemonsData();
  }, [pokemonid]);

  return (
    <div className="">
      <p>ID: {Pokemon.id}</p>
      <p> Nombre: {Pokemon.name}</p>
      <p>Experiencia: {Pokemon.base_experience}</p>

      
      {/* <img src={Pokemon.other} alt={Pokemon.name} /> */}
      
    </div>
  );
};

export default Detallespokemon;
