import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const deleteUser = await deleteUserService(userId);

  return res.status(204).json(deleteUser);
};

export default deleteUserController;
