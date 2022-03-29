import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    width: 80%;    
    border-radius: 5px;

`
export const TextContent = styled.View`
    align-items: center;
    padding: 10px;
`
export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

`


export const ConfirmationCode = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
` 

export const CodeContent = styled.View`
    border: 1px;
    border-radius: 5px;
    padding: 5px;
`
export const InputContent = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;    
    width: 22%;
    
    margin-bottom: 5px;
    
`

export const Code = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
` 
export const CodeInput = styled.TextInput`
    margin-left: 6px;
    margin-right: 6px;
`
export const ConfirmationButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border-radius: 5px;
    margin: 5px;
    padding: 3px;
`
