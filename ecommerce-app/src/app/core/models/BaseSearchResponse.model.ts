export interface BaseSearchResponse<TResponse> {
  durationInMillisecond: number;
  totalCount: number;
  totalPage: number;
  pageSize: number;
  pageIndex: number;
  data: Array<TResponse>;
}
