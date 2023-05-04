import React from 'react';
import { Container, InputSeachContainer } from './style';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width={201} />
      <InputSeachContainer>
        <input type="text" placeholder="Digite oque quer" />
      </InputSeachContainer>
    </Container>
  );
}
