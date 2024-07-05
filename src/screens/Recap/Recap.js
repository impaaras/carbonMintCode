import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import baseStyles, { textBlk, textOrange } from '../../components/baseStyleSheet'
import TabButton from '../../components/TabButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import { fixedToPoint, showToast, updateData } from '../../utilityFunctions/utilityFunctions'
import { useDispatch, useSelector } from 'react-redux'

const Recap = ({ dataToSubmit = {}, handleCategoryClick = () => { }, isSubmiting = false, setIsSubmiting = () => { } }) => {
  const route = useRoute()
  const { email = null } = useSelector(state => state?.appData?.userData)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handleConfirmSubmit = async () => {
    setIsSubmiting(true)
    if (dataToSubmit) {
      try {
        const promise1 = await firestore().collection('userAssessments').doc().set(dataToSubmit)
        const promise2 = await firestore().collection('users').doc(email).set({isQuestionsAttempted: true},{ merge: true})

        Promise.all([promise1, promise2]).then(()=>{
          updateData(email, dispatch, )
          showToast('submit successful')
          setIsSubmiting(false)
          navigation.navigate('HandlePageToRender')
        })

      } catch (e) {
        setIsSubmiting(false)
        console.log(e)
        showToast('Try again later')
      }
    }
  }

  const totalPoints = fixedToPoint(dataToSubmit?.totalPoints, 2)
  const homePoints = fixedToPoint(dataToSubmit?.homePoints, 2)
  const transportPoints = fixedToPoint(dataToSubmit?.transportPoints, 2)
  const shoppingPoints = fixedToPoint(dataToSubmit?.shoppingPoints, 2)
  const foodPoints = fixedToPoint(dataToSubmit?.foodPoints, 2)

  const maxPoints = Math.max(homePoints, transportPoints, shoppingPoints, foodPoints) || 0
  const homeHeight = parseInt((homePoints / maxPoints) * 100) || 0
  const transportHeight = parseInt((transportPoints / maxPoints) * 100) || 0
  const shoppingHeight = parseInt((shoppingPoints / maxPoints) * 100) || 0
  const foodHeight = parseInt((foodPoints / maxPoints) * 100) || 0

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }} >
      <DrawerNavbar text='Recap' />
      <HorizontalLine />

      {/* YELLOW TEXT  */}
      <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'center', width: '100%', }} >

        <View style={{ backgroundColor: '#FFBF030F', alignSelf: 'flex-start', paddingHorizontal: 48, paddingVertical: 12, borderRadius: 14 }} >
          <View style={{ flexDirection: 'row', }} >
            <View>
              <Text style={[textOrange(24, 700)]} >{totalPoints}</Text>
            </View>
            <View>
              <Text style={[textOrange(16, 700)]}>{' tonnes CO2e'}</Text>
            </View>
          </View>
          <Text style={[textBlk(14, 400), { textAlign: 'center' }]} >Carbon Footprint</Text>
        </View>
      </View>

      {/* CHART BARS  */}
      <View style={[baseStyles.allCntr]} >
        <View style={[{ marginTop: 40, flexDirection: 'row' }]} >
          {[0, 0, 0, 0].map((_, i) => {
            const color = i == 0 ? '#05A77A' : i == 1 ? '#F85E00' : i == 2 ? '#A41623' : '#1C448E'
            const headingText = i == 0 ? 'Home' : i == 1 ? 'Trans...' : i == 2 ? 'Shop...' : 'Food'
            const value = i == 0 ? `${homePoints}T` : i == 1 ? `${transportPoints}T` : i == 2 ? `${shoppingPoints}T` : `${foodPoints}T`
            const height = i == 0 ? homeHeight : i == 1 ? transportHeight : i == 2 ? shoppingHeight : foodHeight

            return (
              <View key={i} style={{ alignItems: 'center', marginRight: 14, justifyContent: 'flex-end' }} >
                <View style={{ height: (height * 2), backgroundColor: color, width: 50 }} />
                <Text style={[textBlk(12, 400), { color: '#969696', marginTop: 4 }]} >{headingText}</Text>
                <Text style={[textBlk(12, 500), { marginTop: 4 }]} >{value}</Text>
              </View>
            )
          })}
        </View>
      </View>
      {/* ATTEMPTED QUESTIONS  */}

      <View style={{ marginTop: 48 }} >
        <View style={{ paddingHorizontal: 24, marginVertical: 8 }} >
          <Text style={[textBlk(16, 500)]} >Take a look at your attempted questions!</Text>
        </View>

        {[0, 0, 0, 0].map((_, i) => {
          const questionsCategory = { 0: 'Home', 1: 'Transportation', 2: 'Shopping', 3: 'Food' }
          return (
            <TouchableOpacity onPress={() => handleCategoryClick(i)} key={i} style={{ backgroundColor: i % 2 == 0 ? '#fff' : '#F8F8F8', paddingHorizontal: 24, }} >
              <View style={[baseStyles.flxRowSpcBtwn, { paddingVertical: 16 }]} >
                <Text style={[textBlk(14, 400)]} >{questionsCategory[i]}</Text>
                <Image style={{ height: 16, width: 16 }} source={require('../../assets/icons/CaretRight.png')} />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>

      {/* CONFIRM ASSESSMENT  */}
      <View style={[baseStyles.allCntr, { marginTop: 30 }]} >
        <TabButton isSelected={true} text='Confirm Assessment' onPress={handleConfirmSubmit} isDisabled={isSubmiting} />
      </View>

    </ScrollView>
  )
}

export default Recap
