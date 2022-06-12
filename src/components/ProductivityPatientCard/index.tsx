import React from 'react'
import { formatBRL } from '../../../utils/format'
import { PatientProps } from '../../hooks/servicesContext'
import { NavigationProps } from '../../routes/types'
import { filterDates } from '../../screens/PatientScreen/methods/filterDates'

import { 
    Container,
    Text
} from './styles'

type Props = {
    patient: PatientProps;
    navigation: NavigationProps;
    serviceId: string;
    month: number;
    year: number;
}

export function ProductivityPatientCard({patient, navigation, serviceId, month, year}: Props){

    const filteredDates = filterDates({dates: patient.dates, checkMonth: month, checkYear: year})
    const productivity = filteredDates.length * Number(patient.price)

    

    return(
    <Container
        onPress={() => navigation.navigate('Patient', {patientId: patient.id, serviceId: serviceId})}
    >
        <Text>Nome: {patient.name}</Text>
        <Text>Visitas: {filteredDates.length} </Text>
        {productivity !== 0 ? <Text>Produtividade: {formatBRL(productivity)}</Text> :
        <Text>Sem atendimentos nesse mês.</Text>
        }
    </Container>
    )
}