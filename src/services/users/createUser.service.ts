import { IUser, IUserRequest } from "../../interfaces/users";

import AppDataSource from "../../data-source";

import { User } from "../../entities/user.enity";

import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};

export default createUserService;
