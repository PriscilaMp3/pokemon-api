import React from "react";
import { useState, useEffect } from "react";
import detallesApi from "../../api/detallesApi";
import { useLocation, useParams } from "react-router-dom";
import "./Details.css"

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
      <div className="bg">
        <div className="info">
        <p>ID: {Pokemon.id}</p>
        <p> Nombre: {Pokemon.name}</p>
        <p>Experiencia: {Pokemon.base_experience}</p>
        </div>
        <div className="img">
        {Pokemon.sprites && (
          <img
            src={Pokemon.sprites.other.home.front_default}
            alt={`Imagen de ${Pokemon.name}`}
          />
        )}
        </div>
        
      </div>
  );
};

export default Detallespokemon;
