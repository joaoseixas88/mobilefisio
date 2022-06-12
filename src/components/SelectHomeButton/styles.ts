import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Selected{
    isActive: boolean
}

export const Container = styled(RectButton)<Selected>`
    width: 100%;
    padding: 10px;
    border-bottom-width: 1px;
    align-items: center;
`;

export const Title = styled.Text`

`;
