import React from 'react'
import { CalendarNumber } from './CalendarNumber'
import { Calendar } from 'react-native-calendars'
import { Container, Days, Day, Numbers } from './styles'

function renderDays(){
    const arrayNumber: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
       arrayNumber.map((numero,i) => {
           return (<CalendarNumber key={i} value={numero}/>)
       })

}

export function AssistenceCalendar(){
    return(
    <Container>   
        <Calendar />
        {/* <Numbers>            
            {<CalendarNumber value={'Dom'}/>}
            {<CalendarNumber value={'Seg'}/>}
            {<CalendarNumber value={'Ter'}/>}
            {<CalendarNumber value={'Qua'}/>}
            {<CalendarNumber value={'Qui'}/>}
            {<CalendarNumber value={'Sex'}/>}
            {<CalendarNumber value={'Sab'}/>}
            {<CalendarNumber value={8} shouldRender={true}/>}
            {<CalendarNumber value={8} shouldRender={true}/>}
            {<CalendarNumber value={1}/>}
            {<CalendarNumber value={1}/>}
            {<CalendarNumber value={8}/>}
            {<CalendarNumber value={2}/>}
            {<CalendarNumber value={3}/>}
            {<CalendarNumber value={4}/>}
            {<CalendarNumber value={5}/>}
            {<CalendarNumber value={6}/>}
            {<CalendarNumber value={7}/>}
            {<CalendarNumber value={9}/>}
            {<CalendarNumber value={10}/>}
            {<CalendarNumber value={11}/>}
            {<CalendarNumber value={12}/>}
            {<CalendarNumber value={13}/>}
            {<CalendarNumber value={14} isActive={true}/>}
            {<CalendarNumber value={15}/>}
            {<CalendarNumber value={16}/>}
            {<CalendarNumber value={17}/>}
            {<CalendarNumber value={18}/>}
            {<CalendarNumber value={19}/>}
            {<CalendarNumber value={20}/>}
            {<CalendarNumber value={21}/>}
            {<CalendarNumber value={22} isActive={true}/>}
            {<CalendarNumber value={23}/>}
            {<CalendarNumber value={24}/>}
            {<CalendarNumber value={25}/>}
            {<CalendarNumber value={25}/>}
            {<CalendarNumber value={26}/>}
            {<CalendarNumber value={27}/>}
            {<CalendarNumber value={29}/>}
            {<CalendarNumber value={30}/>}
            {<CalendarNumber value={31}/>}
            {<CalendarNumber value={31}/>}            
        </Numbers> */}
    </Container>
    )
}