import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import { IUser } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  isAdm: yup.boolean().required(),
  name: yup.string().required(),
  password: yup.string().required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  id: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
});

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  name: yup.string().notRequired(),
  id: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  isActive: yup.boolean().notRequired(),
});

const listUserWithoutPasswordSerializer: SchemaOf<IUser[]> = yup.array(
  userWithoutPasswordSerializer
);

export {
  userSerializer,
  userWithoutPasswordSerializer,
  userUpdateSerializer,
  listUserWithoutPasswordSerializer,
};
