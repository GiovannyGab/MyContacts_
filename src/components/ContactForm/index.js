import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../input';
import Select from '../select';
import { ButtonContainer, Form } from './style';
import { Button } from '../button';
import FormGroup from '../FormGroup';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup className="input-Form">
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup className="input-Form">
        <Input type="Email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="number" placeholder="Telefone" className="last-input" />
      </FormGroup>
      <FormGroup>
        <Select placeholder="Categoria" className="last-select">
          <option label="instagram" />
          <option label="twitter" />
        </Select>
      </FormGroup>
      <FormGroup>
        <ButtonContainer>
          <Button type="submit">{buttonLabel}</Button>
        </ButtonContainer>

      </FormGroup>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
