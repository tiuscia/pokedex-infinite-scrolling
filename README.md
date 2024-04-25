# Pokedex project

design inspiration from [Dribble (Mobile Pokedex App - Design Exploration
by Sulis Triyono)](https://dribbble.com/shots/16833947-Mobile-Pokedex-App-Design-Exploration/attachments/11892526?mode=media/) and adapted to desktop

## how to run the project

```js
npm install
npm run dev
```

## File Structure

```bash
└── src/
    ├── api/ # to set axios baseURL and create get requests
    ├── assets/ # mainly icons for buttons
    ├── components/
    │   │   # based on the small size of the project, they have been grouped by 'features/logic'
    │   ├── list/
    │   └── ui/
    │    
    ├── constants/  
    ├── context/  
    ├── hooks/  
    ├── layout/ # not much needed in this project, but here is where I would have placed the layouts
    ├── pages/
    │   │   
    │   ├── HomeScreen/ # homepage path:/
    │   └── PokemonScreen/ # pokemonpage path:/pokemon/{id}
    │ 
    ├── types/   
    ├── utils/         
```

## :shipit: Notes:

* Context: at the beginning of the project I wanted to keep a very simple structure passing the data to the pokemon page. When I thought about the performance and the scroll back functionality I added a context. When I will have more time I will update the components to use the context only.

* Performance: at the moment the list saved in the context can become very big. if we have a scenario with bigger data I would store only the last x elements loaded instead of the entire list

* depending on the needs I would have saved the data in sessionStorage

* I would explore the usage of [signal](https://preactjs.com/guide/v10/signals/)



## React + TypeScript + Vite

This is the template that has been used with the following plugins:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
