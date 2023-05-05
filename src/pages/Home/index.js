import React from 'react';
import {
  Container, Header, ListContainer, ListBody, Card, InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import deleteb from '../../assets/images/icons/deleteb.svg';

export default function Home() {
  return (
    <Container>
      <InputSeachContainer>
        <input type="text" placeholder="Digite oque nome que quer procurar" />
      </InputSeachContainer>
      <Header>
        <strong>Contatos 3</strong>
        <a href="/">Novo Contato</a>
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
              <a href="/">
                <img src={edit} alt="edit" />
              </a>
              <button type="button">
                <img src={deleteb} alt="delete" />
              </button>
            </div>
          </Card>
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
              <a href="/">
                <img src={edit} alt="edit" />
              </a>
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
