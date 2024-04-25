import { useState, useRef, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalContext';
import useGetPokemon from '../../hooks/useGetPokemon';
import Loader from '../ui/Loader';

import { BG_COLOR_CLASSES } from '../../constants';
import { DEFAULT_QUERY } from '../../api/pokemonApi';
import { createId } from '../../ultils';


const PokemonList: React.FC = () => {

  const [query, setQuery] = useState(DEFAULT_QUERY);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGetPokemon must be used within a GlobalContext.Provider');
  }

  const { setScrollPosition } = context;

  const {
    error, 
    hasMoreResults, 
    isLoading, 
    allPokemon,
  } = useGetPokemon(query);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback((card: HTMLLIElement) => {
    // if loading, don't get more data
    if(isLoading) return;

    // if the observer already exists, disconnect it
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(card => {
      if (card[0].isIntersecting && hasMoreResults) {
        setQuery(`?limit=24&offset=${allPokemon.length}`);
      }
    })

    if(card) observer.current.observe(card);

  }, [isLoading, hasMoreResults])

  const handleClick = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <>
      {/* 
          TODO: load previous data + improve performance with big data - when the user returns from a pokemon page 
          fetch only the last # items seen (ie. if ?limit=20&offset=200" get only last 20) and detect scroll up/down 
          to load more data 
      */}
      {error && <p>Error fetching data: {error.message}</p>}
      {allPokemon.length > 0 && (
        <ul 
          className="py-5 px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-sm mx-auto sm:gap-8 md:p-7 md:max-w-screen-md lg:p-8 lg:max-w-screen-lg"
        >
          {/* TODO: move cards to /components */}
          {allPokemon.map((pokemon, i) => (
            <Link 
            to={{
              pathname: `/pokemon/${pokemon.infoData.id}`,
            }} 
            state= { pokemon } 
            key={pokemon.infoData.id}
            onClick={handleClick}
            >
              <li 
                className={`${BG_COLOR_CLASSES[pokemon.speciesData.color.name]} list-card group rounded-xl md:rounded-2xl flex flex-col px-4 py-5 sm:py-8 md:px-6 md:py-10 hover:cursor-pointer transition duration-300 hover:scale-105 `}
                ref={i === allPokemon.length - 1 ? lastElementRef : null}
              >
                <img className="relative group-hover:-translate-y-1 transition-transform duration-300 ease-in-out mb-4  w-auto self-center object-contain sm:mb-8 sm:h-[180px] sm:max-h-[40vh]" src={pokemon.infoData.sprites.other['official-artwork'].front_default} alt={`pokemon ${pokemon.infoData.name}`} />
                <h2 className="text-center mb-1 sm:mb-2">{pokemon?.infoData?.name}</h2>
                <span className="text-center text-xs sm:text-sm md:text-md lg:text-[16px]">{createId(pokemon?.infoData?.id)}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default PokemonList;