import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashBackground from '../../assets/icons/SplashBackground'
import { textwhite } from '../../components/baseStyleSheet'
import CodeMintText from '../../assets/icons/CodeMintText'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    
    return (
        <SplashBackground>
            <View style={{marginTop:80, paddingHorizontal:16}} >
                <CodeMintText textColor={1} />
                <Text style={[textwhite(46,600)]} >Sustainability Made Simple</Text>
            </View>
        </SplashBackground>
    )
}

export default Splash