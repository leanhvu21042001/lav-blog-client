import { QueryFunction, QueryKey, QueryOptions, useQuery } from '@tanstack/react-query';
import { QueryResponse } from 'src/types/use-fetch';

const useFetch = <T>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: QueryOptions<T, unknown>,
): QueryResponse<T> => {
  const { data, isLoading, isFetching, error, status } = useQuery<T>(queryKey, queryFn, {
    retry: false,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    ...options,
  });

  return {
    data: data as T,
    isLoading,
    isFetching,
    error,
    status,
  };
};

export default useFetch;
