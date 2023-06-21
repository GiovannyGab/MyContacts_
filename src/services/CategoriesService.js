import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoryService {
  async listCategories() {
    const categories = await HttpClient.get('http://localhost:3001/categories');

    return categories.map((category) => CategoryMapper.toDomain(category));
  }
}

export default new CategoryService();
