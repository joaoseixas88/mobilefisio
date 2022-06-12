import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Modal } from 'react-native'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'
import { Header } from '../../components/Header'
import { SelectHomeButton } from '../../components/SelectHomeButton'
import { MaterialIcons } from '@expo/vector-icons';
import { AddNewHomeCare } from '../AddNewHomeCare'
import { Button } from '../../components/Button'

import { 
    Container, 
    Content,
    ServicesContent,
    Footer,
    AddButonView,
    Separator

} from './styles'
import { PatientProps } from '../../../utils/types'
import { useServices } from '../../hooks/servicesContext'






interface HomeCareProps{
    id: string;
    name: string;
    price: string;
    patients: PatientProps[]
}



interface Props extends RectButtonProps{
    
    selectedHome: HomeCareProps;
    setSelectHome: (selectedHome: HomeCareProps) => void;
    setPrice: (price: string) => void;
    handleCloseModal: () => void
}

export function SelectHomeCare({handleCloseModal, setPrice, selectedHome, setSelectHome, ...rest}: Props){


    const { services, deleteService } = useServices()

    function handleSelectHome(selectedHome: HomeCareProps ){
        setSelectHome(selectedHome)
        
    }    
    
    const [homeCareServices, setHomeCareServices] = useState<HomeCareProps[]>([])

    const [addNewHomeCareModal, setAddNewHomeCareModal] = useState(false)

    
       
    function handleOpenNewHomeCareModal(){
        setAddNewHomeCareModal(true)
    }
    function handleCloseNewHomeCareModal(){
        setAddNewHomeCareModal(false)
    }

    

    
    
    return(
    <GestureHandlerRootView style={{flex: 1}}>
    <Container>
        <Header 
            title='Home Care'
        >   
             <AddButonView
             onPress={handleOpenNewHomeCareModal}
             >
                <MaterialIcons name="add-circle" size={24} color="#FFF" />
            </AddButonView>
        </Header>
        <ServicesContent>
        
        
        <FlatList 
        ItemSeparatorComponent={Separator}
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
            <Content
            isActive={item.id === selectedHome.id}            
            onLongPress={() => Alert.alert(
                "Remover",
                "Deseja remover o serviço de HomeCare?",[
                    {
                        text: "Cancelar",
                        onPress: () => console.log("Cancelar")
                    },
                    {
                        text: "Confirmar",
                        onPress: () => deleteService(item.id)
                    }
                ]
            )}
            >
                <SelectHomeButton 
                
                onPress={() => (handleSelectHome(item), setPrice(item.price) )}
                homeCareName={item.name}                
               
                />                
            </Content>
        }        
        />
        </ServicesContent>
        <Footer>        
        <Button 
        {...rest}
        title='Selecionar'
        onPress={handleCloseModal}
        />
        </Footer>
        <Modal
            statusBarTranslucent={true}
            onRequestClose={handleCloseNewHomeCareModal}
            visible={addNewHomeCareModal}

        >
            <AddNewHomeCare
            homeCareServices={homeCareServices}

            setHomeCareServices={setHomeCareServices}
            
            closeModal={handleCloseNewHomeCareModal}
            />
        </Modal>
    </Container>
    </GestureHandlerRootView>
    )
}