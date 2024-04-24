import { BgColorClassesType } from "../types"
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import caretLeft from '../assets/caret-left.svg';
import caretRight from '../assets/caret-right.svg';

export const BG_COLOR_CLASSES: BgColorClassesType = {
    green: 'bg-green',
    blue: 'bg-blue',
    brown: 'bg-brown',
    red: 'bg-red',
    black: 'bg-black',
    gray: 'bg-gray',
    pink: 'bg-pink',
    purple: 'bg-purple',
    white: 'bg-white',
    yellow: 'bg-yellow',
    neutral: 'bg-neutral',
  }

export const BG_GRADIENT_CLASSES: BgColorClassesType = {
    green: 'bg-gradient-to-t from-green to-greenLight',
    blue: 'bg-gradient-to-t from-blue to-blueLight',
    brown: 'bg-gradient-to-t from-brown to-brownLight',
    red: 'bg-gradient-to-t from-red to-redLight',
    black: 'bg-gradient-to-t from-black to-blackLight',
    gray: 'bg-gradient-to-t from-gray to-grayLight',
    pink: 'bg-gradient-to-t from-pink to-pinkLight',
    purple: 'bg-gradient-to-t from-purple to-purpleLight',
    white: 'bg-gradient-to-t from-white to-whiteLight',
    yellow: 'bg-gradient-to-t from-yellow to-yellowLight',
    neutral: 'bg-gradient-to-t from-neutral to-neutralLight',
}

export const BG_COLOR_LIGHT_CLASSES: BgColorClassesType = {
    green: 'bg-greenLight',
    blue: 'bg-blueLight',
    brown: 'bg-brownLight',
    red: 'bg-redLight',
    black: 'bg-blackLight',
    gray: 'bg-grayLight',
    pink: 'bg-pinkLight',
    purple: 'bg-purpleLight',
    white: 'bg-whiteLight',
    yellow: 'bg-yellowLight',
    neutral: 'bg-neutralLight',
}

export const COLORS = {
    primary: '#2E2F57',
    secondary: '#9496B2',
    neutral: '#F5FBFB',
    green: '#C4E3D4',
    blue: '#BEDCDB',
    brown: '#F0D3BB',
    red: '#EABCB3',
    black: '#D9D9D9',
    gray: '#CBD4D6',
    pink: '#E4BBC8',
    purple: '#D9C5E7',
    white: '#EDEDED',
    yellow: '#F8F5BD',
}

export const COLORS_LIGHT = {
    green: '#DFF0E7',
    blue: '#DBECEB',
    brown: '#F7E7DA',
    red: '#F3DAD5',
    black: '#EAEAEA',
    gray: '#E2E7E8',
    pink: '#F0DAE1',
    purple: '#EADFF2',
    white: '#F5F5F5',
    yellow: '#FBF9DB',
}

export const TABS_LABEL = {
    info: 'Info',
    stats: 'Stats',
}

export const ICONS_FILE = {
    arrowLeft: arrowLeft,
    arrowRight: arrowRight,
    caretRight: caretRight,
    caretLeft: caretLeft,
}

export const ICON_POSITION = {
    left: 'left',
    right: 'right',
}

// TODO: get this info from the api
export const ALL_POKEMON_COUNT = 1302;