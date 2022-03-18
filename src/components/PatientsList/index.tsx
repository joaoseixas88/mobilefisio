import React from 'react'
import { PatientProps } from '../../../utils/types';
import { PatientCard } from '../PatientCard'
import { FlatList  } from 'react-native-gesture-handler';
import { Container } from './styles'
import { NavigationProps } from '../../routes/types';

interface Props{
    patients: PatientProps[];
    serviceId: string;
    navigation: NavigationProps;
    
}


export function PatientsList({patients, serviceId, navigation}: Props){
    return(
    
     <FlatList 
        data={patients}

        keyExtractor={(item)  => item.id}

        renderItem={({item}) => 
         
         <PatientCard 
            patient={item}
            serviceId={serviceId}
            navigation={navigation}
             
         />
        }
     />
    
    )
}