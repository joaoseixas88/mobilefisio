
import React, { useEffect, useState } from 'react'
import { SelectHomeCare } from '../SelectHomeCare/index'
import { InputForm } from '../../components/InputForm'
import { Input } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {  Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid'

import { Container, 
    Content,     
    OpenModal,
    SelectHomeButton,
    SelectHomeText,    
    Form
} from './styles'
import { Header } from '../../components/Header';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { CommomText } from '../../components/CommonText';

const schema = Yup.object().shape({
    name: Yup.string().typeError('Somente texto').required('Nome é obrigatório'),
    age: Yup.number().required('Informe a idade').typeError('Informe um valor numérico'),    
    diagnosis: Yup.string()
})

interface FormData{
    [name: string]: any ; 
      
}

interface Props extends RectButtonProps{
    
}

const DataKey = '@mobilefisio:patients'

export function Register({...rest}: Props){

    const  { control, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm({               
        resolver: yupResolver(schema)
    })

    const [registerHomeCareOpenModal, setRegisterHomeCareOpenModal] = useState(false)
    
    const [price, setPrice] = useState('')
    
    
    const [homeCareService, setHomeCareService] = useState({
        id: 'selecionar',
        name: 'Selecionar Home Care',
        price: price
    })

    function handleOpenRegisterHomeCareOpenModal(){
        setRegisterHomeCareOpenModal(true)
    }
    function handleCloseRegisterHomeCareOpenModal(){
        setRegisterHomeCareOpenModal(false)
    }

    async function handleSaveNewPatient(form: FormData){

        if(!price){
            Alert.alert('Informe o preço')
            return
        }
        if (homeCareService.id === 'selecionar'){
            Alert.alert('Selecione o HomeCare')
            return            
        }
        const newPatient = {
            id: String(uuid.v4()),
            name: form.name,
            age: form.age,
            diagnosis: form.diagnosis,
            price: price,
            homeCareName: homeCareService.name,
            homeCareId: homeCareService.id,            
            visits: 0,
            assistences: [],

        }      

        try {
            const patients  = await AsyncStorage.getItem(DataKey)
            const currentPatients = patients ? JSON.parse(patients) : []
            currentPatients

            const formatedData = [
                ...currentPatients,
                newPatient
            ]
            
            await AsyncStorage.setItem(DataKey, JSON.stringify(formatedData))
            Alert.alert('Salvo')
        } catch (error) {
            console.log(error)
            Alert.alert(`Algo deu errado`)
        }
        reset()
        setPrice('')

    }

    
    
    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header
            title="Cadastrar"
            />
            <Content>
                <Form>
                <InputForm 
                placeholder='Nome'
                name="name"
                error={errors.name && errors.name.message}
                control={control}                
                />                
                <InputForm 
                placeholder='Idade'
                name="age"
                error={errors.age && errors.age.message}
                control={control} 
                keyboardType='number-pad'               
                />
                <InputForm 
                placeholder='Diagnóstico'
                name="diagnosis"
                error={errors.diagnosis && errors.diagnosis.message}
                control={control}                
                />
                
                <Input 
                placeholder='Preço'
                value={String(price)}
                keyboardType='number-pad'
                onChangeText={setPrice}
                />
               
                <OpenModal
                onPress={handleOpenRegisterHomeCareOpenModal}
                >
                    <SelectHomeButton>
                    <SelectHomeText>{homeCareService.name}</SelectHomeText>
                    </SelectHomeButton>                    

                </OpenModal>
                </Form> 
                <Button 
                title="Salvar"
                onPress={handleSubmit(handleSaveNewPatient)}/>
               
                <Modal
                visible={registerHomeCareOpenModal}
                onRequestClose={handleCloseRegisterHomeCareOpenModal}
                statusBarTranslucent={true}
                >
                    <SelectHomeCare       
                    handleCloseModal={handleCloseRegisterHomeCareOpenModal}             
                    setPrice={setPrice}
                    setSelectHome={setHomeCareService}                    
                    selectedHome={homeCareService}                    
                    />
                </Modal>
            </Content>            
        </Container>
        </TouchableWithoutFeedback>
    )
}