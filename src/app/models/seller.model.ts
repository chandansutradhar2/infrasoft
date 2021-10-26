import { User } from './user.model';

export interface Seller extends User {
  businessName: string;
  gstNo?: string;
  disabled?: boolean;
}
