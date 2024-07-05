import { View, Text, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, Image, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashBackground from '../../assets/icons/SplashBackground'
import baseStyles, { textBlk, textwhite } from '../../components/baseStyleSheet'
import InputView from './InputView'
import GreenButton from '../../components/GreenButton'
import GoogleIcon from '../../assets/icons/GoogleIcon'
import { useSelector, useDispatch } from 'react-redux';
import { increment, setUser, setUserData } from '../../redux/slicer'
import { handleGoogleSignup } from './utilityFunctions'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { handleFirebaseError, isEmailValid, saveDataToLocalStorage, scale, showToast } from '../../utilityFunctions/utilityFunctions'
import { useNavigation } from '@react-navigation/native'
import CodeMintText from '../../assets/icons/CodeMintText'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({ setShowLoginPage = () => { }, }) => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [isResetMailSend, setIsResetMailSend] = useState(false)
    const navigation = useNavigation()

    const handleForgotPassword = () => {
        if (!isEmailValid(inputEmail)) {
            showToast('Please enter valid email')
        } else {
            auth().sendPasswordResetEmail(inputEmail).then((value) => {
                showToast('Your password reset link has been sent on mail.')
                setIsResetMailSend(true)
            })
        }
    }
    const handleShowSignUpPage = () => setShowLoginPage(false)
    const value = useSelector(state => state?.appData)

    const handleLogin = async () => {
        if (!isEmailValid(inputEmail)) {
            showToast('Please enter valid email')
        } else if (inputPassword.length < 6) {
            showToast('Please enter valid password')
        } else {
            setIsLoading(true)
            auth().signInWithEmailAndPassword(inputEmail, inputPassword).then((user) => {
                console.log('user: ', user)
                if (user?.user) {
                    firestore().collection('users').doc(inputEmail).get().then((userDataTemp) => {
                        const userDataTemp1 = userDataTemp.data();
                        saveDataToLocalStorage('user', user?.user)
                        saveDataToLocalStorage('userData', userDataTemp1)
                        dispatch(setUserData(userDataTemp1 ? JSON.parse(JSON.stringify(userDataTemp1)) : null))
                        dispatch(setUser(JSON.parse(JSON.stringify(user?.user))))
                        navigation.navigate('HandlePageToRender')
                        setIsLoading(false)
                    })
                }
            }).catch((e) => {
                setIsLoading(false)
                handleFirebaseError(e)
                console.log(e)
                setIsLoading(false)
                // showToast('try again later')
            })
        }
    }

    // useEffect(() => {

    //     // dispatch(increment())
    // }, [])

    const handleGoogleLoginPress = () => handleGoogleSignup(dispatch)

    return (
            <SplashBackground makeDark>
                <View style={{ height: '100%', flexDirection:'column', justifyContent:'space-between' }} >
                    <ScrollView >
                        <View style={{ marginTop: '14%', paddingHorizontal: 16 }} >
                            <View style={styles.loginSignupTextView} >
                                <Image style={styles.logoImage} source={require('../../assets/icons/CarbonMintLogo2.png')} />
                                <Text>
                                    <Text style={[textwhite(24, 600)]} >Login to </Text>
                                    <CodeMintText textColor={1} />
                                </Text>
                            </View>

                            <View style={{ marginTop: '10%' }} >
                                <InputView inputTitle='Email' placeholderText='abc@gmail.com' value={inputEmail} setValue={setInputEmail} />
                                <InputView inputTitle='Password' placeholderText='******' value={inputPassword} setValue={setInputPassword} isPassword />
                            </View>
                            <View>{
                                isResetMailSend ?
                                    <Text style={[textwhite(12, 400), { color: 'rgba(248, 94, 0, 1)' }]} >Password reset link sent</Text> :
                                    <Text onPress={handleForgotPassword} style={[textwhite(12, 400), { color: 'rgba(248, 94, 0, 1)' }]} >I forgot my password.</Text>
                            }
                            </View>

                            <GreenButton text='Login' onPress={handleLogin} isDisabled={isLoading} />

                            <View style={{ marginTop: 16 }} >
                                <Text style={{ textAlign: 'center' }} onPress={handleShowSignUpPage} >
                                    <Text style={[textwhite(14, 400)]} >Don't have Account? </Text>
                                    <Text style={[textwhite(14, 400), { color: 'rgba(5, 167, 122, 1)' }]} >Signup here</Text>
                                </Text>

                                <Text style={[textwhite(12, 400), { textAlign: 'center', marginTop: 30, color: 'rgba(169, 163, 163, 1)' }]} >Or continue with</Text>
                            </View>

                            <TouchableOpacity onPress={handleGoogleLoginPress} style={[baseStyles.allCntr, baseStyles.flxRowAliCnt, {
                                marginTop: 10, borderRadius: 10, backgroundColor: 'rgba(229, 229, 229, 1)',
                                paddingVertical: 6
                            }]} >
                                <GoogleIcon />
                                <Text style={[textBlk(14, 500), { marginLeft: 4 }]} >Sign in with Google</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView  >
                    <View style={{height:60}} />
                    <View style={{ bottom: 20, width: '100%' }} >
                        <Text style={{ textAlign: 'center' }} >
                            <Text style={[textwhite(12, 400), { color: 'rgba(169, 163, 163, 1)' }]} >By signing up, you agree to our </Text>
                            <Text style={[textwhite(12, 400), { color: 'rgba(0, 149, 95, 1)' }]} >Terms & Privacy policy</Text>
                        </Text>
                    </View>
                </View>
            </SplashBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    logoImage:{
        height: scale(25),
        width: scale(25),
        marginRight:scale(4)
    },
    loginSignupTextView:{
        flexDirection:'row',
        alignItems:'center',
    }
})