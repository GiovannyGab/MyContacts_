import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Container } from './styles';

export default function Header({ HasError, contacts, filteredContacts }) {
  const alignment = HasError ? 'flex-end' : (
    contacts.length > 0 ? 'space-between'
      : 'center'
  );
  return (
    <Container justifyContent={alignment}>
      {!HasError && contacts.length > 0 && (
      <strong>
        {filteredContacts.length}
        {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
      </strong>
      )}

      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}

Header.propTypes = {
  HasError: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),

  })).isRequired,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),

  })).isRequired,

};
