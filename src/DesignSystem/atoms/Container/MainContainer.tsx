import React from 'react';
import Container from './Container.styled';
import { StatusBar } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      {children}
    </Container>
  );
};

export default MainContainer;
