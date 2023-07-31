import AppDataSource from "../../data-source";
import { User } from "../../entities/user.enity";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (
  data: IUserUpdate,
  id: string
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: id,
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...data,
  });

  await userRepository.save(updatedUser);

  return "Update performed";
};

export default updateUserService;
