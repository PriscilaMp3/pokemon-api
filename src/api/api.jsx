const Apipokemon = async (paginaInicio) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        (paginaInicio - 1) * 20
      }&limit=20`
    );
    const data = await response.json();
    const pokemonsData = data.results;
    const Detallespokemon = await Promise.all(
      pokemonsData.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          imageUrl: data.sprites.other.home.front_default,
          
        };
      })
    );
    return Detallespokemon;
  } catch (error) {
    return [];
  }
};

export default Apipokemon;
