import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureVerifyPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (id !== req.user.id && req.user.isAdm == false) {
    throw new AppError("Not permission", 401);
  }

  if (
    (id !== req.user.id && req.user.isAdm == true) ||
    req.user.isAdm == true ||
    id == req.user.id
  ) {
    return next();
  }
};

export default ensureVerifyPermissionMiddleware;
