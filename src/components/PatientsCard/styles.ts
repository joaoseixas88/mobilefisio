import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    align-items: center;
    /* padding: 5px; */
`

export const Content = styled.View`

    padding: 5px;
    margin: 10px;
    width: 90%;    
    background-color: ${({ theme }) => theme.colors.sucess_light};
    border-radius: 5px;
    flex-direction: row;
    /* justify-content: space-between; */
    /* align-self: center; */
    /* flex: 1; */   
`

export const Button = styled(RectButton)`
    width: 100%;
    /* background-color: red; */
    align-items: center;
    justify-content: center;
    height: 30px;
    border-radius:5px;
`
export const ButtonContent = styled.View`   
    /* background-color: red; */
    justify-content: center;
   
    
`


export const TextContent = styled.View`    
    width: 90%;
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
    width: 95px;
    border-radius:5px;
    height: 30px;
    align-items: center;
    justify-content: center;   
    margin: 5px;
    align-self: flex-start;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.colors.sucess_light }
`