import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import xCircle from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
  id, text, type, onRemoveMessage, duration,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => { onRemoveMessage(id); }, duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onRemoveMessage]);
  function HandleRemoveToast() {
    onRemoveMessage(id);
  }
  return (

    <Container type={type} onClick={HandleRemoveToast} tabIndex={0} role="button">
      {type === 'sucess' ? <img src={checkCircle} alt="Sucess" /> : (type === 'error' ? <img src={xCircle} alt="Error" /> : '')}
      <strong>
        {text}
      </strong>
    </Container>
  );
}
ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['sucess', 'error', 'default']),
  onRemoveMessage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

ToastMessage.defaultProps = {
  type: 'default',
  duration: 7000,
};
