import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function Edit() {
  return (
    <div>
      <PageHeader title="Editar Giovanny Gabriel" />

      <ContactForm buttonLabel="Salvar Alterações" />
    </div>
  );
}
