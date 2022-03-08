import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
 flex: 1;
 background-color: #ffffff;
`;

export const ViewLogo = styled(View)`
 align-items: center;
 margin-bottom: -175px;
`;

export const ViewTitulos = styled(View)`
  align-items: flex-start;
  margin-left: 20px;
  
`;

export const TextNome = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #004dda;
`;

export const TextSaldo = styled(Text)`
  font-size: 30px;
  color: #1c1c1c;
  top: 5px;
`;

export const TextList = styled(Text)`
  font-size: 15px;
  color: #18b738;
  font-weight: bold;
  top: 40px;
`;

export const List = styled(FlatList)`
  flex: 1;
  padding: 15px;
  elevation: 3px;
  margin-top: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;