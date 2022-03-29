import React from 'react'
import { formatBRL } from '../../../utils/format'
import { PatientProps } from '../../hooks/servicesContext'
import { NavigationProps } from '../../routes/types'

import { 
    Container,
    Text
} from './styles'

type Props = {
    patient: PatientProps;
    navigation: NavigationProps;
    serviceId: string;
}

export function ProductivityPatientCard({patient, navigation, serviceId}: Props){

    const productivity = patient.dates.length * Number(patient.price)


    return(
    <Container
        onPress={() => navigation.navigate('Patient', {patientId: patient.id, serviceId: serviceId})}
    >
        <Text>Nome: {patient.name}</Text>
        <Text>Visitas: {patient.dates.length} </Text>
        {productivity !== 0 ? <Text>Produtividade: {formatBRL(productivity)}</Text> :
        <Text>Sem atendimentos realizados ainda.</Text>
        }
    </Container>
    )
}