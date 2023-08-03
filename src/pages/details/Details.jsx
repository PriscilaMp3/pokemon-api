import React from "react";
import { useState, useEffect } from "react";
import detallesApi from "../../api/detallesApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Details.css";

const Detallespokemon = ({ pokemon }) => {
  const [Pokemon, setPokemon] = useState({});

  const location = useLocation();
  const parametros = useParams();
  const navigate = useNavigate();
  const pokemonid = parametros.id;

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await detallesApi(pokemonid);
      setPokemon(pokemonDetails);
    };
    fetchPokemonsData();
  }, [pokemonid]);

  const volver = () => {
    navigate("/");
  };

  // console.log(Pokemon.species.url);
  // const Evolucionespokemon = () => {
  //   const [pokemonId, setPokemonId] = useState(pokemonid);

  //   useEffect(() => {
  //     getEvolutions(pokemonId);
  //   });

  //   async function getEvolutions(id) {
  //     console.log("SOY EL ID DE PARAMETRO", id);
  //     const response = await fetch(
  //       `https://pokeapi.co/api/v2/evolution-chain/${id}`
  //     );
  //     console.log("Abajo", id);
  //     const data = await response.json();
  //     console.log("SOY TODA LA EVOLUCION", data);
  //     console.log(data.chain.evolves_to[0].species.name);
  //     console.log(data.chain.evolves_to[0].evolves_to[0].species.name);
  //   }
  // };
  // Evolucionespokemon();

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

        <div className="stats">
          <h3 className="title">Estadisticas:</h3>
          <p>
            Ataque:{" "}
            <ProgressBar
              label={`${Pokemon.stats?.[1]?.base_stat}%`}
              variant="success"
              now={Pokemon.stats?.[1]?.base_stat}
            />{" "}
          </p>
          <p>
            Velocidad:
            <ProgressBar
              label={`${Pokemon.stats?.[5]?.base_stat}%`}
              variant="warning"
              now={Pokemon.stats?.[5]?.base_stat}
            />
          </p>
          <p>
            Defensa:{" "}
            <ProgressBar
              label={`${Pokemon.stats?.[2]?.base_stat}%`}
              variant="info"
              now={Pokemon.stats?.[2]?.base_stat}
            />
          </p>
          <p>
            Salud:
            <ProgressBar
              label={`${Pokemon.stats?.[0]?.base_stat}%`}
              variant="danger"
              now={Pokemon.stats?.[0]?.base_stat}
            />
          </p>
        </div>
      </div>
      <div className="img">
        {Pokemon.sprites && (
          <img
            src={Pokemon.sprites.other.home.front_default}
            alt={`Imagen de ${Pokemon.name}`}
          />
        )}
      </div>
      <div className="BTN">
        <button onClick={volver}>volver</button>
      </div>
    </div>
  );
};

export default Detallespokemon;
