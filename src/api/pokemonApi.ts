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

