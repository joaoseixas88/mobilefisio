import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 16px; 
    background-color: #FFF;
`
export const Content = styled.View`
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
`

export const PickContent = styled.View`
    align-items: center;    
    width: 100%;
`

export const Year = styled(RectButton)`
    align-self: flex-start;
    margin: 10px;
`
export const Month = styled(RectButton)`
   align-self: flex-end;
   margin: 10px;

`
export const PickDates = styled.Text`
    align-items: center;
`
export const DatesContent = styled.View`
    flex-direction: row;
    width: 30%;
`

export const NumberContent = styled.View`
    align-items: center;
    border: 1px;

`
export const Text = styled.Text``

