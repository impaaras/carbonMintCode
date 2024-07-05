
import 'react-native-gesture-handler'
import React from 'react';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerUI from './DrawerUI';
import HomePage from '../screens/Home/HomePage';
import AssessmentDetails from '../screens/AssessmentDetails/AssessmentDetails';
import Report from '../screens/Report/Report';
import OffsetTipsAndSuggestion from '../screens/offsetTips/OffsetTipsAndSuggestion';
import OffsetOptions from '../screens/offsetOption/OffsetOptions';
import Rewards from '../screens/Rewards/Rewards';
import SelectUserTypePage from '../screens/SelectUserTypePage';
import HomeQuestion from '../screens/questionPages/HomeQuestion';
import LoadingScreen from '../components/LoadingScreen';
import Recap from '../screens/Recap/Recap';
import ChatScreen from '../screens/chat/ChatScreen';
import LoginSignUpHandlePage from '../screens/loginSignup/LoginSignUpHandlePage';
import HandlePageToRender from '../screens/splashScreen/HandlePageToRender';
import UserProfile from '../screens/profile/UserProfile';
import GetUserDetails from '../screens/profile/GetUserDetails';
import EmptyScreen from '../screens/Home/EmptyScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false,
        // headerTintColor: '#fff' // text color
      }}
      initialRouteName='HandlePageToRender'
      >
        <Stack.Screen name='HandlePageToRender' component={HandlePageToRender} options={{}} />
        {/* <Stack.Screen name='Splash' component={} options={{}} /> */}
        <Stack.Screen name='SelectUserTypePage' component={SelectUserTypePage} options={{unmountOnBlur:true}} />
        <Stack.Screen name='HomeQuestion' component={HomeQuestion} options={{}} />
        <Stack.Screen name='LoginSignUpHandlePage' component={LoginSignUpHandlePage} options={{}} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{}} />
        <Stack.Screen name='GetUserDetails' component={GetUserDetails} options={{}} />
        <Stack.Screen name='EmptyScreen' component={EmptyScreen} options={{}} />
  
      </Stack.Navigator>
    )
  }

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
      <Drawer.Navigator drawerContent={props=><DrawerUI {...props} /> } screenOptions={{ headerShown:false, }}>
        <Drawer.Screen name='StartPage' component={StackNavigator} />
        <Drawer.Screen name='HomePage' component={HomePage} />
        <Drawer.Screen name='AssessmentDetails' component={AssessmentDetails} />
        <Drawer.Screen name='Report' component={Report} />
        <Drawer.Screen name='OffsetTipsAndSuggestion' component={OffsetTipsAndSuggestion} />
        <Drawer.Screen name='OffsetOptions' component={OffsetOptions} />
        <Drawer.Screen name='Rewards' component={Rewards} />
        <Drawer.Screen name='LoadingScreen' component={LoadingScreen} />
        <Drawer.Screen name='Recap' component={Recap} />
        <Drawer.Screen name='ChatScreen' component={ChatScreen} />
      </Drawer.Navigator>
    )
  }
  
export default DrawerNavigator