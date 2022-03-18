import React from 'react'
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
import {  PatientProps } from '../../../utils/types';
import { NavigationProps } from '../../routes/types';
import { useServices } from '../../hooks/servicesContext';

interface Props {
    navigation: NavigationProps
    patient: PatientProps   
    serviceId: string
}


export function PatientCard({navigation, patient, serviceId }: Props){


    const { addNewVisit } = useServices()

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
                    onPress: () => {addNewVisit(serviceId, id)}
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
                    onPress={() => navigation.navigate('Patient', {patient:JSON.stringify(patient), serviceId: serviceId})}
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