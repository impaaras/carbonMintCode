import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { textwhite } from '../../components/baseStyleSheet'

const ChatInput = ({onChange=()=>{}, value='', onFocus=()=>{} }) => {
  return (
    <View style={{flex:1}} >
      <TextInput
      onChangeText={onChange}
      onFocus={onFocus}
      value={value}
      placeholder='Write..'
      placeholderTextColor={'#fff'}
      style={[{
        fontSize:14,
        borderRadius:30,
        height:40,
        paddingHorizontal:16,
        color:'#fff', 
        backgroundColor:'rgba(0, 0, 0, 0.24)'
      }]}
       />
    </View>
  )
}

export default ChatInput
