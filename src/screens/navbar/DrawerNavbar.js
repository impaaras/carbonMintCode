import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ListIcon from '../../assets/icons/ListIcon'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import baseStyles, { textBlk } from '../../components/baseStyleSheet'

const DrawerNavbar = ({text=''}) => {
  const navigation = useNavigation()
  return (
    <View style={{paddingVertical:14, paddingHorizontal:16}} >
      <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} >
        <View style={[baseStyles.flxRowAliCnt, {flexDirection:'row'}]} >
          <ListIcon />
          <Text style={[textBlk(16,600), {marginLeft:8}]} >{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DrawerNavbar

  // <View onTouchEnd={()=>} >
  //   <Text>show</Text>
  // </View>

