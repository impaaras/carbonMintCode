import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import baseStyles, { textBlk } from './baseStyleSheet'
import WhiteCircleTick from '../assets/icons/WhiteCircleTick'

const TabButton = ({size='medium', text = '', isCompleted = false, isDisabled = false, isSelected = false, onPress = () => { } }) => {
    return (
        <View style={{ paddingVertical: 16, marginRight: 8 }} >
            <TouchableOpacity onPress={isDisabled ? null : onPress}
                style={[{
                    borderColor: '#D9D9D9', paddingVertical: 4,
                    borderWidth:isDisabled ? 0 : isSelected ? 0.5 : 1,
                    alignSelf: 'flex-start', borderRadius: 20,
                    paddingHorizontal:size=='small' ? 8 : 16, backgroundColor:isDisabled ? '#EEE': isSelected ? baseStyles.green : null
                }]} >
                <View style={[baseStyles.flxRowAliCnt]} >
                    {isCompleted && <WhiteCircleTick />}
                    <Text style={[textBlk(size=='small' ? 10 : 16, 400), { marginLeft: isSelected ? 2 : 0, color: isDisabled? baseStyles.gryDark2 : isSelected ? '#fff' : '#000' }]} >{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TabButton

const styles = StyleSheet.create({})