import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold

} from '@expo-google-fonts/poppins';
import { AppRoutes } from './src/routes/app.routes';
import { ServicesProvider } from './src/hooks/servicesContext';
import { AuthContextProvider } from './src/hooks/AuthContext';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold
	});

	if(!fontsLoaded){
		return <AppLoading />;
	}

	return(
		<AuthContextProvider>
			<ThemeProvider theme={theme}>
				<GestureHandlerRootView style={{flex: 1}}>
					<ServicesProvider>
						<NavigationContainer>
							<AppRoutes/>
						</NavigationContainer>
					</ServicesProvider>
				</GestureHandlerRootView>
			</ThemeProvider>
		</AuthContextProvider>
	)


	;
}



