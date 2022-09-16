const ERRORS = {
  BLOG_ERRORS: {
    NOT_FOUND: {
      error: 'BLOG_NOT_FOUND',
      message: 'blog not found',
    },
    ALREADY_EXISTS: {
      error: 'BLOG_ALREADY_EXISTS',
      message: 'blog already exists',
    },
    UPDATE_ERROR: { error: 'UPDATE_ERROR', message: 'update error' },
    INVALID_BLOG: { error: 'INVALID_BLOG', message: 'please verify the blog' },
  },
  SERVER_ERRORS: {
    INTERNAL_SERVER_ERROR: {
      error: 'INTERNAL_SERVER_ERROR',
      message: 'internal server error',
    },
  },
}
export const {
  SERVER_ERRORS,
  BLOG_ERRORS,
} = ERRORS
