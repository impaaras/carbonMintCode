import Toast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser, setUserData } from '../redux/slicer';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window')

export const showToast = (text='')=>{
    Toast.show(text);

}
export const isNumber = (txt='')=> /^\d+$/.test(txt)

export const getIn2Digit =(txt='')=> `${txt}`.padStart(2,0)
export const fixedToPoint=(txt='', point=1) => parseFloat(txt).toFixed(point)
export function currentDateTime() {
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
export const isEmailValid = (email)=>{
    if(!email) return false;
    const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return email_regex.test(email)

}

export const createNewDocument = (collectionName='', dataToCreate={}, nextFunction=()=>{}, errorMessage='', errorFunction=()=>{})=>{
    try {
        firestore().collection(collectionName).add(dataToCreate).then((data)=>{
            console.log('data created successfully', data)
        })
        nextFunction()
    } catch (e) {
        showToast(errorMessage)
        errorFunction()
        console.log(e)
    }
}
export const userExistsOrNot =async (emailId)=>{
    return new Promise((resolve, reject)=>{
        try {
            firestore().collection('users').doc(emailId).get().then((user)=>{
                console.log('usere exist', user.data())
                if(user.data()) resolve(true)
                resolve(false)
            })
        } catch (e) {
            reject()
            showToast('Something went wrong')   
            console.log(e)
        }
    })
}
export function generateRandom4DigitNumber() {
    const randomDecimal = Math.random();
    const random4DigitNumber = Math.floor(randomDecimal * 9000) + 1000;
    return random4DigitNumber;
  }
export function handleFetchError(err='', errorKey=''){
    console.log(errorKey+' :: ->', err)
    if(err.message == 'Network request failed'){
        showToast('Please try again')
    }else if(err?.message == 'NETWORK_ERROR'){
        showToast('Please check your internet connection')
    }else{
        showToast('try again')
    }

}
export const handleFirebaseError = (err) => {
    switch (err.code) {
        case 'auth/invalid-email':
            showToast('That email address is invalid!')
            break;
        case 'auth/invalid-credential':
            showToast('That password is invalid!')
            break;
        case 'auth/too-many-requests':
            showToast('Too many attempts to login try again later')
            break;
        case 'auth/email-already-exists':
            showToast('already a use')
            break;
        case 'auth/invalid-argument':
            showToast('An invalid argument was provided to an Authentication method')
            break;
        case 'auth/invalid-credential':
            showToast('An invalid credential was provided to an Authentication method')
            break;
        case 'auth/invalid-email':
            showToast('The provided value for the email user property is invalid')
            break;
        case 'auth/invalid-password':
            showToast(' The provided value for the password is invalid')
            break;
        case 'auth/too-many-requests':
            showToast('Too many attempts')
            break;
        case 'auth/uid-already-exists':
            showToast('The provided uid is already in use by an existing user')
            break;
        case 'auth/user-not-found':
            showToast('user not found')
            break;
        default:
            showToast('Something went wrong')
            break;
    }
}
export const saveDataToLocalStorage = async (key='', data={}) => {
    try{
       await AsyncStorage.setItem(key, JSON.stringify(data));
    }catch(e){
        console.log(e)
    }
}
export const getDataFromLocalStorage = async (key='') => {
    return new Promise(async (resolve, reject) => {
        try {
         const data = await AsyncStorage.getItem(key);
         if(data) resolve(JSON.parse(data))
         else resolve(null)
    } catch (e) {
            resolve(null)
            console.log(e)
        }
    })
}
export const uploadOrUpdateAcessmentQuestion = (questionsData)=>{
    consoleMessage('utility Functions', 'upload questions to firebase', questionsData)
    try {
        firestore().collection('questions').doc('assessmentQuestions').set({questionsArray : questionsData}).then((resp)=>{
            console.log('uploaded successfull -->',resp)
        })
    } catch (e) {
        console.log(e)
        handleFirebaseError(e)
    }
}
export const getAssessmentQuestions = ()=>{
    return new Promise(async (resolve, reject) => {
        try {
            firestore().collection('questions').doc('assessmentQuestions').get().then((resp)=>{
                if(resp) resolve(resp.data()?.questionsArray)
            })
        } catch (e) {
            resolve()
            showToast('fail to fetch questions')
            console.log(e)
            handleFirebaseError(e)
        }
    })
}
export const createdAt = ()=> firestore.FieldValue.serverTimestamp()
export const updatedAt = ()=> firestore.FieldValue.serverTimestamp()

export const updateData = (inputEmail='', dispatch=()=>{}, nextFunction=()=>{}, failFunction=()=>{})=>{
    if(!inputEmail) return
    try {
        firestore().collection('users').doc(inputEmail).get().then((userDataTemp) => {
            const userDataTemp1 = userDataTemp.data();
            dispatch(setUserData(JSON.parse(JSON.stringify(userDataTemp1))))
            saveDataToLocalStorage('userData', userDataTemp1)
            nextFunction()
        })  
    } catch (e) {
        failFunction()
        handleFirebaseError(e)
    }
}

export const debounceHandler =(nextFunction=()=>{}, time=0) => {
    let interval;

    return ()=>{
        clearTimeout(interval)
        interval = setTimeout(()=>{
            nextFunction()
        },time)
    }
}
export const SCREEN_HEIGHT = 667;
export const SCREEN_WIDTH = 375;
export const scale = (units=0)=>{
    return width/SCREEN_WIDTH * units; 
}

export const handleLogout = (dispatch=()=>{})=>{
    saveDataToLocalStorage('user', null)
    saveDataToLocalStorage('userData', null)
    dispatch(setUserData(null))
    dispatch(setUser(null))
}
export const consoleMessage = (screenName='',method='', data={}) => {
    console.log(screenName, " :: "+ method + " ::-> "+ JSON.stringify(data))
}