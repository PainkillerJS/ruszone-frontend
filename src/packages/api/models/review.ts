import type { UserModel } from './user';

export interface ReviewModel {
  id: number;
  user: UserModel;
  createdAt: string;
  text: string;
  rating: string;
}
