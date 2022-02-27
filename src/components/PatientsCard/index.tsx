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
     Button
     } from './styles'

interface Props{
    name: string;
    age: string;
    diagnosis: string;
    visits: number;
    id: string;
    addNewVisits: (id: string) => void;
}

export function PatientsCard({name, age, diagnosis, visits, id, addNewVisits}: Props){
    return(
    <Container>
        <Content>
            <TextContent>
                <Name>Nome: {name}</Name>
                <Age>Idade: {age}</Age>
                {diagnosis && <Diagnosis>Diagnostico: {diagnosis}</Diagnosis>}
                <Visits>Atendimentos: {visits}</Visits>
            </TextContent>
            <ButtonContent>
                <Button
                onPress={() => addNewVisits(id)}
                >
                    <MaterialCommunityIcons name="plus-circle-outline" size={24} color="black" />
                </Button>
            </ButtonContent>            
        </Content>        
    </Container>
    )
}