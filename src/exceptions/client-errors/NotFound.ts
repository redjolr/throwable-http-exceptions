import { HttpException } from '../../HttpException'
import { HTTP_NOT_FOUND } from '../../http-error-codes'
import { NotFoundParams } from '../../definitions/exception-parameters/NotFoundParams'

/**
 * The server should throw this error, when it doesn't find
 * the resource requested by the client.
 */
export class NotFound extends HttpException {
  constructor (args?: NotFoundParams) {
    super(HTTP_NOT_FOUND, { ...args })
    Object.setPrototypeOf(this, NotFound.prototype)
  }
}
