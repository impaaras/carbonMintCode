import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Calendar = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M12.667 3.166H3.333C2.597 3.166 2 3.763 2 4.499v9.334c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V4.499c0-.736-.597-1.333-1.333-1.333ZM10.667 1.834v2.667M5.333 1.834v2.667M2 7.166h12"
    />
  </Svg>
)
export default Calendar