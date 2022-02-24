import React, { FunctionComponent } from "react";
import { Image } from 'react-native';

export const LogoWhite: FunctionComponent = () => {
  return(
    <Image 
      source={require('../../../../assets/images/LogoWhite.png')}
      resizeMode="contain"
      style={{
        width: 300,
        height: 300
      }}
    />
  );
}