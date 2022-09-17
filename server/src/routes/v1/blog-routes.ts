import express from 'express'
import { getBlogById } from '../../controllers/blog-controller'
import { asyncMiddleware } from '../../middlewares/async-middleware'
import validate from '../../middlewares/validation-middleware'
import { getBlogByIdSchema } from '../../validations/blog-validation'

const router = express.Router()

router.get(
  '/:id',
  validate(getBlogByIdSchema),
  asyncMiddleware(getBlogById)
)

export { router as blogRouter }
