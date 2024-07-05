import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import baseStyles from './baseStyleSheet'

const LoadingScreen = ({showAsIcon=false, showAsLoadingScreen=true }) => {
    useEffect(() => {
        animate()
        animate2()
        animateColor1();
    }, [])

    const height1 = useRef(new Animated.Value(24)).current
    const animate = () => {
        Animated.sequence([
            Animated.timing(height1, {
                toValue: 24,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(height1, {
                toValue: 10,
                duration: 1000,
                useNativeDriver: false
            })
        // ]).start()
        ]).start(()=>animate())
    }
    const height2 = useRef(new Animated.Value(24)).current
    const animate2 = () => {
        Animated.sequence([
            Animated.timing(height2, {
                toValue: 10,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(height2, {
                toValue: 24,
                duration: 1000,
                useNativeDriver: false
            })
        // ]).start()
        ]).start(()=>animate2())
    }

    const animatedColor = useRef(new Animated.Value(0)).current;

    const animateColor1 = () => {
        Animated.timing(animatedColor, {
            toValue: 1,
            duration: 1000, // Adjust the duration as needed
            useNativeDriver: false,
        }).start(() => {
            animateColor2();
        });
    };

    const animateColor2 = () => {
        Animated.timing(animatedColor, {
            toValue: 0,
            duration: 1000, // Adjust the duration as needed
            useNativeDriver: false,
        }).start(() => {
            animateColor1();
        });
    };

    const backgroundColor = animatedColor.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [baseStyles.green, baseStyles.greenLight, baseStyles.gry],
    });
    const backgroundColor2 = animatedColor.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [baseStyles.gry, baseStyles.greenLight, baseStyles.green],
    });

    return (
        <View style={[baseStyles.allCntr, { flex: 1, height: showAsIcon ? 50 : null, backgroundColor: showAsIcon? null : '#fff', }]} >
                {/* loading animation  */}
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' ,height:50}} >
                    <Animated.View style={{ height: height1, width: 4, marginHorizontal: 1, backgroundColor: backgroundColor2, borderRadius: 8 }} ></Animated.View>
                    <Animated.View style={{ height: height2, width: 4, marginHorizontal: 1, backgroundColor: backgroundColor, borderRadius: 8 }} ></Animated.View>
                    <Animated.View style={{ height: height1, width: 4, marginHorizontal: 1, backgroundColor: backgroundColor2, borderRadius: 8 }} ></Animated.View>
                    <Animated.View style={{ height: height2, width: 4, marginHorizontal: 1, backgroundColor: backgroundColor, borderRadius: 8 }} ></Animated.View>
                </View>

                {!showAsIcon && !showAsLoadingScreen && <Text style={[baseStyles.textBlkFs16Fw400]} >Calculating your carbon footprints</Text>}
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})