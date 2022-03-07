import { View, Text, Button } from 'react-native'
import React from 'react'

import { useAuth } from '../../contexts/auth'

export default function Profile() {

  const {handleLogout} = useAuth();

  return (
    <View>
      <Button 
      title='Sair'
      onPress={handleLogout}/>
    </View>
  )
}