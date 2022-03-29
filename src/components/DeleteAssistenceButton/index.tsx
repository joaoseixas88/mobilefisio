import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Container } from './styles'
import { useServices } from '../../hooks/servicesContext';
import { Alert } from 'react-native';

type Props = {
    serviceId: string, 
    patientId: string, 
    date: string,
    index: number,
}



export function DeleteAssistenceButton({serviceId,patientId, date, index}: Props){

    const { deleteAssistence } = useServices()

    function handleDeleteAssistence(){

        Alert.alert(
            "Atendimento:",
            `${date} \ Confirmar?`,
            [
                {
                    text: "Cancelar",
                    onPress: () => {return}
                },
                {
                    text: "Confirmar",
                    onPress: () => {deleteAssistence(serviceId, patientId, index)}
                },                
            ]
        )

        
    }

    return(
    <Container
        onPress={() => handleDeleteAssistence()}
    >
        <EvilIcons name="minus" size={24} color="red" />
    </Container>
    )
}