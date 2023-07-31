import { Router } from "express";

import createProperyController from "../controllers/properties/createProperty.controller";
import listPropertyController from "../controllers/properties/listProperty.controller";

import ensureDataIsValidMiddleware from "../middlewares/ensrueDataIsValid.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middlewares";
import ensureVerifyIdProperty from "../middlewares/properties/ensureVerifyIdProperty.middleware";
import ensureVerifyPropertyExistMiddleware from "../middlewares/properties/ensureVerifyPropertyExist.middleware";

import { propertySerializer } from "../serializers/property.serializers";

const propertyRoutes = Router();

propertyRoutes.post(
  "/properties",
  ensureDataIsValidMiddleware(propertySerializer),
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureVerifyIdProperty,
  ensureVerifyPropertyExistMiddleware,
  createProperyController
);

propertyRoutes.get("/properties", listPropertyController);

export default propertyRoutes;
