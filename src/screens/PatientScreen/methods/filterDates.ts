
export interface FilterDatesProps{
    dates: Date[],    
    checkMonth: number;
    checkYear: number
}



export function filterDates({dates,checkYear,checkMonth}: FilterDatesProps){

    const filteredDates = dates.filter(date => isThisMonth(date, checkMonth) && isThisYear(date, checkYear))

    return filteredDates
    
    
}

function isThisMonth(date: Date, checkMonth: number){
    const newDate = new Date(date)
    return newDate.getMonth() + 1 === checkMonth
}
function isThisYear(date: Date, checkYear:number){
    const newDate = new Date(date)
    return newDate.getFullYear() === checkYear
}