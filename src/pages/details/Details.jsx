import React from "react";
import { useState, useEffect } from "react";
import detallesApi from "../../api/detallesApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Evolucionespokemon from "../../api/apievolucion";
import "./Details.css";

const Detallespokemon = ({ pokemon, pokemonId }) => {
  const [Pokemon, setPokemon] = useState({});
  const [evolutions] = useState([]);
  const location = useLocation();
  const parametros = useParams();
  const navigate = useNavigate();
  const pokemonid = parametros.id;
  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await detallesApi(pokemonid);
      setPokemon(pokemonDetails);
      console.log(pokemonId);
      
    };
    fetchPokemonsData();
  }, [pokemonid]);

  const volver = () => {
    navigate("/");
  };

  return (
    <div className="bg">
      <div className="info">
        <p>ID: {Pokemon.id}</p>
        <p> Nombre: {Pokemon.name}</p>
        <p>Experiencia: {Pokemon.base_experience}</p>
        <p>
          Peso:<br></br>
          {Pokemon.weight / 10}Kg
        </p>
        <p>Tamaño:{Pokemon.height}cm</p>
        <p>Ataque: {Pokemon.stats?.[1]?.base_stat}</p>
        <p>Velocidad: {Pokemon.stats?.[5]?.base_stat}</p>
        <p>Defensa: {Pokemon.stats?.[2]?.base_stat}</p>
        <p>Salud: {Pokemon.stats?.[0]?.base_stat}</p>
        <di>
        <ul>
        {evolutions.map(evolution => (
          <li key={evolution.id}>{evolution.name}</li>
        ))}
      </ul>
        </di>
      </div>
      <div className="img">
        {Pokemon.sprites && (
          <img
            src={Pokemon.sprites.other.home.front_default}
            alt={`Imagen de ${Pokemon.name}`}
          />
        )}
        <button onClick={volver}>volver</button>
      </div>
    </div>
  );
};

export default Detallespokemon;
