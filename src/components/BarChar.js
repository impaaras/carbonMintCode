import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textBlk } from './baseStyleSheet'

const BarChar = ({monthWiseAnalyticsFullYear={}, }) => {
    const valuesArray = [100,80,60,40,20,0,]
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',  'Nov', 'Dec']
    return (
        <View style={{ paddingVertical: 24,  }} >

            <View style={{ height: 200, flexDirection: 'row',  }}>
                <View style={{flexDirection:'column', justifyContent:'space-between',height: '93%',}} >
                    {valuesArray.map((value, index) =>(
                        <Text key={index} >{value}T</Text>
                    ))}

                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {monthsArray.map((month, i) => {
                    const currentMonthPointsGenerated = (monthWiseAnalyticsFullYear[i+1] || 1)
                    const currentMonthPointsReduced = 1
                    return (
                        <View key={i} style={{ marginHorizontal: 8, height: '93%', }} >
                            <View style={{height: '100%',flexDirection:'row', alignItems:'flex-end'}} >
                                <View style={{ height: `${currentMonthPointsGenerated}%`, backgroundColor: 'rgba(28, 68, 142, 1)', width: 15 }} />
                                <View style={{ height: `${currentMonthPointsReduced}%`, backgroundColor: 'rgba(5, 167, 122, 1)', width: 15 }} />
                            </View>
                            <Text style={[textBlk(12,300)]} >{month}</Text>
                        </View>
                    )
                })}
                </ScrollView>
            </View>

            <View style={{paddingVertical:32, flexDirection:'row'}} >
                <View style={{flexDirection:'row', alignItems:'center'}} >
                    <View style={{height:6, width:6, backgroundColor:'rgba(28, 68, 142, 1)', marginRight:4}} />
                    <Text style={[textBlk(10,400)]} >MoM/CO2 generated(kg)</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}} >
                    <View style={{height:6, width:6, backgroundColor:'rgba(5, 167, 122, 1)', marginRight:4}} />
                    <Text style={[textBlk(10,400)]} >MoM/CO2 reduced(kg)</Text>
                </View>
            </View>
        </View>
    )
}

export default BarChar

const styles = StyleSheet.create({})