import { useRef } from 'react';
import ContactsService from '../../services/ContactsService';
import toast from '../../services/utils/toast';

export default function useNewContact() {
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
  return {
    ContactFormRef,
    handleSubmit,
  };
}
