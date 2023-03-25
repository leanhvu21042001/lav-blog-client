export interface QueryResponse<T> {
  data: T;
  error: unknown | string | object | undefined;
  isLoading: boolean;
  isFetching: boolean;
  status: string;
}
