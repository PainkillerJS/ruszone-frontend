import { instanse } from '@/api/interceptor';
import type { ProductModel } from '@/models/product';

import {
  FilterDataType,
  ProductsRequestDataType,
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_SIMILAR,
  URL_PRODUCTS_SLUG
} from './config';

class ProductsService {
  static async getAll(queryData: FilterDataType = {}) {
    return instanse<ProductModel[]>({
      url: URL_PRODUCTS,
      method: 'GET',
      params: queryData
    });
  }

  static async getSimilar(productId: string) {
    return instanse<ProductModel[]>({
      url: `${URL_PRODUCTS_SIMILAR}/${productId}`,
      method: 'GET'
    });
  }

  static async getBySlug(slug: string) {
    return instanse<ProductModel>({
      url: `${URL_PRODUCTS_SLUG}/${slug}`,
      method: 'GET'
    });
  }

  static async getByCategory(categorySlug: string) {
    return instanse<ProductModel[]>({
      url: `${URL_PRODUCTS_CATEGORY}/${categorySlug}`,
      method: 'GET'
    });
  }

  static async getById(id: string) {
    return instanse<ProductModel>({
      url: `${URL_PRODUCTS}/${id}`,
      method: 'GET'
    });
  }

  static async create(data: ProductsRequestDataType) {
    return instanse<ProductModel>({
      url: URL_PRODUCTS,
      method: 'POST',
      data
    });
  }

  static async update(id: string, data: ProductsRequestDataType) {
    return instanse<ProductModel>({
      url: `${URL_PRODUCTS}/${id}`,
      method: 'PUT',
      data
    });
  }

  static async delete(id: string) {
    return instanse<ProductModel>({
      url: `${URL_PRODUCTS}/${id}`,
      method: 'DELETE'
    });
  }
}

export default ProductsService;
