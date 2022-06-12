import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light};
    margin: 10px;
    border-radius: 5px;
`
export const Header = styled.View`
    align-items: center;
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
`

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px 0px;
`

export const PatientContent = styled.View``


export const Visits = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(15)}px;
`


export const DetailsButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.sucess_light};
    align-items: center;
    border-radius: 5px;

    
`
export const Details = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(15)}px;    
    color: ${({ theme }) => theme.colors.shape} ;
    margin: 0 5px;
`

export const ButtonContent = styled(RectButton)`
    height: 25px;
`
