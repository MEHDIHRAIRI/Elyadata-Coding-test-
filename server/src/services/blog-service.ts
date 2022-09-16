import { Blog, IBlog } from "../models/blog"
import BadRequestError from '../errors/bad-reques-error'
import NotFoundError from '../errors/not-found-error'
import { BLOG_ERRORS } from "../constants/error-messages"

export default class BlogService {

  async createBlog(body: any) {
    const addBlog = await Blog.create(body)
    if (!addBlog) throw BadRequestError
  }

  async getBlogById({ id }: { id: string }) {
    const blog = await Blog.findOne(
      { id },
      {
        title: 1,
        author:1,
        content: 1,
        downvotes: 1,
        upvotes: 1,
      }
    )
    if (!blog) throw new NotFoundError(BLOG_ERRORS.NOT_FOUND)
    return blog
  }

  async updateBlog({ id, data }: { id: string; data: IBlog }) {
    const updatedBlog = await Blog.updateOne(
      { id },
      { ...data }
    )
    if (!updatedBlog)
      throw new NotFoundError(BLOG_ERRORS.NOT_FOUND)
    return updatedBlog
  }

  async getAllBlogs(){
   return await Blog.find().lean()
  }
}
