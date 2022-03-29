import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
   
`
export const ServiceName = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};
    align-self: center;
    
`
export const Total = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.sucess};
    align-self: center;
`

export const Content = styled.View`
`

export const Separator = styled.View`
    height: 1px;
    width: 100%;

`