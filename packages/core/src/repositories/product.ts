import { ProductQueryParams, ProductType, WrapperProductType } from '../models/types';
import { wrapperInstance } from '../utils/axios';

export * as ProductRepository from './product';

/**
 * Get all products
 * @param {ProductQueryParams} params - Query parameters
 * @param {number} params.limit - Limit of products to return
 * @param {number} params.skip - Number of products to skip
 * @param {string} params.select - Fields to return
 * @returns {Promise<WrapperProductType>}
 * @example
 * getAll({ limit: 10, skip: 0, select: 'name price' });
 * getAll({ limit: 10, skip: 0 });
 * getAll({ limit: 10 });
 * getAll({});
 */
export const getAll = async ({ limit = 10, skip = 0, select = '' }: ProductQueryParams): Promise<WrapperProductType> => {
  // URLSearchParams is a built-in browser API that helps us build query strings
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    skip: skip?.toString() || '',
    select,
  });

  const url = `/products?${queryParams.toString()}`;
  return wrapperInstance.get(url).then((res) => res.data);
};

/**
 * Get product by id
 * @param {number} productId - Product id
 * @returns {Promise<WrapperProductType>}
 * @example
 * getById(1);
 * getById(2);
 */
export const getById = async (productId: number): Promise<ProductType> => {
  return wrapperInstance.get(`/products/${productId}`).then((res) => res.data);
};
