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
import { useServices } from '../../hooks/servicesContext';


interface Props {
    id: string;
    name: string;    
    setCloseModal: () => void;
    route: RoutesProps
    navigation: NavigationProps
}


export function PatientScreen({ route, navigation }: Props){

    const { patient, serviceId } = route.params
    const formattedPatient = JSON.parse(patient)

    const { deletePatient } = useServices()

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
                    onPress: () => (deletePatient(serviceId, formattedPatient.id), navigation.goBack())
                }
            ]
        )
        
    }

    
    return(
    <Container>
        <Header 
        title={formattedPatient.name}
        />
        <Content>
        <PatientContent>            
            <Age>Idade: {formattedPatient.age}</Age>
            <Diagnosis>Diagnóstico: {formattedPatient.diagnosis}</Diagnosis>
            <Price>Valor do atendimento: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(formattedPatient.price))}
            </Price>            
            <Visits>Atendimentos realizados: {formattedPatient.assistences.length}</Visits>
            <Title>Datas dos atendimentos:</Title>
            <FlatList 
            data={formattedPatient.assistences}
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