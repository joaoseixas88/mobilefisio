import React from 'react'
import { Header } from '../../components/Header'
import { Container } from './styles'

import { Button } from '../../components/Button';
import { NavigationProps, RoutesProps } from '../../routes/types';


interface Props {
    id: string;
    name: string;    
    setCloseModal: () => void;
    route: RoutesProps
    navigation: NavigationProps
}



const DataKey = '@mobilefisio:patients'

export function PatientScreen({ route, navigation }: Props){

    const { patient } = route.params
    
    return(
    <Container>
        <Header 
        title={patient.name}
        />        
        <Button 
        title='Voltar'
        onPress={() => navigation.navigate('Routes')}
        />
    </Container>
    )
}