import React, { useCallback, useState } from 'react'
import { FlatList,Text } from 'react-native'
import { HomeCareProps, Patient } from '../../../utils/types'
import { Header } from '../../components/Header'
import { PatientCard } from '../../components/PatientCard'
import { ServiceCard } from '../../components/ServiceCard'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Content } from './styles'
import { patientsKey } from '../../../utils/keys'
import { useFocusEffect } from '@react-navigation/native'
import { NavigationProps } from '../../routes/types'

const data: number[] =[1,2,3,4]
const data1: number[] = [2,3,4,5,2,3]

interface Props{
    navigation: NavigationProps
}


export function AllPatients({navigation}: Props){

    const [services, setServices] = useState<HomeCareProps[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function loadServices(){

        
        const response = await AsyncStorage.getItem(patientsKey)
        const currentPatients: Patient[] = response ? JSON.parse(response) : []
        
        const patients = [...currentPatients]
        
        const formattedServices: HomeCareProps[] = []


        patients.map((patient) => {
            if(formattedServices.length === 0){
                const newService = {
                    id: patient.homeCareId,
                    name: patient.homeCareName,
                    patients: [patient]
                }
                formattedServices.push(newService)
                return
            } if(formattedServices.findIndex((item) =>
                item.id === patient.homeCareId?
                item.patients.push(patient) :
                null
            ) === -1){
                const newService = {
                    id: patient.homeCareId,
                    name: patient.homeCareName,
                    patients: [patient]
                }
                formattedServices.push(newService)
            }

        })

        setServices(formattedServices)
        setIsLoading(false)


    }
        
    useFocusEffect((useCallback(() =>{
        setIsLoading(true)
        loadServices()
    },[])))

    async function AddVisit(id: string){
        const response = await AsyncStorage.getItem(patientsKey)
        const currentPatients: Patient[] = response ? JSON.parse(response) : []
        const oldPatients = [...currentPatients]

        oldPatients.findIndex((item) => {
            if(item.id === id ){
                
                const date = new Date
                    const dateFormatted = Intl.DateTimeFormat('pt-BR',{
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'       
                    }).format(date)
                    const hourFormatted = Intl.DateTimeFormat('pt-BR',{
                        hour: '2-digit',
                        minute: '2-digit',

                    }).format(date)

                    item.dates.push(date)
                    item.assistences.push(`Dia ${dateFormatted} às ${hourFormatted} horas`)
            }
            
            AsyncStorage.setItem(patientsKey, JSON.stringify(oldPatients))
            
        })
        loadServices()
    }

    
    
    return(
    <Container>
        <Header title="Pacientes"/>
        <Content>
            {isLoading ? <ActivityIndicator /> :
            <FlatList 
            data={services}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
            <Content>
            <ServiceCard
            title={item.name}
            />
            <FlatList 
            data={item.patients}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                <PatientCard 
                    AddNewVisit={AddVisit}
                    patient={item}
                    navigation={navigation}
                />
            }
            />
            </Content> 
        }
             
            />
    }
        </Content>
    </Container>
    )
}


