import React from 'react';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <ThemeProvider theme={theme}>
      <Home/> 
    </ThemeProvider>
  )
          
    
  ;
}



