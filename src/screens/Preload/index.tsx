import { View, Text } from 'react-native'
import React from 'react'
import { 
  ContainerPreload, 
  ImageLogo,
  LoadingIcon
} from './styles'

export default function Preload() {
  return (
    <ContainerPreload>
        <ImageLogo 
          source={require("../../assets/images/LogoBranco.png")} 
          resizeMode="contain"
        />
        <LoadingIcon size={50} color="#ffffff"/>   
    </ContainerPreload>
  )
}