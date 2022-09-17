import { Request, Response } from 'express'
import BlogService from '../services/blog-service'


const blogService = new BlogService()
export const getBlogById = async (req: Request, res: Response) => {
  const blog = await blogService.getBlogById({
    id: req.params.id,
  })
  res.status(200).json({ blog })
}

export const createBlog = async (req: Request, res: Response) => {
  const blog = req.validBody
  await blogService.createBlog(blog)
  res.sendStatus(200)
}

export const getBlogs = async (req: Request, res:Response) => {
    const blogs = await blogService.getAllBlogs()
    res.sendStatus(200).json({ blogs })
}
