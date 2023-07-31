export interface IAddressRequest {
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IPropertyRequest {
  value: number;
  size: number;
  address: {
    district: string;
    zipCode: string;
    number?: string;
    city: string;
    state: string;
  };
  categoryId: string;
}
