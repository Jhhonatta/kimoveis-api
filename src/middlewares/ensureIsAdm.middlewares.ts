import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    throw new AppError("Not permission", 403);
  }

  return next();
};

export default ensureIsAdmMiddleware;
