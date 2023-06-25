    import { fetchPokemon } from "./fetchPokemon";

    type Props = {
    pokemon: { name: string };
    };

    export const fetchPokemonByType = async (type: string) => {
    const URL = `https://pokeapi.co/api/v2/type/${type}`;

    const response = await fetch(URL);
    const data = await response.json();

    const promises = data.pokemon
        .map(async (item: Props) => (await fetchPokemon(item.pokemon.name)).data);

    const pokemonList = Promise.all(promises);

    return pokemonList;
    };
