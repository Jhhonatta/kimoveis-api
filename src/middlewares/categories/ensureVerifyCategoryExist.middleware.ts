import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categori.enity";
import AppError from "../../errors/AppError";

const ensureVerifyCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody = req.body;

  const userRepository = AppDataSource.getRepository(Categories);

  const verifycategory = await userRepository.findOneBy({
    name: dataBody.name,
  });

  if (verifycategory) {
    throw new AppError("Existing category", 409);
  }

  return next();
};

export default ensureVerifyCategoryExistMiddleware;
