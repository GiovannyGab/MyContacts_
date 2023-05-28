/* eslint-disable no-restricted-globals */
import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  async function handleSubmit(formData) {
    const contacts = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.categoriesId,
    };
    const response = await ContactsService.CreateContact(contacts);
    return response;
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
