import { useState, useRef, useCallback, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalContext'
import useGetPokemon from '../../hooks/useGetPokemon'
import Card from './Card/Card'
import Loader from '../ui/Loader'

import { DEFAULT_QUERY } from '../../api/pokemonApi'

const PokemonList: React.FC = () => {

  const [query, setQuery] = useState(DEFAULT_QUERY)
  const context = useContext(GlobalContext)

  if (!context) {
    throw new Error('useGetPokemon must be used within a GlobalContext.Provider')
  }

  const { setScrollPosition } = context

  const {
    error, 
    hasMoreResults, 
    isLoading, 
    allPokemon,
  } = useGetPokemon(query)

  const observer = useRef<IntersectionObserver | null>(null)

  const lastElementRef = useCallback((card: HTMLLIElement) => {
    // if loading, don't get more data
    if(isLoading) return

    // if the observer already exists, disconnect it
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(card => {
      if (card[0].isIntersecting && hasMoreResults) {
        setQuery(`?limit=24&offset=${allPokemon.length}`)
      }
    })

    if(card) observer.current.observe(card)

  }, [isLoading, hasMoreResults])

  const handleClick = () => {
    setScrollPosition(window.scrollY)
  }

  return (
    <>
      {/* 
          TODO: load previous data + improve performance in case of with big data - when the user returns from a pokemon page 
          fetch only the last # items seen (ie. if ?limit=20&offset=200" get only last 20) and detect scroll up/down 
          to load more data 
      */}
      {error && <p>Error fetching data: {error.message}</p>}
      {allPokemon.length > 0 && (
        <ul 
          className="py-5 px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-sm mx-auto sm:gap-8 md:p-7 md:max-w-screen-md lg:p-8 lg:max-w-screen-lg"
        >
          {allPokemon.map((pokemon, i) => {
            if (allPokemon.length === i + 1) {
              return <Card key={pokemon.infoData.id} pokemon={pokemon} handleClick={handleClick} lastElementRef={lastElementRef} />;
            } else {
              return <Card key={pokemon.infoData.id} pokemon={pokemon} handleClick={handleClick} />
            }
        })}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  )
}

export default PokemonList
