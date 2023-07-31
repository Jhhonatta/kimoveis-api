import { Request, Response, NextFunction } from "express";

import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";

import { IPropertyRequest } from "../../interfaces/properties";
import { Categories } from "../../entities/categori.enity";

const ensureVerifyIdProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody: IPropertyRequest = req.body;

  if (dataBody.categoryId.length !== 36) {
    throw new AppError("CategoryId Invalid", 404);
  }

  const userRepository = AppDataSource.getRepository(Categories);

  const verifyId = await userRepository.findOneBy({
    id: dataBody.categoryId,
  });

  if (!verifyId) {
    throw new AppError("CategoryId invalid", 404);
  }

  return next();
};

export default ensureVerifyIdProperty;
