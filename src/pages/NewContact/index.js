/* eslint-disable no-restricted-globals */
import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import ContactForm from '../../components/ContactForm';
import toast from '../../services/utils/toast';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contacts = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoriesId,
      };
      const response = await ContactsService.CreateContact(contacts);
      toast(
        {
          type: 'sucess',
          text: 'Cadastrado com Sucesso',
          duration: 7000,
        },
      );

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
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />

    </div>
  );
}
