import React from 'react'
import { Modal, TouchableWithoutFeedback  } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Background, Container, Title, Content, Button, ButtonText } from './styles'

interface Props{
    visible: boolean;
    closeModal: () => void;
    addNewVisit: () => void;
    pickUpDate: () => void;
}

export function ConfirmationModal({visible, closeModal, addNewVisit, pickUpDate}: Props){

    function handleCloseModal(){
        closeModal()
    }

    function handleAddNewVisit(){
        addNewVisit()
        handleCloseModal()

    }

    function handlePickUpDate(){
        pickUpDate()
        handleCloseModal()
    }


    return(
    <Modal
        visible={visible}
        transparent={true}
        onRequestClose={handleCloseModal}
    >
        <GestureHandlerRootView style={{flex: 1}}>
        <TouchableWithoutFeedback
            onPress={() => handleCloseModal()}
        >        
        <Background>
            <TouchableWithoutFeedback>
            <Container>
                <Title>Confirmar atendimento</Title>
                <Content>
                    <Button 
                        onPress={handleCloseModal}
                    >
                        <ButtonText>Cancelar</ButtonText>
                    </Button>               
                    <Button
                        onPress={handlePickUpDate}
                    >
                        <ButtonText>Escolher data</ButtonText>
                    </Button>               
                    <Button
                        onPress={handleAddNewVisit}
                    >
                        <ButtonText>Confirmar agora</ButtonText>
                    </Button> 
                </Content>              
            </Container>
            </TouchableWithoutFeedback>
        </Background>
        </TouchableWithoutFeedback>
        </GestureHandlerRootView>
    </Modal>
    )
}