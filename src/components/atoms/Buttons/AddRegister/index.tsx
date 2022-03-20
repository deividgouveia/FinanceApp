import React, { useState } from "react";
import { 
  Modal,
  Alert
} from "react-native";
import { Icon } from 'react-native-elements';
import ModalButtons from "../ModalButtons";
import Picker from "../../Picker";
import Toast from 'react-native-toast-message';
import { getAuth } from "firebase/auth";
import { db, dbRef } from "../../../../services/firebaseConnection";
import { child, get, push, ref, update} from "firebase/database";
import { format } from 'date-fns';
import { useAuth } from "../../../../contexts/auth";
import {
  Container,
  AddButtonTab,
  ContainerModal,
  ViewHeader,
  TitleModal,
  CloseButton,
  ViewInput,
  Input,
  ViewButton,
  BackgroundModal,
  TextTipo,
  TextError
} from './styles';


export const AddRegister: React.FC = () => {
  
  const [visible, setVisible] = useState<boolean>(false);
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');
  const [errorText, setErrorText] = useState<boolean>(false);

  const auth = getAuth();
  const {user: usuario} = useAuth();

  function handleButtonAdd (){
    if(isNaN(parseFloat(valor)) || valor === '0'){
      setErrorText(true);
      return;
    }
     
    Alert.alert(
      'Confirmando dados',
      `Tipo: ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Continuar', onPress: () => handleAddGasto()}
      ]
    )
  }
  
  //ADICIONAR REGISTRO -------------------------------------------------------//
  async function handleAddGasto (){
    
    const uid = usuario.uid; 
    await push(ref(db, 'historico/' + uid),{
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy')
    })
    .then(async()=>{
      //ATUALIZAR O SALDO-----------------------------------------------------//
        await get(child(dbRef, `users/${uid}`))
        .then(async(snapshot) => {
          if(snapshot.exists()){
            let saldo = snapshot.val().saldo;

            tipo === 'despesa' ? 
            saldo -= parseFloat(valor) : saldo += parseFloat(valor);

            await update(ref(db, 'users/' + uid + '/'),{
              saldo: saldo
            })
          }
        })
        .catch(()=>{console.log('Sem saldo!')})      
      //----------------------------------------------------------------------//
      Toast.show({
        type: 'info',
        position: 'bottom',
        text1: 'Valor registrado com sucesso!',
        text2: 'check-circle'
      })
    })
    .catch(()=>{
       Alert.alert('Error'); 
    })
    setValor('');
    setVisible(false);
  }
  //--------------------------------------------------------------------------//

  function handleValor (text:string){
    setValor(text);
    setErrorText(false);
  }

  function handleClose (){
    setVisible(false);
    setErrorText(false);
    setValor('');
    setTipo('receita');
  }

  return( 
    <Container>
      <AddButtonTab onPress={() => setVisible(true)}>
         <Icon 
           name="plus"
           type="material-community"
           color="#004dda"
           size={35}
           tvParallaxProperties={undefined}
         />
      </AddButtonTab> 

      <Modal transparent visible={visible} animationType="none">
        <BackgroundModal>
          <ContainerModal>
            <ViewHeader>
              <TitleModal>Registrar Gasto</TitleModal>
                <CloseButton onPress={handleClose}>
                  <Icon 
                  name="close"
                  type="material-community"
                  color="#000"
                  size={30}
                  tvParallaxProperties={undefined}
                  />
                </CloseButton>
            </ViewHeader>

            <ViewInput>
              <Input border={errorText}
                placeholder="Digite um valor desejado"
                keyboardType="numeric"
                value={valor}
                onChangeText={handleValor}
              />
              {errorText === true ? 
              <TextError>Digite um valor.</TextError> : null}
              <TextTipo>Selecionar tipo</TextTipo>
              <Picker tipo={tipo} setTipo={setTipo}/>
            </ViewInput>

            <ViewButton>
              <ModalButtons 
                title="Registrar"
                color="#004aad"
                loading={false}
                onPress={handleButtonAdd}
              />
            </ViewButton>
          </ContainerModal>
        </BackgroundModal>
      </Modal>

    </Container>
  )
}

