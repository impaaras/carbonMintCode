import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WhiteCircleTick = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      scale={1.1}
      d="M6 .313a5.687 5.687 0 1 0 0 11.374A5.687 5.687 0 0 0 6 .313Zm2.497 4.684L5.435 8.06a.437.437 0 0 1-.62 0L3.503 6.747a.438.438 0 0 1 .619-.619l1.003 1.003 2.753-2.753a.438.438 0 0 1 .619.619Z"
    />
  </Svg>
)
export default WhiteCircleTick
