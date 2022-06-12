import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { pickMonth } from './methods/pickMonth';
import { onChangeMonth } from './methods/onChangeMonth';

interface DateData{
    month: number;
    year: number
}

interface Props{
    getDate?: (date: DateData) => void
}

export function DatePicker({getDate}: Props){
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
    const now = new Date() 
    const [date, setDate] = useState({
        month: now.getMonth()+1,
        year: now.getFullYear()
    })



    function nextMonth(){
        const newDate =  onChangeMonth('next',date.month,date.year)
        setDate(newDate)
        getDate && getDate(newDate)
    }
    function previousMonth(){
        const newDate =  onChangeMonth('previous',date.month,date.year)
        setDate(newDate)
        getDate && getDate(newDate)
    }
    const formattedMonth = pickMonth(date.month)
    
     function handleClose(){
         setIsDatePickerVisible(false)
     }

     function handleOpenDatePicker(){
         setIsDatePickerVisible(true)
     }
     function handleConfirm(date: Date){
         const newDate = {
            month: date.getMonth()+1,
            year: date.getFullYear()
        }
         setDate(newDate)
         getDate && getDate(newDate)
         handleClose()
     }
     
      
    
    return (
        <View style={{flexDirection: 'row', 
        alignItems: 'center',
         width: '100%',
         justifyContent: 'space-around'
         }}>
            <RectButton onPress={() => previousMonth()}>
                <AntDesign name="caretleft" size={20} color="#107dac" />
            </RectButton>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.date_text}>
                {formattedMonth},     
            </Text>            
            <RectButton onPress={handleOpenDatePicker}>
                <Text style={styles.date_text}>
                    {date.year}
                </Text>
            </RectButton>
            </View>
            <RectButton  onPress={() => nextMonth() }>
                <AntDesign name="caretright" size={20} color="#107dac" />
            </RectButton>
            <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"   
                    onConfirm={handleConfirm}                 
                    onCancel={handleClose}
                />    
                           
        </View>
        
    )
}

const styles = StyleSheet.create({
    date_text:{
        fontSize: 17,
    }
})