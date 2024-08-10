import { SearchComparison } from '../enums/SearchComparison';
import { SearchOperation } from '../enums/SearchOperation';
import { SearchType } from '../enums/SearchType';

export class FilterSearch {
  queryKey: string | undefined;
  queryType: any = SearchType.TEXT;
  queryValue: string | undefined;
  operation: any = SearchOperation.eq;

  constructor(
    queryKey: string,
    queryType: SearchType,
    queryValue: string,
    operation: SearchOperation
  ) {
    this.queryKey = queryKey;
    this.queryType = SearchType[queryType];
    this.queryValue = queryValue;
    this.operation = SearchOperation[operation];
  }
}

export class FilterModel {
  filters: Array<FilterSearch> = [];
  comparation?: SearchComparison = SearchComparison.or;

  constructor(filters: Array<FilterSearch>, comparation?: SearchComparison) {
    this.filters = filters;
    this.comparation = comparation;
  }
}
