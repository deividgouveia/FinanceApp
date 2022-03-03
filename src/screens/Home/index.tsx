import React from 'react'
import { View, Text } from 'react-native'
import { useAuth } from '../../contexts/auth'

export default function Home() {

  const {user} = useAuth();

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.nome}</Text>
      <Text>{user && user.email}</Text>
      <Text>{user && user.uid}</Text>
    </View>
  )
}