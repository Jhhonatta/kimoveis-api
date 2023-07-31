import AppDataSource from "../../data-source";
import { User } from "../../entities/user.enity";
import { IUser } from "../../interfaces/users";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const foundUser: IUser = await userRepository.findOneBy({ id });

  await userRepository.softDelete(foundUser);
  const user = await userRepository.save({ ...foundUser, isActive: false });

  return;
};
export default deleteUserService;
