import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type Props = {
    isActive?: boolean;
    shouldRender?: boolean;
}

export const Container = styled.View`    
    
`

export const TextContent = styled.View`
    height: ${RFValue(27)}px;
    width: ${RFValue(27)}px;
    justify-content: center;
    align-items: center;    
    margin: 7px;
`
export const NumberContent = styled(RectButton)<Props>`
    border-radius: 60px;    
    height: ${RFValue(27)}px;
    width: ${RFValue(27)}px;
    justify-content: center;
    align-items: center;    
    margin: 7px;
    
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.blue : theme.colors.shape };
    
`

export const Number = styled.Text`
    
    
`
export const Text = styled.Text`
    
    
`

