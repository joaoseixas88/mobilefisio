import React, { useCallback, useEffect, useState, } from 'react'
import { FlatList } from 'react-native'

import { Header } from '../../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native'
import { 
    Container,    
    HomeCareName,
    Content,
    PatientsContent,
    Text,
    TotalContent,
    Total,
    HomeCareNameView,
    FlatPatientsContent,
    
    
} from './styles'

interface Patients{
    id: string;
    homeCareId: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;
    homeCareName: string;
    visits: number;
}

interface HomeCareProps{
    id: string;
    name: string;
    patients: Patients[]
    
}

interface OldHomeProps{
    id: string;
    name: string;
    price: string;
}
interface Props{
    navigation: any
}


const patientsKey = '@mobilefisio:patients'
const homeServicesKey = '@mobilefisio:homeservices'

export function Home({navigation}: Props){

    const [isLoading, setIsLoading] = useState(true)
    const [patients, setPatients] = useState<Patients[]>([])
    const [homeCareServices, setHomeCareServices] = useState<HomeCareProps[]>([])

    async function loadPatients(){
        

    }

   

    async function loadServices(){
        
        const getPatients = await AsyncStorage.getItem(patientsKey)
        const oldPatients = getPatients ?  JSON.parse(getPatients) : []
        
        

        const response = await AsyncStorage.getItem(homeServicesKey)
        const homeServices  = response ? JSON.parse(response) : []
        
        const formatedHomeServices = homeServices.map((service: OldHomeProps) => {
            return ({
                id: service.id,
                name: service.name,
                patients: []
            })
        })

        if (formatedHomeServices !==[]){
            const oldServices = [...formatedHomeServices]
            oldPatients.forEach((patient: Patients) => {
                oldServices.forEach((service) => {
                    if (service.id === patient.homeCareId){
                        service.patients.push(patient)
                    }
                })
            })

            setHomeCareServices(oldServices)  
            setIsLoading(false)          
        }
        
        

    }
       
  
    useEffect(() => {
        navigation.addListener('focus', () =>{
            setIsLoading(true)
            loadPatients()
            loadServices()
        })
    },[navigation])
        
    

    return(
    <Container>
        <Header 
        title='Produtividade'
        />        
        {isLoading ? <ActivityIndicator/> :
        <FlatList
        data={homeCareServices}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
            <Content>
                <HomeCareNameView>
                    <HomeCareName>{item.name}</HomeCareName>
                </HomeCareNameView>
                <FlatList 
                data={item.patients}
                keyExtractor={ item => item.id}
                renderItem={({item}) =>
                <FlatPatientsContent>                    
                    <Text>Paciente: {item.name}</Text>                        
                    <Text>Realizado {item.visits} Visitas</Text>
                    <Text>Produtividade: R$ {Number(item.visits) * Number(item.price)}</Text>
                </FlatPatientsContent>
                
            } 
            />
                
                <Total>Total: R$ {item.patients.reduce((acc, patient) => {
                    acc += (Number(patient.price) * Number(patient.visits))
                    return acc
                }, 0)}</Total>
                
            
            </Content> 
        }
        />
    }
        <TotalContent>
            <Total>Total da produtividade: R$ {homeCareServices.reduce((acc, homeService) => {
                    homeService.patients.forEach((patient) =>{
                        acc += (Number(patient.price) * Number(patient.visits) )
                    })
                    return acc
                }, 0)} 
            </Total>               
         </TotalContent> 
    </Container>
    )
}