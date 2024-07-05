import { View, Text } from 'react-native'
import React from 'react'
import baseStyles, { textBlk } from '../../components/baseStyleSheet'
import { scale } from '../../utilityFunctions/utilityFunctions'
import TabButton from '../../components/TabButton'

const TipsCard = ({topic='', desc='', score=''}) => {
    return (
        <View style={[baseStyles.borderGry, { width: '100%', borderRadius: 8, paddingHorizontal: scale(8), paddingVertical: scale(4), marginVertical:scale(4)}]} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical:scale(4) }} >
                <Text style={[textBlk(10), { color: 'rgba(118, 118, 118, 1)' }]} >ACTIVITY</Text>
                <View style={{ backgroundColor: 'rgba(232, 245, 255, 1)', paddingVertical: scale(4), paddingHorizontal: scale(4) }} >
                    <Text style={[textBlk(10), { color: 'rgba(28, 68, 142, 1)' }]}>{score} KgCO2  </Text>
                </View>
            </View>

            <View>
                <Text style={[textBlk(12),]} >{topic + " "+ desc}</Text>
            </View>

            <View style={{flexDirection:'row-reverse',}}>
                <View style={{flexDirection:'row',}} >
                    <TabButton 
                        size="small"
                        onPress={()=>{}}
                        text={'Do it yourself!'}
                        isSelected={true}
                    />
                    <TabButton 
                        size="small"
                        onPress={()=>{}}
                        text={'Need Service?'}
                        isSelected={true}
                    />
                </View>
            </View>
        </View>
    )
}

export default TipsCard