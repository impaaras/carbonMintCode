import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
const DownIcon = () => (
  <View style={{height:12, width:14, }} >
  <Svg >
    <Path 
      fill="#fff"
      d="M3.128 5.628a.438.438 0 0 1 .619 0l3.628 3.628 3.628-3.628a.438.438 0 0 1 .619.619l-3.938 3.937a.439.439 0 0 1-.619 0L3.128 6.247a.438.438 0 0 1 0-.62Z"
    />
  </Svg>

  </View>
)
export default DownIcon
