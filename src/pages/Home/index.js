/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
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

} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/deleteb.svg';
import sad from '../../assets/images/icons/sad.svg';
import emptyBox from '../../assets/images/icons/empty-box.svg';

import Loader from '../../components/Loader/index';
import ContactsService from '../../services/ContactsService';
import { Button } from '../../components/button';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [HasError, setHasError] = useState(false);

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

  return (
    <Container>
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
                  {contact.category_name && (
                  <small>{contact.category_name}</small>
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
                <button type="button">
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
