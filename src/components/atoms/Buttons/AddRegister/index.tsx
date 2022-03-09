import React, { useRef, useState } from "react";
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';

export const AddRegister: React.FC = () => {
  
  const [visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const AniIn = () => {
    setVisible(true)
    Animated.timing(animation, {
       toValue: 1,
       duration: 500,
       useNativeDriver: true
    }).start();
 }

  const AniOut = () => {
    setTimeout(() => setVisible(false), 400)
     Animated.timing(animation, {
        toValue: 0,
        duration: 500,
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

      <Modal transparent visible={visible}>
      <BackgroundModal>
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
          
        </ContinerModal>
         </Animated.View>
      </BackgroundModal>
    </Modal>

    </Container>
  )
}

const Container = styled(View)`
   flex-direction: column;
`;

const AddButtonTab = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;  
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 100px;
  border-width: 4px;
  border-color: #004dda;
  top: -30px;
`;

const ContinerModal = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundModal = styled(View)`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

const ViewHeader = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const TitleModal = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  left: 10px;
`;

const CloseButton = styled(TouchableOpacity)`
  right: -50px;
`;

const styles = StyleSheet.create({
  ViewModal: {
    width: "80%",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20
  }
})
