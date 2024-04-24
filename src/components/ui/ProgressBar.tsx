import { COLORS, BG_COLOR_CLASSES } from "../../constants";
import { StatsInterface } from "../../types";
import { removeDash, capitalize } from "../../ultils";

interface ProgressBarProps {
  // TODO: add a max value for the progress bar, if applicable
  statsArr: StatsInterface[];
  color: keyof typeof COLORS;
  animate?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ statsArr, color, animate  }) => {
  return (
    <div className="progress-bar">
      {statsArr.length && statsArr.map((stat, index) => (
        <div key={index}>
          <span className="text-body-lg font-semibold font-poppins text-primary">{removeDash(stat.stat.name)}</span>
          <div  className="w-full h-7 bg-secondary rounded-full mt-2 mb-3 relative">
            <div 
              style={{ width: `${(stat.base_stat)}%`}} 
              className="not-colored-bar h-full rounded-full relative"
            >
              <div
                className={`${BG_COLOR_CLASSES[color]} ${animate ? 'animate-progress' : ''} colored-bar h-full rounded-full relative`} 
              >
                <span className={`${animate ? 'animate-slow_appearence' : ''} text-body-md font-medium font-poppins text-primary text-right absolute right-4 top-[50%] -transform -translate-y-1/2`}>{capitalize(stat.base_stat.toString())}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;