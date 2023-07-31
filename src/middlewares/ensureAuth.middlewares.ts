import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: error.message,
      });
    }

    req.user = {
      id: decoded.sub as string,
      email: decoded.email as string,
      isAdm: decoded.isAdm as boolean,
    };

    return next();
  });
};

export default ensureAuthMiddleware;
