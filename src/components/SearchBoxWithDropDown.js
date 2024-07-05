import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import SearchBox from './SearchBox'
import baseStyles, { textBlk } from './baseStyleSheet'

const SearchBoxWithDropDown = ({ dropListArray = [], dropSearchText = '', setDropSearchText = () => { }, onPress = () => { } }) => {

    return (
        <View style={{ flex: 1, }} >
            <SearchBox placeholder='search here...' value={dropSearchText} onChangeText={setDropSearchText} />
            <ScrollView style={{ height: 200, }} scrollEnabled={true}  >
                {dropListArray.map((items, i) => {
                    return (
                        <TouchableWithoutFeedback key={i} onPress={()=>onPress(items)} >
                            <View style={[baseStyles.borderBottomGry, { paddingHorizontal: 8, paddingVertical: 12 }]} >
                                <Text style={[textBlk(14, 400)]} >{items?.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default SearchBoxWithDropDown

const styles = StyleSheet.create({})