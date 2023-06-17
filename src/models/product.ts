import type { CategoryModel } from './category';
import type { ReviewModel } from './review';

export interface ProductModel {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  reviews: ReviewModel;
  images: string[];
  createdAt: string;
  category: CategoryModel;
}
