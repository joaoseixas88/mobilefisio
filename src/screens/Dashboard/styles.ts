import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.bg};
    flex: 1;
    
`

export const Header = styled.View`
    width: 100%;
    flex: 2;
    align-items: center;
    justify-content: center;   

` 

export const Content = styled.View`
    flex: 8;
    margin: 0 30px;
    flex-direction: row;
    justify-content: space-between;
`


export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_color};
    font-size: ${RFPercentage(7)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    
    
`


export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text_color};
    font-size: ${RFPercentage(3.5)}px; 
    
`
