import React from 'react'
import { Header } from '../../components/Header'
import { InputForm } from '../../components/InputForm'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid'
import { PatientProps } from '../../../utils/types'

import { 
    Container,
    Form,
    ContentButton,
    Content
 } from './styles'
import { Button } from '../../components/Button';
import { Alert } from 'react-native';
import { servicesKey  } from '../../../utils/keys';
import { useServices } from '../../hooks/servicesContext';




const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome'),
    price: Yup.number().typeError('Somente valor numérico').required('Digite o valor do atendimento')

})

interface HomeCareProps{
    id: string;
    name: string;
    price: string;
    patients: PatientProps[]
}

interface Props{
    closeModal: () => void ;    
    homeCareServices: HomeCareProps[]
    setHomeCareServices: (homeService: HomeCareProps[]) => void
}

interface FormData{
    [name: string]: any ;     
}



export function AddNewHomeCare({closeModal, setHomeCareServices, homeCareServices}: Props){


    const { registerNewService } = useServices() 

    const { 
        control, 
        handleSubmit, 
        formState: { errors },
        
    } = useForm({resolver: yupResolver(schema)})

   

    async function handleRegisterHomeCare(form: FormData){

        const newHomeService = {
            id: String(uuid.v4()),
            name: form.name,
            price: form.price,
            patients: []
        }
        
        registerNewService(newHomeService)
        
                
        closeModal()
        
        
    }


    return(
        <GestureHandlerRootView style={{flex: 1}}>
            
            <Container>
                <Header title='Cadastrar Home Care'/>
                <Content>
                    <Form>
                        <InputForm
                        control={control}
                        error={errors.name && errors.name.message}
                        name='name'
                        placeholder='Home Care'
                        />
                        <InputForm
                        control={control}
                        error={errors.price && errors.price.message}
                        name='price'
                        placeholder='Valor'
                        />
                    
                    </Form>
                    <ContentButton>
                        <Button                 
                        onPress={handleSubmit(handleRegisterHomeCare)}
                        title='Salvar'/>
                    </ContentButton> 
                </Content>
            </Container>
        </GestureHandlerRootView>
    )
}   