import { instanse } from '@/packages/api/config';
import type { OrderModel } from '@/packages/api/models/order';

const URL_ORDERS = 'orders';

class OrderService {
  static async getAll() {
    return instanse<OrderModel[]>({
      url: URL_ORDERS,
      method: 'GET'
    });
  }
}

export default OrderService;
