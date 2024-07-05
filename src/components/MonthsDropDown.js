import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import baseStyles, { textwhite } from './baseStyleSheet'
import DownIcon from '../assets/icons/DownIcon'

const MonthsDropDown = ({setSelectedMonth=()=>{}, selectedMonth=1 }) => {
    const [showList, setShowList] = useState(false)
    // const [selectedMonth, setSelectedMonth] = useState('')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const RenderMonthItem = ({ item, monthNumber }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setSelectedMonth(monthNumber);
                    setShowList(false);
                }}
                style={{ backgroundColor: 'rgba(2, 160, 242, 1)', marginLeft: 8, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, }}
            >
                <View style={[baseStyles.flxRowAliCnt,]} >
                    <Text style={[textwhite(12, 500)]}>{item}</Text>
                    {/* <DownIcon /> */}
                </View>
            </TouchableOpacity>
        );
    };

    const renderDropDown = () => {
        return <View style={{ position:"absolute",zIndex:1,  width:100  }} >
            {months.map((item, i) => <RenderMonthItem key={i} item={item} monthNumber={i+1} /> )}
        </View>
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => setShowList(true)}
                style={{ backgroundColor: 'rgba(2, 160, 242, 1)',  marginLeft: 8, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}
            >
                <View style={[baseStyles.flxRowAliCnt]} >
                    <Text style={[textwhite(12, 500)]}>{months[selectedMonth-1]}</Text>
                    <DownIcon />
                </View>
            </TouchableOpacity>
            {showList && renderDropDown()}
        </View>
    );
}

export default MonthsDropDown;
