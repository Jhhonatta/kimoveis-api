import { Request, Response } from "express";
import listCategoryService from "../../services/categories/listCategory.service";

const listcategoryController = async (req: Request, res: Response) => {
  const listCategory = await listCategoryService();
  return res.status(200).json(listCategory);
};

export default listcategoryController;
