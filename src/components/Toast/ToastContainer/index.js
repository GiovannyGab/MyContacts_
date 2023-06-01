import React, { useState, useEffect, useCallback } from 'react';
import { Container } from './style';
import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event, { duration }) {
      const { type, text } = event.detail;
      setMessages((prevState) => [...prevState, {
        id: Math.random(), type, text, duration,
      }]);
    }
    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);
  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  return (
    <Container>
      {messages.map((toast) => (
        <ToastMessage
          type={toast.type}
          text={toast.text}
          id={toast.id}
          key={toast.id}
          duration={toast.duration}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
