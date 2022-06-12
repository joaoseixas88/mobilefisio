
export function onChangeMonth(type: string, month: number, year: number){
    const changedMonth = type === 'next' ? nextMonth(month) : previousMonth(month)
    
 
    function nextMonth(month: number){
        if(month >= 12){            
            return {
                month: 1,
                year: nextYear(year)
            }
        } 
        return ({
            month: month + 1,
            year
        })
    
    }
    
    function previousMonth(month: number){
        if(month <= 1){
            
            return {
                month: 12,
                year: previousYear(year)
            }
        }
        return {
            month: month - 1,
            year
        }
    
    }

    return changedMonth

}  

export function nextYear(year: number){    
    return year+1
}

export function previousYear(year:number){
    return year-1
}