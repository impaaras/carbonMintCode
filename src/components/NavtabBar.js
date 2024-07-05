import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import baseStyles from './baseStyleSheet'
import TabButton from './TabButton'

const NavtabBar = ({ questions = [], tabCursor = 0, setTabCursor = () => { } }) => {

    console.log('tabCursor', tabCursor)
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={{ flexDirection: 'row', paddingHorizontal: 16 }} >
                    {questions.map((item, i) => {
                        return (
                            <TabButton
                                onPress={() => setTabCursor(i)}
                                key={i} 
                                text={item?.category == 'Home' ? 'House' : item?.category}
                                isSelected={tabCursor==i}
                                isCompleted={false}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default NavtabBar

const styles = StyleSheet.create({})