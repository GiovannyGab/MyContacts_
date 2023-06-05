/* eslint-disable no-empty */
import React, {
  useState, useEffect, forwardRef, useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';

import { Input } from '../input';
import Select from '../select';
import { ButtonContainer, Form, Loader } from './style';
import { Button } from '../button';
import FormGroup from '../FormGroup';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/phoneMask';
// hooks
import useError from '../../hooks/useError';

import CategoriesService from '../../services/CategoriesService';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoriesId, setCategoriesId] = useState('');
  const [selectIsLoading, setSelectIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    removeError, setError, getErrorMessageByFieldName, errors,
  } = useError();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch (error) {} finally { setSelectIsLoading(false); }
    }
    loadCategories();
  }, []);

  useImperativeHandle(ref, () => (
    {
      setFieldsValues: (contact) => {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setCategoriesId(contact.category_id);
      },
    }
  ), []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    await onSubmit({
      name,
      email,
      phone,
      categoriesId,
    }).finally(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setCategoriesId('');
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);

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
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup
        className="input-Form"
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          type="email"
          placeholder="E-mail "
          error={getErrorMessageByFieldName('email')}
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={selectIsLoading}>
        <Select
          placeholder="Categoria"
          className="last-select"
          value={categoriesId}
          onChange={(event) => setCategoriesId(event.target.value)}
          disabled={selectIsLoading || isSubmitting}
        >
          <option value="">Sem Categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id} label={category.name} />

          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid || isSubmitting}>
            {!isSubmitting && buttonLabel}
            {isSubmitting && <Loader />}
          </Button>
        </ButtonContainer>
      </FormGroup>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,

};

export default ContactForm;
