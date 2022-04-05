import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { ConfirmationModal } from '../../components/ConfirmationModal';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { 
    Container,
    PatientContent,
    Content,
    Age,
    Diagnosis,
    Price,
    Visits,
    ButtonContent,
    Delete,    
    DatesContainer,
    Title,
    DateText,
    AddVisit,
    AddVisitText,
    
 } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { NavigationProps, RoutesProps } from '../../routes/types';
import { Alert, FlatList, Modal } from 'react-native';
import { useServices } from '../../hooks/servicesContext';
import { formatBRL, formatDate } from '../../../utils/format';
import { DeleteModal } from '../DeleteModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DeleteAssistenceButton } from '../../components/DeleteAssistenceButton';
import { AssistenceCalendar } from '../../components/AssistencesCalendar';
import { CalendarComponent } from '../../components/Calendar';
import { date } from 'yup';
import { selectDates } from '../../components/Calendar/methods/selectDates';
import { CommomText } from '../../components/CommonText';


interface Props {
    id: string;
    name: string;    
    setCloseModal: () => void;
    route: RoutesProps
    navigation: NavigationProps
}


export function PatientScreen({ route, navigation }: Props){


    
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
   

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false)
    const { patientId, serviceId } = route.params  
    
    
    const { addNewVisit, services } = useServices()

    const serviceIndex = services.findIndex(service => service.id === serviceId)
    const patientIndex = services[serviceIndex].patients.findIndex(patient => patient.id === patientId)

    const patient = services[serviceIndex].patients[patientIndex]
    
    if (patient === undefined) {
        return(
            <Container/>
        )
    }

    function filterDates(date: Date){
        const newDate = new Date(date)
        return newDate.getMonth() === 2 
    }
   
    const filteredDates = patient.dates.filter(date => filterDates(date))

    

    const productivity =  patient.dates.length * Number(patient.price) 
    
    
    const dates = patient.dates.map((date,index) => {
        
        return {
            date: String(formatDate(date)), 
            index: index
        }      
        
    }) 


    

    function handleDelete(){
        Alert.alert(
            "Remover",
            "Tem certeza que deseja remover o paciente?",
            [
                {
                    text: "Cancelar",
                    onPress: () => {return}
                },
                {
                    text: "Confirmar",
                    onPress: () => {handleOpenDeleteModal()}
                },                
            ]
        )
        
    }
    
    function handleAddNewVisits(date?: Date){
        addNewVisit(serviceId, patientId, date)  
        hideDatePicker()     
    }

    function handleOpenDeleteModal(){
        setDeleteModal(true)
    }

    function handleCloseDeleteModal(){
        setDeleteModal(false)
    }

    function handleOpenConfirmModal(){
        setOpenConfirmModal(true)
    }
    function handleCloseConfirmModal(){
        setOpenConfirmModal(false)
    }
    function showDatePicker(){
        setDatePickerVisibility(true)
    }
    function hideDatePicker(){
        setDatePickerVisibility(false)
    }
    const markedDates = selectDates(patient.dates)
    
    
    
    return(
    <GestureHandlerRootView style={{flex: 1}}>
            <Container>            
            <Header 
            title={patient.name}

            >
                <Delete
                onPress={handleDelete}
                >
                    <FontAwesome5 name="trash" size={24} color="red" />
                </Delete>
            </Header>
            {             
            <Content>
            <PatientContent>                      
                <Age>Idade: {patient.age}</Age>                
                {patient.diagnosis &&<Diagnosis>Diagnóstico: {patient.diagnosis}</Diagnosis>}
                <Price>Valor do atendimento: {formatBRL(Number(patient.price))}
                </Price>            
                <Visits>Atendimentos realizados: {patient.dates.length}</Visits>
                <Visits>Produtividade: {formatBRL(productivity)}</Visits>

                <Title>Datas dos atendimentos:</Title>
                <CalendarComponent 
                    markedDates={markedDates}
                
                />
                <AddVisit
                    onPress={handleOpenConfirmModal}            
                >
                    <AddVisitText>
                        Nova Visita
                    </AddVisitText>
                </AddVisit>      
                
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleAddNewVisits}
                    onCancel={hideDatePicker}
                />
            </PatientContent>
            
            <ButtonContent>
                
                <Button 
                title='Voltar'
                onPress={() => navigation.navigate('Routes')}
                />
            </ButtonContent>    
           
            <Modal
                presentationStyle={'overFullScreen'}    
                transparent={true}
                visible={deleteModal}
                onRequestClose={handleCloseDeleteModal}
            >
                <DeleteModal 
                    handleCloseModal={handleCloseDeleteModal}
                    patient={patient}
                    serviceId={serviceId}
                    navigation={navigation}
                />
            </Modal>
            </Content>
            
        }
        </Container>        
        <ConfirmationModal
            visible={openConfirmModal}
            closeModal={handleCloseConfirmModal}
            addNewVisit={handleAddNewVisits}
            pickUpDate={showDatePicker}
        />
    </GestureHandlerRootView>
    )
}