/* eslint-disable no-empty */
import React, {
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';

import { Input } from '../input';
import Select from '../select';
import { ButtonContainer, Form, Loader } from './style';
import { Button } from '../button';
import FormGroup from '../FormGroup';

// hooks

import useContactForm from './useContactForm';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,

    name,
    handleNameChange,
    isSubmitting,

    email,
    handleEmailChange,
    phone,
    handlePhoneCHange,
    setCategoriesId,
    selectIsLoading,
    categoriesId,
    categories,
    isFormValid,
  } = useContactForm(buttonLabel, onSubmit, ref);
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
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
export default ContactForm;
