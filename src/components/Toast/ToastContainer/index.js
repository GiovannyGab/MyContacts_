import React from 'react';
import { Container } from './style';
import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default Toast" type="default" />
      <ToastMessage text="Error Toast" type="error" />
      <ToastMessage text="Sucess Toast" type="sucess" />

    </Container>
  );
}
