const Evolution = async ({ id }) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/` + { id }
    );
    const data = await response.json();
    const pokemonsData = data.results;
    return data;
  } catch (error) {
    return [];
  }
};

export default Evolution;
