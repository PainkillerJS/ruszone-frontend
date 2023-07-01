import type { ProductModel } from './product';

export interface CartItemModel {
  id: number;
  product: ProductModel;
  quantity: number;
  price: number;
}
