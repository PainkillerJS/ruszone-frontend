import { instanse } from '@/api/interceptor';
import type { PaymentResponseModel } from '@/models/payment';

const URL_PAYMENT = 'payment';

class PaymentService {
  static async createPayment(amount: number) {
    return instanse<PaymentResponseModel>({
      url: URL_PAYMENT,
      method: 'POST',
      data: JSON.stringify({ amount })
    });
  }
}

export default PaymentService;
