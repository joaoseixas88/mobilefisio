import React from 'react'
import  { Calendar }  from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import {LocaleConfig} from 'react-native-calendars';



LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';



export function CalendarComponent({markedDates}:any){
  return(
  
    <Calendar
      onMonthChange={value => console.log(value)}
      style={{height: 317, borderRadius: 5}}
      markedDates={markedDates}
      
    />
  
  )
}

const styles = StyleSheet.create({
  calendar: {
    height: 200
  }
})