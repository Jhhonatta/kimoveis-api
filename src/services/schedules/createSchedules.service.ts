import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/schedules.enity";
import AppError from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesService = async (
  dataRequest,
  property: string,
  idSchudeles: string
) => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const verifyDate = new Date(dataRequest.date).getDay();

  if (verifyDate === 6 || verifyDate === 0) {
    throw new AppError("Date invalid", 400);
  }

  const schedule = scheduleRepository.create({
    ...dataRequest,
    property: property,
    user: idSchudeles,
  });

  await scheduleRepository.save(schedule);

  return { message: schedule };
};
export default createSchedulesService;
