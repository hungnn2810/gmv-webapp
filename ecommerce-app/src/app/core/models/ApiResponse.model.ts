export interface ApiResponse<TResponse> {
  totalItems: number;
  pageSize: number;
  pageIndex: number;
  data: Array<TResponse>;
}
