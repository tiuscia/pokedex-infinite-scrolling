import { useParams, useLocation, useNavigate } from 'react-router-dom';

import DefaultLayout from "../layout/DefaultLayout";
import CurveBg from "../components/ui/CurveBg";
import Button from "../components/ui/Button";
import Tabs from "../components/ui/Tabs";

import { BG_GRADIENT_CLASSES, COLORS, ICON_POSITION } from "../constants/index";
import { createPokemonDescription, createId } from "../ultils";


const PokemonScreen: React.FC = () => {
    const { id } = useParams();
    const location = useLocation()
    const {infoData, speciesData } = location.state
    const navigate = useNavigate();

    console.log("PokemonScreen render => pokemonData", infoData, speciesData) 

    return (
      <DefaultLayout>
        <div className="absolute left-4 top-4 md:left-7 md:top-6 lg:left-8 lg:top-7 2xl:left-[15%]">
          <Button 
            onClick={() => navigate('/')}
            bgColor={COLORS[speciesData?.color?.name as keyof typeof COLORS]}
            iconType='arrowLeft'
            iconPosition={ICON_POSITION.left as keyof typeof ICON_POSITION}
          />
        </div>
        <header className={`${BG_GRADIENT_CLASSES[speciesData?.color?.name] || BG_GRADIENT_CLASSES['neutral'] } bg-gradient-to-t from-green to-greenLight relative pt-14 flex flex-col justify-center items-center w-full mx-auto mb-5  md:mb-0 lg:pt-16 `} >
            {/* TODO: navigate to next or previous pokemon page - move the data request in the pokemonScreen if location.state is empty  */}
            {/* {infoData?.id > 1 && 
              <Button 
                onClick={() => navigate(`/pokemon/${infoData?.id - 1}`)} 
                iconType="caretLeft"
                iconPosition="left"
                customStyle={{ position: 'absolute', left: '30px', transform: 'translateY(-50%)', top: '50%', zIndex: '10'}}
              />}
            {infoData?.id < ALL_POKEMON_COUNT && 
              <Button 
                onClick={() => navigate(`/pokemon/${infoData?.id + 1}`)}
                iconType="caretRight" 
                iconPosition="right"
                customStyle={{ position: 'absolute', right: '30px', transform: 'translateY(-50%)', top: '50%' }}
              />} */}
            <div className="flex flex-col justify-center items-center mb-8 px-7 max-w-screen-sm md:mb-10 md:max-w-screen-md lg:mb-11 lg:max-w-screen-lg xl:mb-12">
                <span className="text-secondary text-center">{createId(infoData?.id)}</span>
                <h1 className="text-center mb-5 md:mb-6 lg:mb-8">{infoData?.name}</h1>
                <img className="h-24 mx-auto mb-8 w-auto md:h-36" src={infoData?.sprites?.other?.showdown?.front_default} alt={infoData?.name} />
                <p className="line-clamp-3 max-w-screen-sm text-center">{createPokemonDescription(speciesData)}</p>
            </div>

            <CurveBg />
        </header>
        <main className="py-5 px-7 md:px-12 lg:px-16 lg:py-8">
          <Tabs infoData={infoData} color={speciesData.color.name}/>
        </main>
      </DefaultLayout>
    );
  }
  
  export default PokemonScreen;