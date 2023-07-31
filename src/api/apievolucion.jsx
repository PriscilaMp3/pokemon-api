import React, { useEffect, useState } from 'react';

const  Evolucionespokemon = ({ pokemonId }) => {
    const [setEvolutions] = useState([]);


  useEffect(() => {
    fetch("https://api.example.com/pokemon/${pokemonId}/evolutions")
      .then(response => response.json())
      .then(data => setEvolutions(data))
      
  }, [pokemonId]);

};

export default Evolucionespokemon;