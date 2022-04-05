
import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { ProductivityCard } from '../../components/ProductivityCard'
import { Container, Content, Separator, TotalProductivity, TotalProdText, Total, ProdByDate } from './styles'
import { useServices } from '../../hooks/servicesContext';
import { NavigationProps } from '../../routes/types'
import { formatBRL } from '../../../utils/format'
import { Button } from '../../components/Button'

interface Props { 
    navigation: NavigationProps
}

export function Productivity({navigation}: Props){

    const { services } = useServices()
    const formattedServices = services.filter(service => service.patients.length !== 0)
    
    const productivity = formattedServices.reduce((acc, service) => {
        service.patients.forEach(patient => {
            acc.total = acc.total + (patient.dates.length * Number(patient.price))
        })
        return acc
    },{total: 0})

    return(
    <Container>
        <Header 
            title='Produtividade'                      
        >
            {/* <ProdByDate
                onPress={() => navigation.navigate(`ProductivityByDate`)}
            >
                <TotalProdText>Prod</TotalProdText>
            </ProdByDate> */}
        </Header>        
        <Content>            
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={formattedServices}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}                
                renderItem={({item}) => 
                    <ProductivityCard 
                        homeCare={item}   
                        navigation={navigation}                     
                    />
                }
            />            
            
        </Content>
        <TotalProductivity>
            <TotalProdText>
                Produtividade Total: <Total>{formatBRL(productivity.total)}</Total>
            </TotalProdText>
        </TotalProductivity>
    </Container>
    )
}