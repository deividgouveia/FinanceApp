import React from "react";
import { Alert, Modal, Text, View } from "react-native";
import { Container } from "./styles";

const ModalRegister: React.FC = () => {

  function alert(){
    Alert.alert('Modal','Modal')
  }

  return(
    <Container>
       {alert}
    </Container>
  );
}

export default ModalRegister;