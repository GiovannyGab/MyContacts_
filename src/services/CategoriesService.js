import HttpClient from './utils/HttpClient';

class CategoryService {
  async listCategories() {
    return HttpClient.get('http://localhost:3001/categories');
  }
}

export default new CategoryService();
