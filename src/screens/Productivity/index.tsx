
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { ProductivityCard } from '../../components/ProductivityCard'
import { Container, Content, Separator, TotalProductivity, TotalProdText, Total } from './styles'
import { useServices } from '../../hooks/servicesContext';
import { NavigationProps } from '../../routes/types'
import { formatBRL } from '../../../utils/format'
import { Button } from '../../components/Button'
import { DatePicker } from '../../components/DatePicker'
import { filterDates } from '../PatientScreen/methods/filterDates'
import { number } from 'yup'

interface Props { 
    navigation: NavigationProps
}


export function Productivity({navigation}: Props){
    const now = new Date()
    const { services } = useServices()
    const formattedServices = services.filter(service => service.patients.length !== 0)    
    const [date, setDate]  = useState({
        month: now.getMonth() +1,
        year: now.getFullYear()
    })

    const productivity = formattedServices.reduce((acc, service) => {
        service.patients.forEach(patient => {
            const filteredDates = filterDates({dates: patient.dates, checkYear: date.year, checkMonth: date.month})
            acc.total = acc.total + (filteredDates.length * Number(patient.price))
        })
        return acc
    },{total: 0})

   

    return(
    <Container>
        <Header 
            title='Produtividade'                      
        >           
        </Header>
        <DatePicker
            getDate={value => setDate(value)}
        />        
        <Content>            
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={formattedServices}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}                
                renderItem={({item}) => 
                    <ProductivityCard 
                        month={date.month}
                        year={date.year}
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