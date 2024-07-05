import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseStyles from './baseStyleSheet'
import ButtonOption from './ButtonOption'
import DropDownOption from './DropDownOption'
import SearchBoxWithDropDown from './SearchBoxWithDropDown'

const QuestionCard = ({ questionCursor = 0, handleSelectOption = () => { }, data = [],}) => {
    const currentQuestion = data.questions[questionCursor]
    const isDropDownQuestion = currentQuestion?.questionType == 'dropdown'

    const [showDropList, setShowDropList] = useState(false)

    const [dropListItems, setDropListItems] = useState([])
    const dropListArray = currentQuestion.options

    const [dropSearchText, setDropSearchText] = useState('')
    useEffect(() => {
        if (!dropSearchText) {
            setDropListItems(dropListArray)
        } else {
            const temp = dropListArray.filter((value) => value?.title?.toLowerCase().includes(dropSearchText.toLowerCase()))
            setDropListItems(temp)
        }
    }, [dropSearchText])


    return (
        <View style={[baseStyles.shadow, {
            // height: 400,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingHorizontal: 16, paddingVertical: 24,
        }]} >
            <Text style={[baseStyles.testBlkFs16Fw500, { paddingBottom: 24 }]} >{currentQuestion?.question}</Text>
            {isDropDownQuestion ?
                showDropList ?
                    <SearchBoxWithDropDown dropListArray={dropListItems} setDropSearchText={setDropSearchText} dropSearchText={dropSearchText}
                    onPress={(selected)=>{
                        handleSelectOption(selected?.title, selected?.co2points, false )
                        setShowDropList(false);
                    }}
                    />
                    :
                    <DropDownOption text={currentQuestion?.selectedOption || 'select'} isSelected={!!currentQuestion?.selectedOption} onPress={() => setShowDropList(true)} />
                :
                currentQuestion?.options.map((option, i) => {
                    return <ButtonOption key={i} text={option?.title} isSelected={currentQuestion?.selectedOption == option?.title}
                        onPress={() => handleSelectOption(option?.title, option?.co2points)}
                    />
                })
            }
            <View style={{ position: 'absolute', zIndex: 1, bottom: 0, left: 16, width: '100%' }} >
            </View>
        </View>
    )
}

export default QuestionCard