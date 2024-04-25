# Pokedex project

design inspiration from Dribble https://dribbble.com/shots/16833947-Mobile-Pokedex-App-Design-Exploration/attachments/11892526?mode=media

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
    │   ├── HomeScreen/ # homepage path:/
    │   └── PokemonScreen/ # pokemonpage path:/pokemon/{id}
    │ 
    ├── types/   
    ├── utils/         
```


## React + TypeScript + Vite

This is the template that has been used with the following plugins:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
