import * as React from "react"
import { Image, StatusBar, View } from "react-native"
const SplashBackground = ({children, makeDark=false}) => {
  return(
    <View style={{flex:1,}} > 
      <View style={{}} >
        {makeDark && <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.7)', position:'absolute', zIndex:1, height:'100%', width:'100%'}} >
        </View>}
        <Image style={{height:'100%', width:'100%', backgroundColor:'rgba(0, 0, 0, 0.8)'}} source={require('../ImageIcons/SplashBackground.png')}  />
      </View>
      <View style={{position:'absolute', top:0, zIndex:2, width:'100%',  height:'100%'}} >
        {children}
      </View>
    </View>
  )
}
export default SplashBackground
