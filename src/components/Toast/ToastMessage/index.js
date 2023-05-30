import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import xCircle from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  console.log(
    { type },
  );
  return (

    <Container type={type}>
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
};

ToastMessage.defaultProps = {
  type: 'default',
};
