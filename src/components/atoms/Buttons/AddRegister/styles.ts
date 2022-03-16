import styled from "styled-components/native";
import { 
  View, 
  TouchableOpacity, 
  Text,  
  TextInput,
  ScrollView 
} from "react-native";

export const Container = styled(View)`
   flex: 0.5;
   justify-content: center;
   align-items: center;
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

export const BackgroundModal = styled(ScrollView)`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
`;

export const ContainerModal = styled(View)`
  background-color: #fff;
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  align-items: center;
  margin-left: 10%;
  margin-top: 50%;
`;

export const ViewHeader = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleModal = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #1c1c1c;
  right: -10px;
`;

export const CloseButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  right: -50px;
`;

export const ViewInput = styled(View)`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
`;

export const Input = styled(TextInput)`
  height: 50px;
  font-size: 15px;
  border-width: ${(props: {border:boolean}) =>
     props.border === true ? 2 : 0};
  border-color: ${(props: {border:boolean}) => 
     props.border === true ? '#e54848' : null}
  padding-left: 10px;
  border-radius: 0px;
  background-color: rgba(0,0,0,0.10) ;
`;

export const TextError = styled(Text)`
  font-size: 13px;
  color: #e54848;
`;

export const TextTipo = styled(Text)`
  font-size: 15px;
  color: #4f4f4f;
  bottom: -18px;
`;

export const ViewButton = styled(View)`
  width: 85%;
  margin-top: 20px;
`;