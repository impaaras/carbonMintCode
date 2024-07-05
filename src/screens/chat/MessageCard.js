import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textwhite } from '../../components/baseStyleSheet'

const MessageCard = ({messageData={},}) => {
    const isCurrentUserMessage = !!messageData?.isBotMessage
    console.log(isCurrentUserMessage)
  return (
    <View style={{backgroundColor:isCurrentUserMessage? 'rgba(0, 0, 0, 0.48)' : 'rgba(0, 0, 0, 0.46)',alignSelf:isCurrentUserMessage ? 'flex-start' :'flex-end', borderRadius:10, marginVertical:8, paddingVertical:8, paddingHorizontal:16, width:'60%'}} >
      <Text style={[textwhite(14,400)]} >{messageData?.message}</Text>
    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({})