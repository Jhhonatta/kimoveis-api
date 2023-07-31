import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/address.enity";

import { Properties } from "../../entities/properti.enity";

import { IAddressRequest } from "../../interfaces/properties";

const createPropertyService = async (
  propertyData,
  addressData: IAddressRequest,
  categoryData: string
) => {
  const repositoryAddress = AppDataSource.getRepository(Addresses);

  const address = repositoryAddress.create(addressData);

  await repositoryAddress.save(address);

  const userRepository = AppDataSource.getRepository(Properties);

  const property = userRepository.create({
    ...propertyData,
    address: address,
    category: categoryData,
  });

  await userRepository.save(property);

  return property;
};

export default createPropertyService;
