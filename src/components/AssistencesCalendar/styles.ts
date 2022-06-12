import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
`;


export const Days = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: ${RFValue(8)}px;
`;
export const Day = styled.Text`

`;

export const Numbers = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center ;
    flex-flow: wrap;
    justify-content: space-between;

`;
