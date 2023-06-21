import ContactMapper from './mappers/ContactMapper';
import httpClient from './utils/HttpClient';

class ContactsService {
  ContactList(order = 'asc') {
    return httpClient.get(`http://localhost:3001/contacts?orderBy=${order}`, {
      headers: {
        Autorization: 'meuToken',
      },
    });
  }

  getContactById(id) {
    return httpClient.get(`http://localhost:3001/contacts/${id}`);
  }

  createContact(contacts) {
    const body = ContactMapper.toPersistence(contacts);
    return httpClient.post('http://localhost:3001/contacts', { body });
  }

  updateContact(id, contacts) {
    const body = ContactMapper.toPersistence(contacts);
    return httpClient.put(`http://localhost:3001/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return httpClient.delete(`http://localhost:3001/contacts/${id}`);
  }
}

export default new ContactsService();
