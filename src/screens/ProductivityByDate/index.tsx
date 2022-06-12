
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { ProductivityCard } from '../../components/ProductivityCard'
import { Container, Content, Separator, TotalProductivity, TotalProdText, Total, SelectYear, SelectMonth,  } from './styles'
import { useServices } from '../../hooks/servicesContext';
import { NavigationProps } from '../../routes/types'
import { formatBRL } from '../../../utils/format'


interface Props { 
    navigation: NavigationProps
}

export function ProductivityByDate({navigation}: Props){

    const { services, allDates } = useServices()

    const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

    

    const [selectedMonth, setSelectedMonth] = useState<any>(months[0])
    
    const [month, setMonth] = useState<any>(allAssistences(allDates).months[0])
    
    const [year, setYear] = useState<any>(allAssistences(allDates).years[0])


    const formattedServices = services.filter(service => service.patients.length !== 0)

    function filterDate(date: Date, month: number){
        const newDate = new Date(date)
        return newDate.getMonth() === month 
    }

    function allAssistences(dates: Date[]){
        let year = 0
        let month = -1

        const years: number[] = []
        const months: number[] =[]

        dates.map((date) => { 
            const newDate = new Date(date)

            if(newDate.getFullYear() !== year){
                years.push(newDate.getFullYear())
                year = newDate.getFullYear()                
            }
            if(newDate.getMonth() !== month){
                months.push(newDate.getMonth())
                month = newDate.getMonth()
            }
        })
        
        return {
            years: years,
            months: months
        }
    }

    
    const productivity = formattedServices.reduce((acc, service) => {
        service.patients.forEach(patient => {
            const filteredDates = patient.dates.filter(item => filterDate(item, month))
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
        
        <Content>
        <SelectYear
                selectedValue={year}
                onValueChange={(itemValue) => (setYear(itemValue))}
            >
                {allAssistences(allDates).years.map((year) =>{
                    return (<SelectYear.Item label={String(year)} 
                            value={year} key={year}
                            />)
                })}

        </SelectYear>   
        <SelectMonth 
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => (setSelectedMonth(itemValue), setMonth(itemValue))}            
        >
            {allAssistences(allDates).months.map((month) => {
                
                return (<SelectMonth.Item 
                    label={months[month]}
                    value={month}
                    key={month}
                /> )
            })}
        </SelectMonth>

        

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