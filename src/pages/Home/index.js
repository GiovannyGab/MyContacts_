import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ListContainer,
  ListBody,
  Card,
  InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/deleteb.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState('asc');
  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${order}`)
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [order]);

  function HandleToggleOrderBy() {
    setOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSeachContainer>
        <input type="text" placeholder="Digite oque nome que quer procurar" />
      </InputSeachContainer>
      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button" onClick={HandleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <ListBody>
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-header">
                  <strong>
                    {contact.name}
                  </strong>
                  {contact.category_name && (
                  <small>
                    {contact.category_name}
                  </small>
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
      </ListContainer>
    </Container>
  );
}
