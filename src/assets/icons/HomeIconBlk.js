import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIconBlk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      scale={1.1}
      fill="#000"
      d="m17.096 8.608-6.25-5.897a1.25 1.25 0 0 0-1.69-.009l-.01.009-6.242 5.897a1.25 1.25 0 0 0-.404.92v7.223A1.25 1.25 0 0 0 3.75 18H7.5a1.25 1.25 0 0 0 1.25-1.25V13h2.5v3.75A1.25 1.25 0 0 0 12.5 18h3.75a1.25 1.25 0 0 0 1.25-1.25V9.528a1.25 1.25 0 0 0-.404-.92Zm-.846 8.143H12.5V13a1.25 1.25 0 0 0-1.25-1.25h-2.5A1.25 1.25 0 0 0 7.5 13v3.75H3.75V9.528l.009-.008L10 3.626l6.242 5.893.009.007-.001 7.225Z"
    />
  </Svg>
)
export default HomeIconBlk
