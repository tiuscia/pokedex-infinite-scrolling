import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import useGetPokemon from '../../hooks/useGetPokemon';
import Loader from '../ui/Loader';

import { BG_COLOR_CLASSES } from '../../constants';
import { DEFAULT_QUERY } from '../../api/pokemonApi';


const PokemonList: React.FC = () => {
  console.log("PokemonList render")

  const [query, setQuery] = useState(DEFAULT_QUERY);
  const {
    error, 
    hasMoreResults, 
    isLoading, 
    allPokemon
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
        console.log('meow')
      }
    })

    if(card) observer.current.observe(card);

  }, [isLoading, hasMoreResults])

  return (
    <>
      {/* TODO: load previous data - this will fetch only the last # items seen, when the user returns from a pokemon page  */}
      {error && <p>Error fetching data: {error.message}</p>}
      {allPokemon.length && (
        <ul className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-sm mx-auto md:p-7 md:max-w-screen-md lg:p-8 lg:max-w-screen-lg'>
          {allPokemon.map((pokemon, i) => (
            <Link 
            to={{
              pathname: `/pokemon/${pokemon.infoData.id}`,
            }} 
            state= { pokemon } 
            key={pokemon.infoData.id}
            >
              <li 
                className={`${BG_COLOR_CLASSES[pokemon.speciesData.color.name]} group rounded-xl gap-8 md:rounded-2xl flex flex-col px-4 py-8 md:px-6 md:py-10 hover:cursor-pointer transition duration-300 hover:scale-105 `}
                ref={i === allPokemon.length - 1 ? lastElementRef : null}
              >
                <img className='relative group-hover:-translate-y-1 transition-transform duration-300 ease-in-out h-[180px] max-h-[40vh] w-auto self-center object-contain' src={pokemon.infoData.sprites.other['official-artwork'].front_default} alt={`pokemon ${pokemon.infoData.name}`} />
                <h2 className='text-center'>{pokemon?.infoData?.name}</h2>
                {i === allPokemon.length - 1 && <p>I'm the last element</p>}
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