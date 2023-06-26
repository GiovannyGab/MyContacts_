/* eslint-disable import/named */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';

import {
  Container,

} from './styles';
import ListBody from './components/ListBody';

import Loader from '../../components/Loader/index';

import Modal from '../../components/Modal';
import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import NotFoundSeach from './components/NotFoundSeach';
import ListHeader from './components/ListHeader';

export default function Home() {
  const {
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
  } = useHome();
  return (
    <Container>

      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
        <InputSearch value={searchTerm} onChange={HandleChangeSearch} />
      )}

      <Header
        HasError={HasError}
        contacts={contacts}
        filteredContacts={filteredContacts}
      />
      {HasError && (
        <ErrorStatus onTryAgain={handleTryAgain} />
      )}

      {(!HasError && contacts.length === 0 && !isLoading) && (
     <EmptyList />
      )}
      {(!HasError && contacts.length > 1 && filteredContacts < 1) && (
       <NotFoundSeach searchTerm={searchTerm} />
      )}

      {!HasError && (
      <>
       <ListHeader
         order={order}
         onToggleOrderBy={HandleToggleOrderBy}
         filteredContacts={filteredContacts}
       />
        <ListBody filteredContacts={filteredContacts} onDelete={handleDelete} />
        <Modal
          danger
          visible={modalVisible}
          title={`Tem certeza que deseja remover o contato ”${contactBeingDeletected.name}”?`}
          buttonLabel="Deletar"
          onCancel={handleModalCancel}
          onConfirm={handleModalConfirmDeleated}
        ><p>Esta ação não poderá ser desfeita!</p>
        </Modal>
      </>
      )}

    </Container>
  );
}
