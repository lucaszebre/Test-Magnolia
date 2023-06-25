import { Pokemon } from "../types/Pokemon";

export const fetchPokemon = async (pokemon: string) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    let response: Response | undefined;
    let data: Pokemon;
    let error: boolean;

    try {
        response = await fetch(URL);
        data = await response.json();
        error = false;
    } catch (err) {
        data = {} as Pokemon;
        error = true;
    }

    return { response, data, error };
};
