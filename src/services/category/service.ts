import { instanse } from '@/api/interceptor';
import { CategoryModel } from '@/models/category';

const URL_CATEGORIES = '/categories';
const URL_CATEGORIES_BY_SLUG = `${URL_CATEGORIES}/by-slug`;

interface CategoryRequestDataType {
  name: string;
}

class CategoryService {
  static async getAll() {
    return instanse<CategoryModel[]>({
      url: URL_CATEGORIES,
      method: 'GET'
    });
  }

  static async getById(id: string) {
    return instanse<CategoryModel>({
      url: `${URL_CATEGORIES}/${id}`,
      method: 'GET'
    });
  }

  static async getBySlug(slug: string) {
    return instanse<CategoryModel>({
      url: `${URL_CATEGORIES_BY_SLUG}/${slug}`,
      method: 'GET'
    });
  }

  static async create(data: CategoryRequestDataType) {
    return instanse<CategoryModel>({
      url: URL_CATEGORIES,
      method: 'POST',
      data
    });
  }

  static async update(id: string, data: CategoryRequestDataType) {
    return instanse<CategoryModel>({
      url: `${URL_CATEGORIES}/${id}`,
      method: 'PUT',
      data
    });
  }

  static async delete(id: string) {
    return instanse<CategoryModel>({
      url: `${URL_CATEGORIES}/${id}`,
      method: 'DELETE'
    });
  }
}

export default CategoryService;
