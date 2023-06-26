import type { CartItemModel } from './cart';
import type { UserModel } from './user';

export enum OrderStatusEnum {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED'
}

export interface OrderModel {
  id: number;
  createAt: string;
  items: CartItemModel;
  status: OrderStatusEnum;
  user: UserModel;
}
