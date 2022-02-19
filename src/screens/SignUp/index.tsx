import React from 'react'
import { Button, Icon, Input } from 'react-native-elements';

import { 
  Container,
  Background,
  AreaInput,
  LinkCadastro,
  LinkText,
  LinkTextBold,
  TituloLogin,
  TituloDados,
  AreaImage,
  ImageLogoTitulo
} from './styles';

export default function SignUp() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  return (
    <Background>
      <Container>   

        <AreaImage>
          <ImageLogoTitulo 
           source={require("../../assets/images/LogoTitulo.png")}
           resizeMode="contain"
          />
        </AreaImage>  
          
        <AreaInput>

          <TituloLogin>Cadastro</TituloLogin>
          <TituloDados>Digite seus dados para cadastrar.</TituloDados>

           <Input 
            placeholder="Digite seu nome"
            value={name}
            onChangeText={(text) => setName(text)}
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

          <Button 
           title="Cadastrar"
           titleStyle={{fontWeight:"bold", fontSize: 15}}
           buttonStyle={{
             marginTop: 15, 
             padding: 15, 
             backgroundColor:"#004aad"}}
           loading={loading}
          />

          <LinkCadastro>
            <LinkText>Já possui uma conta?</LinkText>
            <LinkTextBold>Faça Login</LinkTextBold>
          </LinkCadastro> 
        </AreaInput>    

      </Container>
     </Background>
  )
}