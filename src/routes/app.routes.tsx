import React from "react";
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { Register } from "../screens/Register";
import { Productivity } from "../screens/Productivity";
import { ProductivityByDate } from "../screens/ProductivityByDate";
import { createStackNavigator } from "@react-navigation/stack";
import { PatientScreen } from "../screens/PatientScreen";
import { RootStackParamList } from "./types";
import { AllPatients } from "../screens/AllPatients";
import { ScreenStackHeaderLeftView } from "react-native-screens";
import { LoginScreen } from "../screens/Login";




const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>()


export function AppRoutes(){

    return (
        <Stack.Navigator>
            {/* <Stack.Group
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Login" component={LoginScreen}/>
            </Stack.Group> */}

            <Stack.Group
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen 
                name="Routes" 
                component={Routes}            
                />
            </Stack.Group>

            <Stack.Group
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen
                name="Patient"
                component={PatientScreen}                
                />
                <Stack.Screen
                    name="ProductivityByDate"
                    component={ProductivityByDate}
                />
            </Stack.Group>
        </Stack.Navigator>
    )

}
export function Routes(){
    const theme = useTheme()
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarLabelPosition: 'beside-icon',            
            
        }}
        
        >

            <Screen
            name="Produtividade"
            component={Productivity}
            options={{
                tabBarIcon: (({ size, color }) =>
                    <MaterialIcons 
                    name="attach-money"
                    sise={size}
                    color={color}
                    />
                )
            }}
            />
            <Screen
            name="Cadastrar"
            component={Register}
            
            options={{
                tabBarIcon: (({ size, color }) =>
                    <MaterialIcons 
                    name="attach-money"
                    sise={size}
                    color={color}
                    />
                )
            }}
            />
            <Screen
            name="Pacientes"
            component={AllPatients}
            options={{
                tabBarIcon: (({ size, color }) =>
                    <MaterialIcons 
                    name="attach-money"
                    sise={size}
                    color={color}
                    />
                )
            }}
            />
            
        </Navigator>
    )
}

