import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CaretRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m17.03 12.531-7.5 7.5a.75.75 0 1 1-1.06-1.061L15.44 12 8.47 5.031A.75.75 0 1 1 9.53 3.97l7.5 7.5a.75.75 0 0 1 0 1.061Z"
    />
  </Svg>
)
export default CaretRight
