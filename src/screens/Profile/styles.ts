import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const ViewProfile = styled(View)`
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const TextNome = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;

export const TextEmail = styled(Text)`
  font-size: 15px;
`;

export const ViewButtom = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const ButtomLogout = styled(TouchableOpacity)`
  background-color: #fff;
  border-radius: 10px;
  elevation: 8px;
  top: 50px;
  padding-left: 5px;
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const TextButtom = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  left: 5px;
`;

