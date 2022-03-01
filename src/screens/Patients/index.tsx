import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PatientsCard } from '../../components/PatientsCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native'
import { 
    Container, 
    Content, 
    Separator,
} from './styles'
import { FlatList } from 'react-native-gesture-handler';
import { NavigationProps } from '../../routes/types';
import { Patient } from '../../../utils/types';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';




const DataKey = '@mobilefisio:patients'

interface Props{
    navigation: NavigationProps
}

export function Patients({navigation}: Props){

    const [patients, setPatients] = useState<Patient[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function loadPatients(){
        const response = await AsyncStorage.getItem(DataKey)
        const currentPatients = response ? JSON.parse(response) : []

        setPatients(currentPatients) 
        setIsLoading(false)       

    }

    async function addVisit(id: string){

        const response = await AsyncStorage.getItem(DataKey)
        const currentPatients = response ? JSON.parse(response) : []

        const oldPatients = [...currentPatients]

        if(oldPatients !== []){
            oldPatients.map((patient: Patient) => {
                if(id === patient.id){
                    patient.visits = patient.visits + 1

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

                    
                    patient.assistences.push(`Dia ${dateFormatted} ás ${hourFormatted} horas`)
                }
            })
            setPatients(oldPatients)
            await AsyncStorage.setItem(DataKey, JSON.stringify(oldPatients))
        }
        
    }

    useEffect(() => {
        navigation.addListener('focus', () =>{
            setIsLoading(true) 
            loadPatients()
            
        })
    },[navigation])

    return(
    
    <Container>
        <Header title='Pacientes'/>
        {isLoading ? <ActivityIndicator/> :
        <FlatList 
        data={patients}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <Content
            >
                <PatientsCard 
                id={item.id}
                addNewVisits={addVisit}
                age={item.age}
                name={item.name}
                diagnosis={item.diagnosis}
                visits={item.visits}
                navigation={navigation}
                patient={item}
                />
                
            </Content>
        )}       
        
        />}
        
    </Container>
    )
}