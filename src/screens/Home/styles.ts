import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background };
    flex: 1;
`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary };
    width: 100%;
    height: ${RFValue(110)}px;
    
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 10px;
`
export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme}) => theme.colors.shape};
`
export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.shape };
    margin-bottom: 10px;
    width: 100%;
    border-radius: 20px;
    padding: 10px;
    align-items: center;
    
    
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
export const FlatContent = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.text};
`
export const PatientsContent = styled.View`
    flex-direction: column;
    
    padding: 10px;
       
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`
export const Age = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`
export const Diagnosis = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`

export const AssistencesContent = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`
export const Assistence = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`
export const Production = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(15)}px;
`