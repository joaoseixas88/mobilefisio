import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`
