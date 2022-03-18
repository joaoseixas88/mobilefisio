import React from 'react'
import { FlatList } from 'react-native'
import { HomeCareProps } from '../../../utils/types'
import { ProductivityPatientCard } from '../ProductivityPatientCard'

import { 
    Container,
    ServiceName,
    

 } from './styles'

 type Props = {
     homeCare: HomeCareProps
 }

export function ProductivityCard({homeCare}: Props){
    return(
    <Container>
        <ServiceName>{homeCare.name}</ServiceName>
        <FlatList
            data={homeCare.patients}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                <ProductivityPatientCard 
                    patient={item}
                />
            }
        />
    </Container>
    )
}