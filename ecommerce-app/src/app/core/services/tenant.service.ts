import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../environment.interface';
declare let __config: Environment;

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  apiUrl: string = `${__config.API_GATEWAY}/tenant`;
  tenantId = '00F43EF8-F67B-446A-870A-C219B59C0C4E';
  constructor(private http: HttpClient) {}

  search() {
    return this.http.get<Tenant>(`${this.apiUrl}/${this.tenantId}`);
  }
}
export interface Tenant {
  id: string;
  companyName: string;
  companyTelephone: string;
  companyFax: string;
  companyTax: string;
  companyAddress: string;
  logoFileKey: string;
}
