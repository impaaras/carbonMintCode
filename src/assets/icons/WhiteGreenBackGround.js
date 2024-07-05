import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const WhiteGreenBackGround = ({children}) => {
  return (
    <LinearGradient colors={['rgba(255, 255, 255, 0)', '#fff', 'rgba(182, 247, 229, 0.26) 281.19%)']} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  )
}

export default WhiteGreenBackGround

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});