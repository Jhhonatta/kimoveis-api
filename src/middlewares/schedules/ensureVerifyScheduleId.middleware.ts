import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

import { IPropertyRequest } from "../../interfaces/properties";

import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properti.enity";
import { IScheduleRequest } from "../../interfaces/schedules";

const ensureVerifySchedulesIdtMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody: IScheduleRequest = req.body;

  const userRepository = AppDataSource.getRepository(Properties);

  if (dataBody.propertyId.length !== 36) {
    throw new AppError("PropertyId Invalid", 404);
  }

  const verifyId = await userRepository.findOneBy({
    id: dataBody.propertyId,
  });

  if (!verifyId) {
    throw new AppError("PropertyId invalid", 404);
  }
  next();
};

export default ensureVerifySchedulesIdtMiddleware;
