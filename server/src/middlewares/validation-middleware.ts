import { NextFunction, Request, Response } from 'express'
import BadRequestError from '../errors/bad-request-error'
import { RequestValidationSchemas } from '../validations'

const validate = (schemas: RequestValidationSchemas) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body)
        req.validBody = await schemas.body.validateAsync(req.body)
      if (schemas.params)
        req.validParams = await schemas.params.validateAsync(req.params)
      if (schemas.query)
        req.validQuery = await schemas.query.validateAsync(req.query)
      next()
    } catch (error: any) {
      return next(
        new BadRequestError({
          message: error.message,
        })
      )
    }
  }
}

export default validate
