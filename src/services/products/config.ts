export const URL_PRODUCTS = 'products';
export const URL_PRODUCTS_SIMILAR = `${URL_PRODUCTS}/similar`;
export const URL_PRODUCTS_SLUG = `${URL_PRODUCTS}/by-slug`;
export const URL_PRODUCTS_CATEGORY = `${URL_PRODUCTS}/by-category`;

export enum EnumProductsSort {
  HIGN_PRICE = 'HIGN_PRICE',
  LOW_PRICE = 'LOW_PRICE',
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST'
}

export interface ProductsRequestDataType {
  name: string;
  price: number;
  images: string[];
  categoryId: number;
  description?: string;
}

export interface PaginationType {
  page?: string | number;
  perPage?: string | number;
}

export interface FilterDataType {
  sort?: EnumProductsSort;
  searchTerm?: string;
}
