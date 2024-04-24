import axios from 'axios';

import { apiPokemon } from './axios'; 
import { PokemonListRequestType, fatchedPokemonDataType, PokemonFullDataType, ApiOptionType } from '../types';

export const DEFAULT_QUERY = '?limit=24&offset=0';

export const getPokemon = async ( query = DEFAULT_QUERY, option: ApiOptionType) => {
  const pokemonPath = 'pokemon';
  const response = await apiPokemon.get<PokemonListRequestType>(`${pokemonPath}/${query}`, option);
  return response;
}

export const getPokemonFullData = async (fetchedPokemonData: fatchedPokemonDataType[], option: ApiOptionType): Promise<PokemonFullDataType[]> => {
  const speciesPath = 'pokemon-species';
  try {
    const pokemonFullData = await Promise.all(fetchedPokemonData.map(async (pokemon: fatchedPokemonDataType) => {
      const [info, species] = await Promise.all([
        axios.get(pokemon.url, option),
        axios.get(`${apiPokemon.defaults.baseURL}${speciesPath}/${pokemon.name}`, option)
      ]);
      return { infoData: info.data, speciesData: species.data };
    }));

    return pokemonFullData;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon data');
  }
}

// MINE

// export const getPokemon = async ( query = DEFAULT_QUERY, option) => {
//   const response = await apiPokemon.get<PokemonListRequestType>(query, option);
//   const pokemonFullData = await getPokemonFullData(response.data.results, option);
//   return pokemonFullData;
// }

// const getPokemonFullData = async (fetchedPokemonData: fatchedPokemonDataType[], option) => {
//   const speciesPath = 'pokemon-species';
//   try {
//     const pokemonFullData = await Promise.all(fetchedPokemonData.map(async (pokemon: fatchedPokemonDataType) => {
//       const [info, species] = await Promise.all([
//         axios.get(pokemon.url, option),
//         axios.get(`${apiPokemon.defaults.baseURL}${speciesPath}/${pokemon.name}`, option)
//       ]);
//       return { infoData: info.data, speciesData: species.data };
//     }));

//     return pokemonFullData;
//   } catch (error) {
//     throw new Error('Failed to fetch Pokemon data');
//   }
// }




// AI 

// interface PokemonDataType {
//   // Define your Pokemon data interface here...
// }

// const getPokemon = async (id: number) => {
//   const response = await apiClient.get<PokemonDataType>(`pokemon/${id}`);
//   return response.data; // Return the Pokemon data
// };

// const getPokemonList = async (limit: number) => {
//   const response = await apiClient.get<any>(`pokemon?limit=${limit}`);
//   // Extract and format the Pokemon list data... (assuming an array of Pokemon objects)
//   const pokemonList = response.data.results.map((pokemon: any) => pokemon.name);
//   return pokemonList; // Return the list of Pokemon names
// };


// export default { getPokemon, getPokemonList }; 