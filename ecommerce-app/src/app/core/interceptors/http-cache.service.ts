import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  private requests: any = {};

  constructor() {}

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  invalidateEndpoint(endpoint: string): void {
    if (endpoint) {
      for (const key in this.requests) {
        if (Object.prototype.hasOwnProperty.call(this.requests, key)) {
          if (key.toLowerCase().includes(endpoint.toLowerCase())) {
            this.requests[key] = undefined;
          }
        }
      }
    }
  }

  invalidateCache(): void {
    this.requests = {};
  }
}
