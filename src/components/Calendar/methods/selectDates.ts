


export function selectDates(dates: Date[]){

  const datesFormatted = dates.map(date => {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : `${newDate.getMonth() + 1}`
    const day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : `${newDate.getDate()}`

    return `${year}-${month}-${day}`
  })
  
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'}
  const formattedList = datesFormatted.reduce((acc, item )=> {  
    const isDateAlreadyExist = acc.hasOwnProperty(item)
      if(isDateAlreadyExist){
        return {
          ...acc,
          [item]: { selected: true, selectedColor: '#04770a'} 
        }
      }else{
        return{
          ...acc,
          [item]: {selected: true, selectedColor: '#0ebd17'}
        }
      }
      



  },{})

return formattedList

}