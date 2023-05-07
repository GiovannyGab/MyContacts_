import React from 'react';
import PropTypes from 'prop-types';
import { Container, Overlay, Footer } from './style';
import { Button } from '../button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo Modal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, vero. Nostrum</p>
        <Footer danger={danger}>
          <button type="button" className="button-back">Cancelar</button>
          <Button type="button" className="button-action">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
