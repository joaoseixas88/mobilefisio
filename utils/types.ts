export interface Patient{
    id: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;
    homeCareId: string;
    homeCareName: string;
    dates: Date[];    
    assistences: string[]
}

export interface HomeCareProps{
    id: string;
    name: string;
    patients: Patient[]
}
