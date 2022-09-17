import { ErrorBody } from '../@types/common'
import BaseError from './base-error'

export default class NotFoundError extends BaseError {
  constructor({ message, error }: ErrorBody = {}) {
    super(404, error || 'NOT_FOUND', message || 'not found')
  }
}
