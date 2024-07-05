import { View, Text } from 'react-native'
import React, { useState } from 'react'
import baseStyles, { textBlk, textGreen } from '../../components/baseStyleSheet'
import InputWithTitle from '../../components/InputWithTitle'
import GreenButton from '../../components/GreenButton'
import HorizontalLine from '../../components/HorizontalLine'

const UserProfile = () => {
  const [showEditButton, setShowEditButton] = useState(false)
  const handleEditProfile =()=> setShowEditButton(true)
  const handleSaveBtn =()=>{
    setShowEditButton(false)
  }
  
  return (
    <View style={{paddingTop:40}} >
      <HorizontalLine dark={true} />
      <View style={[baseStyles.flxColSpcBtwn, {paddingHorizontal:16,height:'100%',}]} >
        <View>
          <View style={[baseStyles.flxRowSpcBtwn,{marginTop:10}]} >
            <Text style={[textBlk(24,600)]} >Your Profile</Text>
            {!showEditButton && <Text style={[textGreen(14,400)]} onPress={handleEditProfile} >Edit Profile</Text>}
          </View>

          <View style={[baseStyles.allCntr,{paddingVertical:24}]} >
            <View style={{borderRadius:90, height:100, width:100, backgroundColor:'rgba(217, 217, 217, 1)'}} />
          </View>

          <View style={{marginTop:16}} >
            <InputWithTitle inputTitle='Full name' placeholderText='Faraz' useLightTheme />
            <InputWithTitle inputTitle='Email' placeholderText='abc@gmail.com' useLightTheme />
            <InputWithTitle inputTitle='Company Name' placeholderText='abc' useLightTheme />
            <InputWithTitle inputTitle='Phone number' placeholderText='1234567890' useLightTheme />
          </View>
        </View>

        {!!showEditButton && <GreenButton text='Save' onPress={handleSaveBtn} />}

      </View>
    </View>
  )
}

export default UserProfile