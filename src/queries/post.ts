import PostService from 'src/services/post';
import { IPostItem } from 'src/types/post';
import useFetch from './useFetch';

export const useGetPosts = () => {
  return useFetch<IPostItem[]>(['posts'], PostService.getAll, {
    initialData: [],
  });
};

export const useGetPostBySlug = (slug: string) => {
  return useFetch<IPostItem>(
    ['get-post-by-slug', slug],
    () => PostService.getOneBySlug(slug),
    {
      initialData: {} as IPostItem,
    },
  );
};
