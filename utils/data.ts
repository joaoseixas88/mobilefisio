

export const homeCareServices = [
    {

    homeCareName: 'Particular',
    id: '1',    
    patients:[
        {
            patient_id: '1',
            name: 'Lanzinha',
            age: '94',
            diagnosis: 'Alzheimer',
            price: '50',
            visits: '8',
        },
        {
            patient_id: '2',
            name: 'Maria da Paz',
            age: '60',
            diagnosis: 'POT Femur',
            price: '40',
            visits: '4',
        },

    ]
    },
    {
    homeCareName: 'Grupo Vidas',
    id: '2',      
    patients:[
        {
            patient_id: '1',
            name: 'Osvaldo',
            age: '55',
            diagnosis: 'POT Femur',
            price: '25',
            visits: '5', 
        },
        {
            patient_id: '2',
            name: 'Pedro',
            age: '75',
            diagnosis: 'AVC',
            price: '25',
            visits: '5',
        },
    ]
    },
    {
    homeCareName: 'Assiste Vida',
    id: '3',      
    patients:[
        {
            patient_id: '1',
            name: 'Joao Alberto',
            age: '55',
            diagnosis: 'Parkinson',
            price: '19',
            visits: '5',
        },
        {   
            patient_id: '3',
            name: 'Jaci',
            age: '70',
            diagnosis: 'Protese Femur',
            price: '19',
            visits: '5',
        }  
    ]
    },
]

let arrayofHome


homeCareServices.forEach(service => {
    const newHomeService = {
        homeCareName: service.name,
        id: service.id,
        patients: [patients.map((patient) => {
            return ({
                if(patient.homeCareId === service.id){
                    patient_id: patient.id,
                    name: patient.name,
                    age: patient.age,
                    diagnosis?: patient.diagnosis,
                    price: patient.price,
                    visits: patient.visits
                }
            })
        })]
    }


})

patients.map((paciente) =>{
    if 
})

{
    "age": 45,
    "diagnosis": "Whatever",
    "homeCareId": "f57e28bd-8247-4ca1-bdf7-d5d346455b0b",
    "homeCareName": "Particular",
    "id": "41223d41-67b5-4a2b-8c64-57390360c238",
    "name": "Teste",
    "price": "50",
    "visits": 0,
  }


