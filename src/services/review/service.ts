import { instanse } from '@/api/interceptor';
import { ReviewModel } from '@/models/review';

const URL_REVIEWS = 'reviews';

interface ReviewRequestDataType {
  name: string;
}

class ReviewService {
  static async getAll() {
    return instanse<ReviewModel[]>({
      url: URL_REVIEWS,
      method: 'GET'
    });
  }

  static async create(productId: string, data: ReviewRequestDataType) {
    return instanse<ReviewModel>({
      url: `${URL_REVIEWS}/${productId}`,
      method: 'POST',
      data
    });
  }
}

export default ReviewService;
