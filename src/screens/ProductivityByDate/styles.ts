import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Picker } from '@react-native-picker/picker'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`

export const Content= styled.View`
    flex: 1;
    /* background-color: ${({ theme }) => theme.colors.sucess_light}; */
    width: 95%;
    border-radius: 5px;
    
`

export const Separator = styled.View`
    height: 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};    
    justify-content: center;
    
`

export const TotalProductivity = styled.View`
    margin-top: 5px;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    align-self: stretch;
    

` 
export const TotalProdText = styled.Text`
    font-size: ${RFValue(15)}px ;
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 5px;
    
`
export const Total = styled.Text`
    font-size: ${RFValue(15)}px ;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.sucess};
`
export const ProdByDate = styled(RectButton)`
    position: absolute;
    right: 15px;
`
export const SelectYear = styled(Picker)`
    width: 50%;
    align-self: center;
`
export const SelectMonth = styled(Picker)`
    width: 50%;
    align-self: center;
    align-items: center;
`
