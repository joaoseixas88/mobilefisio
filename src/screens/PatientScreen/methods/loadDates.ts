import { PatientProps } from "../../../../utils/types"
import { filterDates } from "./filterDates";

interface DateProps{
    year: number;
    month: number;
}

export function loadDates(patient: PatientProps, 
    date: DateProps,     
    ){
        
    const patientDates ={ 
        dates: patient.dates,
        checkYear: date.year,
        checkMonth: date.month
    }     

    const filteredDates = filterDates(patientDates)
     
    return filteredDates
}