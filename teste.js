

// interface Patient{
//     name: string;
//     age: string;
//     diagnosis: string;
// }
// interface HomeCareServicesProps{
//     homeCareName: string;
//     price: string;
//     patients: Patient[];

// }

const homeCareServices = [
    {
    homeCareName: 'Particular',    
    patients:[
        {
            patient_id: '1',
            name: 'Lanzinha',
            age: '94',
            diagnosis: 'Alzheimer',
            price: 50,
            visits: 8,
        },
        {
            patient_id: '2',
            name: 'Maria da Paz',
            age: '60',
            diagnosis: 'POT Femur',
            price: 40,
            visits: 4,
        },

    ]
    },
    {
    homeCareName: 'Grupo Vidas',    
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



// function atesteReduce(homeCareServices){    
//     let acc = 0
//     homeCareServices.patients.forEach(element => {
//         acc += Number(element.price * element.visits)
//         console.log(acc)
//     })
// }

// testeReduce(homeCareServices[0])


function testeReduce(homeCareServices){    
    homeCareServices.patients.reduce((acc, element) => {
        console.log(acc)
        console.log(element)

        acc += (element.price * element.visits)
        console.log(acc)
        return acc
    }, 0)
    
}


testeReduce(homeCareServices[0])