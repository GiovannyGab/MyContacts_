import httpClient from './utils/HttpClient';

class ContactsService {
  async ContactList(order = 'asc') {
    return httpClient.get(`http://localhost:3001/contacts?orderBy=${order}`, {
      headers: {
        Autorization: 'meuToken',
      },
    });
  }

  async CreateContact(contacts) {
    return httpClient.post('http://localhost:3001/contacts', { body: contacts });
  }
}

export default new ContactsService();
