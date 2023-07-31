import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properti.enity";

const listPropetyService = async (): Promise<Properties[]> => {
  const userRepository = AppDataSource.getRepository(Properties);

  const listProperty = await userRepository.find({
    relations: { category: true, address: true },
  });

  return listProperty;
};

export default listPropetyService;
