import express from 'express'
import { getBlogById } from '../../controllers/blog-controller'
import validate from '../../middlewares/validation-middleware'
import { getBlogByIdSchema } from '../../validations/blog-validation'

const router = express.Router()

router.get(
  '/:id',
  validate(getBlogByIdSchema),
  getBlogById
)

export { router as blogRouter }
