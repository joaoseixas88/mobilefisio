

import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { api } from '../../api/api';
import { GradientBackGround } from '../../components/GradientBackground';
import { LoginButton } from '../../components/LoginButton';

import {  Container, Content, Input, Label, Title } from './styles';



const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {colors} = useTheme();

	async function handleSignUp(){
		const response = await api.post('user', {
			name,
			email,
			password
		});
		try {

			console.log(response.data);
			return response.data;
		} catch (e) {
			console.log(response.data);
		}

	}
	return (
		<GradientBackGround from='#71AEF5' to='#2D81E3'>
			<Container>
				<Content>
					<Title>Cadastre-se</Title>
					<Label>Nome</Label>
					<Input
						placeholder="Digite seu nome"
						placeholderTextColor={colors.placeholder}
						onChangeText={e => setName(e)}/>

					<Label >Email</Label>
					<Input
						placeholder="Digite seu email"
						placeholderTextColor={colors.placeholder}
						onChangeText={e => setEmail(e)}
					/>
					<Label >Senha</Label>
					<Input
						placeholder="Digite sua senha"
						placeholderTextColor={colors.placeholder}
						onChangeText={e => setPassword(e)}
						secureTextEntry={true}
					/>
					<LoginButton label='Cadastrar' onPress={handleSignUp}/>
				</Content>
			</Container>
		</GradientBackGround>
	);
};

export { SignUp };



