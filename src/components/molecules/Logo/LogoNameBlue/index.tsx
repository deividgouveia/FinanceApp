import React, { FunctionComponent } from "react";
import { Image } from 'react-native';

export const LogoNameBlue: FunctionComponent = () => {
  return(
    <Image 
      source={require('../../../../assets/images/LogoNameBlue.png')}
      resizeMode="contain"
      style={{
        width: 250,
        height: 250
      }}
    />
  );
}