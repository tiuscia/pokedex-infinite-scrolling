import { useState } from 'react'

import ProgressBar from './ProgressBar'

import { removeDash } from '../../ultils'
import { TABS_LABEL, COLORS } from '../../constants'
import { PokemonInfoDataInterface } from '../../types'


interface TabsProps {
  infoData: PokemonInfoDataInterface
  color: keyof typeof COLORS
}

// TODO: make this component reusable + optimize content tab
const Tabs: React.FC<TabsProps> = ({infoData, color}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {Object.keys(TABS_LABEL).map((label, index) => (
            <button 
              key={index} 
              onClick={() => setActiveTab(index)}
              className={`border ${activeTab === index ? 'bg-primary text-white' : 'bg-neutral text-primary'} leading-5 border-2 font-semibold text-lg min-w-28 rounded-full mb-2 px-4 py-3 md:min-w-48 lg:px-6 lg:py-3 `}>
              {TABS_LABEL[label as keyof typeof TABS_LABEL]}
            </button>
          ))}
        </div>
        <div className={`${activeTab == 0 ? 'block' : 'hidden'} max-w-screen-lg mt-8 mx-auto`}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div>
              <h2 className="text-body-lg font-semibold">General info</h2>
              <ul className="text-body-lg">
                <li>Weight: {`${infoData?.weight / 10}`} kg</li>
                <li>Height: {infoData?.height} dm</li>
              </ul>
            </div>
            <div>
              <h2 className="text-body-lg font-semibold">Abilities</h2>
              <ul className="text-body-lg">
                {infoData?.abilities.map((ability, index) => (
                  <li key={index}>{removeDash(ability.ability.name)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-body-lg font-semibold">Types</h2>
              <ul className="text-body-lg">
                {infoData?.types.map((type, index) => (
                  <li key={index}>{removeDash(type.type.name)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={`${activeTab == 1 ? 'block' : 'hidden'} max-w-screen-lg mt-8 mx-auto flex flex-col`}>
          {infoData?.stats && <ProgressBar statsArr={infoData.stats} color={color} animate={activeTab == 1}/>}
        </div>
      </div>
    
  );
};

export default Tabs
