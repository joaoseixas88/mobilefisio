import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary };
    width: 100%;
    height: ${RFValue(110)}px;
    
    justify-content: flex-end;
    align-items: center;

`

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme}) => theme.colors.shape};
`