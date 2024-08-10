import { ProviderTypeCode } from '../enums/ProviderTypeCode';

export interface Invoice {
  id: string;
  code: string;
  reservationCode: string;
  provider: ProviderTypeCode;
  amount: number;
  taxRate: number;
  amountAfterTax: number;
  success: boolean;
  retryAttempt: number;
  createdUtc: string;
  createdBy: string;
  items: Array<InvoiceItem>;
  extraInformation: Array<InvoiceExtraInformation>;
  logs: Array<any>;
}

export interface InvoiceItem {
  id: string;
  invoiceId: string;
  name: string;
  code: string;
  quantity: number;
  price: number;
  amount: number;
}
export interface InvoiceExtraInformation {
  id: string;
  invoiceId: string;
  tag: string;
  name: string;
  value: string;
  type: string;
}
