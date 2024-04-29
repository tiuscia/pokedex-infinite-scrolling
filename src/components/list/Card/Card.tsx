import { memo } from 'react'
import { Link } from 'react-router-dom'

import { BG_COLOR_CLASSES } from '../../../constants'
import { createId } from '../../../ultils'

import { PokemonFullDataType } from '../../../types'

type CardProps = {
  pokemon: PokemonFullDataType
  handleClick: () => void
  lastElementRef?: (card: HTMLLIElement) => void
}

const Card: React.FC<CardProps> = memo(({ pokemon, handleClick, lastElementRef }) => {
  return (
    <>
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
          ref={lastElementRef}
        >
          <img className="relative group-hover:-translate-y-1 transition-transform duration-300 ease-in-out mb-4  w-auto self-center object-contain sm:mb-8 sm:h-[180px] sm:max-h-[40vh]" src={pokemon.infoData.sprites.other['official-artwork'].front_default} alt={`pokemon ${pokemon.infoData.name}`} />
          <h2 className="text-center mb-1 sm:mb-2">{pokemon?.infoData?.name}</h2>
          <span className="text-center text-xs sm:text-sm md:text-md lg:text-[16px]">{createId(pokemon?.infoData?.id)}</span>
        </li>
      </Link>
    </>
  )
})

export default Card