import { StyleSheet } from "react-native";
import { scale } from "../utilityFunctions/utilityFunctions";

const baseStyles = StyleSheet.create({
    textBlkFs23Fw700: {
        fontSize: scale(23),
        fontWeight: 700,
        color: '#000'
    },
    textGreenFs23Fw700: {
        fontSize: scale(23),
        fontWeight: 700,
        color: '#00955F'
    },
    textBlkFs14Fw300: {
        fontSize: scale(14),
        fontWeight: 300,
        color: '#000'
    },
    textBlkFs14Fw400: {
        fontSize: scale(14),
        fontWeight: 400,
        color: '#000'
    },
    textBlkFs16Fw400: {
        fontSize: scale(16),
        fontWeight: 400,
        color: '#000'
    },
    textBlkFs18Fw400: {
        fontSize: scale(18),
        fontWeight: 400,
        color: '#000'
    },
    textBlkFs24Fw600: {
        fontSize: scale(24),
        fontWeight: 600,
        color: '#000'
    },
    testGrnFs18Fw600: {
        fontSize: scale(18),
        fontWeight: 600,
        color: '#00955F'
    },
    testBlkFs16Fw500: {
        fontSize: scale(16),
        fontWeight: 500,
        color: '#000'
    },
    testBlkFs18Fw600: {
        fontSize: scale(18),
        fontWeight: 600,
        color: '#000'
    },
    testBlkFs22Fw600: {
        fontSize: scale(22),
        fontWeight: 600,
        color: '#000'
    },
    green: '#00955F',
    greenLight: '#05A77A',
    flxRowAliCnt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flxRowSpcBtwn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flxColSpcBtwn: { flexDirection: 'column', justifyContent: 'space-between' },

    greenBtnBorder: { borderWidth: 1, borderColor: '#00955F', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14 },

    borderBottomGry: { borderBottomColor: '#EEEEEE', borderBottomWidth: 1, paddingBottom: 4 },

    borderGry: { borderWidth: 0.6, borderColor: 'rgba(207, 204, 204, 1)', },

    allCntr: { justifyContent: 'center', alignItems: 'center' },

    placeholderTextColor: '#A3A3A3',

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    shadowLight: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.23,
        shadowRadius: 1.42,

        elevation: 1,
    },
    gry: 'rgba(0, 0, 0, 0.11)',
    gryDark2: 'rgba(169, 169, 169, 1)',
    yellow: 'rgba(255, 191, 3, 1)',
    yellowLight: 'rgba(255, 191, 3, 0.08)',
})
export default baseStyles

export const textBlk = (fontSize = 12, fontWeight = 400) => {
    return {
        fontSize: scale(fontSize),
        fontWeight: fontWeight,
        color: '#000'
    }
}
export const textOrange = (fontSize = 12, fontWeight = 400) => ({
    fontSize: scale(fontSize),
    fontWeight: fontWeight,
    color: '#C79514'
})
export const textwhite = (fontSize = 12, fontWeight = 400) => ({
    fontSize: scale(fontSize),
    fontWeight: fontWeight,
    color: '#fff'
})
export const textOffWhite = (fontSize = 12, fontWeight = 400) => ({
    fontSize: scale(fontSize),
    fontWeight: fontWeight,
    color: 'rgba(217, 217, 217, 1)'
})
export const textGreen = (fontSize = 12, fontWeight = 400) => ({
    fontSize: scale(fontSize),
    fontWeight: fontWeight,
    color: '#00955F'
})