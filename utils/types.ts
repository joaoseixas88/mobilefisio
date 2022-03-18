


export interface HomeCareProps{
    id: string;
    name: string;
    price: string;    
    patients: PatientProps[]
}

export interface PatientProps{
    id: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;    
    dates: Date[];    
    assistences: string[]
}

