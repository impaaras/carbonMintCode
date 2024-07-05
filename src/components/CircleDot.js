import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import baseStyles from './baseStyleSheet'

const CircleDot = ({isSelected=false}) => {
  return (
    <View style={{height:8, width:8, backgroundColor:isSelected ? baseStyles.green: baseStyles.gry , borderRadius:50,marginHorizontal:2}} />
  )
}

export default CircleDot

const styles = StyleSheet.create({})