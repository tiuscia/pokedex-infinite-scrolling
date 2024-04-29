export type BgColorClassesType = Record<string, string>

export type PokemonFullDataType = {
  infoData: PokemonInfoDataInterface
  speciesData: SpeciesDataInterface
}

export type fatchedPokemonDataType = {
  name: string
  url: string
}

export type PokemonListRequestType = {
  count: number
  next: string
  previous?: string
  results: fatchedPokemonDataType[]
}

// Pokemon InfoData
export interface PokemonInfoDataInterface {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: Form[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: {
    name: string
    url: string
  }
  sprites: Sprites
  cries: {
    latest: string
    legacy: string
  }
  stats: StatsInterface[]
  types: Type[]
  past_types: PastType[]
}

interface Ability {
  is_hidden: boolean
  slot: number
  ability: {
    name: string
    url: string
  }
}

interface Form {
  name: string
  url: string
}

interface GameIndex {
  game_index: number
  version: {
    name: string
    url: string
  }
}

interface HeldItem {
  item: {
    name: string
    url: string
  }
  version_details: VersionDetail[]
}

interface VersionDetail {
  rarity: number
  version: {
    name: string
    url: string
  }
}

interface Move {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetail[]
}

interface VersionGroupDetail {
  level_learned_at: number
  version_group: {
    name: string
    url: string
  }
  move_learn_method: {
    name: string
    url: string
  }
}

interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
  other: {
    dream_world: {
      front_default: string
      front_female: string | null
    }
    home: {
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    "official-artwork": {
      front_default: string
      front_shiny: string
    }
    showdown: {
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
  versions: {
    [generation: string]: {
      [versionGroup: string]: {
        back_default: string
        back_female: string | null
        back_shiny: string
        back_shiny_female: string | null
        front_default: string
        front_female: string | null
        front_shiny: string
        front_shiny_female: string | null
      }
    }
  }
}

export interface StatsInterface {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface PastType {
  generation: {
    name: string
    url: string
  }
  types: Type[]
}

// Pokemon InfoData END

// Pokemon SpeciesData
interface SpeciesDataInterface {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: {
    name: string
    url: string
  }
  pokedex_numbers: Array<{
    entry_number: number
    pokedex: {
      name: string
      url: string
    }
  }>
  egg_groups: Array<{ name: string; url: string }>
  color: { name: string; url: string }
  shape: { name: string; url: string }
  evolves_from_species: { name: string; url: string }
  evolution_chain: { url: string }
  habitat: null // null because the value is null
  generation: { name: string; url: string }
  names: Array<{ name: string; language: { name: string; url: string } }>
  flavor_text_entries: Array<{
    flavor_text: string
    language: { name: string; url: string }
    version: { name: string; url: string }
  }>
  form_descriptions: Array<{
    description: string
    language: { name: string; url: string }
  }>
  genera: Array<{ genus: string; language: { name: string; url: string } }>
  varieties: Array<{
    is_default: boolean
    pokemon: { name: string; url: string }
  }>
}

export type FlavorTextType = {
  flavor_text: string
  language: { name: string; url: string }
  version: { name: string; url: string }
}

// Pokemon SpeciesDat END

// API types
export type ApiOptionType = {
  signal: AbortSignal 
}
