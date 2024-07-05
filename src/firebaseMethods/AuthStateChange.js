import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, setUserData } from '../redux/slicer';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../utilityFunctions/utilityFunctions';


const AuthStateChange = () => {
    dispatch = useDispatch()
    const navigation = useNavigation()
    // function onAuthStateChanged(user) {
    //   dispatch(setUser(JSON.parse(JSON.stringify(user))));
    //   console.log('user', user)
    //   saveDataToLocalStorage('user',user)

    //   firestore().collection('users').doc(user?.email).get().then((userDataTemp) => {
    //     dispatch(setUser(JSON.parse(JSON.stringify(user))))
    //     const userDataTemp1 = userDataTemp.data();
    //     if(userDataTemp1){
    //         saveDataToLocalStorage('userData', userDataTemp1)
    //         dispatch(setUserData(JSON.parse(JSON.stringify(userDataTemp1))))
    //     }
    //     navigation.navigate('HandlePageToRender')
    // })
    // }
  
    useEffect(() => {
        (async ()=>{
            const user = await getDataFromLocalStorage('user')
            const userData = await getDataFromLocalStorage('userData')

            if(user) dispatch(setUser(user))
            if(userData) dispatch(setUserData(userData))

        })()
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    }, []);
  
  return null
}

export default AuthStateChange
