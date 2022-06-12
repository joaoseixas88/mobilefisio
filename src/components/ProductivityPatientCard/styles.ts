import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
    /* flex: 1; */
    padding: 5px;
    margin: 2px;
    background-color: ${({ theme }) => theme.colors.sucess_light};
    border-radius: 5px;
    width: 95%;
    align-self: center;
`
export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`
