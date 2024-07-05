import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import baseStyles, { textBlk, textOrange, textwhite } from '../../components/baseStyleSheet'
import TreeLeaf from '../../assets/icons/TreeLeaf'
import PieChartScreen from '../utility/PieChartScreen'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { fixedToPoint, scale, showToast, uploadOrUpdateAcessmentQuestion } from '../../utilityFunctions/utilityFunctions'
import { processChatMessage } from '../../apis/baseApi'
import { useSelector, useDispatch } from 'react-redux';
import { questions } from '../../utilityFunctions/questionsData'
import firestore from '@react-native-firebase/firestore';
import LoadingScreen from '../../components/LoadingScreen'
import ChatPage from './ChatPage'
import ButtonWithBorder from '../../components/ButtonWithBorder'
import RetakeButtonSvg from '../../assets/icons/RetakeButtonSvg'
import MonthsDropDown from '../../components/MonthsDropDown'


const HomePage = () => {
  const navigation = useNavigation()
  const [userAnalytics, setUserAnalytics] = useState()
  const { userData = null } = useSelector(state => state?.appData)
  const [loadingData, setLoadingData] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const vh = Dimensions.get('window').height
  const isFocused = useIsFocused()

  // console.log('userData -=-=-=-=-=-=>', userData?.email)

  const handleFetchAnalytics = () => {
    setLoadingData(true)

    var currentYear = new Date().getFullYear();
    console.log('selectedMonth', selectedMonth)
    var startDate = new Date(currentYear, +selectedMonth-1, 1, 0, 0, 0); // Start of the given month
    var endDate = new Date(currentYear, +selectedMonth, 0, 23, 59, 59); // End of the given month

    firestore().collection("userAssessments")
      .where("email", "==", userData?.email)
      .where("createdAt", ">=", startDate)
      .where("createdAt", "<=", endDate)
      .get()
      .then((querySnapshot) => {
        let homePoints = 0, transportPoints = 0, shoppingPoints = 0, foodPoints = 0, totalPoints=0;
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          homePoints += data?.homePoints
          transportPoints += data?.transportPoints
          shoppingPoints += data?.shoppingPoints
          foodPoints += data?.foodPoints
          totalPoints += data?.totalPoints
        });
        setLoadingData(false)
        setUserAnalytics({homePoints, transportPoints, shoppingPoints, foodPoints, totalPoints});
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  useEffect(() => {
    handleFetchAnalytics()
  }, [selectedMonth,isFocused])

  const handleRetakeAssessment = () => {
    navigation.navigate('HomeQuestion')
  }
  const navigateToRewardScreen = () => {
    navigation.navigate('Rewards')
  }
  const navigateToOffsetOption = () => {
    navigation.navigate('OffsetOptions')
  }
  const navigateToOffsetTips = () => {
    navigation.navigate('OffsetTipsAndSuggestion')
  }
  const updateQuestions = () => {
    uploadOrUpdateAcessmentQuestion(questions);
  }

  const totalPoints = fixedToPoint(userAnalytics?.totalPoints || 0, 2)
  const homePoints = fixedToPoint(userAnalytics?.homePoints || 0, 2)
  const transportPoints = fixedToPoint(userAnalytics?.transportPoints || 0, 2)
  const shoppingPoints = fixedToPoint(userAnalytics?.shoppingPoints || 0, 2)
  const foodPoints = fixedToPoint(userAnalytics?.foodPoints || 0, 2)

  const maxPoints = Math.max(userAnalytics?.homePoints, userAnalytics?.transportPoints, userAnalytics?.shoppingPoints, userAnalytics?.foodPoints) || 0
  const pieChartAnalytics = {
    homeHeight: parseInt((userAnalytics?.homePoints / maxPoints) * 100) || 0,
    transportHeight: parseInt((userAnalytics?.transportPoints / maxPoints) * 100) || 0,
    shoppingHeight: parseInt((userAnalytics?.shoppingPoints / maxPoints) * 100) || 0,
    foodHeight: parseInt((userAnalytics?.foodPoints / maxPoints) * 100) || 0
  }

  if (loadingData) return <LoadingScreen showAsLoadingScreen={false} />

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <DrawerNavbar text='Home' />
      <HorizontalLine />

      {/* <Text onPress={updateQuestions} >clik to upload Questions</Text> */}

      <ScrollView style={{marginBottom:scale(150)}} >

        <View style={{ paddingHorizontal: 16, borderRadius: 16, marginTop: 16, marginBottom: 8, }} >
          <View style={[{ backgroundColor: '#028CF3', position: "relative", paddingVertical: 8, borderRadius: 14, paddingVertical: 12, paddingHorizontal: 16 },]} >
            <View style={{ flexDirection: 'row', }} >
              <View>
                <Text style={[textwhite(24, 700)]} >{totalPoints}</Text>
              </View>
              <View>
                <Text style={[textwhite(16, 700)]}>{'tonnes CO2e'}</Text>
              </View>
            </View>
            <View style={[baseStyles.flxRowAliCnt,]} >
              <Text style={[textBlk(14, 400), { color: 'rgba(255, 255, 255, 0.76)', }]} >Your Carbon Footprint</Text>
              <MonthsDropDown setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />
            </View>
          </View>
        </View>

        <View style={[{ margin: 16, borderWidth: 0.8, zIndex: -9, borderColor: 'rgba(207, 207, 207, 1)', borderRadius: 10 }]} >
          <View style={{ marginTop: 16 }} >
            <Text style={[textBlk(16, 500), { textAlign: 'center' }]} >Look Where the footprints is high!</Text>
          </View>

          <View style={[baseStyles.flxRowAliCnt, { paddingHorizontal: 16 }]} >
            <PieChartScreen pieChartAnalytics={pieChartAnalytics} />
            <View style={{}} >
              {[
                { color: '#F89000', title: 'Home', value: homePoints },
                { color: '#1C448E', title: 'Transportation', value: transportPoints },
                { color: '#A41623', title: 'Shopping', value: shoppingPoints },
                { color: '#F85E00', title: 'Food', value: foodPoints },
              ].map((item, i) => {
                return (
                  <View key={i} style={[baseStyles.flxRowAliCnt, { marginVertical: 4 }]} >
                    <View style={{ height: 6, width: 6, backgroundColor: item?.color, marginRight: 4 }} />
                    <Text style={[textBlk(10, 400)]}>{item.title}</Text>
                    <Text style={[textBlk(12, 600)]} >{`(${item?.value}T)`}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>

        {/* Explore Offset Options */}
        <View style={{ paddingHorizontal: 16, paddingVertical: 16, zIndex: -9 }} >
          <Text style={[textBlk(14, 500)]} >Explore Offset Options</Text>
          <View style={{ flexDirection: 'row' }} >
            <ButtonWithBorder text={'Rewards'} onPress={navigateToRewardScreen} />
            <ButtonWithBorder text={'Offset options'} onPress={navigateToOffsetOption} />
            <ButtonWithBorder text={'Offset Tips'} onPress={navigateToOffsetTips} />
          </View>

          {/* <View style={{paddingVertical:16, backgroundColor:'rgba(254, 238, 215, 1)', borderRadius:12}} >
            <Text>Retake Assessment</Text>
          </View> */}

        </View>

        <View style={[baseStyles.flxRowSpcBtwn, { paddingHorizontal: 16, zIndex: -9 }]} >
          <View style={{ flexDirection: 'row' }} >
            <TreeLeaf />
            <Text style={[textBlk(14, 400), { marginLeft: 4 }]} >Go Green, Shop Sustainable</Text>
          </View>
          <Text style={[textBlk(14, 500), { color: baseStyles.green, textDecorationLine: 'underline' }]} >view more</Text>
        </View>

        <View style={{ paddingHorizontal: 16, paddingVertical: 16 }} >
          {/* Retake Assessment */}
          <TouchableOpacity onPress={handleRetakeAssessment} >
            <RetakeButtonSvg />
          </TouchableOpacity>
        </View>

      </ScrollView>


      {/* BOTTOM CHAT VIEW  */}
      <View style={{ position: 'absolute', bottom: 0, zIndex: 1, width: '100%', }} >
        <ChatPage />
      </View>

    </View>
  )
}

export default HomePage