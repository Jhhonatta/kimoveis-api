import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const dataBody: IScheduleRequest = req.body;
  const userId = req.user.id;

  const newSchedule = await createSchedulesService(
    dataBody,
    dataBody.propertyId,
    userId
  );

  return res.status(201).json(newSchedule);
};

export default createSchedulesController;
