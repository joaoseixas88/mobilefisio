import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background };
    
    
`

export const Content = styled.View`
    flex: 8;
    margin: 0 30px;
    justify-content: space-between;
    
`
export const Nome = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark};
` 
export const Idade = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.text_dark};
`

export const Input = styled.TextInput`
    width: 100%;
    padding: 16px 18px;
    

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};

    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    margin-top: 10px;

    color: ${({theme}) => theme.colors.text_dark}
`



export const SelectHomeButton = styled.View`
    align-items: center;
    padding: 15px;
    margin-top: 18px;
    border-radius: 10px;
    border-width: 1px;
    background-color: ${({theme}) => theme.colors.sucess_light};
`
 

export const SelectHomeText = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(18)}px; 

    
`

export const OpenModal = styled(RectButton)``



export const SaveButton = styled(RectButton)<RectButtonProps>`
    align-items: center;
    padding: 15px;
    margin-top: 18px;
    border-radius: 10px;
    border-width: 0.5px;
    background-color: ${({theme}) => theme.colors.sucess};
    margin-bottom: 5px;  

`
export const SaveButtonText = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(20)}px; 

`

export const Form = styled.View`
    
`
