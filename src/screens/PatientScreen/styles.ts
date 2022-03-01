import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
`
export const Content = styled.View`
    justify-content: space-between;
    padding: 10px;
    flex-direction: column;
    flex: 1;

`

export const PatientContent = styled.View`
   background-color:${({ theme }) => theme.colors.sucess_light};
   padding: 15px;
   border-radius: 10px;
`


export const Age = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Diagnosis = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Price = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Visits = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`

export const ButtonContent = styled.View``

export const Delete = styled(RectButton)`
    background-color: red;
    border-radius: 5px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

export const DeleteText = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const DatesContainer = styled.Text``
export const Title = styled.Text``
export const Date = styled.Text``