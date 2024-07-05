import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
const Binoculars = () => (
    <View style={{height:30, width:33}} >
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
            fill="#fff"
            d="M29.652 18.988v-.012a6.052 6.052 0 0 0-.297-.69l-5.196-11.81a.998.998 0 0 0-.21-.306 4 4 0 0 0-5.657 0 1 1 0 0 0-.292.705v3.126h-4V6.875a1 1 0 0 0-.293-.707 4 4 0 0 0-5.657 0 1 1 0 0 0-.209.305L2.65 18.286a6.057 6.057 0 0 0-.298.688v.014a6 6 0 0 0 11.29 4.064 5.934 5.934 0 0 0 .363-2.074V12h4v8.98c-.004.707.119 1.409.362 2.073a6 6 0 0 0 11.29-4.064l-.005-.001ZM11.76 22.363a4 4 0 0 1-7.525-2.714l.226-.516A4 4 0 0 1 12 20.985V21c0 .467-.082.93-.241 1.368v-.005Zm13.616 2.396A3.998 3.998 0 0 1 20 21v-.013a4 4 0 0 1 7.54-1.848l.226.517a4 4 0 0 1-2.391 5.103Z"
            />
        </Svg>

    </View>
)
export default Binoculars
