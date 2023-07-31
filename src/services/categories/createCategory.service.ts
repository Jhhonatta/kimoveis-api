import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categori.enity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryServices = async (
  categoryData: ICategoryRequest
): Promise<ICategoryRequest> => {
  const userRepository = AppDataSource.getRepository(Categories);

  const category = userRepository.create(categoryData);

  await userRepository.save(category);

  return category;
};

export default createCategoryServices;
