import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categori.enity";

const listPropetyForCategoryService = async (idCategory: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const listPropertiesForCategory = await categoryRepository.find({
    select: [],
    where: {
      id: idCategory,
    },
    relations: {
      properties: true,
    },
  });

  return listPropertiesForCategory[0];
};

export default listPropetyForCategoryService;
