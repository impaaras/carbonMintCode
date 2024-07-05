import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
const DropDown = () => (
    <View style={{height:20, width:20 }} >
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
            fill="#000"
            stroke="#000"
            strokeWidth={0.333}
            d="M12.804 7.5h-6.47A.667.667 0 0 0 5.8 8.567l3.176 4.235a.667.667 0 0 0 1.06.009l3.294-4.235a.667.667 0 0 0-.526-1.076Z"
            />
        </Svg>
    </View>
)
export default DropDown
