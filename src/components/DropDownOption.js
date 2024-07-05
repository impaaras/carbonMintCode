import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import baseStyles from './baseStyleSheet'
import DropDown from '../assets/icons/DropDown'

const DropDownOption = ({ text = 'abc', onPress = () => { }, isSelected = false }) => {
    // DropDown
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                marginVertical: 10,
                borderWidth: 1, flexDirection:'row', justifyContent:'space-between',
                backgroundColor: isSelected ? baseStyles.yellowLight : null,
                borderColor: isSelected ? baseStyles.yellow : baseStyles.gry, borderRadius: 50, paddingHorizontal: 20, paddingVertical: 16
            }} >
            <Text style={[baseStyles.textBlkFs14Fw300]} >{text}</Text>
            <DropDown />
        </TouchableOpacity>
    )
}

export default DropDownOption