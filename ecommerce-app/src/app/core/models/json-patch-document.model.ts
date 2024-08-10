export interface JsonPatchDocument {
  op: string;
  path: string;
  value: any;
}
