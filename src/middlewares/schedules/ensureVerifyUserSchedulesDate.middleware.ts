import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

import { Schedules } from "../../entities/schedules.enity";

import AppDataSource from "../../data-source";

import { IScheduleRequest } from "../../interfaces/schedules";

const ensureVerifyUserSchedulesDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataBody: IScheduleRequest = req.body;

  const id: string = req.user.id;

  const schedulesRepositoryHourAndDate =
    await AppDataSource.createQueryBuilder()
      .select("schedules")
      .from(Schedules, "schedules")
      .where("schedules.hour = :dataHour", { dataHour: dataBody.hour })
      .andWhere("schedules.date = :dataDate", { dataDate: dataBody.date })
      .andWhere("schedules.user = :idUser", {
        idUser: id,
      })
      .getOne();

  if (schedulesRepositoryHourAndDate) {
    throw new AppError("Schedule unavailable", 409);
  }

  next();
};

export default ensureVerifyUserSchedulesDate;
