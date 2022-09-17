import express from 'express'
import { getBlogById, createBlog, getBlogs } from '../../controllers/blog-controller'
import validate from '../../middlewares/validation-middleware'
import { getBlogByIdSchema, createBlogSchema } from '../../validations/blog-validation'

const router = express.Router()

router.get(
  '/:id',
  validate(getBlogByIdSchema),
  getBlogById
)

router.post(
  '/',
  validate(createBlogSchema),
  createBlog
)

router.get(
  '/',
  getBlogs
)

export { router as blogRouter }
