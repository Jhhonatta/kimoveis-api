import { Request, Response } from "express";
import listSchedulesForPropertiesService from "../../services/schedules/listSchedulesForProperties.service";

const listSchedulesForPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const list = await listSchedulesForPropertiesService(id);

  return res.status(200).json(list);
};

export default listSchedulesForPropertiesController;
