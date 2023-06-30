import React, { useEffect } from 'react';
import { Container } from './style';
import ToastMessage from '../ToastMessage';
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {

    setItems: setMessages,
    handleAnimationEnd,
    handleRemoveMessage,

    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast(event, duration) {
      const { type, text } = event.detail;
      setMessages((prevState) => [...prevState, {
        id: Math.random(), type, text, duration,
      }]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((toast, { isLeaving }) => (
        <ToastMessage
          type={toast.type}
          text={toast.text}
          id={toast.id}
          key={toast.id}
          duration={toast.duration}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
