import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

import ContactsService from '../../services/ContactsService';

import toast from '../../services/utils/toast';

export default function useEditContact() {
  const [isLoading, setIsloading] = useState(true);
  const [title, setTitle] = useState('');
  const contactFormRef = useRef(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContacts() {
      try {
        const contactdata = await ContactsService.getContactById(id);
        contactFormRef.current.setFieldsValues(contactdata);
        setIsloading(false);
        setTitle(contactdata.name);
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

  async function handleSubmit(contact) {
    try {
      const response = await ContactsService.updateContact(id, contact);
      setTitle(response.name);

      toast(
        {
          type: 'sucess',
          text: 'Editado com Sucesso',
          duration: 7000,
        },
      );
      // history.push('/');
      return response;
    } catch (error) {
      toast(
        {
          type: 'error',
          text: 'Ocorreu um erro ao Editado o contato!',
          duration: 7000,
        },
      );
    }
  }
  return {
    isLoading,
    title,
    contactFormRef,
    handleSubmit,
  };
}
