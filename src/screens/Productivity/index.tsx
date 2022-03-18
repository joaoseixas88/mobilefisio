
import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { ProductivityCard } from '../../components/ProductivityCard'
import { Container, Content } from './styles'
import { useServices } from '../../hooks/servicesContext';



export function Productivity(){

    const { services } = useServices()

    return(
    <Container>
        <Header 
            title='Produtividade'            
        />
        <Content>            
            <FlatList 
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <ProductivityCard 
                        homeCare={item}
                        
                    />
                }
            />
            
            
        </Content>

    </Container>
    )
}