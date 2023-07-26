const detallesApi = async (numeropokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/` + numeropokemon
    );
    const data = await response.json();
    const pokemonsData = data.results;
    return data;
  } catch (error) {
    return [];
  }
};

export default detallesApi;
