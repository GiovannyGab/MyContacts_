import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './style';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="arrow" />
        <span>Voltar</span>
      </Link>
      <div className="title">
        <h2>{title}</h2>
      </div>

    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
