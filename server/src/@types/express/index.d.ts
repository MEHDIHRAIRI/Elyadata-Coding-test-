declare namespace Express {
  interface Request {
    user: {
      id: string
      role: string
    }
    validBody: any
    validParams: any
    validQuery: any
  }
}
