import useFetch from './useFetch';
import PostService from 'src/services/post';
import { IPostItem } from 'src/types/post';

export const useGetPosts = () => {
  return useFetch<IPostItem[]>(['posts'], PostService.getAll, {
    initialData: [],
  });
};
