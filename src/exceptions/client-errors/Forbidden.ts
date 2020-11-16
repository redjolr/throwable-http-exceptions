import { HttpException } from '../../HttpException'
import { HTTP_FORBIDDEN } from '../../http-error-codes'
import { ForbiddenParams } from '../../definitions/exception-parameters/ForbiddenParams'

/**
 * This error should be thrown, when the client does not have permissions
 * on the resource.
 * A server that wishes to make public why the request has been forbidden
 * can describe that reason in the response body
 */
export class Forbidden extends HttpException {
  constructor (args?: ForbiddenParams) {
    super(HTTP_FORBIDDEN, { ...args })
    Object.setPrototypeOf(this, Forbidden.prototype)
  }
}
