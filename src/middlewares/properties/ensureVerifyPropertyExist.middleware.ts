import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

import { Addresses } from "../../entities/address.enity";
import { IPropertyRequest } from "../../interfaces/properties";

import AppDataSource from "../../data-source";

const ensureVerifyPropertyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody: IPropertyRequest = req.body;

  const userRepository = AppDataSource.getRepository(Addresses);

  const verifyProperty = await userRepository.findOneBy({
    district: dataBody.address.district,
  });

  if (verifyProperty) {
    throw new AppError("Property invalid", 409);
  }
  return next();
};

export default ensureVerifyPropertyExistMiddleware;
