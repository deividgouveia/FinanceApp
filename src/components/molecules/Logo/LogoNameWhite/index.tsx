import React, { FunctionComponent } from "react";
import { Image } from 'react-native';

export const LogoNameWhite: FunctionComponent = () => {
  return(
    <Image 
      source={require('../../../../assets/images/LogoNameWhite.png')}
      resizeMode="contain"
      style={{
        width: 250,
        height: 250
      }}
    />
  );
}