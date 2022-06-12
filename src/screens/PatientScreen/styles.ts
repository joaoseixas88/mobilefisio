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
    position: relative;
    background-color:${({ theme }) => theme.colors.sucess_light};
    padding: 15px;
    border-radius: 10px;
    flex: 1;
    margin-bottom: 5px;
`


export const Age = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Diagnosis = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Price = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`
export const Visits = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark}; 
`

export const ButtonContent = styled.View``

export const Delete = styled(RectButton)`
    
    position: absolute;
    right: 10px;    
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

export const DatesContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`
export const DateText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`

export const AddVisit = styled(RectButton)`
    position: absolute;
    bottom: 2px;
    align-items: center;
    align-self: center;
    
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.sucess_light};
    border-radius: 5px;
    margin: 5px;
    
    
`
export const AddVisitText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`

export const DeleteAssistence = styled(RectButton)``