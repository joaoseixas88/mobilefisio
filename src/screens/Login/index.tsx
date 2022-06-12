

import React, { ReactNode, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { GradientBackGround } from '../../components/GradientBackground';
import { LoginButton } from '../../components/LoginButton';
import { useAuth } from '../../hooks/AuthContext';

import {  Container, Content, Input, Label, Title } from './styles';


const Login = () => {
	const {colors} = useTheme();
	const { login } =  useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin(){
		login({
			email,
			password
		});
	}
	return (
		<GradientBackGround from='#71AEF5' to='#2D81E3'>
			<Container>
				<Content>
					<Title>Login</Title>
					<Label >Email</Label>
					<Input placeholder="Digite seu email"
						placeholderTextColor={colors.placeholder}
						onChangeText={e => setEmail(e)}/>
					<Label >Senha</Label>
					<Input  placeholder="Digite sua senha"
						placeholderTextColor={colors.placeholder}
						secureTextEntry={true}
						onChangeText={e => setPassword(e)}/>
					<LoginButton label='Cadastrar' onPress={handleLogin}/>
				</Content>
			</Container>
		</GradientBackGround>
	);
};

export { Login };



