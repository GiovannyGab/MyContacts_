import delay from '../utils/delay';

class ContactsService {
  async ContactList(order = 'asc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${order}`);

    await delay(2000);
    return response.json();
  }
}

export default new ContactsService();
