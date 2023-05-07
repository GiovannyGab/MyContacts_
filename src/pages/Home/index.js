import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, ListBody, Card, InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/deleteb.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSeachContainer>
        <input type="text" placeholder="Digite oque nome que quer procurar" />
      </InputSeachContainer>
      <Header>
        <strong>Contatos 3</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <ListBody>
          <Card>
            <div className="info">
              <div className="contact-header">
                <strong>Giovanny Gabriel</strong>
                <small>Instagram</small>
              </div>
              <div className="contact-info">
                <span>giovanny.gabrieldsn@gmail.com</span>
                <span>87988261615</span>
              </div>
            </div>

            <div className="actions">
              <Link to="/edit/123">
                <img src={edit} alt="edit" />
              </Link>
              <button type="button">
                <img src={deleteb} alt="delete" />
              </button>
            </div>
          </Card>

        </ListBody>
      </ListContainer>
    </Container>
  );
}
