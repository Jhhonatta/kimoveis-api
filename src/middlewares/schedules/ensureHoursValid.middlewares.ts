import { Request, Response, NextFunction } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import AppError from "../../errors/AppError";
import { string } from "yup";

const ensureVerifyHour = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hours: string = req.body.hour;

  const indexArray = hours.split("").indexOf(":");

  const array = [...hours];
  array.splice(indexArray, 1);
  const treatedHour = array.join("");

  if (parseInt(treatedHour) < 800) {
    throw new AppError("Hour invalid", 400);
  }

  if (parseInt(treatedHour) > 1800) {
    throw new AppError("Hour invalid", 400);
  }

  next();
};

export default ensureVerifyHour;
