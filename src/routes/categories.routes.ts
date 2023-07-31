import { Router } from "express";

import createCategoryController from "../controllers/categories/createCategory.controller";
import listcategoryController from "../controllers/categories/listCategory.controller";
import listPropetyForCategoryController from "../controllers/categories/listPropertyForCategory.controller";
import ensureVerifyIdCategory from "../middlewares/categories/ensuereVerifyCategoryId.middlewares";
import ensureVerifyCategoryExistMiddleware from "../middlewares/categories/ensureVerifyCategoryExist.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensrueDataIsValid.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middlewares";

import { categorySerializer } from "../serializers/category.serializers";

const categoryRoutes = Router();

categoryRoutes.post(
  "/categories",
  ensureDataIsValidMiddleware(categorySerializer),
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureVerifyCategoryExistMiddleware,
  createCategoryController
);

categoryRoutes.get(
  "/categories/:id/properties",
  ensureVerifyIdCategory,
  listPropetyForCategoryController
);

categoryRoutes.get("/categories", listcategoryController);

export default categoryRoutes;
