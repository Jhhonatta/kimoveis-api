import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { IUserUpdate } from "../interfaces/users";

const ensureBodyRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: IUserUpdate = req.body;

  if (data.isAdm !== undefined) {
    throw new AppError("isAdm can't be updated", 401);
  }

  if (data.isActive !== undefined) {
    throw new AppError("isActive can't be updated", 401);
  }

  if (data.id !== undefined) {
    throw new AppError("id can't be updated", 401);
  }

  return next();
};

export default ensureBodyRequestMiddleware;
