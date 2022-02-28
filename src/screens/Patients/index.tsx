import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PatientsCard } from '../../components/PatientsCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Content } from './styles'
import { FlatList } from 'react-native-gesture-handler';
import { ProfileScreenNavigationProp } from '../../routes/types';



interface Patients{
    id: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;
    homeCareName: string;
    visits: number;
}

const DataKey = '@mobilefisio:patients'

interface Props{
    navigation: ProfileScreenNavigationProp
}

export function Patients({navigation}: Props){

    const [patients, setPatients] = useState<Patients[]>([])

    async function loadPatients(){
        const response = await AsyncStorage.getItem(DataKey)
        const currentPatients = response ? JSON.parse(response) : []

        setPatients(currentPatients)        

    }

    async function addVisit(id: string){

        const response = await AsyncStorage.getItem(DataKey)
        const currentPatients = response ? JSON.parse(response) : []

        const oldPatients = [...currentPatients]

        if(oldPatients !== []){
            oldPatients.map((patient: Patients) => {
                if(id === patient.id){
                    patient.visits = patient.visits + 1
                    
                }
            })
            setPatients(oldPatients)
            await AsyncStorage.setItem(DataKey, JSON.stringify(oldPatients))
        }
        
    }

    useEffect(() => {
        navigation.addListener('focus', () =>{
            loadPatients()
            
        })
    },[navigation])

    return(
    <Container>
        <Header title='Pacientes'/>
        <FlatList 
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <Content
            onPress={() => navigation.navigate('Patient', {
                patient:{...item}
            })}
            >
            <PatientsCard 
            id={item.id}
            addNewVisits={addVisit}
            age={item.age}
            name={item.name}
            diagnosis={item.diagnosis}
            visits={item.visits}
            />
            </Content>
        )}       
        
        />
        
    </Container>
    )
}