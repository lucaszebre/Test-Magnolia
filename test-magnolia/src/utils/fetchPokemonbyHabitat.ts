import { fetchPokemon } from "./fetchPokemon";

type Props = {
  name: string;
  url: string;
};

export const fetchPokemonByHabitat = async (habitat: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`;

  const response = await fetch(URL);
  const data = await response.json();

  const pokemonSpecies = data.pokemon_species;

  const promises = pokemonSpecies.map(async (item: Props) => {
    const pokemonData = await fetchPokemon(item.name);
    return pokemonData.data;
  });

  const pokemonList = await Promise.all(promises);

  return pokemonList;
};


