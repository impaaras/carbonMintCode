import { View } from 'react-native'
import React from 'react'
const HorizontalLine = ({dark=false}) => {
  return (
    <View style={{borderBottomColor:dark ? 'rgba(0, 0, 0, 0.12)': '#EEEEEE', borderWidth:0.6, opacity:0.4}} />
  )
}
export default HorizontalLine
