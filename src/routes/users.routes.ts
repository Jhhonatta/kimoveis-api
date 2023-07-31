import { Router } from "express";

import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUsers.controller";
import loginUserController from "../controllers/login/loginUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middlewares";
import ensureDataIsValidMiddleware from "../middlewares/ensrueDataIsValid.middleware";
import ensureVerifyId from "../middlewares/ensureVerifyId.middleware";

import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";
import ensureBodyRequestMiddleware from "../middlewares/ensureBodyRequest.middleware";
import ensureVerifyPermissionMiddleware from "../middlewares/ensureVerifyPermission.middleware";
import ensureVerifyIsActiveMiddleware from "../middlewares/ensureVerifyIsActive.middleware";

const userRoutes = Router();

userRoutes.post(
  "/users",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
userRoutes.get(
  "/users",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUserController
);
userRoutes.post("/login", loginUserController);

userRoutes.patch(
  "/users/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userUpdateSerializer),
  ensureVerifyId,
  ensureBodyRequestMiddleware,
  ensureVerifyPermissionMiddleware,
  updateUserController
);

userRoutes.delete(
  "/users/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureVerifyId,
  ensureVerifyIsActiveMiddleware,
  deleteUserController
);

export default userRoutes;
