import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import AppDataSource from "../data-source";
import { User } from "../entities/user.enity";
import { IUserComplete } from "../interfaces/users";

const ensureVerifyIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const userRepository = AppDataSource.getRepository(User);

  const foundUser: IUserComplete = await userRepository.findOneBy({ id });

  if (!foundUser.isActive) {
    throw new AppError("User already deleted", 400);
  }
  return next();
};

export default ensureVerifyIsActiveMiddleware;
