import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Background = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_transparent};
    align-items: center;
    justify-content: center;
`

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    width: 80%;
    align-items: center;
    padding: 15px;
`

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
`

export const Content = styled.View`
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    
`

export const Button = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.blue};
    width: 28%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 5px;
`
export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.shape};
    align-items: center;
    justify-content: center;
`