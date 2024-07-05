import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import WhiteGreenBackGround from '../../assets/icons/WhiteGreenBackGround'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import baseStyles, { textBlk, textOffWhite, textOrange } from '../../components/baseStyleSheet'
import Calendar from '../../assets/icons/Calendar'
import BarChar from '../../components/BarChar'
import CalendarPicerComp from '../../components/CalendarPicerComp'
import { fixedToPoint, getIn2Digit, handleFirebaseError, showToast } from '../../utilityFunctions/utilityFunctions'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import LoadingScreen from '../../components/LoadingScreen'


const Report = () => {
  const [showCalendar, setShowCalendar] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const { userData = null } = useSelector(state => state?.appData)
  const [userAnalytics, setUserAnalytics] = useState()
  const [loadingData, setLoadingData] = useState(false)
  const [currentMonthPoints, setCurrentMonthPoints] = useState(0)
  const [currentYearPoints, setCurrentYearPoints] = useState(0)
  const [monthWiseAnalyticsFullYear, setMonthWiseAnalyticsFullYear] = useState({})


  // console.log('startDate -=-=-=-=-=-=->', startDate)

  const handleSelectDate = (date) => {
    showCalendar == 'left' ? setStartDate(date) : setEndDate(date)

    if (startDate && endDate) {
      const start = new Date(showCalendar == 'left' ? date?.dateString : startDate?.dateString)
      const end = new Date(showCalendar == 'left' ? endDate?.dateString : date?.dateString)
      if (start > end) showToast('Start date should be before end date')
    }
    setShowCalendar('')
  }
  useEffect(() => {
    setMonthWiseAnalyticsFullYear({})
    setCurrentYearPoints(0)
    setCurrentMonthPoints(0)
    handleFetchAnalytics()
    handleFetchYearAnalytics()
    handleFetchCurretMonthAnalytics()
  }, [startDate, endDate])

  const handleFetchAnalytics = () => {
    setLoadingData(true)
    const start = new Date(startDate?.dateString)
    const end = new Date(endDate?.dateString )

    let collection = firestore().collection("userAssessments")
      .where("email", "==", userData?.email)
      if (startDate) {
        collection = collection.where("createdAt", ">=", start)
      }
      if(endDate){
        collection = collection.where("createdAt", "<=", end)
      }
      collection.get()
      .then((querySnapshot) => {
        let homePoints = 0, transportPoints = 0, shoppingPoints = 0, foodPoints = 0, totalPoints = 0;
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          homePoints += data?.homePoints
          transportPoints += data?.transportPoints
          shoppingPoints += data?.shoppingPoints
          foodPoints += data?.foodPoints
          totalPoints += data?.totalPoints
        });
        setLoadingData(false)
        setUserAnalytics({ homePoints, transportPoints, shoppingPoints, foodPoints, totalPoints });
      })
      .catch((error) => {
        handleFirebaseError(error)
        console.log("Error getting documents: ", error);
      });
  }
  const handleFetchYearAnalytics = () => {
    const selectedYear = startDate?.year

    var currentYear = startDate ? selectedYear : new Date().getFullYear();
    var startDateTemp = new Date(currentYear, 0, 1, 0, 0, 0); // Start of the given month
    var endDate = new Date(currentYear, 11, 31, 23, 59, 59); // End of the given month

    firestore().collection("userAssessments")
      .where("email", "==", userData?.email)
      .where("createdAt", ">=", startDateTemp)
      .where("createdAt", "<=", endDate)
      .get()
      .then((querySnapshot) => {
        let totalPoints=0;
        querySnapshot.forEach((doc, i) => {
          const data = doc.data()
          // console.log('data', data)
          const date = new Date(data?.createdAt?.seconds * 1000 + data?.createdAt?.nanoseconds / 1000000);
          const month = date.getMonth() + 1; 
          setMonthWiseAnalyticsFullYear(p=> {
            p[month] = (p[month] || 0) + data?.totalPoints;
            return {...p};
          })
          totalPoints += data?.totalPoints;
        });
        setCurrentYearPoints(totalPoints)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
  const handleFetchCurretMonthAnalytics = () => {
    var currentYear = new Date().getFullYear();
    const currMonth = new Date().getMonth()+1

    var startDate = new Date(currentYear, currMonth-1, 1, 0, 0, 0); // Start of the given month
    var endDate = new Date(currentYear, currMonth, 0, 23, 59, 59); // End of the given month

    console.log('startDate p p ', startDate)
    firestore().collection("userAssessments")
      .where("email", "==", userData?.email)
      .where("createdAt", ">=", startDate)
      .where("createdAt", "<=", endDate)
      .get()
      .then((querySnapshot) => {
        let totalPoints=0;
        querySnapshot.forEach((doc,i) => {
          const data = doc.data()
          totalPoints += data?.totalPoints
        });
        setCurrentMonthPoints(totalPoints)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  if (loadingData) return <LoadingScreen showAsLoadingScreen={false} />

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <WhiteGreenBackGround >

        <DrawerNavbar text='Report' />
        <HorizontalLine />

        <View style={{ padding: 16 }} >
          <Text style={[textBlk(14, 400)]} >Add reporting period</Text>

          <View style={[baseStyles.flxRowSpcBtwn, { paddingVertical: 16 }]} >
            <TouchableOpacity style={style.calendarbutton} onPress={() => setShowCalendar(p => !p ? 'left' : '')} >
              <Text style={[startDate ? textBlk(14, 400) : textOffWhite(14, 400)]} >{startDate ? (getIn2Digit(startDate?.day) + "-" + getIn2Digit(startDate?.month) + '-' + startDate?.year) : 'From'}</Text>
              <Calendar />
            </TouchableOpacity>
            <TouchableOpacity style={style.calendarbutton} onPress={() => setShowCalendar(p => !p ? 'right' : '')}  >
              <Text style={[endDate ? textBlk(14, 400) : textOffWhite(14, 400)]} >{endDate ? (getIn2Digit(endDate?.day) + "-" + getIn2Digit(endDate?.month) + '-' + endDate?.year) : 'To'}</Text>
              <Calendar />
            </TouchableOpacity>
          </View>

          {/* calendar view  */}
          {!!showCalendar && <CalendarPicerComp showCalendar={showCalendar} onSelect={handleSelectDate} />}

          {/* YELLOW TEXT  */}
          <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'center', width: '100%', }} >

            <View style={{ backgroundColor: '#FFBF030F', alignSelf: 'flex-start', paddingVertical: 12, borderRadius: 14, width: '100%' }} >
              <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                <View>
                  <Text style={[textOrange(24, 700)]} >{fixedToPoint(userAnalytics?.totalPoints, 2)}</Text>
                </View>
                <View>
                  <Text style={[textOrange(16, 700)]}>{' tonnes CO2e'}</Text>
                </View>
              </View>
              <Text style={[textBlk(14, 400), { textAlign: 'center' }]} >Carbon Footprint</Text>
            </View>
          </View>


          {/* red Views */}

          <View style={[baseStyles.flxRowSpcBtwn, {}]} >
            {[0, 0].map((_, i) => {
              const numericValue = [fixedToPoint(currentMonthPoints, 2), fixedToPoint(currentYearPoints, 2)]
              const titleName = ['Month Net','Year Cumulative']
              return (
              <View key={i} style={{ marginTop: '5%', width: '49%' }} >
                <View style={{ backgroundColor: 'rgba(248, 94, 0, 0.07)', paddingVertical: 12, paddingHorizontal: 8, borderRadius: 14, width: '100%' }} >
                  <Text style={[textBlk(14, 700), { color: 'rgba(248, 94, 0, 1)' }]} >{numericValue[i]}</Text>
                  <Text style={[textBlk(14, 400),]} >{titleName[i]}</Text>
                </View>
              </View>
            )})}
          </View>

          <View style={{ paddingVertical: 16, marginTop: '5%', }} >
            <Text style={[textBlk(16, 500), {}]} >Month on Month CO2 generated</Text>

            <BarChar monthWiseAnalyticsFullYear={monthWiseAnalyticsFullYear} />

          </View>

        </View>

      </WhiteGreenBackGround>
    </SafeAreaView>
  )
}

export default Report

const style = StyleSheet.create({
  calendarbutton: [baseStyles.shadow, baseStyles.flxRowAliCnt, baseStyles.flxRowSpcBtwn, { height: 50, width: '46%', borderRadius: 30, backgroundColor: "#fff", paddingHorizontal: 16 }]
})