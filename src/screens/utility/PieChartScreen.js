import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

const PieChartScreen = ({pieChartAnalytics={}, }) => {
  const widthAndHeight = 150
  const series = (pieChartAnalytics?.homeHeight+ pieChartAnalytics?.transportHeight+pieChartAnalytics?.shoppingHeight+ pieChartAnalytics?.foodHeight) ? [pieChartAnalytics?.homeHeight, pieChartAnalytics?.transportHeight,pieChartAnalytics?.shoppingHeight, pieChartAnalytics?.foodHeight ] : [25,25,25,25]
  const sliceColor = ['rgba(248, 144, 0, 1)', 'rgba(28, 68, 142, 1)','rgba(164, 22, 35, 1)','rgba(248, 94, 0, 1)']
  // , 

    return (
      <View style={{padding:16}} >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <PieChart
            style={{}}
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
            />
  
          </View>
        </ScrollView>
  
      </View>
    )

 
}

export default PieChartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})