/* eslint-disable no-restricted-globals */
import React, { useRef } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import ContactForm from '../../components/ContactForm';
import toast from '../../services/utils/toast';

export default function NewContact() {
  const ContactFormRef = useRef(null);
  async function handleSubmit(contact) {
    try {
      const response = await ContactsService.createContact(contact);

      toast(
        {
          type: 'sucess',
          text: 'Cadastrado com Sucesso',
          duration: 7000,
        },
      );
      ContactFormRef.current.resetFields();
      return response;
    } catch (error) {
      toast(
        {
          type: 'error',
          text: 'Ocorreu um erro ao cadastrar o contato!',
          duration: 7000,
        },
      );
    }
  }
  return (
    <div>
      <PageHeader title="Novo Contato" />
      <ContactForm
        ref={ContactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />

    </div>
  );
}
