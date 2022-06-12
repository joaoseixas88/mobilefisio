import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape};
  margin-vertical: 20px;
  padding: 10px;
  border-radius: 60px;
  align-items: center;
  box-shadow: 80px 80px 80px black;
`;
export const Label = styled.Text`
  color: #5195E0;
  font-family: ${({ theme }) => theme.fonts.regular};;
  font-size: ${RFValue(18)}px;
`;

