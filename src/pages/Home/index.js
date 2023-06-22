/* eslint-disable import/named */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ListHeader,
  ListBody,
  Card,
  InputSeachContainer,
  ErrorContainer,
  NoContactsContainer,
  SearchNotFoundContainer,

} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/delete.svg';
import sad from '../../assets/images/icons/sad.svg';
import emptyBox from '../../assets/images/icons/empty-box.svg';
import magnifierQuestion from '../../assets/images/icons/magnifier-question.svg';

import Loader from '../../components/Loader/index';

import { Button } from '../../components/button';
import Modal from '../../components/Modal';
import useHome from './useHome';

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

<Modal
  danger
  visible={modalVisible}
  title={`Tem certeza que deseja remover o contato ”${contactBeingDeletected.name}”?`}
  buttonLabel="Deletar"
  onCancel={handleModalCancel}
  onConfirm={handleModalConfirmDeleated}
><p>Esta ação não poderá ser desfeita!</p>
</Modal>

      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
      <InputSeachContainer>
        <input
          type="text"
          placeholder="Digite oque nome que quer procurar"
          onChange={HandleChangeSearch}
          value={searchTerm}
        />
      </InputSeachContainer>
      )}

      <Header justifyContent={
        HasError ? 'flex-end' : (
          contacts.length > 0 ? 'space-between'
            : 'center'
        )
      }
      >
        {!HasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}

        <Link to="/new">Novo Contato</Link>
      </Header>

      {HasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />
          <div className="details">
            <span>Ocorreu um Erro ao obter os seus Contatos! </span>
            <Button type="button" onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {(!HasError && contacts.length === 0 && !isLoading) && (
      <NoContactsContainer>
        <img src={emptyBox} alt="emptyBox" />
        <span>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>”Novo contato”</strong> à cima
        para cadastrar o seu primeiro!
        </span>
      </NoContactsContainer>
      )}
      {(!HasError && contacts.length > 1 && filteredContacts < 1) && (
        <SearchNotFoundContainer>
        <img src={magnifierQuestion} alt="lupa" />
        <span>Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.</span>

        </SearchNotFoundContainer>
      )}

      {!HasError && (
      <>
        <ListHeader orderBy={order}>
          {filteredContacts.length > 0 && (
          <button
            type="button"
            className="sort-button"
            onClick={HandleToggleOrderBy}
          >
            <span>Nome</span>
            <img src={arrow} alt="Arrow" className="img-arrow" />
          </button>
          )}
        </ListHeader>
        <ListBody>
          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-header">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                  <small>{contact.category.name}</small>
                  )}
                </div>
                <div className="contact-info">
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="edit" />
                </Link>
                <button type="button" onClick={() => handleDelete(contact)}>
                  <img src={deleteb} alt="delete" />
                </button>
              </div>
            </Card>
          ))}
        </ListBody>
      </>
      )}

    </Container>
  );
}
