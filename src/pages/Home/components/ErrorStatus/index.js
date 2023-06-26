import React from 'react';
import PropTypes from 'prop-types';
import sad from '../../../../assets/images/icons/sad.svg';
import { ErrorContainer } from './styles';
import { Button } from '../../../../components/button';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <ErrorContainer>
      <img src={sad} alt="sad" />
      <div className="details">
        <span>Ocorreu um Erro ao obter os seus Contatos! </span>
        <Button type="button" onClick={onTryAgain}>Tentar Novamente</Button>
      </div>
    </ErrorContainer>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
