import AppDataSource from "../../data-source";

import { IUser } from "../../interfaces/users";

import { User } from "../../entities/user.enity";

import { listUserWithoutPasswordSerializer } from "../../serializers/user.serializers";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const listUser = await userRepository.find();

  const listUserWithoutPassword =
    await listUserWithoutPasswordSerializer.validate(listUser, {
      stripUnknown: true,
    });

  return listUserWithoutPassword;
};

export default listUsersService;
