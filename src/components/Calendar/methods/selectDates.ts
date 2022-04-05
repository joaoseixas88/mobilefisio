


export function selectDates(dates: Date[]){

  const datesFormatted = dates.map(date => {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : `${newDate.getMonth() + 1}`
    const day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : `${newDate.getDate()}`

    return `${year}-${month}-${day}`
  })
  
  
  const formattedList = datesFormatted.reduce((acc, item )=> {
    return {
      ...acc,
      [item]: {selected: true}
    }
},{})

return formattedList
}



