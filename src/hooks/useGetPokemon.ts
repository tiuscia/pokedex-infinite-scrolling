import { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import { getPokemon, DEFAULT_QUERY, getPokemonFullData } from "../api/pokemonApi";
import {PokemonFullDataType} from "../types";

const useGetPokemon = (query = DEFAULT_QUERY) => {
  const [error, setError] = useState<Error | null>(null);
  const [hasMoreResults, setHasMoreResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPokemon, setAllPokemon] = useState<PokemonFullDataType[]>([]);


  const { pokemonList, setPokemonList, scrollPosition} = useContext(GlobalContext);

  useEffect(() => {
    if (allPokemon.length === 0 && pokemonList.length > 0) {
      // if it's the first time loading and we have data in the context, use it
      setAllPokemon(pokemonList);
      setHasMoreResults(true);

      // TODO: FIX THIS - DO NOT USE TIMEOUT
      setTimeout(() => {
        if(scrollPosition) window.scrollTo(0, scrollPosition);
      }, 1000);

      return;
    }

    // reset on loading
    setIsLoading(true);
    setError(null);

    // cancel request when component unmount
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await getPokemon(query, { signal })
        const pokemonFullData = await getPokemonFullData(response.data.results, { signal });
        
        setAllPokemon(prev => [...prev, ...pokemonFullData]);
        setHasMoreResults(response.data.next ? true : false);
        setIsLoading(false); 

        // update context
        setPokemonList([...pokemonList, ...pokemonFullData])

      } catch (error) {
        setIsLoading(false); 

        // if request is aborted, do not set error and ignore it
        if (signal.aborted) return;
        setError(error as Error);

      }
    };

    fetchData();

    return () => {
      controller.abort();
    }
    
  }, [query])

  return { error, hasMoreResults, isLoading, allPokemon};
}

export default useGetPokemon