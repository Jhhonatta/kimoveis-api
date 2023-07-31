import { Request, Response, NextFunction } from "express";
import { IUserUpdate } from "../interfaces/users";

const ensureBodyRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: IUserUpdate = req.body;

  console.log(data);

  if (
    data.isAdm !== undefined ||
    data.isActive !== undefined ||
    data.id !== undefined
  ) {
    return res.status(401).json({
      message: "Key invalid",
    });
  }

  return next();
};

export default ensureBodyRequestMiddleware;
