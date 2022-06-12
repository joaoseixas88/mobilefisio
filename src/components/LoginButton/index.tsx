import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Label } from './styles';

interface LoginButtonProps extends RectButtonProps {
  label: string

}

export function LoginButton({label, ...rest}:LoginButtonProps){
	return(
		<Container {...rest}>
			<Label>
				{label}
			</Label>
		</Container>
	);
}
