/**
  * @format
 */
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { useColorScheme, StatusBar, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, } from '@react-navigation/native';
import DrawerNavigator from './src/navigator/Navigator';
import { Provider, useDispatch } from 'react-redux';
import store from './src/redux/store';
import AuthStateChange from './src/firebaseMethods/AuthStateChange';




function App() {
  const isAndroid = Platform.OS == 'android'
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isAndroid ? isDarkMode ? '#000' : '#fff' :  isDarkMode ? Colors.darker : Colors.lighter

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaStyle} >
          {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundColor}
            animated
            showHideTransition={'slide'} /> */}
          <AuthStateChange />
          <DrawerNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaStyle: { flex: 1, }
})


