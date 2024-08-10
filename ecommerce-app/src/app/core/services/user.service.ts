import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../environment.interface';
import { BaseSearchResponse } from '../models/BaseSearchResponse.model';
import { SearchOperation } from '../enums/SearchOperation';
import { SearchType } from '../enums/SearchType';
import { FilterModel, FilterSearch } from '../models/FilterSearch.model';
import { User } from '../models/user';
import { SearchComparison } from '../enums/SearchComparison';
import { HttpCacheService } from '../interceptors/http-cache.service';

declare let __config: Environment;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private cacheService: HttpCacheService
  ) {}
  apiUrl: string = `${__config.API_GATEWAY}/user`;

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getInfo(): Observable<User> {
    this.cacheService.invalidateEndpoint(`info`);
    return this.http.get<User>(`${this.apiUrl}/info`);
  }
}
