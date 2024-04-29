import { COLORS } from "../../constants"

type CurvedBgProps = {
  color?: string; 
}

const CurvedBg: React.FC<CurvedBgProps> = ({ color }) => {
	return (
		<svg className="w-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
			<g transform="translate(0-124.884651)">
				<rect width="1920" height="100" rx="0" ry="0" transform="translate(0 229.522135)" fill={color || COLORS.neutral} strokeWidth="0"/>
				<ellipse rx="960.274331" ry="104.637492" transform="translate(960.274331 229.522135)" fill={color || COLORS.neutral} strokeWidth="0"/>
			</g>
		</svg>
	);
};

export default CurvedBg
