import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Input } from '../../components/input';
import { Select } from '../../components/select';
import { Button } from '../../components/button';

export default function NewContact() {
  return (
    <div>
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="Telefone" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">Salvar Alteraçoes</Button>
      <Button type="button" disabled>Salvar Alteraçoes</Button>
    </div>
  );
}
