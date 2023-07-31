import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categori.enity";

const ensureVerifyIdCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (id.length !== 36) {
    throw new AppError("Id invalid", 404);
  }

  const userRepository = AppDataSource.getRepository(Categories);

  const verifyId = await userRepository.findOneBy({
    id: id,
  });

  if (!verifyId) {
    throw new AppError("Id Invalid", 404);
  }

  next();
};

export default ensureVerifyIdCategory;
