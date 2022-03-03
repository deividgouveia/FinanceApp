import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from 'react-native-elements';
import { 
  Container,
  Background,
  AreaInput,
  ViewCadastro,
  LinkCadastro,
  LinkText,
  LinkTextBold,
  TituloLogin,
  TituloDados,
  AreaImage
} from './styles';
import Toast from 'react-native-toast-message';
import SignButtons from '../../components/atoms/Buttons/SignButtons';
import { AuthNavigationProps } from '../../routes/types';
import { LogoNameBlue } from '../../components/molecules/Logo/LogoNameBlue';
import { Platform } from 'react-native';
import { useAuth } from '../../contexts/auth';

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
            onPress={LoginUser}
          />

          <ViewCadastro>
            <LinkText>Ainda não possui uma conta?</LinkText>
             <LinkCadastro onPress={ () => navigation.navigate('SignUp')}>
               <LinkTextBold>Cadastre-se</LinkTextBold>
             </LinkCadastro>
          </ViewCadastro>
        
        </AreaInput>    

      </Container>
     </Background>
  )
}