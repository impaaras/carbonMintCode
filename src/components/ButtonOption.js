import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import baseStyles from './baseStyleSheet'

const ButtonOption = ({isSelected=false, text='', onPress=()=>{} }) => {
  return (
    <TouchableOpacity onPress={onPress}
    style={{
        marginVertical:10,
        borderWidth:1,
        backgroundColor:isSelected ? baseStyles.yellowLight:null,
        borderColor:isSelected ? baseStyles.yellow :baseStyles.gry, borderRadius:50, paddingHorizontal:20,paddingVertical:16
    }} >
      <Text style={[baseStyles.textBlkFs14Fw300]} >{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonOption

const styles = StyleSheet.create({})