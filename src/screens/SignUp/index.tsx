import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from 'react-native-elements';
import { useAuth } from '../../contexts/auth'; 
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

import SignButtons from '../../components/atoms/Buttons/SignButtons';
import Header from '../../components/molecules/Header';
import { ScrollView } from 'react-native';

export default function SignUp() {

  const navigation = useNavigation();

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);

  const {handleSignUp, loading} = useAuth();

  async function RegisterUser(){
    await handleSignUp({nome, email, password})
  }

  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
          <Container>
             
             <Header/>
             <TextTitulo>Cadastro</TextTitulo>
             <TextSubtitulo>Digite seus dados para cadastrar.</TextSubtitulo>

             <AreaInput>
              <Input 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={(text) => setNome(text)}
                leftIcon={{
                  type: 'feather',
                  name: 'user'
                }} 
                autoCompleteType={undefined}         
              />

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
                title='Cadastrar'
                loading={loading}
                onPress={RegisterUser}
              />  
              <AreaTextLink>
              <LinkText>Já possui uma conta?</LinkText>
                <LinkCadastro onPress={ () => navigation.goBack()}>
                <LinkTextBold>Faça Login</LinkTextBold>
              </LinkCadastro>
              </AreaTextLink>
             </AreaButton>
             

          </Container>
      </ScrollView>
  )
}