import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

import { User } from "../entities/user.enity";
import AppDataSource from "../data-source";

const ensureVerifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const verifyUser = await userRepository.findOneBy({
    email: dataBody.email,
  });

  if (verifyUser) {
    throw new AppError("Email invalid", 409);
  }
  return next();
};

export default ensureVerifyUserExistMiddleware;
