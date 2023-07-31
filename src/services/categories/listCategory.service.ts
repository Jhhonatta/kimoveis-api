import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categori.enity";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoryService = async (): Promise<ICategoryRequest[]> => {
  const userRepository = AppDataSource.getRepository(Categories);

  const listCategory = await userRepository.find();

  return listCategory;
};

export default listCategoryService;
