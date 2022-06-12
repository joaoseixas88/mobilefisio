import React from 'react';
import { CalendarNumber } from './CalendarNumber';
import { Calendar } from 'react-native-calendars';
import { Container, Days, Day, Numbers } from './styles';

function renderDays(){
	const arrayNumber: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	arrayNumber.map((numero,i) => {
		return (<CalendarNumber key={i} value={numero}/>);
	});

}

export function AssistenceCalendar(){
	return(
		<Container>
			<Calendar />
		</Container>
	);
}
