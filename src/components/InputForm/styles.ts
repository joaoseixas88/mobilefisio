import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
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

export const Error = styled.Text`
    color: ${({ theme }) => theme.colors.attention };
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};;
    margin: 7px 0;
`