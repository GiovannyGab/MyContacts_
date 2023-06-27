import { useEffect, useState } from 'react';

import ContactsService from '../../services/ContactsService';

import toast from '../../services/utils/toast';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [HasError, setHasError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [contactBeingDeletected, setContactBeingDeletected] = useState({});

  const filteredContacts = contacts.filter((contact) => contact.name
    .toLowerCase()
    .includes(searchTerm));
  async function loadContacts() {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.ContactList(order);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setContacts([]);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    loadContacts();
  }, [order]);

  function HandleToggleOrderBy() {
    setOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }
  function HandleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }
  function handleDelete(contact) {
    setContactBeingDeletected(contact);
    setModalVisible(true);
  }
  function handleModalCancel() {
    setModalVisible(false);
  }
  async function handleModalConfirmDeleated() {
    try {
      const { id } = contactBeingDeletected;

      await ContactsService.deleteContact(id);
      setContacts(
        (prevState) => prevState.filter((contact) => contact.id !== contactBeingDeletected.id),
      );
      setModalVisible(false);
      toast(
        {
          type: 'sucess',
          text: 'Deletado com Sucesso',
          duration: 7000,
        },
      );
    } catch (error) {
      toast(
        {
          type: 'error',
          text: 'Houve um Erro ao Deletar!',
          duration: 7000,
        },
      );
    }
  }
  return {
    modalVisible,
    contactBeingDeletected,
    handleModalCancel,
    handleModalConfirmDeleated,
    isLoading,
    contacts,
    HandleChangeSearch,
    searchTerm,
    HasError,
    filteredContacts,
    handleTryAgain,
    order,
    HandleToggleOrderBy,
    handleDelete,
  };
}
