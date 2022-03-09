import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0,0,0, 0.40);
  background-color: rgba(0,0,0,0.05);
  border-radius: 10px;
`;

export const Tipo = styled(View)`
  flex-direction: column;
`;

export const IconView = styled(View)`
  flex-direction: row;
  background-color: #18b738;
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 7px;
`;

export const TipoText = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled(Text)`
  color: #222;
  font-size: 22px;
  font-weight: bold;
`;

export const IconDelete = styled(TouchableOpacity)`
  margin-top: 12px;
`;