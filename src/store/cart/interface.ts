import { CartItemModel } from '@/packages/api/models/cart';

export interface CartInitialStateType {
  items: CartItemModel[];
}

export interface AddToCartPayloadType extends CartItemModel {}

export interface ChangeQuatityPayloadType extends Pick<CartItemModel, 'id'> {
  type: 'minus' | 'plus';
}
