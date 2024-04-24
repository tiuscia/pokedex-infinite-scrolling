# Pokedex project


## how to run the project

```js
npm install
npm run dev
```


## File Structure

```bash
└── src/
    ├── api/ # to set axios baseURL and create get requests
    ├── assets/
    ├── components/
    │   │   # based on the small size of the project, they have been grouped by 'features'
    │   ├── list/
    │   └── ui/
    │    
    ├── constants/   
    ├── hooks/  
    ├── layout/
    ├── pages/
    │   │   
    │   ├── HomeScreen/ # homepage /
    │   └── PokemonScreen/ # pokemonpage /pokemon/{id}
    │ 
    ├── types/   
    ├── utils/         
```


## React + TypeScript + Vite

This template has been used

Currently, two official plugins are available:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
