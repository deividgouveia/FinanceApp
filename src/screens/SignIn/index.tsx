import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from 'react-native-elements';

import { 
  Container,
  Background,
  AreaInput,
  LinkCadastro,
  LinkText,
  LinkTextBold,
  TituloLogin,
  TituloDados,
  AreaImage
} from './styles';

import SignButtons from '../../components/atoms/Buttons/SignButtons';
import { AuthNavigationProps } from '../../routes/types';
import { LogoNameBlue } from '../../components/molecules/Logo/LogoNameBlue';
import { Platform } from 'react-native';
import { AuthContext } from '../../hooks/auth';

export default function SignIn() {

  const navigation = useNavigation<AuthNavigationProps>();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>   

        <AreaImage>
          <LogoNameBlue />
        </AreaImage>  
          
        <AreaInput>

          <TituloLogin>Login</TituloLogin>
          <TituloDados>Digite seus dados para entrar.</TituloDados>

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

          <SignButtons 
            title='Entrar'
            loading={loading}
            onPress={()=>null}
          />

          <LinkCadastro onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Ainda não possui uma conta?</LinkText>
            <LinkTextBold>Cadastre-se</LinkTextBold>
          </LinkCadastro> 
        </AreaInput>    

      </Container>
     </Background>
  )
}