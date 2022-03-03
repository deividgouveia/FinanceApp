import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar  } from 'react-native'
import { AuthProvider } from './src/contexts/auth'
import { Routes } from './src/routes'
import Toast from 'react-native-toast-message';
import ToastConfig from './src/components/atoms/ToastConfig/index';

console.disableYellowBox=true;

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
       <StatusBar backgroundColor="#004aad" barStyle="light-content" />
       <Routes/>  
       <Toast config={ToastConfig}/>
      </AuthProvider>    
    </NavigationContainer>
  )
}