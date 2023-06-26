import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import magnifierQuestion from '../../../../assets/images/icons/magnifier-question.svg';

export default function NotFoundSeach({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="lupa" />
      <span>
        Nenhum resultado foi encontrado para

        <strong>
          ”
          {searchTerm}
          ”
        </strong>
        .
      </span>

    </Container>
  );
}

NotFoundSeach.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
