import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";
import { IAddressRequest } from "../interfaces/properties";

const addressSerializer: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().length(8).required(),
  number: yup.string().notRequired(),
  city: yup.string().required(),
  state: yup.string().length(2).required(),
});

const propertySerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: addressSerializer,
  categoryId: yup.string().required(),
});

export { propertySerializer };
