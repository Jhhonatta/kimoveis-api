import AppDataSource from "../../data-source";

import { User } from "../../entities/user.enity";
import { IUserLogin } from "../../interfaces/users";

import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

import AppError from "../../errors/AppError";

import "dotenv/config";

const loginUserService = async (data: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(data.password, user.password);
  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginUserService;
