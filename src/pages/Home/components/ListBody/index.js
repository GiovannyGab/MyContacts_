import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import edit from '../../../../assets/images/icons/edit.svg';
import deleteb from '../../../../assets/images/icons/delete.svg';
import {

  Body,
  Card,
} from './styles';

export default function ListBody({ filteredContacts, onDelete }) {
  return (
    <Body>
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
            <button type="button" onClick={() => onDelete(contact)}>
              <img src={deleteb} alt="delete" />
            </button>
          </div>
        </Card>
      ))}

    </Body>
  );
}

ListBody.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),

  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};
