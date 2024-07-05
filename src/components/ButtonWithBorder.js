import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import baseStyles, { textBlk } from './baseStyleSheet'

const ButtonWithBorder = ({ onPress=()=>{},isDisabled=false, active=false, text='' }) => {
  return (
    <View style={{ paddingVertical: 16, marginRight: 8 }} >
            <TouchableOpacity onPress={!isDisabled ? onPress : null}
                style={[{
                    borderColor: active ? 'rgba(0, 149, 95, 1)' : 'rgba(238, 238, 238, 1)', paddingVertical: 6,
                    backgroundColor:active ? '#fff': 'rgba(238, 238, 238, 1)',
                    borderWidth: active ? 0.5 : 1,
                    alignSelf: 'flex-start', borderRadius: 20,
                    paddingHorizontal: 8, 
                }]} >
                <View style={[baseStyles.flxRowAliCnt]} >
                    <Text style={[textBlk(12,400), { marginLeft: active ? 2 : 0, color: active? 'rgba(0, 149, 95, 1)' : 'rgba(64, 64, 64, 1)' }]} >{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

export default ButtonWithBorder