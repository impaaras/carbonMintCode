import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash from './Splash'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from '../Home/HomePage'
import LoginSignUpHandlePage from '../loginSignup/LoginSignUpHandlePage'
import SelectUserTypePage from '../SelectUserTypePage'
import HomeQuestion from '../questionPages/HomeQuestion'
import { getDataFromLocalStorage } from '../../utilityFunctions/utilityFunctions'
import { setUser, setUserData } from '../../redux/slicer'

const HandlePageToRender = () => {
    const appData = useSelector(state => state.appData)
    const { user, userData } = appData
    const [showSplash, setShowSplash] = useState(true)
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    // console.log(user)
    console.log('userData========', userData)

    useEffect(() => {
        ( async ()=>{
            const user  = getDataFromLocalStorage('user')
            const userData = getDataFromLocalStorage('userData')
            Promise.all([user, userData]).then((data)=>{
                dispatch(setUserData(data[0]))
                dispatch(setUser(data[1]))
                setShowSplash(false)
            })
        })()
        // setTimeout(() => { // set show splash after reading user data
        //     setShowSplash(false)
        // }, 1500)
    }, [])

    const askQuestion = !(userData?.isQuestionsAttempted)
    console.log('-----askQuestion', askQuestion)

    return (
        showSplash ? <Splash /> : 
        user ?
            (userData ? 
                (askQuestion ? <HomeQuestion /> : <HomePage/> ) :

            <SelectUserTypePage />) : 
            
        <LoginSignUpHandlePage />
    )
}
export default HandlePageToRender