/* eslint-disable no-restricted-globals */

import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';

import useNewContact from './useNewContact';

export default function NewContact() {
  const {
    ContactFormRef,
    handleSubmit,
  } = useNewContact();
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
