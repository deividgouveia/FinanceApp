import { View, Text } from 'react-native'
import React from 'react'
import { 
  ContainerPreload, 
} from './styles'
import { LogoWhite } from '../../components/molecules/Logo/LogoWhite'

export default function Preload() {
  return (
    <ContainerPreload>
         <LogoWhite />      
    </ContainerPreload>
  )
}