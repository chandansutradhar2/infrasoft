export interface User {
  id?: string;
  fullName: string;
  address: string;
  mobileNo: string;
  photoUrl: string;
  email: string;
  password: string;
  userType: LOGIN_TYPE;
}

export enum LOGIN_TYPE {
  'admin' = 'admin',
  'user' = 'user',
  'seller' = 'seller',
}
