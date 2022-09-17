import { Schema } from 'joi'

export type RequestValidationSchemas = {
  body?: Schema
  params?: Schema
  query?: Schema
}
