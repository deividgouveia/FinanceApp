import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
 flex: 1;
`;

export const ViewLogo = styled(View)`
 align-items: center;
 margin-bottom: -175px;
`;

export const ViewTitulos = styled(View)`
  align-items: flex-start;
  margin-left: 20px;
  
`;

export const ViewTituloList = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  padding-left: 25px;
  padding-right: 25px;
  top: -25px;
`;

export const CalendarIcon = styled(TouchableOpacity)`
  bottom: -5px;
  background-color: #004dda;
  padding: 10px;
  border-radius: 100px;
  elevation: 5px;
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
  bottom: -22px;
`;

export const List = styled(FlatList)`
  flex: 1;
  padding: 15px;
  margin-top: -10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 115px;
`;

export const ViewList = styled(View)`
  flex: 1;
  margin-top: 30px;
  height: 580px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  elevation: 3px;
`;