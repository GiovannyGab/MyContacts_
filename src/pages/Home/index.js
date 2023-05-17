import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ListHeader,
  ListBody,
  Card,
  InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/deleteb.svg';

import Loader from '../../components/Loader/index';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = (contacts.filter((contact) => contact.name.toLowerCase()
    .includes(searchTerm)));
  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.ContactList(order);

        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, [order]);

  function HandleToggleOrderBy() {
    setOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }
  function HandleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSeachContainer>
        <input
          type="text"
          placeholder="Digite oque nome que quer procurar"
          onChange={HandleChangeSearch}
          value={searchTerm}
        />
      </InputSeachContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

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
    </Container>
  );
}
