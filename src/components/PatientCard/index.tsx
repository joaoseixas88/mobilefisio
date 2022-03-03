import React from 'react'
import { Button } from '../Button'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Container,
    Header,
    Name,
    Content,
    PatientContent,
    Visits,
    DetailsButton,
    Details,
    ButtonContent,
 } from './styles'
import { Alert } from 'react-native';
import {  Patient } from '../../../utils/types';
import { NavigationProps } from '../../routes/types';

interface Props {
    navigation: NavigationProps
    patient: Patient
    AddNewVisit: (id: string) => void
}


export function PatientCard({navigation, patient, AddNewVisit }: Props){


    function handleAddNewVisits(id:string){
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
                    onPress: () => {AddNewVisit(id)}
                }
            ]
        )
    }

    return(
    <Container>
        <Header>
            <Name>{patient.name}</Name>
        </Header>
        <Content>
            <PatientContent>
                <Visits>Visitas: {patient.assistences.length}</Visits>
                <DetailsButton
                    onPress={() => navigation.navigate('Patient', {patient:{...patient}})}
                    >
                    <Details>Detalhes</Details>
                </DetailsButton>
            </PatientContent>
            <ButtonContent
            onPress={() => handleAddNewVisits(patient.id)}
            >
                <MaterialCommunityIcons name="plus-circle-outline" size={24} color="black" />            
            </ButtonContent>
        </Content>
    </Container>
    )
}