import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from '../../utilityFunctions/utilityFunctions'
import { textBlk, textwhite } from '../../components/baseStyleSheet'

const ImageCard = ({img='', title=''}) => {
    return (
        <View style={{ marginVertical: scale(8), marginRight:scale(10) }} >
            <ImageBackground borderRadius={scale(12)} source={img}
                style={styleSheet.imageSize}>

                <View style={[styleSheet.imageView]} >
                    <Text style={textwhite(16, 600)} >{title}</Text>
                </View>

                <View style={styleSheet.imageViewBottom} >
                    <Text style={[textwhite(12, 400)]} >Total offset %age</Text>
                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 1)', alignSelf: 'flex-start', paddingVertical: scale(4), paddingHorizontal: scale(8), borderRadius: scale(12) }} >
                        <Text style={[textwhite(10, 600), {}]} >10 KgCO2</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default ImageCard

const styleSheet = StyleSheet.create({
    imageSize: {
        height: scale(122),
        width: scale(155),
    },
    imageView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.42)',
        paddingVertical: scale(8),
        paddingHorizontal: scale(8),
        // borderRadius: scale(12)
        borderTopLeftRadius:scale(12),
        borderTopRightRadius:scale(12)
    },
    imageViewBottom: {
        paddingVertical: scale(8),
        paddingHorizontal: scale(8),
        backgroundColor: 'rgba(255, 255, 255, 0.18)'
    }
})