import React, {FunctionComponent} from 'react';
import LogoNameBlue from '../../atoms/Icons/LogoNameBlue';

import {ContainerLogo} from './styles';
const Header: FunctionComponent = () => {
  return (
    <ContainerLogo>
      <LogoNameBlue />
    </ContainerLogo>
  );
};

export default Header;