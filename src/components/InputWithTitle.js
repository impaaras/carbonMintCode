import { View, Text } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
import { textBlk, textOffWhite } from './baseStyleSheet'

const InputWithTitle = ({inputTitle='', placeholderText='', value='', setValue=()=>{}, isPassword=false, useLightTheme=false}) => {
    return (
        <View style={{marginVertical:8}} >
            <Text style={[useLightTheme? textBlk(12,400):textOffWhite(12, 400)]} >{inputTitle}</Text>
            <InputBox useLightTheme={useLightTheme} placeholderText={placeholderText} value={value} setValue={setValue} isPassword={isPassword} />
        </View>
    )
}

export default InputWithTitle