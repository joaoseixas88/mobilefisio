import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Modal } from 'react-native'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'
import { Header } from '../../components/Header'
import { SelectHomeButton } from '../../components/SelectHomeButton'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddNewHomeCare } from '../AddNewHomeCare'
import { Button } from '../../components/Button'
import { ActivityIndicator } from 'react-native'

import { 
    Container, 
    Content,
    ServicesContent,
    Footer,
    AddButonView,
    Separator

} from './styles'
import { CommomText } from '../../components/CommonText'






interface HomeCareProps{
    id: string;
    name: string;
    price: string;
    
}

const DataKey = '@mobilefisio:homeservices'

interface Props extends RectButtonProps{
    
    selectedHome: HomeCareProps;
    setSelectHome: (selectedHome: HomeCareProps) => void;
    setPrice: (price: string) => void;
    handleCloseModal: () => void
}

export function SelectHomeCare({handleCloseModal, setPrice, selectedHome, setSelectHome, ...rest}: Props){

    function handleSelectHome(selectedHome: HomeCareProps ){
        setSelectHome(selectedHome)
        
    }
    
    const [homeCareServices, setHomeCareServices] = useState<HomeCareProps[]>([])
    const [addNewHomeCareModal, setAddNewHomeCareModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
       
    function handleOpenNewHomeCareModal(){
        setAddNewHomeCareModal(true)
    }
    function handleCloseNewHomeCareModal(){
        setAddNewHomeCareModal(false)
    }

    

    async function getHomeCareServices(){
        try {
           const response = await AsyncStorage.getItem(DataKey)           
           response != null ? setHomeCareServices(JSON.parse(response)) : null
           setIsLoading(false)
            
           
        } catch (error) {
            Alert.alert('Algo deu errado')
        }
    }

    useEffect(() => {
        getHomeCareServices()        
        
    },[])
    
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
        {isLoading ? <ActivityIndicator/> :
        <ServicesContent>
        
        <FlatList 
        ItemSeparatorComponent={Separator}
        data={homeCareServices}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
            <Content
            isActive={item.id === selectedHome.id}            
            >
                <SelectHomeButton 
                onPress={() => (handleSelectHome(item), setPrice(item.price) )}
                homeCareName={item.name}                
               
                />                
            </Content>
        }        
        />
        </ServicesContent>
        }

    
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