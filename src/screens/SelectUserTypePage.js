import { View, Text, Image, StyleSheet, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerNavbar from './navbar/DrawerNavbar'
import HorizontalLine from '../components/HorizontalLine'
import baseStyles from '../components/baseStyleSheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DotOption from '../components/DotOption'
import { BuildingsBlack, BuildingsGreen } from '../assets/icons/Buildings'
import { Candidate, CandidateBlack } from '../assets/icons/Candidate'
import CaretRight from '../assets/icons/CaretRight'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native';


const SelectUserTypePage = () => {
  const [selectedProfile, setSelectedProfile] = useState('individual')
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      const backhandler = BackHandler.addEventListener('hardwareBackPress', () => true);
      return () => {
        backhandler.remove();
      };
    }, [])
  );
  
  const handleUserNavigate = ()=>{
    navigation.navigate('GetUserDetails', {userType : selectedProfile, })
  }

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }} >
      <DrawerNavbar />
      <HorizontalLine />

      <View style={{ marginTop: '15%', }} >
        <Text style={[baseStyles.textBlkFs24Fw600, { alignSelf: 'center' }]} >Select User Type</Text>

        <View style={{ marginTop: '12%', paddingHorizontal: 16 }} >

          <TouchableOpacity onPress={() => setSelectedProfile('individual')} style={[baseStyles.flxRowAliCnt, baseStyles.flxRowSpcBtwn, selectedProfile == 'individual' ? style.buttonGreenActive : style.buttonGryInActive,]} >
            <View style={[baseStyles.flxRowSpcBtwn]} >
              {selectedProfile == 'individual' ? <Candidate /> : <CandidateBlack />}
              <Text style={[selectedProfile == 'individual' ? baseStyles.testGrnFs18Fw600 : baseStyles.testBlkFs18Fw600, { marginLeft: 4 }]} >Individual</Text>
            </View>
            <DotOption isSelected={selectedProfile == 'individual'} />
          </TouchableOpacity>

          <View style={{ height: 40 }} ></View>

          <TouchableOpacity onPress={() => setSelectedProfile('business')} style={[baseStyles.flxRowAliCnt, baseStyles.flxRowSpcBtwn, selectedProfile == 'individual' ? style.buttonGryInActive : style.buttonGreenActive,]} >
            <View style={[baseStyles.flxRowSpcBtwn]} >
              {selectedProfile == 'individual' ? <BuildingsBlack /> : <BuildingsGreen />}
              <Text style={[selectedProfile == 'individual' ? baseStyles.testBlkFs18Fw600 : baseStyles.testGrnFs18Fw600, , { marginLeft: 4 }]} >Business</Text>
            </View>
            <DotOption isSelected={selectedProfile !== 'individual'} />
          </TouchableOpacity>

        </View>

        <View style={{height:'100%', alignItems:'center', paddingTop:'75%'}} >
          <TouchableOpacity onPress={handleUserNavigate} style={[baseStyles.allCntr,{height:45, width:45, borderRadius:10, backgroundColor:baseStyles.greenLight}]} >
            <CaretRight/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SelectUserTypePage

const style = StyleSheet.create({
  buttonGreenActive: { borderWidth: 1, borderColor: '#00955F', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14 },
  buttonGryInActive: { borderWidth: 1, borderColor: '#F6F6F6', backgroundColor: '#F6F6F6', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14 },
})