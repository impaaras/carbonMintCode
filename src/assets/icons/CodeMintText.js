import { View, Text } from 'react-native'
import React from 'react'
import baseStyles from '../../components/baseStyleSheet'

const CodeMintText = ({textColor=0}) => {
    return (
        <Text>
            <Text style={[baseStyles.textBlkFs23Fw700, {color : textColor==1 ? '#fff' : null }]} >Carbon</Text>
            <Text style={[baseStyles.textGreenFs23Fw700]} >Mint</Text>
        </Text>
    )
}

export default CodeMintText