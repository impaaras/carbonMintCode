import { View, Text } from 'react-native'
import React from 'react'
import baseStyles from './baseStyleSheet'

const DotOption = ({isSelected=false}) => {
  return (
    <View style={[baseStyles.allCntr, {height:20, width:20, borderColor: isSelected ? baseStyles.green:'#000000', borderWidth:1.8, borderRadius:50}]} >
      {isSelected && <View style={{height:13, width:13, borderRadius:50, backgroundColor:isSelected?baseStyles.green:'#000000'}} ></View>}
    </View>
  )
}

export default DotOption