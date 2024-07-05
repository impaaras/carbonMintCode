import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import { scale } from '../../utilityFunctions/utilityFunctions'
import { textBlk, textwhite } from '../../components/baseStyleSheet'
import ImageCard from './ImageCard'

const OffsetOptions = () => {
  return (
    <View style={{ flex: 1 }} >
      <DrawerNavbar text='Offset Options' />
      <HorizontalLine />

      <View style={{ paddingHorizontal: scale(16), paddingVertical: scale(8) }} >
        <View >
          <Text style={[textBlk(16, 600)]} >Explore & Contribute in your Favorite Offset Category Projects</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap:'wrap',width:'100%' }}>
          <ImageCard img={require('../../assets/offsetOptionImg1.jpeg')} title='Tree Planting Initiatives' />
          <ImageCard img={require('../../assets/offsetOptionImg2.jpeg')} title='Buying Carbon Credits' />
          <ImageCard img={require('../../assets/offsetOptionImg3.jpeg')} title='Choosing Low Carbon Projects' />
        </View>

      </View>


    </View>
  )
}

export default OffsetOptions

