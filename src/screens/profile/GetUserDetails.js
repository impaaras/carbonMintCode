import { View, Text, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { textBlk } from '../../components/baseStyleSheet'
import InputWithTitle from '../../components/InputWithTitle'
import GreenButton from '../../components/GreenButton'
import HorizontalLine from '../../components/HorizontalLine'
import { showToast } from '../../utilityFunctions/utilityFunctions'
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../redux/slicer'

const GetUserDetails = () => {
  const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [disableButton, setDisableButton] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation()



  const user = useSelector(state => state?.appData?.user)
  const route = useRoute()
  const { userType } = route.params
  const email = user?.email
  console.log('email ----> ', email)


  const handleSaveButton = () => {
    setDisableButton(true)
    const userDetails = {
      name: name,
      email: email,
      companyName: companyName,
      phoneNumber: phoneNumber,
      userType: userType,
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: firestore.FieldValue.serverTimestamp(),
      avatarUrl: ''
    }

    if (!name) {
      showToast('Please enter name')
    } else if (!companyName) {
      showToast('Please enter companyName')
    } else if (phoneNumber.length != 10) {
      showToast('Please enter a valid phone number')
    } else {
      setDisableButton(false)
      try {
        firestore().collection('users').doc(email).set(userDetails).then(()=>{
          firestore().collection('users').doc(email).get().then((userDataTemp)=>{
            const userDataTemp1 = userDataTemp.data();
            console.log('userData------------------->', userDataTemp1)
            dispatch(setUserData(JSON.parse(JSON.stringify(userDataTemp1))))
            navigation.navigate('HandlePageToRender')
          })
          showToast('Saved')
        })
      } catch (error) {
        showToast('try again')
        console.log(error)
      }
    }
    setDisableButton(false)
  }

  return (
    <View style={{ paddingTop: 40 }} >
      <HorizontalLine dark={true} />
      <View style={{ paddingHorizontal: 16 }} >
        <View style={{ marginTop: 10 }} >
          <Text style={[textBlk(24, 600)]} >Let us know about you!</Text>
        </View>

        <View style={{ marginTop: 40 }} >
          <InputWithTitle inputTitle='Full name' placeholderText='Faraz' useLightTheme setValue={setName} value={name} />
          {/* <InputWithTitle inputTitle='Email' placeholderText='abc@gmail.com' useLightTheme /> */}
          <InputWithTitle inputTitle='Company Name' placeholderText='abc' useLightTheme setValue={setCompanyName} value={companyName} />
          <InputWithTitle inputTitle='Phone number' placeholderText='1234567890' useLightTheme setValue={setPhoneNumber} value={phoneNumber} />

          <GreenButton onPress={handleSaveButton} text='Save' isDisabled={disableButton} />
        </View>
      </View>
    </View>
  )
}

export default GetUserDetails