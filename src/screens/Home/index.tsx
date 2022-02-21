import React from 'react'
import { FlatList, Text } from 'react-native'
import { homeCareServices } from '../../../utils/data'


import { 
    Container,
    Header,
    Title,
    HomeCareName,
    Content,
    PatientsContent,
    Name,
    Age,
    Diagnosis,
    HomeCareNameView,
    FlatContent,
    AssistencesContent,
    Assistence,
    Production,
    
} from './styles'

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


export function Home(){

    

    return(
    <Container>
        <Header>
            <Title>Produtividade</Title>
        </Header>
        <FlatList
        data={homeCareServices}
        keyExtractor={item => item.homeCareName}
        renderItem={({item}) =>
            <Content>
                <HomeCareNameView>
                    <HomeCareName>{item.homeCareName}</HomeCareName>
                </HomeCareNameView>
                <FlatList 
                data={item.patients}
                keyExtractor={ item => item.patient_id}
                renderItem={({item}) =>
                <FlatContent>
                    <PatientsContent>
                        <Name>Paciente: {item.name}</Name>
                        <Age>Idade: {item.age}</Age>
                        <Diagnosis>Diagnóstico: {item.diagnosis}</Diagnosis>
                    </PatientsContent>
                    <AssistencesContent>
                        <Assistence>Realizado {item.visits} Visitas</Assistence>
                        <Production> Produtividade: R$ {Number(item.visits) * Number(item.price)}</Production>
                    </AssistencesContent>
                    
                </FlatContent>
                
            } 
                
                />
                
                <Text>Total: R$ {item.patients.reduce((acc, patient) => {
                    acc += (Number(patient.price) * Number(patient.visits))
                    return acc
                }, 0)}</Text>
                
            </Content> 
            
        }
        />
        <Content>
        <Text>Total da produtividade: R$ {homeCareServices.reduce((acc, homeService) => {
                homeService.patients.forEach((patient) =>{
                    acc += (Number(patient.price) * Number(patient.visits) )
                })
                return acc
            }, 0)} </Text>               
         </Content> 
    </Container>
    )
}