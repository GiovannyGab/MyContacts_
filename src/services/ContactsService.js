import httpClient from './utils/HttpClient';

class ContactsService {
  async ContactList(order = 'asc') {
    return httpClient.get(`http://localhost:3001/contacts?orderBy=${order}`);
  }
}

export default new ContactsService();
