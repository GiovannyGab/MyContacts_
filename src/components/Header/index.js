import React from 'react';
import { Container } from './style';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width={201} />

    </Container>
  );
}
