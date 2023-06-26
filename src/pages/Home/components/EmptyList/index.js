import React from 'react';
import emptyBox from '../../../../assets/images/icons/empty-box.svg';
import { NoContactsContainer } from './styles';

export default function EmptyList() {
  return (
    <NoContactsContainer>
      <img src={emptyBox} alt="emptyBox" />
      <span>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão
        {' '}
        <strong>”Novo contato”</strong>
        {' '}
        à cima
        para cadastrar o seu primeiro!
      </span>
    </NoContactsContainer>
  );
}
