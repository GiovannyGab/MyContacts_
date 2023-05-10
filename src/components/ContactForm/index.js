import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../input';
import Select from '../select';
import { ButtonContainer, Form } from './style';
import { Button } from '../button';
import FormGroup from '../FormGroup';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/phoneMask';
// hooks
import useError from '../../hooks/useError';

export default function ContactForm({ buttonLabel }) {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    removeError, setError, getErrorMessageByFieldName, errors,
  } = useError();

  const isFormValid = (name && errors.length === 0);
  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  function handleNameChange(event) {
    setname(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'nome e obrigatorio!' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'email invalido' });
    } else {
      removeError('email');
    }
  }
  function handlePhoneCHange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup
        className="input-Form"
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          type="text"
          placeholder="Nome *"
          error={getErrorMessageByFieldName('name')}
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup
        className="input-Form"
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          type="email"
          placeholder="E-mail"
          error={getErrorMessageByFieldName('email')}
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="string"
          placeholder="Telefone"
          className="last-input"
          value={phone}
          onChange={handlePhoneCHange}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup>
        <Select
          placeholder="Categoria"
          className="last-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option label="instagram" value="instagram" />
          <option label="twitter" value="twiter" />
        </Select>
      </FormGroup>
      <FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </FormGroup>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
