import { View, Text } from 'react-native'
import React from 'react'
import { textOffWhite } from '../../components/baseStyleSheet'
import InputBox from '../../components/InputBox'

const InputView = ({inputTitle='', placeholderText='', value='', setValue=()=>{}, isPassword=false}) => {
    return (
        <View style={{marginVertical:8}} >
            <Text style={[textOffWhite(12, 400)]} >{inputTitle}</Text>
            <InputBox placeholderText={placeholderText} value={value} setValue={setValue} isPassword={isPassword} />
        </View>
    )
}

export default InputView