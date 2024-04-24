import { COLORS, ICONS_FILE, ICON_POSITION } from "../../constants";
import { getIcon } from "../../ultils";

interface ButtonProps {
  onClick: () => void;
  label?: string;
  bgColor?: string;
  disabled?: boolean;
  iconType?: keyof typeof ICONS_FILE  | '';
  iconPosition?: keyof typeof ICON_POSITION | '';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, bgColor = COLORS.secondary, disabled, iconType = "", iconPosition = "", style }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: bgColor, ...style }}
      disabled={disabled}
      className="text-md relative py-2 px-3 rounded-full z-10 flex justify-center items-center text-primary font-semibold md:py-3 md:px-4"
    >
      {(iconPosition == ICON_POSITION.left && iconType) && <img className="max-h-8" src={getIcon(iconType)} alt={iconType} />}
      {label}
      {(iconPosition == ICON_POSITION.right && iconType) &&<img className="max-h-8" src={getIcon(iconType)} alt={iconType} />}
    </button>
  );
};

export default Button;