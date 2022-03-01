import React from 'react'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../components/Header'
import { 
    Container,
    PatientContent,
    Content,
    Age,
    Diagnosis,
    Price,
    Visits,
    ButtonContent,
    Delete,
    DeleteText,
    DatesContainer,
    Title,
    Date
 } from './styles'

import { Button } from '../../components/Button';
import { NavigationProps, RoutesProps } from '../../routes/types';
import { Alert, FlatList } from 'react-native';


interface Props {
    id: string;
    name: string;    
    setCloseModal: () => void;
    route: RoutesProps
    navigation: NavigationProps
}





const DataKey = '@mobilefisio:patients'

export function PatientScreen({ route, navigation }: Props){

    const { patient } = route.params

    async function handleDeletePatient(id: string){
       const response = await AsyncStorage.getItem(DataKey)
       const patients = response ? JSON.parse(response) : []
        
       const currentPatients = [...patients]

       const newPatients = currentPatients.filter((item) => id !== item.id)

       await AsyncStorage.setItem(DataKey, JSON.stringify(newPatients))
       navigation.navigate('Routes')
       Alert.alert('Paciente removido com sucesso')

    }

    function handleDelete(){
        Alert.alert(
            "Remover",
            "Tem certeza que deseja remover o paciente?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log('Cancelado')
                },
                {
                    text: "Confirmar",
                    onPress: () => handleDeletePatient(patient.id)
                }
            ]
        )
    }

    
    
    return(
    <Container>
        <Header 
        title={patient.name}
        />
        <Content>
        <PatientContent>            
            <Age>Idade: {patient.age}</Age>
            <Diagnosis>Diagnóstico: {patient.diagnosis}</Diagnosis>
            <Price>Valor do atendimento: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(patient.price))}
            </Price>
            <Visits>Atendimentos realizados: {patient.assistences.length}</Visits>
            <Title>Datas dos atendimentos:</Title>
            <FlatList 
            data={patient.assistences}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <DatesContainer>                    
                    <Date>{item}</Date>
                </DatesContainer>
            )}
             
            
            />
            
        </PatientContent> 
        <ButtonContent>
            <Delete
            onPress={handleDelete}
            >
                <DeleteText>Deletar</DeleteText>
            </Delete>
            <Button 
            title='Voltar'
            onPress={() => navigation.navigate('Routes')}
            />
        </ButtonContent>    
        </Content>
    </Container>
    )
}