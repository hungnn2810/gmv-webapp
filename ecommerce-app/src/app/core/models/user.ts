export interface User {
  id: string;
  firstName: string;
  lastName: string;
  upn: string;
  address: string;
  phoneNumber: string;
  description: string;
  userGroups: Array<any>;
  applications: Array<any>;
  rights: Array<any>;
  locked: boolean;
}
