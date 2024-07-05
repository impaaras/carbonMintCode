import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
export default (props) => (
  <View style={{height:20, width:20,}} >
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Path
        fill="#fff"
        d="M16.25 11.25a1.233 1.233 0 0 1-.814 1.167L11.4 13.902l-1.485 4.032a1.244 1.244 0 0 1-2.334 0l-1.488-4.028-4.033-1.484a1.244 1.244 0 0 1 0-2.335l4.035-1.484L7.58 4.571a1.244 1.244 0 0 1 2.335 0l1.484 4.035 4.032 1.485a1.233 1.233 0 0 1 .819 1.159Zm-4.375-7.5h1.25V5a.625.625 0 1 0 1.25 0V3.75h1.25a.625.625 0 1 0 0-1.25h-1.25V1.25a.625.625 0 1 0-1.25 0V2.5h-1.25a.625.625 0 1 0 0 1.25Zm6.875 2.5h-.625v-.625a.625.625 0 1 0-1.25 0v.625h-.625a.625.625 0 1 0 0 1.25h.625v.625a.625.625 0 1 0 1.25 0V7.5h.625a.625.625 0 1 0 0-1.25Z"
      />
    </Svg>

  </View>
)

