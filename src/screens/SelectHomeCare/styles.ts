import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface Selected{
    isActive: boolean
}

export const Container = styled.View`    
    flex: 1;
`
export const ServicesContent = styled.View`
   flex: 1;

`
export const Content = styled.TouchableOpacity<Selected>`
    
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.sucess_light : theme.colors.shape};
    
     
`
export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};

`


export const Footer = styled.View`
    width: 100%;
    padding: 18px;
`
export const AddButonView = styled(RectButton)`
    width: 100%;
    padding: 18px;
    width: auto;
    position: absolute;
    align-self: flex-end;
`