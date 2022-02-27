import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    width: 100%;
    flex: 1;   
    align-items: center;
    align-items: flex-start;
    
    
`

export const Content = styled.View`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light};
    width: 90%;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled(RectButton)`
    
`
export const ButtonContent = styled.View`    
    padding: 10px;
    justify-content: center;
    
`


export const TextContent = styled.View`
    
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`
export const Age = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`
export const Diagnosis = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`
export const Visits = styled.Text`
    color: ${({ theme }) => theme.colors.title };
    font-size: ${RFValue(18)}px;
`