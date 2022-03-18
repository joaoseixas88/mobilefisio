import React from 'react'
import { PatientProps } from '../../hooks/servicesContext'

import { 
    Container,
    Name,
    Assistences,
    Productivity,
} from './styles'

type Props = {
    patient: PatientProps
}

export function ProductivityPatientCard({patient}: Props){

    const productivity = patient.assistences.length * Number(patient.price)

    return(
    <Container>
        <Name>Nome: {patient.name}</Name>
        <Assistences>Visitas: {patient.assistences.length} </Assistences>
        <Productivity>Produtividade: {productivity}</Productivity>
    </Container>
    )
}