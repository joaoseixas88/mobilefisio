import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { ServiceCard } from '../../components/ServiceCard'
import { Container, Content, FlatContent } from './styles'
import { NavigationProps } from '../../routes/types'
import { PatientsList } from '../../components/PatientsList'
import { useServices } from '../../hooks/servicesContext'



interface Props{
    navigation: NavigationProps
}


export function AllPatients({navigation}: Props){

    const { services } = useServices()
    
    const formattedServices = services.filter(item => item.patients.length !== 0)

    
    return(

        
    <Container>
        <Header title="Pacientes"/>      
        <Content>
            <FlatList             
                data={formattedServices}
                keyExtractor={(service) => service.id}            
                renderItem={({item}) =>
                    <FlatContent>
                        <ServiceCard
                            title={item.name}            
                        />
                        <PatientsList
                            patients={item.patients}
                            serviceId={item.id} 
                            navigation={navigation}  
                                
                        />
                    </FlatContent>
                    
                 }

            />    
        </Content>
    </Container>
    )
}


