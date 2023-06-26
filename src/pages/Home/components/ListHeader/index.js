import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import arrow from '../../../../assets/images/icons/arrow.svg';

export default function ListHeader({
  order, filteredContacts, onToggleOrderBy,
}) {
  return (
    <Container orderBy={order}>
      {filteredContacts.length > 0 && (
      <button
        type="button"
        className="sort-button"
        onClick={onToggleOrderBy}
      >
        <span>Nome</span>
        <img src={arrow} alt="Arrow" className="img-arrow" />
      </button>
      )}
    </Container>
  );
}

ListHeader.propTypes = {
  order: PropTypes.string.isRequired,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),

  })).isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,

};
