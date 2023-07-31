import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryServices from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const body: ICategoryRequest = req.body;
  const newCategory = await createCategoryServices(body);
  return res.status(201).json(newCategory);
};

export default createCategoryController;
