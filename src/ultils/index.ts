import { ICONS_FILE } from "../constants"
import { FlavorTextType } from "../types/index"

export const capitalize = (str: string = ""): string => {
    if (!str) return ""
    return str.charAt(0)?.toUpperCase() + str.slice(1)
}

export const createId = (id: number): string => {
  return id ? '#'+id.toString().padStart(3, '0') : ''
}


export const createPokemonDescription = (speciesObj: any): string => {
    let description = ''

    const filteredArray = speciesObj.flavor_text_entries.reduce((acc: string[], item:FlavorTextType) => {
        if (item.language.name === 'en' && item.version.name === "red") {
          acc.push(item.flavor_text)
        }
        return acc
      }, [])

      if (filteredArray.length > 0) {
        // fix api issus
        description = filteredArray.join(' ')
        .replace(/\f/g, '\n')
        .replace(/\u00ad\n/g, '')
        .replace(/\u00ad/g, '')
        .replace(/ -\n/g, ' - ')
        .replace(/-\n/g, '-')
        .replace(/\n/g, ' ')
        .replace('POKéMON', "Pokémon")
      }

    return description
}

export const getIcon = (iconType: keyof typeof ICONS_FILE | '') => {
  return ICONS_FILE[iconType as keyof typeof ICONS_FILE]
}

export const removeDash = (str: string): string => {
  if (!str) return ""
  return capitalize(str.replace(/-/g, ' '))
}

export const getQueryFromUrl = (url: string): string => {
  const urlObject = new URL(url)
  return urlObject.search
}
