import { request } from 'src/utils';

class PostService {
  async getAll() {
    const endpoint = '/post';
    const response = await request.get(endpoint);
    return response.data?.data ?? [];
  }

  async getOne(id: string) {
    const endpoint = `/post/${id}`;
    const response = await request.get(endpoint);
    return response.data?.data ?? {};
  }
}

export default new PostService();
