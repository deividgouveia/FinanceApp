import React, { useRef, useState } from "react";
import { Animated, Modal, ScrollView, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import ModalButtons from "../ModalButtons";
import {
  Container,
  AddButtonTab,
  ContinerModal,
  BackgroundModal,
   ViewHeader,
  TitleModal,
  CloseButton,
  ViewInput,
  Input
} from './styles';

export const AddRegister: React.FC = () => {
  
  const [visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const AniIn = () => {
    setVisible(true)
    Animated.timing(animation, {
       toValue: 1,
       duration: 300,
       useNativeDriver: true
    }).start();
 }

  const AniOut = () => {
    setTimeout(() => setVisible(false), 200)
     Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
     }).start();
  }

  return(
    <Container>
      <AddButtonTab onPress={AniIn}>
         <Icon 
           name="plus"
           type="material-community"
           color="#004dda"
           size={35}
           tvParallaxProperties={undefined}
         />
      </AddButtonTab> 
      
      
      <Modal 
        transparent visible={visible}
       >
      
      <BackgroundModal>
         <ScrollView>
         <Animated.View style={[styles.ViewModal, {opacity: animation}]} >
         <ContinerModal>
          
             <ViewHeader>
                <TitleModal>Registrar Gasto</TitleModal>
                <CloseButton onPress={AniOut}>
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
                <Input 
                 placeholder="Digite um valor desejado"
                 keyboardType="numeric"
                />
                <ModalButtons 
                  title="Registrar"
                  color="#004aad"
                  loading={false}
                  onPress={()=>null}
                />
             </ViewInput>
          
        </ContinerModal>
         </Animated.View>
         </ScrollView>
      </BackgroundModal>
      
    </Modal>
    

    </Container>
  )
}
const styles = StyleSheet.create({
  ViewModal: {
    flex: 1,
    width: "90%",
    height: "30%",
    marginTop: "70%",
    marginLeft: "5%",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20
  }
})
