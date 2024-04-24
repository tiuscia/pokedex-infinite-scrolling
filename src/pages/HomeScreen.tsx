import DefaultLayout from "../layout/DefaultLayout";
import PokemonList from "../components/list/List";

const HomeScreen: React.FC = () => {


    return (
      <DefaultLayout>
        <header className="p-5 space-y-3 max-w-screen-sm mx-auto mb-5 md:p-7 md:max-w-screen-md md:space-y-5 md:mb-7 lg:p-8 lg:max-w-screen-lg lg:space-y-8 lg:md:mb-10">
          <h1 className="text-center py-8">Pokédex</h1>
          <p className="text-center">Remember the thrill of catching your first Pokémon? Relive the magic and explore the entire Pokémon universe! We have all the data you need to learn everything about your favorite Pokémon with just one click</p>
        </header>
        <main className="p-5 lg:p-8">
          <PokemonList />
        </main>
      </DefaultLayout>
    );
  }
  
  export default HomeScreen;