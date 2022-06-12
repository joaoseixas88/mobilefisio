import React, { useState } from 'react'
import { Alert, TouchableWithoutFeedback } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PatientProps } from '../../../utils/types'
import { CommomText } from '../../components/CommonText'
import { useServices } from '../../hooks/servicesContext'
import { NavigationProps } from '../../routes/types'

import { Container, 
    Content, 
    Title,
    TextContent,
    ConfirmationCode,
    CodeContent,
    InputContent,
    Code,
    CodeInput,
    ConfirmationButton, 
} from './styles'

type Props = { 
    patient: PatientProps
    serviceId: string
    handleCloseModal: () => void;
    navigation: NavigationProps
}

export function DeleteModal({patient, serviceId, handleCloseModal, navigation}: Props){



    const [code, setCode] = useState('')
    const [generatedCode, setGeneratedCode] = useState(Math.floor(Math.random() * 1000000))
    const { deletePatient } = useServices()

    function handleDelete(code: string){        
        if(code === ''){
            return
        }

        if(generatedCode === Number(code)){
            deletePatient(serviceId, patient.id)
            
            navigation.goBack()
            // Alert.alert('Removido com sucesso')
            handleCloseModal()
            return ;
        }
        Alert.alert('Código incorreto')
        handleCloseModal()   
        
    }

    return(
    // <Modal>

    // </Modal>
    <GestureHandlerRootView style={{flex: 1}}>
        <TouchableWithoutFeedback
            onPress={() => handleCloseModal()}
        >
        <Container>
            <TouchableWithoutFeedback>
                <Content>
                    <TextContent>
                        <Title>Confirmar remoção?</Title>
                        <ConfirmationCode>Digite o código de confirmação:</ConfirmationCode>
                        <CodeContent>
                            <Code>{generatedCode}</Code>
                        </CodeContent>                
                    </TextContent>
                    <InputContent>                
                            <CodeInput
                            keyboardType='numeric'
                            onChangeText={e => setCode(e)}
                            />
                        </InputContent>
                        <ConfirmationButton
                            onPress={() => handleDelete(code)}
                        >
                            <Code>
                                Confirmar
                            </Code>
                        </ConfirmationButton>
                        
                </Content>
            </TouchableWithoutFeedback>
        </Container>
        </TouchableWithoutFeedback>
    </GestureHandlerRootView>
    )
}