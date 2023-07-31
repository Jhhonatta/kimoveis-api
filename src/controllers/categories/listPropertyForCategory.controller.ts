import { Request, Response } from "express";
import listPropetyForCategoryService from "../../services/categories/listPropertyForCategory.service";

const listPropetyForCategoryController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const listCustom = await listPropetyForCategoryService(id);

  return res.status(200).json(listCustom);
};

export default listPropetyForCategoryController;
