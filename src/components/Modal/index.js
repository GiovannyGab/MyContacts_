import React, { } from 'react';
import PropTypes from 'prop-types';

import { Container, Overlay, Footer } from './style';
import { Button } from '../button';
import ReactPortals from '../ReactPortals';
import useAnimatedUnmouted from '../../hooks/useAnimatedUnmouted';

export default function Modal({
  danger, title, children, buttonLabel, onCancel, onConfirm, visible,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmouted(visible);
  if (!shouldRender) {
    return null;
  }
  return (

    <ReactPortals containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animatedElementRef}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>
          <div className="modal-body">
            {children}
          </div>

          <Footer danger={danger}>
            <button type="button" onClick={onCancel} className="button-back">Cancelar</button>
            <Button type="button" onClick={onConfirm} className="button-action">{buttonLabel}</Button>
          </Footer>
        </Container>
      </Overlay>
      ,
    </ReactPortals>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
};
