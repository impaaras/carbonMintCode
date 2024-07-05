import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({placeholderText='', value='', setValue=()=>{}, isPassword=false,useLightTheme=false }) => {
  return (
    <View style={{marginVertical:4,}} >
      <TextInput
        placeholderTextColor={useLightTheme? 'rgba(207, 204, 204, 1)' :'rgba(207, 204, 204, 0.5)'}
        placeholder={placeholderText}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={(txt)=>setValue(txt)}
       style={[{
        color:useLightTheme? '#000' : '#fff',
        fontSize:14,
        height:40,
        paddingHorizontal:8, paddingVertical:4, borderRadius:8, borderColor:useLightTheme? 'rgba(242, 233, 233, 1)':'rgba(131, 131, 131, 1)', width:'100%', borderWidth:1
        }]} />
    </View>
  )
}

export default InputBox