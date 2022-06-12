import React from 'react'
import  { Calendar }  from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import './localeConfig/localeConfig'

interface Props{
  markedDates: any;
  onChangeMonth: (year: number, month: number) => void;
}

export function CalendarComponent({markedDates, onChangeMonth}:Props){
  return(
  
    <Calendar
      onMonthChange={value => onChangeMonth(value.year,value.month)}
      onDayLongPress={value => console.log(value)}
      style={{ 
        borderRadius: 5}}        
      markedDates={markedDates}
      markingType={'multi-dot'}
    />
  
  )
}

const styles = StyleSheet.create({
  calendar: {
    height: 200
  }
})