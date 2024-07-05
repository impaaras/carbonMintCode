import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Code2GreenCircle from '../assets/icons/Code2GreenCircle'
import baseStyles from '../components/baseStyleSheet'
import HomeIconBlk from '../assets/icons/HomeIconBlk'
import MicrosoftExcelLogo from '../assets/icons/MicrosoftExcelLogo'
import ReadCvLogo from '../assets/icons/ReadCvLogo'
import Lightbulb from '../assets/icons/Lightbulb'
import Target from '../assets/icons/Target'
import Gift from '../assets/icons/Gift'
import { currentAppVersion } from '../utilityFiles/appVersion'
import { handleLogout, scale } from '../utilityFunctions/utilityFunctions'
import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { useDispatch } from 'react-redux'

const DrawerUI = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handleNavigation = (pageToGo) => {
        navigation.navigate(pageToGo)
    }
    const handleLogoutFn = () => {
        navigation.navigate('HandlePageToRender')
        handleLogout(dispatch)
    }
    const handleRetakeAssessment = () => {
        navigation.navigate('HomeQuestion')
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: scale(16), flexDirection: 'row', paddingHorizontal: scale(16), }} >
                <Code2GreenCircle />
                <Text>
                    <Text style={[baseStyles.textBlkFs23Fw700]} >CARBON</Text>
                    <Text style={[baseStyles.textGreenFs23Fw700]} >MINT</Text>
                </Text>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1, }} >

                <View style={{ paddingHorizontal: scale(16), }} >
                    <TouchableOpacity onPress={() => handleNavigation('HomePage')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <HomeIconBlk />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Home</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => handleNavigation('AssessmentDetails')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} > */}
                    <TouchableOpacity onPress={() => handleRetakeAssessment()} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <MicrosoftExcelLogo />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Assessment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigation('Report')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <ReadCvLogo />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Report</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigation('OffsetTipsAndSuggestion')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <Lightbulb />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Offset tips</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigation('OffsetOptions')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <Target />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Offset options</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigation('Rewards')} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginTop: scale(12) }]} >
                        <Gift />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Rewards</Text>
                    </TouchableOpacity>


                </View>

                <View>
                    <TouchableOpacity onPress={() => handleLogoutFn()} style={[baseStyles.flxRowAliCnt, baseStyles.borderBottomGry, { marginBottom: scale(8), paddingBottom: scale(10), paddingHorizontal: scale(16), }]} >
                        <LogoutIcon />
                        <Text style={[baseStyles.textBlkFs16Fw400, { marginLeft: scale(4) }]} >Logout</Text>
                    </TouchableOpacity>

                    <View style={[{ alignSelf: 'center', marginBottom: scale(14), }]} >
                        <Text>App Version {currentAppVersion}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default DrawerUI

const styles = StyleSheet.create({})