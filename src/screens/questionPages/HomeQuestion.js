import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerNavbar from '../navbar/DrawerNavbar'
import HorizontalLine from '../../components/HorizontalLine'
import baseStyles from '../../components/baseStyleSheet'
import NavtabBar from '../../components/NavtabBar'
import QuestionCard from '../../components/QuestionCard'
import WhiteGreenBackGround from '../../assets/icons/WhiteGreenBackGround'
import CircleDot from '../../components/CircleDot'
import TabButton from '../../components/TabButton'
import { useNavigation } from '@react-navigation/native'
import { createdAt, getAssessmentQuestions, showToast, updatedAt } from '../../utilityFunctions/utilityFunctions'
import { useSelector } from 'react-redux'
import Recap from '../Recap/Recap'
import LoadingScreen from '../../components/LoadingScreen'

const HomeQuestion = () => {

    const [questions, setQuestions] = useState([])
    const [tabCursor, setTabCursor] = useState(0)
    const [questionCursor, setQuestionCursor] = useState(0)
    const [showRecap, setShowRecap] = useState(false)
    const [dataToSubmit, setDataToSubmit] = useState({})
    const [isSubmiting, setIsSubmiting] = useState(false)

    const userData = useSelector(state => state.appData.userData)
    const navigation = useNavigation()

    const handleCategoryClick = (idx)=>{
        setTabCursor(idx)
        setQuestionCursor(0)
        setShowRecap(false)
    }

    const handleSubmit = async () => {
        let homePoints = 0, transportPoints = 0, shoppingPoints = 0, foodPoints = 0

        questions.forEach(category => {
            category?.questions?.forEach(question => {
                if (category?.category == 'Home') {
                    homePoints += +question?.pointsScored
                } else if (category?.category == 'Transportation') {
                    transportPoints += +question?.pointsScored
                } else if (category?.category == 'Shopping') {
                    shoppingPoints += +question?.pointsScored
                } else if (category?.category == 'Food') {
                    foodPoints += +question?.pointsScored
                }

            })
        })

        const dataToSubmit = {
            email: userData?.email,
            createdAt: createdAt(),
            homePoints, transportPoints, shoppingPoints, foodPoints,
            totalPoints: (+homePoints) + (+transportPoints) + (+shoppingPoints) + (+foodPoints),
        }
        setDataToSubmit(dataToSubmit)
        setShowRecap(true)
    }
    useEffect(() => {
        handleFetchQuestions()
    }, [])

    const handleFetchQuestions = async () => {
        const ques = await getAssessmentQuestions()
        setQuestions(ques)
    }

    const handleSelectOption = (selectedOption, co2points, resert = true) => {
        const isSame = questions[tabCursor].questions[questionCursor].selectedOption == selectedOption
        questions[tabCursor].questions[questionCursor].selectedOption = isSame && resert ? '' : selectedOption
        questions[tabCursor].questions[questionCursor].pointsScored = isSame && resert ? 0 : co2points;

        setQuestions([...questions])
    }

    const handleNextOrSubmitButtonPress = () => {
        if (questionCursor < questions[tabCursor].questions.length - 1) {
            setQuestionCursor(p => p + 1)
        } else if (questionCursor == questions[tabCursor].questions.length - 1) {
            if (tabCursor == questions.length - 1) {
                // handle submit
                handleSubmit()
            } else {
                setQuestionCursor(0)
                setTabCursor(p => p + 1)
            }
        }
    }
    const handlePreviousButtonPress = () => {
        if (questionCursor > 0) {
            setQuestionCursor(p => p - 1)
        } else if (questionCursor == 0 && tabCursor > 0) {
            setTabCursor(p => p - 1)
            setQuestionCursor(questions[tabCursor].questions.length - 1)
        }
    }

    const isLastQuestion = (tabCursor == questions.length - 1 && questionCursor == questions[tabCursor].questions.length - 1)
    const scrollOrNot = !(questions[tabCursor]?.questions[questionCursor]?.questionType == 'dropdown' || false)

    if(isSubmiting){
        return <LoadingScreen />
    }

    return (
        showRecap ? <Recap dataToSubmit={dataToSubmit} handleCategoryClick={handleCategoryClick} setIsSubmiting={setIsSubmiting} isSubmiting={isSubmiting} />
            :
            <WhiteGreenBackGround>
                <DrawerNavbar />
                <HorizontalLine />
                <NavtabBar questions={questions} tabCursor={tabCursor} setTabCursor={(tabIdx) => {
                    setQuestionCursor(0)
                    setTabCursor(tabIdx)
                }} />
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} scrollEnabled={scrollOrNot} >

                    <View style={{ paddingTop: 16, paddingHorizontal: 16 }} >
                        <Text style={[baseStyles.testBlkFs22Fw600]} >Let’s calculate your Carbon Footprint</Text>
                        <View style={{ marginTop: 24 }} />
                        {questions.length > 0 && <QuestionCard
                            questionCursor={questionCursor}
                            data={questions[tabCursor]}
                            handleSelectOption={handleSelectOption}
                        />}
                    </View>

                    <View style={{ marginVertical: '30%', width: '100%', alignSelf: 'center' }} >
                        <View style={[baseStyles.flxRowSpcBtwn, { justifyContent: 'center' }]} >
                            {questions?.map((_, i) => <CircleDot isSelected={tabCursor >= i} key={i} />)}
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }} >
                            {<TabButton
                                onPress={handlePreviousButtonPress}
                                text={'Previous'}
                                isDisabled
                            />}
                            <TabButton
                                onPress={handleNextOrSubmitButtonPress}
                                text={isLastQuestion ? 'Submit' : 'Next'}
                                isSelected={true}
                            />
                        </View>

                    </View>
                </ScrollView>


            </WhiteGreenBackGround>

    )
}

export default HomeQuestion

const styles = StyleSheet.create({})