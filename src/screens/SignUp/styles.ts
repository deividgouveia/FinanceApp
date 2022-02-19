import styled from 'styled-components/native';

export const Background = styled.KeyboardAvoidingView`
 flex: 1;
 background-color: #ffffff;
`;

export const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: center;
`;

export const AreaImage = styled.View`
 flex: 0.5;
 margin-bottom: 30%;
`;

export const ImageLogoTitulo = styled.Image`
 width: 250px;
 height: 250px;
`;

export const TituloLogin = styled.Text`
 color: #004aad;
 font-weight: bold;
 font-size: 25px;
 margin-bottom: 10px;
`;

export const TituloDados = styled.Text`
 color: #131313;
 font-size: 16px;
 margin-bottom: 35px;
`;

export const AreaInput = styled.View`
 width: 90%;
 margin-bottom: 20%;
 padding: 20px;
`;

export const LinkCadastro = styled.TouchableOpacity`
 flex-direction: row;
 margin-top: 35px;
 margin-left: 35px;
`;

export const LinkText = styled.Text`
 margin-right: 5px;
 font-size: 16px;
 color: #131313;
`;

export const LinkTextBold= styled.Text`
 font-size: 16px;
 font-weight: bold;
 color: #004aad;
`;
