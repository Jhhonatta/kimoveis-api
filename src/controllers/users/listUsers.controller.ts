import { Request, Response } from "express";
import listUsersService from "../../services/users/listUsers.service";

const listUserController = async (req: Request, res: Response) => {
  const listUser = await listUsersService();
  return res.status(200).json(listUser);
};

export default listUserController;
