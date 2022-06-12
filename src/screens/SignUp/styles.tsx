import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 80%;
`;

export const Title = styled.Text`
  font-family: ${({theme }) => theme.fonts.medium};
  color: ${({theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  text-align: center;
  margin-bottom: ${RFValue(20)}px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(11)}px;
  align-self: flex-start;
  margin-left: 2px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.input_bg};
  padding: 12px;
  /* margin-bottom: 15px; */
  border-radius: 5px;
  box-shadow: 15px 10px 10px black;
`;
