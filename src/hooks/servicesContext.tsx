import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";


export interface HomeCareProps{
    id: string;
    name: string;
    price: string;    
    patients: PatientProps[]
}

export interface PatientProps{
    id: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;    
    dates: Date[];    
    assistences: string[]
}

const servicesKey = '@mobilefisio:homeservices'


interface ServicesContextData {
    services: HomeCareProps[];
    registerNewService: (homeCare: HomeCareProps) => void;
    registerNewPatient: (serviceId: string, newPatient: PatientProps) => void;
    addNewVisit: (id: string, patientId: string) => void;
    deletePatient: (id: string, patientId: string) => void;
    deleteService: (id: string) => void;
    limpar: () => void;
 }

 type ServiceProviderProps = {
     children: ReactNode;
 }

const ServicesContext = createContext<ServicesContextData>({} as ServicesContextData)



export function ServicesProvider({children}: ServiceProviderProps ){

    const [services, setServices] = useState<HomeCareProps[]>([])


    async function addNewVisit(serviceId: string, patientId: string){

        
        const currentServices = [...services]
        
        const date = new Date
        const dateFormatted = Intl.DateTimeFormat('pt-BR',{
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'       
            }).format(date)
        const hourFormatted = Intl.DateTimeFormat('pt-BR',{
            hour: '2-digit',
            minute: '2-digit',
            }).format(date)
        
            currentServices.findIndex((item) =>{
                if (item.id === serviceId){
                    item.patients.findIndex((patient) => {
                        if (patient.id === patientId){
                            patient.dates.push(date)
                            patient.assistences.push(`Dia ${dateFormatted} às ${hourFormatted} horas`)
                        }
                    })
                }
            })
        try {
            await AsyncStorage.setItem(servicesKey,JSON.stringify(currentServices))
            setServices(currentServices)
        } catch (error) {
            console.log(error)
            Alert.alert('Algo deu errado')
        }
      
    }

    async function limpar() {
        await AsyncStorage.removeItem(servicesKey);
        setServices([])
      }



    async function deletePatient(serviceId: string, patientId: string){
        
        const currentServices = [...services]

        const index = currentServices.findIndex((service) => service.id === serviceId)
        const patientIndex = currentServices[index].patients.findIndex(patient => patient.id === patientId)
        
        currentServices[index].patients.splice(patientIndex, 1)


        try {
            await AsyncStorage.setItem(servicesKey,JSON.stringify(currentServices))
            setServices(currentServices)
        } catch (error) {
            Alert.alert('Algo deu errado')
            console.log(error)
        }
        console.log(currentServices[index].patients)
 
     }

    async function deleteService(id: string){

        const currentServices = [...services]
        const newServices = currentServices.filter((item) => item.id !== id)

        try {

            await AsyncStorage.setItem(servicesKey,JSON.stringify(newServices))
            setServices(newServices)

        } catch (error) {
            Alert.alert('Algo deu errado')
            console.log(error)
        }
       
    }

    async function loadServices(){
        const response = await AsyncStorage.getItem(servicesKey)
        const currentServices: HomeCareProps[] = response ? JSON.parse(response) : []
        
        const isTherePatientsServices = currentServices.filter(service => service.patients.length > 0)


        setServices(currentServices)
    }

    async function registerNewPatient(serviceId: string, newPatient: PatientProps){
        const currentServices = [...services]

        currentServices[
            currentServices.findIndex((item) => item.id === serviceId)
          ].patients.push(newPatient);

          try {
              await AsyncStorage.setItem(servicesKey, JSON.stringify(currentServices))
              setServices(currentServices)
          } catch (error) {
              Alert.alert('Algo deu errado')
              console.log(error)
              
          }

    }

    async function registerNewService(homeCare: HomeCareProps){

        const currentServices = [...services]

        const newServices = [
            ...currentServices, 
            homeCare
        ]
        
        try {
            await AsyncStorage.setItem(servicesKey,JSON.stringify(newServices))
            setServices(newServices)
        } catch (error) {
            Alert.alert('Algo deu errado.')
            console.log(error)
        }

    }


    useEffect(() => {
        loadServices()
    },[])

    return(

        <ServicesContext.Provider value={{services, 
            registerNewService, 
            deleteService, 
            registerNewPatient, 
            addNewVisit, 
            deletePatient, 
            limpar
        }}
        
        >
            {children}
        </ServicesContext.Provider>
    )
}

export function useServices(){
    const context = useContext(ServicesContext)
    return context
}