import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    /* align-items: center; */
    justify-content: center;
`

export const Content = styled.View`
    width: 50%;
` 
export const Login = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    margin: 5px;
    font-family: ${({ theme }) => theme.fonts.medium};

`
export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    margin: 5px;
    padding: 5px;
    border-radius: 3px;

`

export const ButtonContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const Button = styled(RectButton)``

