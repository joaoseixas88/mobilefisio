import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';





import {
     Container,
     Name,
     Age,
     Diagnosis,
     Visits,
     Content,
     ButtonContent,
     TextContent,
     Button,
     TextButton,
     ButtonInfoContent
     } from './styles'
import { Alert } from 'react-native';
import { NavigationProps } from '../../routes/types';
import { Patient } from '../../../utils/types';

interface Props{
    name: string;
    age: string;
    diagnosis: string;
    visits: number;
    id: string;
    addNewVisits: (id: string) => void;
    navigation: NavigationProps;
    patient: Patient
}

export function PatientsCard({patient,name, age, diagnosis, visits, id, addNewVisits, navigation}: Props){

    function handleAddNewVisits(){
        Alert.alert(
            "Confirmar atendimento.",
            "Você gostaria de confirmar o atendimento?",
            [
                {
                    text: "Cancelar",
                    onPress: () => {return}
                },
                {
                    text: "Confirmar",
                    onPress: () => {addNewVisits(id)}
                }
            ]
        )
    }

    return(
    <Container>
        <Content>
            <TextContent>
                <Name>Nome: {name}</Name>
                <Age>Idade: {age}</Age>
                {diagnosis && <Diagnosis>Diagnostico: {diagnosis}</Diagnosis>}
                <Visits>Atendimentos: {visits}</Visits>
                <ButtonInfoContent>
                <Button 
                onPress={() => navigation.navigate('Patient', {
                    patient:{...patient}
                })}>
                    <TextButton>Informações</TextButton>
                </Button>
                </ButtonInfoContent>
            </TextContent>
            <ButtonContent>
                <Button
                onPress={handleAddNewVisits}
                >
                    <MaterialCommunityIcons name="plus-circle-outline" size={24} color="black" />
                </Button>
            </ButtonContent>            
        </Content>        
    </Container>
    )
}