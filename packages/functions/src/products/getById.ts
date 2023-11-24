import { ProductRepository } from '@sample-wrapper-project/core/repositories/product';
import { ApiHandler, usePathParam } from 'sst/node/api';
import { BadRequest, OK, resolveError } from '../responses';

export const handler = ApiHandler(async (evt, ctx) => {
  // Validate path parameters
  const productId = Number(usePathParam('id'));
  if (!productId) {
    return BadRequest('Missing path parameter "productId"');
  }

  try {
    const result = await ProductRepository.getById(productId);
    return OK(result);
  } catch (err) {
    return resolveError(err);
  }
});
