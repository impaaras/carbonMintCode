import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import TipsCard from './TipsCard'
import NavtabBar from '../../components/NavtabBar'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import { consoleMessage, scale } from '../../utilityFunctions/utilityFunctions'
import { getOffsetTipsApi } from '../../apis/baseApi'
import { useSelector } from 'react-redux'
import LoadingScreen from '../../components/LoadingScreen'

const OffsetTipsAndSuggestion = () => {
  const { userData = {} } = useSelector(state => state?.appData)
  const [loadingData, setLoadingData] = useState(false)
  const [offsetTipsData, setOffsetTipsData] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  // consoleMessage('userData','offset tipsScreen', userData)

  const getOffsetTips = async () => {
    if (!offsetTipsData || offsetTipsData.length == 0) setLoadingData(true)
    let data = await getOffsetTipsApi({
      "total_score": 100,
      "obtained_score": 60,
      "userdetails": userData
      // {
      //   "country_of_user_residence": "India",
      //   "do_use_renewable_electricty_at_home": "Yes",
      //   "primary_heating_source_at_home": "Electricity",
      //   "do_use_cooking_gas": "Yes",
      //   "do_user_have_car": "No"
      // }
    })

    if (data) {
      setLoadingData(false)
      data = JSON.parse(data)
      console.log('offset tip Data ->', data?.Offset_Tips)
      setOffsetTipsData(data?.Offset_Tips)
    } else {
      setLoadingData(false)
    }
  }
  useEffect(() => {
    getOffsetTips()
  }, [])

  if (loadingData) return <LoadingScreen />
  return (
    <View style={{ flex: 1 }} >
      <DrawerNavbar text='Offset Tips' />
      <HorizontalLine />

      <View style={{ flex: 1, paddingHorizontal: scale(16), paddingVertical: scale(8) }} >
        <FlatList
          data={offsetTipsData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <TipsCard
            topic={item?.Topic}
            desc={item?.Description}
            score={item?.Score}
          />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={async () => {
              setRefreshing(true)
              await getOffsetTips(true)
              setRefreshing(false)
            }} />
          }
        />

      </View>


    </View>
  )
}

export default OffsetTipsAndSuggestion