import React, { } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import Loader from '../../components/Loader/index';

import useEditContact from './useEditContact';

export default function Edit() {
  const {
    isLoading,
    title,
    contactFormRef,
    handleSubmit,
  } = useEditContact();
  return (

    <div>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editando ${title}`} />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
