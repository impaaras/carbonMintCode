import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Target = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M17.334 6.498a8.133 8.133 0 1 1-2.047-2.67l1.77-1.771a.625.625 0 0 1 .885.884l-7.5 7.5a.625.625 0 1 1-.884-.884l2.165-2.166a3.125 3.125 0 1 0 1.396 2.43.625.625 0 0 1 1.25-.071 4.375 4.375 0 1 1-1.748-3.254l1.777-1.777a6.866 6.866 0 1 0 1.808 2.318.625.625 0 0 1 1.128-.54Z"
    />
  </Svg>
)

export default Target