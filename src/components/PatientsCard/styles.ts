import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    width: 100%;
    flex: 1;  

    
`

export const Content = styled.View`
    padding: 10px;    
    width: 90%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light};
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    align-self: center;
`

export const Button = styled(RectButton)`
    
`
export const ButtonContent = styled.View`    
    height: 25px;
    
`


export const TextContent = styled.View`
    
    width: 80%;
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
export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};;
`
export const ButtonInfoContent = styled.View`
    width: 150px;
    height: 30px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin: 5px;
    align-self: flex-start;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light }
`