export interface Product {
  _id?: string;
  name: string;
  type?: string;
  categoryId: string;
  imageUrls?: string[];
  videoUrls?: string[];
  description: string;
  dimensions: Dimension[];
  sizes: PRODUCT_SIZE[];
  price: number;
  isDiscount: boolean;
  discountRate: number;
  discountType: DISCOUNT_TYPE;
  isTaxExclusive: boolean;
  taxRate: number;
  taxType: DISCOUNT_TYPE;
  quantity: number;
  createdOn: number;
  createdBy: string;
  owner: string;
  isDisabled: boolean;
}

export interface Dimension {
  height: number;
  width: number;
  length: number;
  weight: number;
  measurementType: MEASUREMENT_TYPE;
}

export enum DISCOUNT_TYPE {
  'FIXED' = 'FIXED',
  'PERCENTAGE' = 'PERCENTAGE',
}

export enum PRODUCT_SIZE {
  'S' = 'S',
  'L' = 'L',
  'M' = 'M',
  'XL' = 'XL',
  'SXL' = 'SXL',
}

export enum MEASUREMENT_TYPE {
  'inches' = 'inches',
  'cm' = 'cm',
  'foot' = 'foot',
}
