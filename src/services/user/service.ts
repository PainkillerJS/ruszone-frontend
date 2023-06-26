import { instanse } from '@/api/interceptor';
import { UserModel } from '@/models/user';

const URL_USER = '/user';
const URL_USER_PROFILE = `${URL_USER}/profile`;

interface UpdateDataType {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
}

class UserService {
  static async getProfile() {
    return instanse<UserModel>({
      url: URL_USER_PROFILE,
      method: 'GET'
    });
  }

  static async updateProfile(data: UpdateDataType) {
    return instanse<UserModel>({
      url: URL_USER_PROFILE,
      method: 'PUT',
      data
    });
  }

  static async toggleFavorites(productId: string) {
    return instanse<UserModel>({
      url: `${URL_USER_PROFILE}/favorites/${productId}`,
      method: 'PATCH'
    });
  }
}

export default UserService;
