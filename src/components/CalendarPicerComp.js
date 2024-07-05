import { View, Text } from 'react-native'
import React, {useState} from 'react'
// import CalendarPicker from "react-native-calendar-picker";
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarPicerComp = ({showCalendar=false, onSelect=()=>{}, selectedDate='' }) => {
  const [selected, setSelected] = useState('');

  return (
    <View style={{ position: 'relative', zIndex:1 }} >
      <View style={{ position: 'absolute',right:showCalendar=='right' ? 0 : null }} >
        <Calendar
          onDayPress={day => {
            onSelect(day)
          }}
          style={{
            borderRadius:3,
            borderWidth:0.2,
            height: 350
          }}
          markedDates={{
            [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
          }}
        />
        {/* <CalendarPicker onDateChange={(txt)=>console.log(txt)} /> */}
      </View>
    </View>
  )
}

export default CalendarPicerComp