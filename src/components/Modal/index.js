import React from 'react';
import { Container, Overlay, Footer } from './style';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo Modal</h1>
        <p>Corpo modal</p>
        <Footer>
          <button type="button" className="button-back">Cancelar</button>
          <button type="button" className="button-action">Deletar</button>
        </Footer>
      </Container>
    </Overlay>
  );
}
