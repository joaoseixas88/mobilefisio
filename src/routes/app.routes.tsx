import React from "react";
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { MaterialIcons } from '@expo/vector-icons'
import { Register } from "../screens/Register";
import { SelectHomeCare } from "../screens/SelectHomeCare";
import { Patients } from "../screens/Patients";

const {Navigator, Screen} = createBottomTabNavigator();


export function AppRoutes(){
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
            name="Home"
            component={Home}
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
            component={Patients}
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

