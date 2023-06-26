import { instanse } from '@/api/interceptor';
import type { OrderModel } from '@/models/order';

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
