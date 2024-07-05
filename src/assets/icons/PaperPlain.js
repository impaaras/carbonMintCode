import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
const SvgComponent = () => (
    <View style={{height:25, width:25,}} >
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
            fill="#028CF3"
            d="M20.386 4.31v.014l-5.002 16.494a1.364 1.364 0 0 1-1.321.995 1.362 1.362 0 0 1-1.24-.787l-3.068-6.479a.344.344 0 0 1 .068-.39l4.92-4.921a.687.687 0 0 0-.972-.972l-4.928 4.92a.343.343 0 0 1-.39.068L2.007 10.2a1.407 1.407 0 0 1-.82-1.332 1.365 1.365 0 0 1 .995-1.248l16.495-5.001h.013a1.375 1.375 0 0 1 1.696 1.693Z"
            />
        </Svg>

    </View>
)
export default SvgComponent