import Joi from 'joi'
import { RequestValidationSchemas } from '.'


export const createBlogSchema: RequestValidationSchemas = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    upvotes: Joi.number().required(),
    downvotes: Joi.number().required(),
  }),
}

/**
 * GET /v1/blogs/:id
 */

export const getBlogByIdSchema: RequestValidationSchemas = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}