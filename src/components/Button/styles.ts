import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.sucess };
    border-radius: 5px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;

`