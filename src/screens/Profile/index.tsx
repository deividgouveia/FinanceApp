import React from 'react';
import { 
  Container,
  ViewProfile,
  ViewButtom,
  TextNome,
  TextEmail,
  ButtomLogout,
  TextButtom
} from './styles'; 

import { useAuth } from '../../contexts/auth'
import { Icon } from 'react-native-elements';

export default function Profile() {

  const {user, handleLogout} = useAuth();

  return (
    <Container>

      <ViewProfile>
         <Icon 
          name="account-circle-outline"
          type="material-community"
          size={85}
          color='#004dda'
          tvParallaxProperties={undefined} 
          />
         
         <TextNome>{user.nome}</TextNome>
         <TextEmail>{user.email}</TextEmail>
      </ViewProfile>

      <ViewButtom>
        <ButtomLogout onPress={handleLogout}>
          <Icon 
            name="power"
            type="material-community" 
            size={40}
            color="#e54848"
            tvParallaxProperties={undefined}           
          />
          <TextButtom>Sair</TextButtom>
        </ButtomLogout>
      </ViewButtom>

    </Container>
  )
}