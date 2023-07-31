import { Request, Response } from "express";

import listPropetyService from "../../services/properties/listProperty.service";

const listPropertyController = async (req: Request, res: Response) => {
  const listProperty = await listPropetyService();

  return res.status(200).json(listProperty);
};

export default listPropertyController;
