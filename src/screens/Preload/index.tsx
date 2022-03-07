import React from 'react';

import {
  ContainerPreload,
  ImageFinanceapp,
  ContentPreload,
  ContainerImageFinanceapp,
} from './styles';


const Preload: React.FC = () => {
  return (
    <ContainerPreload>
      <ContentPreload>
        <ContainerImageFinanceapp>
          <ImageFinanceapp />
        </ContainerImageFinanceapp>
      </ContentPreload>
    </ContainerPreload>
  );
};

export default Preload;
