import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import xCircle from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
  id, text, type, onRemoveMessage, duration, isLeaving, onAnimationEnd,
}) {
  const animatedElementRef = useRef(null);
  useEffect(() => {
    const overlayRefContent = animatedElementRef.current;
    function handleAnimationEnd() {
      onAnimationEnd(id);
    }
    if (isLeaving && overlayRefContent) {
      overlayRefContent.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      overlayRefContent.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isLeaving, id, onAnimationEnd]);
  useEffect(() => {
    const timeoutId = setTimeout(() => { onRemoveMessage(id); }, duration || 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onRemoveMessage]);
  function HandleRemoveToast() {
    onRemoveMessage(id);
  }

  return (

    <Container
      type={type}
      onClick={HandleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
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
  isLeaving: PropTypes.bool.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
};

ToastMessage.defaultProps = {
  type: 'default',
  duration: 7000,
};
