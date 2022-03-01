import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
    
    
`
export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};

`
export const Content = styled.View`
    
    flex: 1;
    
`

export const ButtonContent = styled.View`
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin: 5px;
    align-self: flex-start;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light }
`

export const Button = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.attention };
    padding: 5px;
    border-radius: 5px;
`
export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};;
`
