import { ProductRepository } from '@sample-wrapper-project/core/repositories/product';
import { ApiHandler, useQueryParams } from 'sst/node/api';
import { BadRequest, NotFound, OK } from '../responses';
import Joi from 'joi';

export const handler = ApiHandler(async (evt, ctx) => {
  // Validate query path parameters
  const queryParams = useQueryParams();

  const querySchema = Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(0).max(100), // .max(100).required(),
    skip: Joi.number().integer().min(0), //.required(),
    select: Joi.string().optional(),
  });

  const { error, value } = querySchema.validate(queryParams);

  if (error) {
    return BadRequest(error.details[0].message)
  }

  const res = await ProductRepository.getAll({
    q: value.q,
    limit: value.limit,
    skip: value.skip,
    select: value.select,
  });

  if (!res) {
    return NotFound;
  }

  return OK(res);
});
