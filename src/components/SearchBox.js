import { View, Text, TextInput } from 'react-native'
import React from 'react'
import baseStyles from './baseStyleSheet'
import SearchIcon from '../assets/icons/SearchIcon'

const SearchBox = ({placeholder='', onChangeText=()=>{}, value='' }) => {
  return (
    <View style={[baseStyles.borderGry,baseStyles.flxRowAliCnt, {width:'100%', borderRadius:50,height:50,  paddingHorizontal:8 }]} >
      <TextInput value={value} onChangeText={(text)=>onChangeText(text)} style={{flex:1, fontSize:14, color:'#000',}} placeholder={placeholder}
        placeholderTextColor={baseStyles.placeholderTextColor}
      />
      <SearchIcon />
    </View>
  )
}

export default SearchBox