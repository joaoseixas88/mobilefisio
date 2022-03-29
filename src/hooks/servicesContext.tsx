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
    
}

const servicesKey = '@mobilefisio:homeservices'
const allDatesKey = '@mobilefisio:allDates'

function seviceKey(serviceId: string){
    return `@mobilefisio:homeservices/${serviceId}`
}

export function patientKey(serviceId: string, patientId: string){
    return `@mobilefisio:homeservices/${serviceId}/${patientId}`
}

interface ServicesContextData {
    services: HomeCareProps[];
    registerNewService: (homeCare: HomeCareProps) => void;
    registerNewPatient: (serviceId: string, newPatient: PatientProps) => void;
    addNewVisit: (id: string, patientId: string, date?: Date) => void;
    deletePatient: (id: string, patientId: string) => void;
    deleteService: (id: string) => void;
    deleteAssistence: (serviceId: string, patientId: string, dateIndex: number) => void;
    allDates: Date[]
    limpar: () => void;
    
 }

 type ServiceProviderProps = {
     children: ReactNode;
 }

const ServicesContext = createContext<ServicesContextData>({} as ServicesContextData)




export function ServicesProvider({children}: ServiceProviderProps ){

    

    const [services, setServices] = useState<HomeCareProps[]>([])
    const [allDates, setAllDates] = useState<Date[]>([])
    

    async function addNewVisit(serviceId: string, patientId: string, date?: Date){

        
        const currentServices = [...services]
        const currentDates = [...allDates]
        
        const newDate = date ? date : new Date()
        
        currentDates.push(newDate)
        
            currentServices.findIndex((item) =>{
                if (item.id === serviceId){
                    item.patients.findIndex((patient) => {
                        if (patient.id === patientId){
                            patient.dates.push(newDate)                           
                        }
                    })
                }
            })
        try {
            await AsyncStorage.setItem(servicesKey,JSON.stringify(currentServices))

            await AsyncStorage.setItem(allDatesKey,JSON.stringify(currentDates))

            setServices(currentServices)
            setAllDates(currentDates)
        } catch (error) {
            console.log(error)
            Alert.alert('Algo deu errado')
        }
      
    }

    

    async function deleteAssistence(serviceId: string, patientId: string, dateIndex: number){
        const currentServices = [...services]

        const serviceIndex = currentServices.findIndex((item) => item.id === serviceId)
        const patientIndex = currentServices[serviceIndex].patients.findIndex((item) => item.id === patientId)

        
        currentServices[serviceIndex].patients[patientIndex].dates.splice(dateIndex, 1)

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

        try {
            const response = await AsyncStorage.getItem(servicesKey)
            const currentServices: HomeCareProps[] = response ? JSON.parse(response) : [] 
            const datesResponse = await AsyncStorage.getItem(allDatesKey)
            const currentDates: Date[] = datesResponse ? JSON.parse(datesResponse) : []
            setServices(currentServices) 
            setAllDates(currentDates)
        } catch (error) {
            
        }
         

        
    
    }

    async function registerNewPatient(serviceId: string, newPatient: PatientProps){
        
        const currentServices = [...services]

        const index = currentServices.findIndex(service => service.id ===serviceId)
        currentServices[index].patients.push(newPatient)

        const newServices = [...currentServices]

          try {
              await AsyncStorage.setItem(servicesKey, JSON.stringify(newServices))
              await AsyncStorage.setItem(patientKey(serviceId,newPatient.id),JSON.stringify(newPatient))

              setServices(newServices)
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
            await AsyncStorage.setItem(seviceKey(homeCare.id),JSON.stringify(currentServices))

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
            deleteAssistence,
            allDates,
            limpar,
            
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