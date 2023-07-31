import AppDataSource from "../../data-source";

import { Properties } from "../../entities/properti.enity";
import { Schedules } from "../../entities/schedules.enity";

import AppError from "../../errors/AppError";

const listSchedulesForPropertiesService = async (idProperty: string) => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const propertyRepository = AppDataSource.getRepository(Properties);

  const property = await propertyRepository.findOneBy({ id: idProperty });

  if (!property) {
    throw new AppError("Not found", 403);
  }

  const schedules = await scheduleRepository.find({
    where: {
      property: {
        id: idProperty,
      },
    },
    relations: {
      user: true,
    },
  });

  return { schedules: schedules };
};

export default listSchedulesForPropertiesService;
