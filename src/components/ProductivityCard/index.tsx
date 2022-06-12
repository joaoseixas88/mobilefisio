import React from 'react'
import { FlatList } from 'react-native'
import { formatBRL } from '../../../utils/format'
import { HomeCareProps } from '../../../utils/types'
import { NavigationProps } from '../../routes/types'
import { filterDates } from '../../screens/PatientScreen/methods/filterDates'
import { ProductivityPatientCard } from '../ProductivityPatientCard'

import { 
    Container,
    ServiceName,
    Total,
    Content

 } from './styles'



 type Props = {
     homeCare: HomeCareProps
     navigation: NavigationProps
     month: number;
     year: number;
 }

export function ProductivityCard({homeCare, navigation, month, year}: Props){

    const productivity = homeCare.patients.reduce((acc, patient) => {
        const filteredDates = filterDates({dates: patient.dates, checkYear: year, checkMonth: month})

        acc.total = acc.total + (filteredDates.length * Number(patient.price))
        return acc
    }, {total: 0})

    return(
        
    <Container>
        <Content>
        <ServiceName>{homeCare.name}</ServiceName>

            {homeCare.patients.map(patient => {
                const productivity = filterDates({dates: patient.dates, checkMonth: month, checkYear: year}).length
                
                if(productivity === 0) {
                    return;
                }
                return (
                    <ProductivityPatientCard 
                        key={patient.id}
                        month={month}
                        year={year}
                        patient={patient}
                        navigation={navigation}
                        serviceId={homeCare.id}
                    />
                )
            })}            
            <Total> {formatBRL(productivity.total)}</Total>
        </Content>
    </Container>
    )
}