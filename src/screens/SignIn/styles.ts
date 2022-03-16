import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextTitulo = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #004dda;
  left: -125px;
  margin-bottom: 5px;
`;

export const TextSubtitulo = styled(Text)`
  font-size: 16px;
  color: #131313;
  left: -50px;
  margin-bottom: 25px;
`; 

export const AreaInput = styled.View`
  width: 92%;
  margin-bottom: 40%;
  padding: 20px;
`;

export const AreaButton = styled(View)`
  width: 80%;
  top: -160px;
`;

export const AreaTextLink = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 4px;
`;

export const LinkCadastro = styled.TouchableOpacity`
  flex: 1;
`;

export const LinkText = styled.Text`
  margin-right: 5px;
  font-size: 16px;
  color: #131313;
`;

export const LinkTextBold= styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #004dda;
`;
