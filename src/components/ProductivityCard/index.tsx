import React from 'react'
import { FlatList } from 'react-native'
import { formatBRL } from '../../../utils/format'
import { HomeCareProps } from '../../../utils/types'
import { NavigationProps } from '../../routes/types'
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
     
 }

export function ProductivityCard({homeCare, navigation}: Props){

    const productivity = homeCare.patients.reduce((acc, patient) => {
        acc.total = acc.total + (patient.dates.length * Number(patient.price))
        return acc
    }, {total: 0})

    return(
        
    <Container>
        <Content>
        <ServiceName>{homeCare.name}</ServiceName>
            <FlatList
                data={homeCare.patients}
                // ItemSeparatorComponent={Separator}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>
                    <ProductivityPatientCard 
                        patient={item}
                        navigation={navigation}
                        serviceId={homeCare.id}
                    />
                }
            />
            <Total> {formatBRL(productivity.total)}</Total>
        </Content>
    </Container>
    )
}