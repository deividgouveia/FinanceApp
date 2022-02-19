import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar  } from 'react-native'

import { Routes } from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#004aad" barStyle="light-content" />
      <Routes/>      
    </NavigationContainer>
  )
}