import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader/index';
import toast from '../../services/utils/toast';

export default function Edit() {
  const [isLoading, setIsloading] = useState(true);

  const contactFormRef = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    async function loadContacts() {
      try {
        const contactdata = await ContactsService.getContactById(id);
        contactFormRef.current.setFieldsValues(contactdata);
        setIsloading(false);
      } catch {
        history.push('/');
        toast({
          type: 'error',
          text: 'contato não encontrado!',
        });
      }
    }
    loadContacts();
  }, [id, history]);
  function handleSubmit() {

  }
  return (

    <div>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Giovanny Gabriel" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
