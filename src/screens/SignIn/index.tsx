import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from 'react-native-elements';
import { 
  AreaButton,
  AreaInput,
  AreaTextLink,
  Container, 
  TextSubtitulo, 
  TextTitulo,
  LinkCadastro,
  LinkText,
  LinkTextBold
} from './styles';
import { ScrollView } from 'react-native';
import SignButtons from '../../components/atoms/Buttons/SignButtons';
import { AuthNavigationProps } from '../../routes/types';
import { useAuth } from '../../contexts/auth';
import Header from '../../components/molecules/Header';

export default function SignIn() {

  const navigation = useNavigation<AuthNavigationProps>();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);

  const { handleSignIn, loading} = useAuth();

  async function LoginUser(){
    await handleSignIn({email, password})
  }

  return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
          <Container>
             
             <Header/>
             <TextTitulo>Login</TextTitulo>
             <TextSubtitulo>Digite seus dados para entrar.</TextSubtitulo>

             <AreaInput>        
              <Input 
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
                leftIcon={{
                  type: 'feather',
                  name: 'mail'
                }} 
                autoCompleteType={undefined}         
              />

              <Input 
                placeholder="Digite sua senha"
                value={password}
                onChangeText={(text) => setPassword(text)}
                leftIcon={{
                  type: 'feather',
                  name: 'lock'
                }}
                rightIcon={
                  <Icon 
                  name={eye === true ? 'eye' : 'eye-off'}
                  type='feather'
                  onPress={ () => setEye(eye => eye === true ? false : true)}
                  tvParallaxProperties={undefined}               
                  />
                }
                secureTextEntry={eye} 
                autoCompleteType={undefined}         
              />  
             </AreaInput>
             
             <AreaButton>
              <SignButtons 
                title='Entrar'
                loading={loading}
                onPress={LoginUser}
              />  
                <AreaTextLink>
                <LinkText>Ainda não possui uma conta?</LinkText>
                  <LinkCadastro onPress={ () => navigation.navigate('SignUp')}>
                  <LinkTextBold>Cadastre-se</LinkTextBold>
                </LinkCadastro>
                </AreaTextLink>
             </AreaButton>
             

          </Container>
      </ScrollView>
  )
}