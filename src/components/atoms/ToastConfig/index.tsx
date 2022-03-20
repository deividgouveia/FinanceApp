import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

export default {
  success: ({text1}:{text1: string}) => (
    <ContainerToast bgColor='#18b738'>
      <Icon 
      name='account-check'
      type="material-community"
      size={25} 
      color="#fff"
      tvParallaxProperties={undefined} />
      <TextStyle>{text1}</TextStyle>   
    </ContainerToast>
  ),
  error: ({text1, text2  }:{text1: string, text2:string}) => (
    <ContainerToast bgColor='#e54848'>
      <Icon 
      name={text2}
      type="material-community"
      size={25} 
      color="#fff"
      tvParallaxProperties={undefined} />
      <TextStyle>{text1}</TextStyle>      
    </ContainerToast>
  ),
  info: ({text1, text2  }:{text1: string, text2:string}) => (
    <ContainerToastInfo bgColor='#fff'>
      <Icon 
      name={text2}
      type="material-community"
      size={40} 
      color="#18b738"
      tvParallaxProperties={undefined} />
      <TextStyleInfo>{text1}</TextStyleInfo>      
    </ContainerToastInfo>
  ),      
};

const ContainerToast = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 95%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props: {bgColor:string}) => 
    props.bgColor ? props.bgColor : 'transparent'};
`;

const TextStyle = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  padding-left: 10px;
  color: #fff;
`;

const ContainerToastInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  bottom: -42px;
  padding: 10px;
  border-top-width: 1px;
  border-color: #004aad
  padding-left: 20px;
  background-color: ${(props: {bgColor:string}) => 
    props.bgColor ? props.bgColor : 'transparent'};
`;

const TextStyleInfo = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  padding-left: 10px;
  color: #222;
`;