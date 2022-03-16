import React, { useRef, useState } from "react";
import { 
  Animated,
  Modal
} from "react-native";
import { Icon } from 'react-native-elements';
import ModalButtons from "../ModalButtons";
import Picker from "../../Picker";
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
  const [tipo, setTipo] = useState<string>('receita');
  const [errorText, setErrorText] = useState<boolean>(false);

  function AddGasto (){
    if(valor === ''){
      setErrorText(true);
    }
  }

  function handleValor (text:string){
    setValor(text);
    setErrorText(false);
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
                <CloseButton onPress={() => {setVisible(false),setErrorText(false)}}>
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
              <Picker setTipo={setTipo} tipo={tipo}/>
            </ViewInput>

            <ViewButton>
              <ModalButtons 
                title="Registrar"
                color="#004aad"
                loading={false}
                onPress={AddGasto}
              />
            </ViewButton>
          </ContainerModal>
        </BackgroundModal>
      </Modal>

    </Container>
  )
}

