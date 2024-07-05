import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
const SearchIcon = (props) => (
    <View style={{height:20,width:20,}} >
  <Svg >
    <Path scale={1.2}
      fill="#000"
      d="m14.354 14.146-3.13-3.128a5.507 5.507 0 1 0-.707.707l3.13 3.129a.5.5 0 0 0 .707-.708ZM2.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
    />
  </Svg>

    </View>
)
export default SearchIcon
