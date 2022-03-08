import React, {FunctionComponent} from 'react';
import LogoNameHome from '../../atoms/Icons/LogoNameHome';

import {ContainerLogo} from './styles';
const Header: FunctionComponent = () => {
  return (
    <ContainerLogo>
      <LogoNameHome />
    </ContainerLogo>
  );
};

export default Header;