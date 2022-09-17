import express from 'express'
import { blogRouter } from './blog-routes'


const router = express.Router()

router.use('/blogs', blogRouter)

export { router as v1Router }