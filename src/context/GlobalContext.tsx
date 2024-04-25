import React, { createContext, useState, FC, useMemo } from 'react';
import { PokemonFullDataType } from '../types';

export type GlobalContextProps = {
  pokemonList: PokemonFullDataType[];
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonFullDataType[]>>;
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<PokemonFullDataType[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const value = useMemo(() => {
    return { pokemonList, setPokemonList, scrollPosition, setScrollPosition };
  }, [pokemonList, setPokemonList, scrollPosition, setScrollPosition]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
