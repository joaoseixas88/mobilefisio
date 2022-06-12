import React, {  createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../api/api';

interface AuthContextProviderProps{
  children: ReactNode
}

interface AuthContextProps {
  isLogged: boolean
  login: ({ email, password }: Credentials) => Promise<void>
}

interface Credentials{
  email:string
  password: string
}


const AuthContext = createContext({} as AuthContextProps);






export function AuthContextProvider({children}: AuthContextProviderProps){

	const [isLogged, setIslogged] = useState(false);

	const login = async ({email, password}: Credentials) => {
		const response = await api.post('/user', {
			email,
			password
		});
		console.log(response.data);
	};


	return(
		<AuthContext.Provider value={{login, isLogged}}>
			{children}
		</AuthContext.Provider>
	);
}


export function useAuth(){
	const context = useContext(AuthContext);
	return context;
}
