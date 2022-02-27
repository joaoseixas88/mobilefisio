import {  RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background };
    flex: 1;
    
`

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.sucess_light };
    margin-top: 10px;
    width: 95%;
    border-radius: 20px;
    align-self: center;
    
`
export const HomeCareNameView = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

`

export const HomeCareName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`
export const FlatPatientsContent = styled.View`    
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.text};
    margin: 0 15px;
`
export const PatientsContent = styled.View`
    flex-direction: column;
    width: 100%;
    
       
`
export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`

export const TotalContent = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary_light };    
    width: 95%;
    border-radius: 20px;
    align-self: center;
    
`
export const Total = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
    margin-left: 15px;
`