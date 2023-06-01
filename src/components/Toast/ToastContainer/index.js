import React, { useState, useEffect } from 'react';
import { Container } from './style';
import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;
      setMessages((prevState) => [...prevState, { id: Math.random(), type, text }]);
    }
    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((toast) => (
        <ToastMessage type={toast.type} text={toast.text} key={toast.id} />
      ))}
    </Container>
  );
}
