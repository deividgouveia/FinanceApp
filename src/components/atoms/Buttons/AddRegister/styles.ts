import styled from "styled-components/native";
import { 
  View, 
  TouchableOpacity, 
  Text, 
  SafeAreaView, 
  TextInput, 
} from "react-native";

export const Container = styled(SafeAreaView)`
   flex-direction: column;
`;

export const AddButtonTab = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;  
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 100px;
  border-width: 4px;
  border-color: #004dda;
  top: -30px;
  elevation: 5px;
`;

export const ContinerModal = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundModal = styled(View)`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

export const ViewHeader = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const TitleModal = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  left: 10px;
`;

export const CloseButton = styled(TouchableOpacity)`
  right: -50px;
`;

export const ViewInput = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 250px;
  height: 50px;
  border-width: 4px;
  background-color: rgba(255,255,255, 0.5) ;
`;